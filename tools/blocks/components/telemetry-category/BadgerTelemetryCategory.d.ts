/**
 * Represents the telemetry category for a block in Minecraft Legends.
 *
 * This interface specifies the category name for telemetry data associated with the block. It allows
 * developers to categorize and track block-related events for analytics purposes.
 * @interface BadgerTelemetryCategory
 * @category Block Configuration
 * @property {BlockTelemetryCategoryType} [categoryName] - The telemetry category name for the block.
 * @example
 * const telemetryCategory: BadgerTelemetryCategory = {
 *   categoryName: "Environmental"
 * };
 * @remarks
 * Properly configuring this setting ensures that telemetry data is categorized correctly.
 * Misconfigured categories may lead to missing or incorrect analytics data.
 */
interface BadgerTelemetryCategory {
  categoryName?: BlockTelemetryCategoryType;
}
