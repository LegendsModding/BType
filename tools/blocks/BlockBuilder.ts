import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { StringUtils } from "../biomes/utils/StringUtils.ts";

import { BlockValidator } from "./BlockValidator.ts";

/**
 * Comprehensive block configuration builder for Minecraft Legends with full schema compliance.
 * Provides type-safe, validated configuration of all block components through a fluent interface.
 * Ensures adherence to block configuration constraints through runtime validation and detailed error messaging.
 * @class BlockBuilder
 * @public
 * @remarks
 * Implements a structured pipeline for validation, transformation, and metadata application.
 * Maintains internal state for deduplicated warnings and component initialization.
 */
export class BlockBuilder {
  private config: BlockSchema;
  private loggedWarnings: Set<string> = new Set<string>();

  /**
   * Initializes the block configuration builder with mandatory identifier and material.
   * @param identifier Unique block identifier in 'namespace:name' format.
   * @param material Base material defining physical properties.
   * @returns {NoReturn}
   * @remarks
   * Establishes initial configuration structure with format version 1.8.0.
   * Initializes components registry and warning tracking system.
   */
  public constructor(identifier: BlockIdentifier, material: BlockMaterial) {
    this.config = {
      formatVersion: "1.8.0",
      "minecraft:block": {
        description: { identifier: identifier, material: material },
        components: {},
      },
    };
    this.loggedWarnings = new Set();
  }

  // Core Validation Helpers =================================================

  /**
   * Deduplicates and logs validation warnings.
   * @param message Warning message content.
   * @returns {NoReturn}
   * @internal
   * @remarks
   * Maintains log efficiency through duplicate message tracking.
   * Uses FORESIGHT.warning for message output with deduplication logic.
   */
  private logWarning(message: string): void {
    if (!this.loggedWarnings.has(message)) {
      FORESIGHT.warning(message);
      this.loggedWarnings.add(message);
    }
  }

  // Component Initialization ================================================

  /**
   * Initializes block components with default values based on component name.
   * @param componentName Target component identifier.
   * @returns {NoReturn}
   * @internal
   * @remarks
   * Constructs default configurations for supported components using conditional initialization.
   * Throws error for uninitialized components object or invalid component names.
   */
  private _initComponent<K extends keyof BlockComponents>(
    componentName: K,
  ): void {
    let components;
    if (this.config["minecraft:block"]) {
      components = this.config["minecraft:block"].components;
    }
    if (!components) {
      throw new Error("Components object is not initialized.");
    }

    if (!components[componentName]) {
      switch (componentName) {
        case "minecraft:block_shape":
          components[componentName] = {
            shape:
              this.config["minecraft:block"]?.components?.[
                "minecraft:block_shape"
              ]?.shape,
            directionalTexture:
              this.config["minecraft:block"]?.components?.[
                "minecraft:block_shape"
              ]?.directionalTexture,
            directionalShape:
              this.config["minecraft:block"]?.components?.[
                "minecraft:block_shape"
              ]?.directionalShape,
            renderLayer:
              this.config["minecraft:block"]?.components?.[
                "minecraft:block_shape"
              ]?.renderLayer,
            collisionShape:
              this.config["minecraft:block"]?.components?.[
                "minecraft:block_shape"
              ]?.collisionShape,
            cameraCollision:
              this.config["minecraft:block"]?.components?.[
                "minecraft:block_shape"
              ]?.cameraCollision,
            connectionFamily:
              this.config["minecraft:block"]?.components?.[
                "minecraft:block_shape"
              ]?.connectionFamily,
            connectToFamily:
              this.config["minecraft:block"]?.components?.[
                "minecraft:block_shape"
              ]?.connectToFamily,
            connectToSolid:
              this.config["minecraft:block"]?.components?.[
                "minecraft:block_shape"
              ]?.connectToSolid,
            checkCorners:
              this.config["minecraft:block"]?.components?.[
                "minecraft:block_shape"
              ]?.checkCorners,
          } as MinecraftBlockShape;
          break;
        case "minecraft:destroy_time":
          components[componentName] = { value: 10 } as MinecraftDestroyTime;
          break;
        case "badger:block_damage_receiver_material":
          components[componentName] = {
            material: "block",
          } as BadgerBlockDamageReceiverMaterial;
          break;
        case "badger:terrain_type":
          components[componentName] = {
            terrain:
              this.config["minecraft:block"]?.components?.[
                "badger:terrain_type"
              ]?.terrain,
          } as BadgerTerrainType;
          break;
        case "badger:block_type":
          components[componentName] = { tags: [] } as BadgerBlockType;
          break;
        case "badger:disable_block_shadows":
          components[componentName] = {} as BadgerDisableBlockShadows;
          break;
        case "badger:ignored_by_pathfinding":
          components[componentName] = {} as BadgerIgnoredByPathfinding;
          break;
        case "badger:has_team":
          components[componentName] = {} as BadgerHasTeam;
          break;
        case "badger:block_effects":
          components[componentName] = {} as BadgerBlockEffects;
          break;
        case "badger:telemetry_category":
          components[componentName] = {
            categoryName: "Environmental",
          } as BadgerTelemetryCategory;
          break;
        case "minecraft:block_light_emission":
          components[componentName] = {
            emission: 0,
          } as MinecraftBlockLightEmission;
          break;
        case "badger:block_encounter":
          components[componentName] = {
            grantResource: "unlock_journal_hazard_geyser",
          } as BadgerBlockEncounter;
          break;
        case "badger:liquid":
          components[componentName] = {} as BadgerLiquid;
          break;
        default:
          throw new Error(`Invalid component name: ${componentName}`);
      }
    }
  }

