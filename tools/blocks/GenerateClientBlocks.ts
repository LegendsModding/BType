/* eslint-disable no-console */
import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

/**
 * @name ConversionContext
 * @description Interface to track conversion metrics and warnings.
 * @property {string[]} warnings - List of warnings generated during conversion.
 * @property {number} convertedBlocks - Count of blocks successfully converted.
 * @property {number} skippedBlocks - Count of blocks that were skipped.
 */
interface ConversionContext {
  warnings: string[];
  convertedBlocks: number;
  skippedBlocks: number;
}

/**
 * @name ClientBlockConverter
 * @description A class for converting client block JSON definitions into TypeScript builder code.
 * @notes Processes JSON files from an input directory, converts valid client block configurations
 *        using a builder pattern, and then formats and lints the output directory.
 * @see {@link createClientBlock}
 */
export class ClientBlockConverter {
  private context: ConversionContext = {
    warnings: [],
    convertedBlocks: 0,
    skippedBlocks: 0,
  };

  /**
   * @name convertDirectory
   * @description Converts all valid JSON files in the input directory to TypeScript files in the output directory.
   *              After conversion, Prettier and ESLint are run on the output directory.
   * @param {string} inputDir The directory containing input JSON files.
   * @param {string} outputDir The directory where generated TypeScript files will be written.
   * @returns {Promise<void>} A promise that resolves when conversion and formatting are complete.
   * @example
   * await converter.convertDirectory("./data/rp/blocks", "output/clientBlocks");
   */
  public async convertDirectory(
    inputDir: string,
    outputDir: string,
  ): Promise<void> {
    const files = fs.readdirSync(inputDir);
    this.context = { warnings: [], convertedBlocks: 0, skippedBlocks: 0 };

    files.forEach((file) => {
      if (!file.endsWith(".json")) return;
      this.processFile(path.join(inputDir, file), outputDir);
    });

    runPrettierAndEslint(outputDir);
    this.reportResults();
  }

  /**
   * @name processFile
   * @description Processes an individual JSON file and converts its client block definitions into TypeScript builder code.
   * @param {string} filePath The path to the JSON file.
   * @param {string} outputDir The directory where generated TypeScript files will be written.
   * @returns {void}
   * @example
   * this.processFile("./data/block.json", "output/clientBlocks");
   */
  private processFile(filePath: string, outputDir: string): void {
    try {
      const content = fs.readFileSync(filePath, "utf-8");
      const json = JSON.parse(content);

      if (json.format_version !== "1.15.0") {
        this.context.warnings.push(`Unsupported format version in ${filePath}`);
        return;
      }

      const clientBlocks = json["badger:client_block"];
      if (!clientBlocks) {
        this.context.warnings.push(`No client blocks found in ${filePath}`);
        return;
      }

      Object.entries(clientBlocks).forEach(([identifier, config]) => {
        // Skip non-block properties (e.g., terrain type)
        if (identifier === "badger:terrain_type") {
          return;
        }
        try {
          const tsContent = this.generateBuilderCode(identifier, config);
          this.writeOutputFile(identifier, tsContent, outputDir);
          this.context.convertedBlocks++;
        } catch (error: any) {
          this.context.warnings.push(
            `Failed to convert ${identifier}: ${error.message}`,
          );
          this.context.skippedBlocks++;
        }
      });
    } catch (error: any) {
      this.context.warnings.push(
        `Error processing ${filePath}: ${error.message}`,
      );
    }
  }

  /**
   * @name generateBuilderCode
   * @description Generates the TypeScript builder code for a given client block configuration.
   * @param {string} identifier The identifier for the client block.
   * @param {*} config The JSON configuration for the client block.
   * @returns {string} The generated TypeScript code as a string.
   * @example
   * const code = this.generateBuilderCode("badger:block_example", config);
   */
  private generateBuilderCode(identifier: string, config: any): string {
    // Handle empty configuration to prevent lint errors
    if (!config || Object.keys(config).length === 0) {
      return [
        `// Auto-generated from ${identifier}`,
        `import { createClientBlock } from "../../legends/core/crafter/blocks/BlockClientBuilder.js";\n`,
        `export default createClientBlock('${identifier}', (_builder) => {`,
        `  // No configuration provided.`,
        `  void _builder;`,
        `});`,
      ].join("\n");
    }

    const output: string[] = [];
    output.push(`// Auto-generated from ${identifier}`);
    output.push(
      `import { createClientBlock } from "../../legends/core/crafter/blocks/BlockClientBuilder.js";\n`,
    );
    output.push(
      `export default createClientBlock('${identifier}', (builder) => {`,
    );

    this.processFormatVersion(config, output);
    this.processTextures(config.textures, output);
    this.processParticleSpawner(config.particle_spawner, output);
    this.processIsotropic(config.isotropic, output);
    this.processDecoration(config.decoration, output);
    this.processSound(config.sound, output);

    output.push("});");
    return output.join("\n");
  }

