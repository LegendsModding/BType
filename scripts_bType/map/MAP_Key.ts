/**
 * Contains map system key identifiers for state management.
 * @readonly
 * @remarks
 * Key categories include:
 * - ZOOM: Camera zoom level configurations
 * - SIZE: Dimension parameters
 * - STATE: Operational status indicators
 * - VISIBILITY: Display toggle parameters
 * - TEAM: Faction association data
 * - GAME_RULE: Rule system bindings
 * - FAST_TRAVEL: Portal accessibility flags
 * - BOSS: Encounter tracking
 * - INVASION_STATE: Invasion system status
 * - INVASION_INTENTION: Strategic planning markers
 * - INVASION_ACTIVE: Current attack indicators
 * - INVASION_ATTACK: Attack state tracking
 * - INVASION_ATTACK_AUTO_RESOLVE: Automated conflict resolution flags
 * - INVASION_RECAP: Post-invasion summary data
 * - INVASION_SPECIAL: Unique event markers
 * - IS_DESTROYED: Entity destruction status
 * - PLAYER_ID: Ownership tracking
 * - ONBOARDING: Tutorial progression markers
 * - TEAM_OUTLINES: Faction boundary visualization
 * - CAN_FAST_TRAVEL: Portal eligibility flags
 * - CAMPAIGN_ACT: Act progression status
 * - ACT1_VILLAGE_STATE: Act 1 specific village conditions
 * - MOUNT_WORLD_SPAWNER: Spawner activation states
 * - VILLAGE_CHEST_STATE: Chest availability status
 * - VILLAGE_RESOURCE: Resource tracking
 * - VILLAGE_RESOURCE_VISIBILITY: Resource display toggles
 * - VILLAGE_CULTURE_LEVEL: Cultural development stages
 * - BASE_LOOT: Reward availability status
 * - ATTACKING_FACTION: Aggressor identification
 * - STRENGTH: Intensity metrics
 * - CLAIMED_AREA_VISIBILITY: Territory display settings
 * - HORDERUNNERS_ARRIVED: Piglin horde arrival status
 * - UNBREAKABLES_ARRIVED: Unbreakables faction arrival
 * - ROTTERS_ARRIVED: Rotters faction arrival
 * - FROST_ARRIVED: Frost piglins arrival
 * - BLAZE_ARRIVED: Blaze faction arrival
 * - PLAYER_DAMAGED_BASE: Player-inflicted damage markers
 * - OBJECTIVE: Mission objective states
 * - WITCH_HUT_STATE: Witch hut operational status
 * - ARRIVAL: Nested faction arrival key mappings
 */
export const MAP_Key = {
  ZOOM: "zoom",
  SIZE: "size",
  STATE: "state",
  VISIBILITY: "visibility",
  TEAM: "team",
  GAME_RULE: "game_rule",
  FAST_TRAVEL: "fast_travel",
  BOSS: "boss",
  INVASION_STATE: "invasion_state",
  INVASION_INTENTION: "invasion_intention",
  INVASION_ACTIVE: "invasion_active",
  INVASION_ATTACK: "invasion_attack",
  INVASION_ATTACK_AUTO_RESOLVE: "invasion_attack_auto_resolve",
  INVASION_RECAP: "invasion_recap",
  INVASION_SPECIAL: "invasion_special",
  //PVP_UNDER_ATTACK: "pvp_under_attack",
  IS_DESTROYED: "is_destroyed",
  PLAYER_ID: "player_id",
  //MOB_ALLEGIANCE: "mob_allegiance",
  ONBOARDING: "onboarding_map",
  TEAM_OUTLINES: "team_outlines",
  CAN_FAST_TRAVEL: "can_fast_travel",
  //PVP_VILLAGE_OWNERSHIP: "pvp_village_ownership",
  CAMPAIGN_ACT: "campaign_act",
  ACT1_VILLAGE_STATE: "act1_village_state",
  MOUNT_WORLD_SPAWNER: "mount_world_spawner_state",
  VILLAGE_CHEST_STATE: "village_chest_state",
  VILLAGE_RESOURCE: "village_resource",
  VILLAGE_RESOURCE_VISIBILITY: "village_resource_visibility",
  VILLAGE_CULTURE_LEVEL: "village_level",
  BASE_LOOT: "base_loot",
  ATTACKING_FACTION: "attacking_faction",
  STRENGTH: "strength",
  CLAIMED_AREA_VISIBILITY: "claimed_area_visibility",
  HORDERUNNERS_ARRIVED: "piglin_horderunners_arrived",
  UNBREAKABLES_ARRIVED: "piglin_unbreakables_arrived",
  ROTTERS_ARRIVED: "piglin_rotters_arrived",
  FROST_ARRIVED: "piglin_frost_arrived",
  BLAZE_ARRIVED: "piglin_blaze_arrived",
  PLAYER_DAMAGED_BASE: "player_damaged",
  OBJECTIVE: "objective",
  WITCH_HUT_STATE: "witch_hut_state",
  ARRIVAL: {
    CULTURE: {
      CURSELANDS: "culture_curselands_arrived",
      DRYLANDS: "culture_drylands_arrived",
      WETLANDS: "culture_wetlands_arrived",
    },
    END: {
      PORTAL: "end_portal_arrived",
    },
    PIGLIN: {
      HORDERUNNERS: "piglin_horderunners_arrived",
      UNBREAKABLES: "piglin_unbreakables_arrived",
      ROTTERS: "piglin_rotters_arrived",
      FROST: "piglin_frost_arrived",
      BLAZE: "piglin_blaze_arrived",
    },
    HOST: {
      ACTION: "host_action_arrived",
      FORESIGHT: "host_foresight_arrived",
      KNOWLEDGE: "host_knowledge_arrived",
    },
    UNDEAD: {
      SKELETON: "undead_skeleton_arrived",
      ZOMBIE: "undead_zombie_arrived",
    },
  },
};
