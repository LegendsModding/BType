/* eslint-disable no-console */

import { execSync } from "child_process";
import fs from "fs";
import path from "path";

import { StringUtils } from "../biomes/utils/StringUtils.ts";

// generate-blocks.ts
interface ConversionConfig {
  inputDir: string;
  outputDir: string;
}

/**
 * @name ComponentCodeGenerator
 * @description Generates code for block components.
 * @example
 * const code = ComponentCodeGenerator.generate("minecraft:block_shape", { inputDir: "./in", outputDir: "./out" });
 */
export class ComponentCodeGenerator {
  private static componentHandlers = new Map<
    keyof BlockComponents,
    (config: ConversionConfig) => string
  >([
    [
      "minecraft:block_shape",
      (_config) =>
        `.setBlockShape((param: BlockShapeType) => param.setShape("cube"))`,
    ],
    // TODO: Add handlers for all component types
  ]);

  /**
   * @param {keyof BlockComponents} componentName The name of the block component.
   * @param {ConversionConfig} config The configuration object.
   * @returns {string} - The generated code for the component.
   * @throws {Error} - Throws error if no handler exists for the component.
   */
  public static generate(
    componentName: keyof BlockComponents,
    config: ConversionConfig,
  ): string {
    const handler = this.componentHandlers.get(componentName);
    if (!handler) {
      throw new Error(`No code generator for component: ${componentName}`);
    }
    return handler(config);
  }
}

/**
 * @class BlockConverter
 * @description Converts JSON block definitions to TypeScript code.
 */
class BlockConverter {
  private config: ConversionConfig;

  /**
   * @param {ConversionConfig} config The configuration for conversion.
   */
  public constructor(config: ConversionConfig) {
    this.config = config;
    this.ensureDirectories();
  }

  /**
   * @returns {Promise<void>}
   * @description Converts all JSON files in the input directory.
   */
  public async convertAll(): Promise<void> {
    const files = fs.readdirSync(this.config.inputDir);

    for (const file of files) {
      if (path.extname(file) === ".json") {
        await this.convertFile(path.join(this.config.inputDir, file));
      }
    }
    // Run Prettier and ESLint on the generated files
    this.formatGeneratedFiles();
  }

  /**
   * @returns {void}
   * @description Formats generated files using Prettier and ESLint.
   */
  private formatGeneratedFiles(): void {
    try {
      console.log("\nFormatting generated files with Prettier and ESLint...");

      // Run Prettier on the output directory
      execSync(`npx prettier --write "${this.config.outputDir}/**/*.ts"`, {
        stdio: "inherit", // Show Prettier output in the console
      });

      // Run ESLint on the output directory with auto-fix
      execSync(`npx eslint "${this.config.outputDir}/**/*.ts" --fix`, {
        stdio: "inherit", // Show ESLint output in the console
      });

      console.log("✅ Generated files have been formatted successfully.");
    } catch (error) {
      console.error("❌ Failed to format generated files.");
      if (error instanceof Error) {
        console.error(`Error details: ${error.message}`);
      }
      process.exit(1);
    }
  }

  /**
   * @param {string} filePath The path of the JSON file to convert.
   * @returns {Promise<void>}
   * @description Converts a single JSON file to TypeScript.
   */
  private async convertFile(filePath: string): Promise<void> {
    try {
      const content = fs.readFileSync(filePath, "utf-8");
      const validated = this.validateJsonSyntax(content, filePath);
      const rootData: BlockSchema = JSON.parse(validated);

      const fileName = path.basename(filePath, ".json");

      // Generate code for the block
      const { imports, code } = this.generateTypeScriptCode(rootData, fileName);

      // Write the output to a file
      const outputPath = path.join(this.config.outputDir, `${fileName}.ts`);
      fs.writeFileSync(outputPath, `${imports}\n\n${code}`);
    } catch (error) {
      console.error(`\n❌ Error processing file: ${filePath}`);
      if (error instanceof Error) {
        console.error(`Error details: ${error.message}`);
      }
      process.exit(1);
    }
  }

