/**
 * Defines type constraints for game rule name structures.
 * @remarks
 * Ensures type safety for rule configurations:
 * - Team count rules must be strings
 * - Campaign rules require act and base enablement flags
 * - PVP rules include HQ placement and match condition parameters
 * - Invasion rules require system enablement flags
 * - Biome rules contain ambience settings
 * - Mob rules define population density parameters
 * - Weather rules contain particle intensity configurations
 * - Seasonal rules include buff and texture variant parameters
 */
interface GameRuleNames {
  TEAMS: {
    teamCount: "teamcount";
  };
  CAMPAIGN: {
    campaignActsEnabled: "campaignactsenabled";
    campaignBasesEnabled: "campaignbasesenabled";
  };
  PVP: {
    autoPlaceHqsOnTimer: "autoplacehqsontimer";
    matchStartHQsBuilt: "matchstartbyhqsbuilt";
    matchEndHQsLastStanding: "matchendbylasthqstanding";
  };
  INVASION: {
    invasionEnabled: "invasionenabled";
  };
  BIOMES: { ambience: "biomeambience" };
  MOBS: {
    density: "mobdensity";
  };
  GAMEMODE: "gamemode";
  WEATHER: {
    particles: {
      intensity: "weatherparticleintensity";
    };
  };
  SEASONS: {
    buffs: "seasonalbuffs";
    textures: "seasonaltexturevariant";
  };
}
