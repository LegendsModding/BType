type DecorationIdentifier = string;
type SoundIdentifier = string;

interface BlockClientConfig {
  textures?: string | BlockTextures;
  particleSpawner?: BlockParticleSpawnerEffects;
  isotropic?: BlockIsotropic;
  decoration?: BlockDecorationConfig;
  sound?: SoundIdentifier;
}
