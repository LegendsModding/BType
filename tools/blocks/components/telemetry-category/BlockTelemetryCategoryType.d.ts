/**
 * Represents the telemetry category for a block in Minecraft Legends.
 *
 * This type specifies the category name for telemetry data associated with the block. It allows
 * developers to categorize and track block-related events for analytics purposes.
 * type {"Environmental" | string} BlockTelemetryCategoryType
 * @category Block Configuration
 * @example
 * const telemetryCategory: BlockTelemetryCategoryType = "Environmental";
 * @remarks
 * Properly configuring this setting ensures that telemetry data is categorized correctly.
 * Misconfigured categories may lead to missing or incorrect analytics data.
 */
declare type BlockTelemetryCategoryType = "Environmental";
