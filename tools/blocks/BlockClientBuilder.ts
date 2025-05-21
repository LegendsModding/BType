import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { StringUtils } from "../biomes/utils/StringUtils.ts";
import { ValidationError } from "../biomes/utils/ValidationError.ts";
// Smart Texture Builder

/**
 *
 */
class SmartTextureBuilder {
  private config: SmartTextureConfig = { default: "" };

  /**
   *
   * @param texturePath
   * @returns {this}
   */
  public setDefault(texturePath: string): this {
    this.config.default = texturePath;
    return this;
  }

  /**
   *
   * @param texturePath
   * @returns {this}
   */
  public setEmpty(texturePath: string): this {
    this.config.empty = texturePath;
    return this;
  }

  /**
   *
   * @param texturePath
   * @returns {this}
   */
  public setL(texturePath: string): this {
    this.config.L = texturePath;
    return this;
  }

  /**
   *
   * @param texturePath
   * @returns {this}
   */
  public setLine(texturePath: string): this {
    this.config.line = texturePath;
    return this;
  }

  /**
   *
   * @param texturePath
   * @returns {this}
   */
  public setCross(texturePath: string): this {
    this.config.cross = texturePath;
    return this;
  }

  /**
   *
   * @param texturePath
   * @returns {this}
   */
  public setT(texturePath: string): this {
    this.config.T = texturePath;
    return this;
  }

  /**
   *
   * @param texturePath
   * @returns {this}
   */
  public setSpoke(texturePath: string): this {
    this.config.spoke = texturePath;
    return this;
  }

  /**
   * @returns {SmartTextureConfig}
   */
  public build(): SmartTextureConfig {
    if (!this.config.default) {
      throw new ValidationError(
        "CLIENT_BUILDER_001",
        "Default texture is required for smart texture",
      );
    }
    return { ...this.config };
  }
}

// Particle Effect Builder

/**
 *
 */
class ParticleEffectBuilder {
  private config: BlockParticleSpawnerEffect = { effect: "" };

  /**
   *
   * @param effectName
   * @returns {this}
   */
  public setEffect(effectName: string): this {
    this.config.effect = effectName;
    return this;
  }

  /**
   *
   * @param range
   * @returns {this}
   */
  public setRange(range: "near" | "middle" | "far"): this {
    this.config.range = range;
    return this;
  }

  /**
   *
   * @param probability
   * @returns {this}
   */
  public setProbability(probability: number): this {
    if (probability < 0 || probability > 1) {
      throw new ValidationError(
        "CLIENT_BUILDER_002",
        "Probability must be between 0 and 1",
      );
    }
    this.config.probability = probability;
    return this;
  }

  /**
   *
   * @param x
   * @param y
   * @param z
   * @returns {this}
   */
  public setOffset(x: number, y: number, z: number): this {
    this.config.offset = [x, y, z];
    return this;
  }

  /**
   *
   * @param trigger
   * @returns {this}
   */
  public setTrigger(trigger: string): this {
    this.config.trigger = trigger;
    return this;
  }

  /**
   *
   * @param mode
   * @returns {this}
   */
  public setRotationMode(mode: string): this {
    this.config.rotation_mode = mode;
    return this;
  }

  /**
   * @returns {BlockParticleSpawnerEffect}
   */
  public build(): BlockParticleSpawnerEffect {
    if (!this.config.effect) {
      throw new ValidationError(
        "CLIENT_BUILDER_003",
        "Effect name is required",
      );
    }
    return { ...this.config };
  }
}

// Decoration Builder

/**
 *
 */
class DecorationBuilder {
  private config: Exclude<BlockDecorationConfig, string> = {};

  /**
   *
   * @param decoration
   * @returns {this}
   */
  public setDefault(decoration: string): this {
    this.config.default = decoration;
    return this;
  }

  /**
   *
   * @param decoration
   * @returns {this}
   */
  public setL(decoration: string): this {
    this.config.l = decoration;
    return this;
  }

  /**
   *
   * @param decoration
   * @returns {this}
   */
  public setLMirror(decoration: string): this {
    this.config.l_mirror = decoration;
    return this;
  }

  /**
   *
   * @param decoration
   * @returns {this}
   */
  public setLine(decoration: string): this {
    this.config.line = decoration;
    return this;
  }

  /**
   *
   * @param material
   * @returns {this}
   */
  public setMetamaterialOverride(material: string): this {
    this.config.metamaterial_override = material;
    return this;
  }

  /**
   * @returns {BlockDecorationConfig}
   */
  public build(): BlockDecorationConfig {
    if (!this.config.default && !this.config.metamaterial_override) {
      throw new ValidationError(
        "CLIENT_BUILDER_004",
        "Default decoration or metamaterial override required",
      );
    }
    return { ...this.config };
  }
}

// Main Client Block Builder

/**
 *
 */
class BlockClientBuilder {
  private identifier: BlockIdentifier;
  private config: BlockClientConfig = {};
  private formatVersion = "1.15.0";
  private loggedWarnings = new Set<string>();