  // Core Block Components ===================================================

  /**
   * Configures block shape properties with provided parameters.
   * @param params Configuration object containing shape-related properties.
   * @returns {this} Current instance for method chaining.
   * @remarks
   * Updates existing block shape component with partial parameter overrides.
   * Ensures component initialization before applying configuration.
   */
  public setBlockShape(params: MinecraftBlockShape): this {
    this._initComponent("minecraft:block_shape");
    let component;
    if (this.config["minecraft:block"]?.components) {
      component = this.config["minecraft:block"].components[
        "minecraft:block_shape"
      ] as MinecraftBlockShape;
    }
    if (component) {
      if (params.shape !== undefined) component.shape = params.shape;
      if (params.directionalTexture !== undefined)
        component.directionalTexture = params.directionalTexture;
      if (params.directionalShape !== undefined)
        component.directionalShape = params.directionalShape;
      if (params.renderLayer !== undefined)
        component.renderLayer = params.renderLayer;
      if (params.collisionShape !== undefined)
        component.collisionShape = params.collisionShape;
      if (params.cameraCollision !== undefined)
        component.cameraCollision = params.cameraCollision;
      if (params.connectionFamily !== undefined)
        component.connectionFamily = params.connectionFamily;
      if (params.connectToFamily !== undefined)
        component.connectToFamily = params.connectToFamily;
      if (params.connectToSolid !== undefined)
        component.connectToSolid = params.connectToSolid;
      if (params.checkCorners !== undefined)
        component.checkCorners = params.checkCorners;
    }

    return this;
  }

  /**
   * Sets block destruction time value.
   * @param value Destruction time measurement.
   * @returns {this} Current instance for method chaining.
   * @remarks
   * Initializes destroy time component before applying value.
   * Validates component existence before assignment.
   */
  public setDestroyTime(value: BlockDestroyTimeType): this {
    this._initComponent("minecraft:destroy_time");
    let component;
    if (this.config["minecraft:block"]?.components) {
      component = this.config["minecraft:block"].components[
        "minecraft:destroy_time"
      ] as MinecraftDestroyTime;
    }
    if (component) {
      component.value = value;
    }
    return this;
  }

