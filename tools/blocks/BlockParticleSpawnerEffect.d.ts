interface BlockParticleSpawnerEffect {
  effect: string;
  range?: "near" | "middle" | "far";
  probability?: number;
  offset?: [number, number, number];
  trigger?: string;
  rotation_mode?: string;
}

interface BlockParticleSpawnerEffects {
  effects: BlockParticleSpawnerEffect[];
}