  /**
   *
   * @param identifier
   */
  public constructor(identifier: BlockIdentifier) {
    if (!/^[a-z0-9_]+:[a-z0-9_]+$/.test(identifier)) {
      throw new ValidationError(
        "CLIENT_BUILDER_005",
        `Invalid block identifier: ${identifier}`,
      );
    }
    this.identifier = identifier;
  }

  /**
   *
   * @param message
   */
  private logWarning(message: string): void {
    if (!this.loggedWarnings.has(message)) {
      FORESIGHT.warning(message);
      this.loggedWarnings.add(message);
    }
  }

  /**
   *
   * @param version
   * @returns {this}
   */
  public setFormatVersion(version: string): this {
    this.formatVersion = version;
    return this;
  }

  // Texture configuration methods

  /**
   *
   * @param texturePath
   * @returns {this}
   */
  public setUniformTexture(texturePath: string): this {
    this.config.textures = texturePath;
    return this;
  }

  /**
   *
   * @param side
   * @param texture
   * @returns {this}
   */
  public setTexture(side: string, texture: string): this {
    this.initializeTexturesObject();
    (this.config.textures as BlockTextures)[side] = texture;
    return this;
  }

  /**
   *
   * @param side
   * @param builder
   * @returns {this}
   */
  public setSmartTexture(
    side: string,
    builder: (sb: SmartTextureBuilder) => void,
  ): this {
    this.initializeTexturesObject();
    const textureBuilder = new SmartTextureBuilder();
    builder(textureBuilder);
    (this.config.textures as BlockTextures)[side] = {
      smart: textureBuilder.build(),
    };
    return this;
  }

  // Particle effects configuration

  /**
   *
   * @param builder
   * @returns {this}
   */
  public addParticleEffect(builder: (pb: ParticleEffectBuilder) => void): this {
    if (!this.config.particleSpawner) {
      this.config.particleSpawner = { effects: [] };
    }
    const effectBuilder = new ParticleEffectBuilder();
    builder(effectBuilder);
    this.config.particleSpawner.effects.push(effectBuilder.build());
    return this;
  }

  // Isotropic configuration

  /**
   *
   * @param side
   * @param value
   * @returns {this}
   */
  public setIsotropic(side: string, value: boolean): this {
    if (!this.config.isotropic) {
      this.config.isotropic = {};
    }
    this.config.isotropic[side] = value;
    return this;
  }

  // Decoration configuration

  /**
   *
   * @param input
   * @returns {this}
   */
  public setDecoration(
    input: string | ((db: DecorationBuilder) => void),
  ): this {
    if (typeof input === "string") {
      this.config.decoration = input;
    } else {
      const decorationBuilder = new DecorationBuilder();
      input(decorationBuilder);
      this.config.decoration = decorationBuilder.build();
    }
    return this;
  }

  // Sound configuration

  /**
   *
   * @param soundId
   * @returns {this}
   */
  public setSound(soundId: string): this {
    this.config.sound = soundId;
    return this;
  }

  // Validation and build

  /**
   * @returns {BlockClient}
   */
  public build(): BlockClient {
    this.validateConfiguration();
    return {
      format_version: this.formatVersion,
      "badger:client_block": {
        [this.identifier]: this.applyTransforms(this.config),
      },
    };
  }

  /**
   *
   */
  private initializeTexturesObject(): void {
    if (typeof this.config.textures === "string") {
      this.logWarning(
        "Overwriting uniform texture with texture object configuration",
      );
      this.config.textures = {};
    } else if (!this.config.textures) {
      this.config.textures = {};
    }
  }

  /**
   *
   */
  private validateConfiguration(): void {
    if (!this.config.textures && !this.config.decoration) {
      throw new ValidationError(
        "CLIENT_BUILDER_006",
        "Block must have either textures or decoration",
      );
    }

    if (this.config.particleSpawner) {
      this.config.particleSpawner.effects.forEach((effect) => {
        if (
          effect.probability &&
          (effect.probability < 0 || effect.probability > 1)
        ) {
          throw new ValidationError(
            "CLIENT_BUILDER_007",
            `Invalid probability value ${effect.probability} for particle effect`,
          );
        }
      });
    }

    if (this.config.sound && !/^[a-z0-9_:]+$/.test(this.config.sound)) {
      this.logWarning(`Potential invalid sound ID: ${this.config.sound}`);
    }
  }

  /**
   *
   * @param config
   * @returns {BlockClientConfig}
   */
  private applyTransforms(config: BlockClientConfig): BlockClientConfig {
    return StringUtils.toSnakeCaseObj(config);
  }
}

// Utility function for creator-facing API

/**
 *
 * @param identifier
 * @param configurator
 * @returns {BlockClient}
 */
export function createClientBlock(
  identifier: BlockIdentifier,
  configurator: (builder: BlockClientBuilder) => void,
): BlockClient {
  const builder = new BlockClientBuilder(identifier);
  configurator(builder);
  return builder.build();
}
