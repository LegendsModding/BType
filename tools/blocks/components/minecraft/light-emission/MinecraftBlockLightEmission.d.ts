/**
 * Represents the configuration for light emission properties of a block in Minecraft Legends.
 *
 * This interface specifies the light emission level of a block, defining how much light the block emits
 * into its surroundings. Light emission is a critical property for blocks that serve as light sources,
 * such as torches, glowstone, or lava. It allows developers to create visually dynamic environments by
 * controlling the brightness and range of emitted light.
 *
 * The `emission` property defines the numerical value of the light level emitted by the block. Light levels
 * in Minecraft Legends typically range from `0` (no light) to `15` (maximum light). A value of `0` indicates
 * that the block does not emit any light, while higher values increase the intensity and range of the emitted
 * light. For example, a block with an emission value of `15` will illuminate a large area, making it suitable
 * for use as a primary light source.
 *
 * Properly configuring this property ensures that blocks behave consistently within the game world. For instance,
 * a block with a high light emission value can be used to create bright, open areas, while a block with a lower
 * value may serve as a subtle ambient light source. Misconfigured light emission values may lead to visual
 * inconsistencies, such as overly bright or dim areas, breaking immersion or gameplay mechanics.
 * @interface MinecraftBlockLightEmission
 * @category Block Configuration
 * @property {BlockLightEmissionType} [emission] - The light emission level of the block. Must be a number between 0 and 15.
 * @example
 * const blockLightEmission: MinecraftBlockLightEmission = {
 *   emission: 10
 * };
 * @remarks
 * When designing blocks with light emission properties, consider the intended use case and environment.
 * For example, blocks in dark caves or underwater areas may require higher light emission values to ensure
 * visibility, while blocks in well-lit areas can use lower values for subtlety. Additionally, ensure that
 * light emission values align with the block's thematic purpose, such as glowing crystals emitting bright
 * light or lanterns providing moderate illumination.
 *
 * Misconfigured light emission values may also impact performance, as excessive light sources can increase
 * rendering overhead. Always test light emission settings in various scenarios to ensure optimal behavior.
 */
interface MinecraftBlockLightEmission {
  emission?: BlockLightEmissionType;
}