  /**
   * @param {string} content The raw JSON content.
   * @param {string} filePath The file path for error reporting.
   * @returns {string} - The cleaned JSON string.
   * @throws {Error} - Throws error if JSON is invalid.
   */
  private validateJsonSyntax(content: string, filePath: string): string {
    try {
      // Remove comments and fix common JSON issues
      const cleaned = content
        .replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) =>
          g ? "" : m,
        ) // Strip comments
        .replace(/,\s*]/g, "]") // Remove trailing commas in arrays
        .replace(/,\s*}/g, "}"); // Remove trailing commas in objects

      JSON.parse(cleaned);
      return cleaned;
    } catch (error) {
      throw new Error(
        `Invalid JSON in ${path.basename(filePath)}: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      );
    }
  }

  /**
   * @param {BlockSchema} block The block schema object.
   * @param {string} identifier The file base name identifier.
   * @returns {{imports: string; code: string;}} - The generated imports and code.
   */
  private generateTypeScriptCode(
    block: BlockSchema,
    identifier: string,
  ): { imports: string; code: string } {
    const camelCaseIdentifier = StringUtils.toCamelCase(identifier);
    const builder = new BlockBuilderGenerator(block).generate();

    const imports = [
      `import { BlockBuilder } from "legends/core/crafter/blocks/BlockBuilder.ts";`,
      `import { blockRegistry } from "legends/core/crafter/blocks/BlockRegistry.ts";`,
    ].join("\n");

    const blockId =
      block["minecraft:block"]?.description?.identifier ?? identifier;

    const jsdoc = `/**
 * @name ${camelCaseIdentifier}
 * @description TODO: Add description for block ${blockId}
 * @example
 * // Example usage:
 * import { ${camelCaseIdentifier} } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */`;

    const code = [
      jsdoc,
      `const ${camelCaseIdentifier} = ${builder};`,
      `blockRegistry.addBlock("${blockId}", ${camelCaseIdentifier});`,
      `export { ${camelCaseIdentifier} };`,
    ].join("\n\n");

    return { imports, code };
  }

  /**
   * @returns {void}
   * @description Ensures that the output directory exists.
   */
  private ensureDirectories(): void {
    fs.mkdirSync(this.config.outputDir, { recursive: true });
  }
}

/**
 * @class BlockBuilderGenerator
 * @description Generates TypeScript code using the BlockBuilder API.
 */
class BlockBuilderGenerator {
  private block: BlockSchema;

  /**
   * @param {BlockSchema} block The block schema object.
   */
  public constructor(block: BlockSchema) {
    this.block = block;
  }

  /**
   * @returns {string} - The generated builder code.
   * @throws {Error} - Throws error if identifier or material is missing.
   */
  public generate(): string {
    const description = this.block["minecraft:block"]?.description;
    const identifier = description?.identifier;
    const material = description?.material;

    //if (!identifier || !material) {
    //  throw new Error(
    //    "Block description must include both identifier and material.",
    //  );
    //}

    const builderParts = [
      // Pass identifier and material directly to the constructor.
      `new BlockBuilder("${identifier}", "${material}")`,
      this.generateBlockShape(),
      this.generateDestroyTime(),
      this.generateBlockDamageReceiverMaterial(),
      this.generateTerrainType(),
      this.generateBlockType(),
      this.generateDisableBlockShadows(),
      this.generateIgnoredByPathfinding(),
      this.generateHasTeam(),
      this.generateBlockEffects(),
      this.generateTelemetryCategory(),
      this.generateBlockLightEmission(),
      this.generateBlockEncounter(),
      this.generateLiquid(),
      `.build()`,
    ].filter((part) => part && part.trim() !== "");

    return builderParts.join("\n  ");
  }

  /**
   * Generates block shape code with proper type annotation.
   * @returns {string} - The generated block shape code for the block.
   */
  // In BlockBuilderGenerator class - updated generateBlockShape()
  private generateBlockShape(): string {
    const blockShape = this.block["minecraft:block"]?.components?.[
      "minecraft:block_shape"
    ] as MinecraftBlockShapeInput;
    if (!blockShape) return "";

    const shapeParams: Record<string, unknown> = {};

    // Map JSON snake_case keys to camelCase parameters
    if (blockShape.shape !== undefined) {
      shapeParams.shape = blockShape.shape;
    }

    if (blockShape.directional_texture !== undefined) {
      shapeParams.directionalTexture = blockShape.directional_texture;
    }

    if (blockShape.directional_shape !== undefined) {
      shapeParams.directionalShape = blockShape.directional_shape;
    }

    if (blockShape.collision_shape !== undefined) {
      shapeParams.collisionShape = blockShape.collision_shape;
    }

    if (blockShape.render_layer !== undefined) {
      shapeParams.renderLayer = blockShape.render_layer;
    }

    if (blockShape.camera_collision !== undefined) {
      shapeParams.cameraCollision = blockShape.camera_collision;
    }

    if (blockShape.connection_family !== undefined) {
      shapeParams.connectionFamily = blockShape.connection_family;
    }

    if (blockShape.connect_to_family !== undefined) {
      shapeParams.connectToFamily = blockShape.connect_to_family;
    }

    if (blockShape.connect_to_solid !== undefined) {
      shapeParams.connectToSolid = blockShape.connect_to_solid;
    }

    if (blockShape.check_corners !== undefined) {
      shapeParams.checkCorners = blockShape.check_corners;
    }

    return `.setBlockShape(${JSON.stringify(shapeParams)})`;
  }

  /**
   * @returns {string} - Generates destroy time code.
   */
  private generateDestroyTime(): string {
    const destroyTime =
      this.block["minecraft:block"]?.components?.["minecraft:destroy_time"];
    if (!destroyTime) return "";

    return `.setDestroyTime(${destroyTime.value})`;
  }

  /**
   * @returns {string} - Generates block damage receiver material code.
   */
  private generateBlockDamageReceiverMaterial(): string {
    const blockDamageReceiverMaterial =
      this.block["minecraft:block"]?.components?.[
        "badger:block_damage_receiver_material"
      ];
    if (!blockDamageReceiverMaterial) return "";

    return `.setBlockDamageReceiverMaterial(${JSON.stringify(blockDamageReceiverMaterial.material)})`;
  }

  /**
   * @returns {string} - Generates terrain type code.
   */
  private generateTerrainType(): string {
    const terrainType =
      this.block["minecraft:block"]?.components?.["badger:terrain_type"];
    if (!terrainType) return "";

    return `.setTerrainType(${JSON.stringify(terrainType.terrain)})`;
  }

  /**
   * @returns {string} - Generates block type code.
   */
  private generateBlockType(): string {
    const blockType =
      this.block["minecraft:block"]?.components?.["badger:block_type"];
    if (!blockType) return "";

    return `.setBlockType([${blockType.tags
      ?.map((tag: string) => JSON.stringify(tag))
      .join(", ")}])`;
  }

  /**
   * @returns {string} - Generates disable block shadows code.
   */
  private generateDisableBlockShadows(): string {
    const disableBlockShadows =
      this.block["minecraft:block"]?.components?.[
        "badger:disable_block_shadows"
      ];
    if (!disableBlockShadows) return "";

    return `.setDisableBlockShadows(true)`;
  }

  /**
   * @returns {string} - Generates ignored by pathfinding code.
   */
  private generateIgnoredByPathfinding(): string {
    const ignoredByPathfinding =
      this.block["minecraft:block"]?.components?.[
        "badger:ignored_by_pathfinding"
      ];
    if (!ignoredByPathfinding) return "";

    return `.setIgnoredByPathfinding(true)`;
  }

  /**
   * @returns {string} - Generates has team code.
   */
  private generateHasTeam(): string {
    const hasTeam =
      this.block["minecraft:block"]?.components?.["badger:has_team"];
    if (!hasTeam) return "";

    return `.setHasTeam(true)`;
  }

  /**
   * @returns {string} - Generates block effects code.
   */
  private generateBlockEffects(): string {
    const blockEffects =
      this.block["minecraft:block"]?.components?.["badger:block_effects"];
    if (!blockEffects) return "";

    const parts: string[] = [];
    if (blockEffects.damageAmount !== undefined)
      parts.push(`.setDamageAmount(${blockEffects.damageAmount})`);
    if (blockEffects.damageTypes)
      parts.push(
        `.setDamageTypes([${blockEffects.damageTypes
          .map((type: string) => JSON.stringify(type))
          .join(", ")}])`,
      );
    if (blockEffects.effectFrequency !== undefined)
      parts.push(`.setEffectFrequency(${blockEffects.effectFrequency})`);
    if (blockEffects.applyStatus) {
      const statusParts: string[] = [];
      if (blockEffects.applyStatus.poisoned)
        statusParts.push(
          `.setPoisoned(${blockEffects.applyStatus.poisoned.strength})`,
        );
      if (blockEffects.applyStatus.healingStone)
        statusParts.push(
          `.setHealingStone(${blockEffects.applyStatus.healingStone.strength}, ${blockEffects.applyStatus.healingStone.onlyApplyToDamaged})`,
        );
      if (blockEffects.applyStatus.playerJump)
        statusParts.push(
          `.setPlayerJump(${blockEffects.applyStatus.playerJump.strength})`,
        );
      if (blockEffects.applyStatus.slowedPiglinBramble)
        statusParts.push(
          `.setSlowedPiglinBramble(${blockEffects.applyStatus.slowedPiglinBramble.strength})`,
        );
      if (blockEffects.applyStatus.burning)
        statusParts.push(
          `.setBurning(${blockEffects.applyStatus.burning.strength})`,
        );
      if (blockEffects.applyStatus.slowedThorns)
        statusParts.push(
          `.setSlowedThorns(${blockEffects.applyStatus.slowedThorns.strength})`,
        );
      if (blockEffects.applyStatus.playerSpeed)
        statusParts.push(
          `.setPlayerSpeed(${blockEffects.applyStatus.playerSpeed.strength})`,
        );
      if (blockEffects.applyStatus.engaged)
        statusParts.push(
          `.setEngaged(${blockEffects.applyStatus.engaged.strength})`,
        );
      if (blockEffects.applyStatus.lava)
        statusParts.push(`.setLava(${blockEffects.applyStatus.lava.strength})`);
      if (blockEffects.applyStatus.poisonedNoVfx)
        statusParts.push(
          `.setPoisonedNoVfx(${blockEffects.applyStatus.poisonedNoVfx.strength})`,
        );
      if (blockEffects.applyStatus.slowedTar)
        statusParts.push(
          `.setSlowedTar(${blockEffects.applyStatus.slowedTar.strength})`,
        );
      if (blockEffects.applyStatus.wet)
        statusParts.push(`.setWet(${blockEffects.applyStatus.wet.strength})`);
      if (blockEffects.applyStatus.water)
        statusParts.push(
          `.setWater(${blockEffects.applyStatus.water.strength})`,
        );
      if (statusParts.length > 0)
        parts.push(
          `.setApplyStatus((param: any) => param${statusParts.join("\n    ")})`,
        );
    }

    return parts.length > 0
      ? `.setBlockEffects((param: any) => param${parts.join("\n    ")})`
      : "";
  }

  /**
   * @returns {string} - Generates telemetry category code.
   */
  private generateTelemetryCategory(): string {
    const telemetryCategory =
      this.block["minecraft:block"]?.components?.["badger:telemetry_category"];
    if (!telemetryCategory) return "";

    return `.setTelemetryCategory(${JSON.stringify(telemetryCategory.categoryName)})`;
  }

  /**
   * @returns {string} - Generates block light emission code.
   */
  private generateBlockLightEmission(): string {
    const blockLightEmission =
      this.block["minecraft:block"]?.components?.[
        "minecraft:block_light_emission"
      ];
    if (!blockLightEmission) return "";

    return `.setBlockLightEmission(${blockLightEmission.emission})`;
  }

  /**
   * @returns {string} - Generates block encounter code.
   */
  private generateBlockEncounter(): string {
    const blockEncounter =
      this.block["minecraft:block"]?.components?.["badger:block_encounter"];
    if (!blockEncounter) return "";

    return `.setBlockEncounter(${JSON.stringify(blockEncounter.grantResource)})`;
  }

  /**
   * @returns {string} - Generates liquid code.
   */
  private generateLiquid(): string {
    const liquid = this.block["minecraft:block"]?.components?.["badger:liquid"];
    if (!liquid) return "";

    return `.setLiquid(true)`;
  }
}

// Usage
const config: ConversionConfig = {
  inputDir: "./data/blocks",
  outputDir: "./generated/blocks",
};

new BlockConverter(config).convertAll();
