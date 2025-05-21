type MobOccupationKey = "creeper" | "skeleton" | "zombie";
interface MobOccupationVars {
  playerPresent: string;
  firstCageOpened: string;
  occupyingPiglinCount: string;
  occupyingPiglinCountInitialized: string;
  counterCompCount: string;
}

interface MobOccupationTags {
  objectivePiglinsTag: string;
  baseVicinityTvTag: string;
  piglinSpawnTvTag: string;
}

interface MobOccupationVOs {
  /** Some mobs may not have an intro VO */
  intro?: string;
  joinTheFight: string;
  attackedPortalVOs: string;
  firstCageOpenedBase: string;
  mobAlliancePiglinAttack: string;
  mobAllianceFoA: string;
  firstCageOpenedMobAlliance: string;
}

interface MobOccupationBehaviors {
  default: string;
  caged: string;
  act1: string;
}

interface MobOccupationCinematics {
  piglinOccupation: string;
  piglinOccupationNight: string;
  mobJoinTheFight: string;
  flameOfAllegiance: string;
  flameOfAllegianceNight: string;
}

interface MobOccupationMessage {
  mobJoinTheFight: string;
}

interface MobOccupationTimers {
  portalEscalationTimer: string;
}

interface MobOccupationData {
  villageArchetype: string;
  baseSize: string;
  piglinFactionName: string;
  presentationActionDistance: number;
  baseSlot: string;
  startOccupationGlobal: string;
  vars: MobOccupationVars;
  tags: MobOccupationTags;
  VOs: MobOccupationVOs;
  behaviors: MobOccupationBehaviors;
  cinematics: MobOccupationCinematics;
  message: MobOccupationMessage;
  timers: MobOccupationTimers;
}

interface CommonOccupationData {
  audioEntityAlliance: string;
  audioEntityPiglin: string;
  piglinAttackIntroVOPlayed: string;
  piglinCageTag: string;
  portalHealthThreshold: number;
  portalHalfHealthThreshold: number;
  cinematicPlayerGatherRange: number;
  initialOccupationMobDespawnRange: number;
  guardedBehaviorDictionary: { tag: string; behavior: string }[];
  dummyPiglinsToSpawn: {
    id: string;
    count: number;
    minRadius: number;
    maxRadius: number;
  }[];
  guardingPiglinTag: string;
  attackingVillageIdKey: string;
  escalationLevelVillageIdKey: string;
  destroyPlayerStructureDistance: number;
  occupyingPiglinClearPercent: number;
  piglinObjectiveVicinityPadding: number;
  piglinSpawningVicinityPadding: number;
  beforeOccupationSpawnDummyPiglinsVicinityPadding: number;
}

interface MaOccupationVal {
  mobIds: MobOccupationKey[];
  creeper: MobOccupationData;
  skeleton: MobOccupationData;
  zombie: MobOccupationData;
  common: CommonOccupationData;
}
