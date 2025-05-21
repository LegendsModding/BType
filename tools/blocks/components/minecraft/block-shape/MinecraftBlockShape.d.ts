/**
 * Represents the shape configuration for a block in Minecraft Legends.
 *
 * This interface specifies parameters for defining the block's shape, including directional textures,
 * render layers, collision properties, and more. These parameters allow developers to create visually
 * and functionally dynamic blocks.
 * @interface MinecraftBlockShape
 * @category Block Configuration
 * @property {BlockShapeType} [shape] - The shape of the block.
 * @property {BlockDirectionalTextureType} [directionalTexture] - Whether the block has directional textures.
 * @property {BlockDirectionalShapeType} [directionalShape] - Whether the block has directional shapes.
 * @property {BlockRenderLayerType} [renderLayer] - The render layer of the block.
 * @property {BlockCollisionShapeType} [collisionShape] - The collision shape of the block.
 * @property {BlockCameraCollisionType} [cameraCollision] - Whether the block collides with the camera.
 * @property {BlockConnectionFamilyType} [connectionFamily] - The connection family of the block.
 * @property {BlockConnectToFamilyType} [connectToFamily] - The family to which the block connects.
 * @property {BlockConnectToSolidType} [connectToSolid] - Whether the block connects to solid blocks.
 * @property {BlockCheckCornersType} [checkCorners] - Whether the block checks corners during placement.
 * @example
 * const blockShape: MinecraftBlockShape = {
 *   shape: "cube",
 *   directionalTexture: true,
 *   renderLayer: "opaque",
 *   collisionShape: "full_cube",
 *   cameraCollision: false,
 *   connectionFamily: "family1",
 *   connectToFamily: "family2",
 *   connectToSolid: true,
 *   checkCorners: true
 * };
 * @remarks
 * Properly configuring these settings ensures that block shapes are applied correctly.
 * Misconfigured settings may lead to visual or functional inconsistencies.
 */
interface MinecraftBlockShape {
  shape?: BlockShapeType;
  directionalTexture?: BlockDirectionalTextureType;
  directionalShape?: BlockDirectionalShapeType;
  renderLayer?: BlockRenderLayerType;
  collisionShape?: BlockCollisionShapeType;
  cameraCollision?: BlockCameraCollisionType;
  connectionFamily?: BlockConnectionFamilyType;
  connectToFamily?: BlockConnectToFamilyType;
  connectToSolid?: BlockConnectToSolidType;
  checkCorners?: BlockCheckCornersType;
}

interface MinecraftBlockShapeInput {
  shape?: BlockShapeType;
  directional_texture?: BlockDirectionalTextureType;
  directional_shape?: BlockDirectionalShapeType;
  render_layer?: BlockRenderLayerType;
  collision_shape?: BlockCollisionShapeType;
  camera_collision?: BlockCameraCollisionType;
  connection_family?: BlockConnectionFamilyType;
  connect_to_family?: BlockConnectToFamilyType;
  connect_to_solid?: BlockConnectToSolidType;
  check_corners?: BlockCheckCornersType;
}