  /**
   * @name processFormatVersion
   * @description Processes the format version of the client block configuration.
   * @param {*} config The client block configuration.
   * @param {string[]} output The array that accumulates generated code lines.
   * @returns {void}
   * @example
   * this.processFormatVersion(config, output);
   */
  private processFormatVersion(config: any, output: string[]): void {
    if (config.format_version && config.format_version !== "1.15.0") {
      output.push(`  builder.setFormatVersion('${config.format_version}');`);
    }
  }

  /**
   * @name processTextures
   * @description Processes texture configurations for the client block and generates corresponding code.
   * @param {*} textures The textures configuration which can be a string or an object.
   * @param {string[]} output The array that accumulates generated code lines.
   * @returns {void}
   * @example
   * this.processTextures(config.textures, output);
   */
  private processTextures(textures: any, output: string[]): void {
    if (!textures) return;

    if (typeof textures === "string") {
      output.push(`  builder.setUniformTexture('${textures}');`);
      return;
    }

    Object.entries(textures).forEach(([side, texture]) => {
      if (typeof texture === "string") {
        output.push(`  builder.setTexture('${side}', '${texture}');`);
      } else if (texture?.smart) {
        this.processSmartTexture(side, texture.smart, output);
      }
    });
  }

  /**
   * @name processSmartTexture
   * @description Processes smart texture configurations for a specific side and generates corresponding code.
   * @param {string} side The side identifier for the texture.
   * @param {*} smartConfig The smart texture configuration object.
   * @param {string[]} output The array that accumulates generated code lines.
   * @returns {void}
   * @example
   * this.processSmartTexture("top", smartConfig, output);
   */
  private processSmartTexture(
    side: string,
    smartConfig: any,
    output: string[],
  ): void {
    output.push(`  builder.setSmartTexture('${side}', (sb) => {`);

    if (smartConfig.default)
      output.push(`    sb.setDefault('${smartConfig.default}');`);
    if (smartConfig.empty)
      output.push(`    sb.setEmpty('${smartConfig.empty}');`);
    if (smartConfig.L) output.push(`    sb.setL('${smartConfig.L}');`);
    if (smartConfig.line) output.push(`    sb.setLine('${smartConfig.line}');`);
    if (smartConfig.cross)
      output.push(`    sb.setCross('${smartConfig.cross}');`);
    if (smartConfig.T) output.push(`    sb.setT('${smartConfig.T}');`);
    if (smartConfig.spoke)
      output.push(`    sb.setSpoke('${smartConfig.spoke}');`);

    output.push("  });");
  }

  /**
   * @name processParticleSpawner
   * @description Processes particle spawner configurations and generates code to add particle effects.
   * @param {*} particleConfig The particle spawner configuration.
   * @param {string[]} output The array that accumulates generated code lines.
   * @returns {void}
   * @example
   * this.processParticleSpawner(config.particle_spawner, output);
   */
  private processParticleSpawner(particleConfig: any, output: string[]): void {
    if (!particleConfig?.effects) return;

    particleConfig.effects.forEach((effect: any) => {
      output.push("  builder.addParticleEffect((pb) => {");
      output.push(`    pb.setEffect('${effect.effect}');`);

      if (effect.range) output.push(`    pb.setRange('${effect.range}');`);
      if (effect.probability !== undefined)
        output.push(`    pb.setProbability(${effect.probability});`);
      if (effect.offset)
        output.push(`    pb.setOffset(${effect.offset.join(", ")});`);
      if (effect.trigger)
        output.push(`    pb.setTrigger('${effect.trigger}');`);
      if (effect.rotation_mode)
        output.push(`    pb.setRotationMode('${effect.rotation_mode}');`);

      output.push("  });");
    });
  }

