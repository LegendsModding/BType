import { ValidationError } from "../biomes/utils/ValidationError.ts";

/**
 *
 */
export class BlockValidator {
  private static readonly ERROR_CODES = {
    MISSING_COMPONENTS: "BLOCK_VALIDATOR_001",
    INVALID_SHAPE: "BLOCK_VALIDATOR_010",
    OUT_OF_RANGE: "BLOCK_VALIDATOR_020",
    INVALID_IDENTIFIER: "BLOCK_VALIDATOR_030",
    INVALID_RENDER_LAYER: "BLOCK_VALIDATOR_040",
  };

  /**
   * Validates the component counts in the block configuration.
   * @param {BlockSchema} config The block configuration to validate.
   * @throws {Error} Throws an error if any component count exceeds the allowed limits.
   */
  public static validateComponentCounts(config: BlockSchema): void {
    const components = config["minecraft:block"]?.components;
    if (!components) {
      throw new ValidationError(
        this.ERROR_CODES.MISSING_COMPONENTS,
        "Block components are not initialized.",
        { config },
      );
    }

    // Validate block shape
    if (components["minecraft:block_shape"]) {
      const shape = components["minecraft:block_shape"];
      if (shape.shape && !["cube", "custom"].includes(shape.shape)) {
        throw new ValidationError(
          this.ERROR_CODES.INVALID_SHAPE,
          `Invalid block shape '${shape.shape}'. Must be 'cube' or 'custom'.`,
          { allowedValues: ["cube", "custom"], received: shape.shape },
        );
      }
      if (
        shape.renderLayer &&
        ![
          "blend",
          "barrier",
          "alpha_test",
          "opaque_resource_block",
          "opaque_liquid",
          "alpha_test_single_side",
          "opaque",
          "water",
        ].includes(shape.renderLayer)
      ) {
        throw new ValidationError(
          this.ERROR_CODES.INVALID_RENDER_LAYER,
          `Invalid render layer '${shape.renderLayer}'.`,
          {
            allowedValues: [
              "blend",
              "barrier",
              "alpha_test",
              "opaque_resource_block",
              "opaque_liquid",
              "alpha_test_single_side",
              "opaque",
              "water",
            ],
            received: shape.renderLayer,
          },
        );
      }
    }

    // Validate destroy time
    if (components["minecraft:destroy_time"]) {
      const destroyTime = components["minecraft:destroy_time"].value;
      if (destroyTime !== undefined && (destroyTime < 0 || destroyTime > 100)) {
        throw new Error("Destroy time must be between 0 and 100.");
      }
    }

    // Validate block effects
    if (components["badger:block_effects"]) {
      const effects = components["badger:block_effects"];
      if (
        effects.damageAmount !== undefined &&
        (effects.damageAmount < 0 || effects.damageAmount > 100)
      ) {
        throw new Error("Damage amount must be between 0 and 100.");
      }
      if (
        effects.effectFrequency !== undefined &&
        (effects.effectFrequency < 0 || effects.effectFrequency > 1)
      ) {
        throw new Error("Effect frequency must be between 0 and 1.");
      }
    }

    // Validate light emission
    if (components["minecraft:block_light_emission"]) {
      const emission = components["minecraft:block_light_emission"].emission;
      if (emission !== undefined && (emission < 0 || emission > 15)) {
        throw new Error("Light emission must be between 0 and 15.");
      }
    }
  }

  /**
   *
   * @param config
   */
  public static validateRequiredComponents(config: BlockSchema): void {
    if (!config) {
      throw new Error(
        `Undefined or invalid block config passed to validateRequiredComponents.`,
      );
    }
    const components = config["minecraft:block"]?.components;
    if (!components) {
      throw new Error("Block components are not initialized.");
    }

    // Ensure required components are present
    if (!components["minecraft:block_shape"]) {
      throw new Error("Block shape component is required.");
    }
    if (!components["minecraft:destroy_time"]) {
      throw new Error("Destroy time component is required.");
    }
  }

  /**
   *
   * @param config
   */
  public static validateIdentifierFormat(config: BlockSchema): void {
    const identifier = config["minecraft:block"]?.description?.identifier;
    if (!identifier) {
      throw new ValidationError(
        this.ERROR_CODES.INVALID_IDENTIFIER,
        "Block identifier is required.",
        { config },
      );
    }

    if (!/^[a-z0-9_]+:[a-z0-9_]+$/.test(identifier)) {
      throw new ValidationError(
        this.ERROR_CODES.INVALID_IDENTIFIER,
        `Invalid block identifier format: ${identifier}`,
        {
          pattern: "namespace:name",
          regex: "^[a-z0-9_]+:[a-z0-9_]+$",
          received: identifier,
        },
      );
    }
  }
}

/** */
export const BLOCK_VALIDATOR = new BlockValidator();