  /**
   * Configures block damage receiver material property.
   * @param material Material type affecting damage response.
   * @returns {this} Current instance for method chaining.
   * @remarks
   * Initializes damage receiver material component before applying configuration.
   * Validates component existence before assignment.
   */
  public setBlockDamageReceiverMaterial(
    material: BlockDamageReceiverMaterialType,
  ): this {
    this._initComponent("badger:block_damage_receiver_material");
    let component;
    if (this.config["minecraft:block"]?.components) {
      component = this.config["minecraft:block"].components[
        "badger:block_damage_receiver_material"
      ] as BadgerBlockDamageReceiverMaterial;
    }
    if (component) {
      component.material = material;
    }
    return this;
  }

  /**
   * Sets terrain type classification for the block.
   * @param terrain Terrain category identifier.
   * @returns {this} Current instance for method chaining.
   * @remarks
   * Initializes terrain type component before applying configuration.
   * Validates component existence before assignment.
   */
  public setTerrainType(terrain: BlockTerrainType): this {
    this._initComponent("badger:terrain_type");
    let component;
    if (this.config["minecraft:block"]?.components) {
      component = this.config["minecraft:block"].components[
        "badger:terrain_type"
      ] as BadgerTerrainType;
    }
    if (component) {
      component.terrain = terrain;
    }
    return this;
  }

  /**
   * Configures block type classification with associated tags.
   * @param tags Array of classification tags.
   * @returns {this} Current instance for method chaining.
   * @remarks
   * Initializes block type component before applying tag configuration.
   * Validates component existence before assignment.
   */
  public setBlockType(tags: string[]): this {
    this._initComponent("badger:block_type");
    let component;
    if (this.config["minecraft:block"]?.components) {
      component = this.config["minecraft:block"].components[
        "badger:block_type"
      ] as BadgerBlockType;
    }
    if (component) {
      component.tags = tags;
    }
    return this;
  }

  /**
   * Enables block shadow disabling feature.
   * @returns {this} Current instance for method chaining.
   * @remarks
   * Initializes disable block shadows component during configuration.
   */
  public setDisableBlockShadows(): this {
    this._initComponent("badger:disable_block_shadows");
    return this;
  }

  /**
   * Configures block to be ignored by pathfinding systems.
   * @returns {this} Current instance for method chaining.
   * @remarks
   * Initializes ignored by pathfinding component during configuration.
   */
  public setIgnoredByPathfinding(): this {
    this._initComponent("badger:ignored_by_pathfinding");
    return this;
  }

  /**
   * Enables team association feature for the block.
   * @returns {this} Current instance for method chaining.
   * @remarks
   * Initializes has team component during configuration.
   */
  public setHasTeam(): this {
    this._initComponent("badger:has_team");
    return this;
  }

  /**
   * Configures block effect properties with provided parameters.
   * @param params Configuration object containing effect-related properties.
   * @returns {this} Current instance for method chaining.
   * @remarks
   * Updates existing block effects component with partial parameter overrides.
   * Ensures component initialization before applying configuration.
   */
  public setBlockEffects(params: BadgerBlockEffects): this {
    this._initComponent("badger:block_effects");
    let component;
    if (this.config["minecraft:block"]?.components) {
      component = this.config["minecraft:block"].components[
        "badger:block_effects"
      ] as BadgerBlockEffects;
    }
    if (component) {
      if (params.damageAmount !== undefined)
        component.damageAmount = params.damageAmount;
      if (params.damageTypes !== undefined)
        component.damageTypes = params.damageTypes;
      if (params.effectFrequency !== undefined)
        component.effectFrequency = params.effectFrequency;
      if (params.applyStatus !== undefined)
        component.applyStatus = params.applyStatus;
    }
    return this;
  }

  /**
   * Sets telemetry category classification for the block.
   * @param categoryName Telemetry category identifier.
   * @returns {this} Current instance for method chaining.
   * @remarks
   * Initializes telemetry category component before applying configuration.
   * Validates component existence before assignment.
   */
  public setTelemetryCategory(categoryName: "Environmental"): this {
    this._initComponent("badger:telemetry_category");
    let component;
    if (this.config["minecraft:block"]?.components) {
      component = this.config["minecraft:block"].components[
        "badger:telemetry_category"
      ] as BadgerTelemetryCategory;
    }
    if (component) {
      component.categoryName = categoryName;
    }
    return this;
  }