  /**
   * @name processIsotropic
   * @description Processes isotropic configurations and generates corresponding code.
   * @param {*} isotropicConfig The isotropic configuration object.
   * @param {string[]} output The array that accumulates generated code lines.
   * @returns {void}
   * @example
   * this.processIsotropic(config.isotropic, output);
   */
  private processIsotropic(isotropicConfig: any, output: string[]): void {
    if (!isotropicConfig) return;

    Object.entries(isotropicConfig).forEach(([side, value]) => {
      output.push(`  builder.setIsotropic('${side}', ${value});`);
    });
  }

  /**
   * @name processDecoration
   * @description Processes decoration configurations and generates corresponding code.
   * @param {*} decorationConfig The decoration configuration which can be a string or an object.
   * @param {string[]} output The array that accumulates generated code lines.
   * @returns {void}
   * @example
   * this.processDecoration(config.decoration, output);
   */
  private processDecoration(decorationConfig: any, output: string[]): void {
    if (!decorationConfig) return;

    if (typeof decorationConfig === "string") {
      output.push(`  builder.setDecoration('${decorationConfig}');`);
    } else {
      output.push("  builder.setDecoration((db) => {");

      if (decorationConfig.default)
        output.push(`    db.setDefault('${decorationConfig.default}');`);
      if (decorationConfig.l)
        output.push(`    db.setL('${decorationConfig.l}');`);
      if (decorationConfig.l_mirror)
        output.push(`    db.setLMirror('${decorationConfig.l_mirror}');`);
      if (decorationConfig.line)
        output.push(`    db.setLine('${decorationConfig.line}');`);
      if (decorationConfig.metamaterial_override) {
        output.push(
          `    db.setMetamaterialOverride('${decorationConfig.metamaterial_override}');`,
        );
      }

      output.push("  });");
    }
  }

  /**
   * @name processSound
   * @description Processes sound configuration and generates code to set the block's sound.
   * @param {string} soundId The identifier for the sound.
   * @param {string[]} output The array that accumulates generated code lines.
   * @returns {void}
   * @example
   * this.processSound("block.sound", output);
   */
  private processSound(soundId: string, output: string[]): void {
    if (soundId) output.push(`  builder.setSound('${soundId}');`);
  }

  /**
   * @name writeOutputFile
   * @description Writes the generated TypeScript content to an output file.
   * @param {string} identifier The identifier for the client block.
   * @param {string} content The generated TypeScript code content.
   * @param {string} outputDir The directory where the file should be written.
   * @returns {void}
   * @example
   * this.writeOutputFile("badger:block_example", tsContent, "output/clientBlocks");
   */
  private writeOutputFile(
    identifier: string,
    content: string,
    outputDir: string,
  ): void {
    const safeName = identifier.replace(/:/g, "_");
    const filePath = path.join(outputDir, `${safeName}.ts`);
    fs.writeFileSync(filePath, content, "utf-8");
  }

  /**
   * @name reportResults
   * @description Logs the conversion results and any warnings encountered during processing.
   * @returns {void}
   * @example
   * this.reportResults();
   */
  private reportResults(): void {
    console.log(`\nConversion completed:`);
    console.log(`  ${this.context.convertedBlocks} blocks converted`);
    console.log(`  ${this.context.skippedBlocks} blocks skipped`);

    if (this.context.warnings.length > 0) {
      console.warn("\nWarnings:");
      this.context.warnings.forEach((w) => console.warn(`- ${w}`));
    }
  }
}

/**
 * @name runPrettierAndEslint
 * @description Runs Prettier and ESLint on the generated output directory.
 *              This function sets the working directory (cwd) to the output directory and runs
 *              the commands against "." so that they process all files within that directory.
 * @param {string} outputDir The directory containing the generated files.
 * @returns {void}
 * @example
 * runPrettierAndEslint("output/clientBlocks");
 */
function runPrettierAndEslint(outputDir: string): void {
  try {
    console.log("Running Prettier...");
    execSync(`npx prettier --write .`, {
      cwd: outputDir,
      stdio: "inherit",
    });

    console.log("Running ESLint...");
    execSync(`npx eslint --fix .`, {
      cwd: outputDir,
      stdio: "inherit",
    });
    console.log("Formatting and linting complete.");
  } catch (error: any) {
    console.error("Error running Prettier or ESLint:", error);
    if (error.stderr) {
      console.error("stderr:", error.stderr.toString());
    }
  }
}

// Example usage:
(async () => {
  const converter = new ClientBlockConverter();
  await converter.convertDirectory("./data/rp/blocks", "output/clientBlocks");
})();
