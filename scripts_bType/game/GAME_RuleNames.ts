/**
 * Contains game rule variable name definitions.
 * @readonly
 * @remarks
 * Structure includes:
 * - TEAMS: Team count configuration rules
 * - CAMPAIGN: Campaign act and base activation rules
 * - PVP: Match start/end conditions and HQ placement rules
 * - INVASION: Invasion system enablement status
 * - BIOMES: Ambient biome particle settings
 * - MOBS: Mob population density controls
 * - GAMEMODE: Core game mode identifier
 * - WEATHER: Particle intensity configuration rules
 * - SEASONS: Seasonal buff and texture variant rules
 */
export const GAME_RuleNames: GameRuleNames = {
  TEAMS: {
    teamCount: "teamcount",
  },
  CAMPAIGN: {
    campaignActsEnabled: "campaignactsenabled",
    campaignBasesEnabled: "campaignbasesenabled",
  },
  PVP: {
    autoPlaceHqsOnTimer: "autoplacehqsontimer",
    matchStartHQsBuilt: "matchstartbyhqsbuilt",
    matchEndHQsLastStanding: "matchendbylasthqstanding",
  },
  INVASION: {
    invasionEnabled: "invasionenabled",
  },
  BIOMES: { ambience: "biomeambience" },
  MOBS: {
    density: "mobdensity",
  },
  GAMEMODE: "gamemode",
  WEATHER: {
    particles: {
      intensity: "weatherparticleintensity",
    },
  },
  SEASONS: {
    buffs: "seasonalbuffs",
    textures: "seasonaltexturevariant",
  },
} as const satisfies GameRuleNames;