  /**
   * Configures block light emission intensity.
   * @param emission Light emission value.
   * @returns {this} Current instance for method chaining.
   * @remarks
   * Initializes block light emission component before applying configuration.
   * Validates component existence before assignment.
   */
  public setBlockLightEmission(emission: number): this {
    this._initComponent("minecraft:block_light_emission");
    let component;
    if (this.config["minecraft:block"]?.components) {
      component = this.config["minecraft:block"].components[
        "minecraft:block_light_emission"
      ] as MinecraftBlockLightEmission;
    }
    if (component) {
      component.emission = emission;
    }
    return this;
  }

  /**
   * Configures block encounter resource grant.
   * @param grantResource Resource identifier for encounter rewards.
   * @returns {this} Current instance for method chaining.
   * @remarks
   * Initializes block encounter component before applying configuration.
   * Validates component existence before assignment.
   */
  public setBlockEncounter(
    grantResource: BlockEncounterGrantResourceType,
  ): this {
    this._initComponent("badger:block_encounter");
    let component;
    if (this.config["minecraft:block"]?.components) {
      component = this.config["minecraft:block"].components[
        "badger:block_encounter"
      ] as BadgerBlockEncounter;
    }
    if (component) {
      component.grantResource = grantResource;
    }
    return this;
  }

  /**
   * Enables liquid properties for the block.
   * @returns {this} Current instance for method chaining.
   * @remarks
   * Initializes liquid component during configuration.
   */
  public setLiquid(): this {
    this._initComponent("badger:liquid");
    return this;
  }

  /**
   * Adds metadata information to block configuration.
   * @param config Current block configuration object.
   * @returns {BlockSchema} Updated configuration with metadata.
   * @internal
   * @remarks
   * Appends generation timestamp and schema version to configuration metadata.
   */
  private addMetadata(config: BlockSchema): BlockSchema {
    return {
      ...config,
      metadata: {
        generatedAt: new Date().toISOString(),
        schemaVersion: "1.8.0",
      },
    };
  }

  /**
   * Applies default values to block configuration where necessary.
   * @param config Current block configuration object.
   * @returns {BlockSchema} Updated configuration with applied defaults.
   * @internal
   * @remarks
   * Ensures format version is set to 1.8.0 when missing.
   * Throws error for null or undefined configuration input.
   */
  private applyDefaultValues(config: BlockSchema): BlockSchema {
    if (!config) {
      throw new Error(
        "Null or undefined config passed to applyDefaultValues in BlockBuilder!",
      );
    }

    // Apply default values here
    if (!config.formatVersion) {
      config.formatVersion = "1.8.0";
    }

    return config;
  }

  /**
   * Finalizes block configuration through validation and transformation pipelines.
   * @returns {BlockSchema} Fully constructed and validated block configuration.
   * @remarks
   * Executes sequential validation checks including component counts and identifier format.
   * Applies transformation pipeline for case conversion, metadata addition, and default value application.
   * Returns deep cloned configuration object after processing.
   */
  public build(): BlockSchema {
    const validationPipeline = [
      (config: BlockSchema) => BlockValidator.validateComponentCounts(config),
      (config: BlockSchema) =>
        BlockValidator.validateRequiredComponents(config),
      (config: BlockSchema) => BlockValidator.validateIdentifierFormat(config),
    ];

    // Run validation pipeline
    validationPipeline.forEach((validator) => validator(this.config));

    // Transformation pipeline
    const transformationPipeline = [
      (obj: object) => StringUtils.toSnakeCaseObj(obj),
      this.addMetadata.bind(this),
      this.applyDefaultValues.bind(this),
    ];

    // Apply transformations using reduce
    return transformationPipeline.reduce(
      (config, transform) => transform(config),
      structuredClone(this.config),
    );
  }
}
