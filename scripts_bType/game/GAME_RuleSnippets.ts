import { GAME_RuleNames } from "./GAME_RuleNames.ts";
import { GAME_SetRuleVariable } from "./GAME_SetRuleVariable.ts";

SNIPPET_RuleInitialized(GAME_RuleNames.TEAMS.teamCount, (ruleValue) => {
  GAME_SetRuleVariable(
    GAME_RuleNames.TEAMS.teamCount,
    ruleValue.value as number,
  );
});

SNIPPET_RuleInitialized(
  GAME_RuleNames.INVASION.invasionEnabled,
  (ruleValue) => {
    GAME_SetRuleVariable(
      GAME_RuleNames.INVASION.invasionEnabled,
      ruleValue.value ? 1 : 0,
    );
  },
);

SNIPPET_RuleInitialized(
  GAME_RuleNames.CAMPAIGN.campaignActsEnabled,
  (ruleValue) => {
    GAME_SetRuleVariable(
      GAME_RuleNames.CAMPAIGN.campaignActsEnabled,
      ruleValue.value ? 1 : 0,
    );
  },
);

// Biome Audio System
// TODO: Add to GAME_RuleNames for consistency and to avoid "importing" the classes directly to here
//SNIPPET_RuleInitialized(GAME_RuleNames.BIOMES.ambience, (ruleValue) => {
//  GAME_SetRuleVariable(GAME_RuleNames.BIOMES.ambience, ruleValue.value ? 0 : 0);
//});

// Seasons
// Seasonal Buff Manager
//SNIPPET_RuleInitialized(GAME_RuleNames.SEASONS.buffs, (ruleValue) => {
//  GAME_SetRuleVariable(GAME_RuleNames.SEASONS.buffs, ruleValue.value ? 0 : 0);
//});

// Seasonal Entity System
//SNIPPET_RuleInitialized(GAME_RuleNames.MOBS.density, (ruleValue) => {
//  GAME_SetRuleVariable(GAME_RuleNames.MOBS.density, ruleValue.value ? 1 : 1);
//});

// Seasonal Texture Rule Manager
//SNIPPET_RuleInitialized(GAME_RuleNames.SEASONS.textures, (ruleValue) => {
//  GAME_SetRuleVariable(
//    GAME_RuleNames.SEASONS.textures,
//    ruleValue.value ? 0 : 0,
//  );
//});

//SNIPPET_RuleInitialized(
//  GAME_RuleNames.WEATHER.particles.intensity,
//  (ruleValue) => {
//    GAME_SetRuleVariable(
//      GAME_RuleNames.WEATHER.particles.intensity,
//      ruleValue.value ? 0 : 0,
//    );
//  },
//);
