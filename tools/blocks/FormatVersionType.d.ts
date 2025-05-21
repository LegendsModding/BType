/**
 * Represents the format version for block configurations in Minecraft Legends.
 *
 * This type specifies the version of the schema used for block configurations. It ensures compatibility
 * with the expected version of the game engine.
 * type {"1.8.0"} FormatVersionType
 * @category Block Configuration
 * @example
 * const formatVersion: FormatVersionType = "1.8.0";
 * @remarks
 * The format version must match the expected version of the game engine. Using an incorrect version
 * may lead to compatibility issues or broken functionality.
 */
declare type FormatVersionType = "1.8.0";
