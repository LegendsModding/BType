/**
 * Registry of mob alliance faction identifiers.
 * @readonly
 * @remarks
 * Contains creeper/skeleton/zombie faction names and aggregated all array.
 * Used for mob interaction systems and procedural generation filters.
 */
export const MOB_FactionNames: IMobFactionNames = {
  creeper: "faction.mob.creeper",
  skeleton: "faction.mob.skeleton",
  zombie: "faction.mob.zombie",
  all: ["faction.mob.creeper", "faction.mob.skeleton", "faction.mob.zombie"],
};

/**
 * Registry of piglin faction identifiers.
 * @readonly
 * @remarks
 * Contains horderunners/unbreakables/rotters/frost/blaze factions with hordes/all groupings.
 * Used in invasion systems and multi-faction procedural coordination.
 */
export const PIGLIN_FactionNames: IPiglinFactionNames = {
  horderunners: "faction.piglin.horderunners",
  unbreakables: "faction.piglin.unbreakables",
  rotters: "faction.piglin.rotters",
  frost: "faction.piglin.frost",
  blaze: "faction.piglin.blaze",
  hordes: [
    "faction.piglin.horderunners",
    "faction.piglin.unbreakables",
    "faction.piglin.rotters",
    "faction.piglin.frost",
    "faction.piglin.blaze",
  ],
  all: [
    "faction.piglin.horderunners",
    "faction.piglin.unbreakables",
    "faction.piglin.rotters",
    "faction.piglin.frost",
    "faction.piglin.blaze",
  ],
};

/**
 * Registry of cultural faction identifiers.
 * @readonly
 * @remarks
 * Contains drylands/wetlands/curselands factions with aggregated all array.
 * Used in biome-specific village generation and resource management systems.
 */
export const CULTURE_FactionNames: ICultureFactionNames = {
  curselands: "faction.culture.curselands",
  drylands: "faction.culture.drylands",
  wetlands: "faction.culture.wetlands",
  all: [
    "faction.culture.curselands",
    "faction.culture.drylands",
    "faction.culture.wetlands",
  ],
};

/**
 * Registry of player faction identifiers.
 * @readonly
 * @example
 * console.log(PLAYER_FactionNames.campaign); // "faction.player.campaign"
 * @remarks
 * Contains campaign/pvp factions with all array for system-wide references.
 * Used in player allegiance tracking and multiplayer coordination systems.
 */
export const PLAYER_FactionNames: IPlayerFactionNames = {
  campaign: "faction.player.campaign",
  pvp: "faction.player.pvp",
  all: ["faction.player.campaign", "faction.player.pvp"],
};

/**
 * Host faction name generation template.
 * @readonly
 * @defaultValue "action"
 * @remarks
 * Base identifier for action-oriented host faction systems.
 */
export const HOSTS_NameAction = "action";

/**
 * Host faction name generation template.
 * @readonly
 * @defaultValue "foresight"
 * @remarks
 * Base identifier for foresight-related host faction mechanics.
 */
export const HOSTS_NameForesight = "foresight";

/**
 * Host faction name generation template.
 * @readonly
 * @defaultValue "knowledge"
 * @remarks
 * Base identifier for knowledge-based host faction interactions.
 */
export const HOSTS_NameKnowledge = "knowledge";

/**
 * Factory function for constructing host faction identifiers.
 * typeParam T Host name type ("action" | "foresight" | "knowledge").
 * @param hostName Base host identifier.
 * @returns {HostFactionTemplate<T>} Fully qualified faction name string.
 * @example
 * const actionFaction = HOSTS_FactionNameTemplate("action"); // "faction.host.action"
 * @remarks
 * Generates "faction.host.{hostName}" identifiers for system consistency.
 * Used in AI behavior differentiation and quest association systems.
 */
export const HOSTS_FactionNameTemplate = <T extends AnyHostName>(
  hostName: T,
): HostFactionTemplate<T> => {
  return `faction.host.${hostName}`;
};

/**
 * Action-oriented host faction identifier generated via template system.
 * @readonly
 * @remarks
 * Constructed using HOSTS_FactionNameTemplate with HOSTS_NameAction base.
 * Used in AI behavior differentiation and quest association systems.
 */
export const HOSTS_FactionNameAction =
  HOSTS_FactionNameTemplate(HOSTS_NameAction);

/**
 * Foresight-oriented host faction identifier generated via template system.
 * @readonly
 * @remarks
 * Constructed using HOSTS_FactionNameTemplate with HOSTS_NameForesight base.
 * Used in narrative-driven NPC interaction systems.
 */
export const HOSTS_FactionNameForesight =
  HOSTS_FactionNameTemplate(HOSTS_NameForesight);

/**
 * Knowledge-oriented host faction identifier generated via template system.
 * @readonly
 * @remarks
 * Constructed using HOSTS_FactionNameTemplate with HOSTS_NameKnowledge base.
 * Used in educational/tutorial content delivery systems.
 */
export const HOSTS_FactionNameKnowledge =
  HOSTS_FactionNameTemplate(HOSTS_NameKnowledge);

/**
 * Registry of fully qualified host faction names.
 * @readonly
 * @example
 * console.log(HOSTS_FactionNames.action); // "faction.host.action"
 * @remarks
 * Contains action/foresight/knowledge host factions with all array for iteration.
 * Used in NPC interaction systems and world event coordination.
 */
export const HOSTS_FactionNames: IHostFactionNames = {
  action: HOSTS_FactionNameAction,
  foresight: HOSTS_FactionNameForesight,
  knowledge: HOSTS_FactionNameKnowledge,
  all: [
    HOSTS_FactionNameAction,
    HOSTS_FactionNameForesight,
    HOSTS_FactionNameKnowledge,
  ],
};

/**
 * Base identifier for End faction systems.
 * @readonly
 * @defaultValue "ruined_portal"
 * @remarks
 * Core identifier for End dimension-related faction mechanics.
 */
export const END_NameRuinedPortal = "ruined_portal";

/**
 * Factory function for constructing End faction identifiers.
 * typeParam T End faction base name type.
 * @param endFactionName Base End faction identifier.
 * @returns {EndFactionTemplate<T>} Fully qualified faction name string.
 * @remarks
 * Generates "faction.end.{endFactionName}" identifiers for system consistency.
 * Currently only implements ruined_portal faction.
 */
export const END_FactionNameTemplate = <T extends AnyEndName>(
  endFactionName: T,
): EndFactionTemplate<T> => {
  return `faction.end.${endFactionName}`;
};

/**
 * Ruined portal faction identifier for End dimension systems.
 * @readonly
 * @remarks
 * Generated via END_FactionNameTemplate with END_NameRuinedPortal base.
 * Used in End-related procedural generation and invasion mechanics.
 */
export const END_FactionNameRuinedPortal =
  END_FactionNameTemplate(END_NameRuinedPortal);

/**
 * Registry of End faction identifiers.
 * @readonly
 * @remarks
 * Contains ruined_portal faction with all array for system references.
 * Reserved for future End dimension expansion content.
 */
export const END_FactionNames: IEndFactionNames = {
  ruinedPortal: END_FactionNameRuinedPortal,
  all: [END_FactionNameRuinedPortal],
};

/**
 * Base identifier for skeleton undead faction.
 * @readonly
 * @defaultValue "skeleton"
 * @remarks
 * Core identifier for skeleton mob alliance systems.
 */
export const UNDEAD_NameSkeleton = "skeleton";

/**
 * Base identifier for zombie undead faction.
 * @readonly
 * @defaultValue "zombie"
 * @remarks
 * Core identifier for zombie mob alliance mechanics.
 */
export const UNDEAD_NameZombie = "zombie";

/**
 * Factory function for generating undead faction identifiers.
 * typeParam T Base undead faction name type.
 * @param undeadName Base identifier for undead faction.
 * @returns {UndeadFactionTemplate<T>} Fully qualified faction name string.
 * @example
 * const skeletonFaction = UNDEAD_FactionNameTemplate("skeleton"); // "faction.undead.skeleton"
 * @remarks
 * Constructs identifiers using "faction.undead.{undeadName}" pattern for system consistency.
 * Used in AI behavior differentiation and procedural generation systems.
 */
export const UNDEAD_FactionNameTemplate = <T extends AnyUndeadName>(
  undeadName: T,
): UndeadFactionTemplate<T> => {
  return `faction.undead.${undeadName}`;
};

/**
 * Skeleton undead faction identifier generated via template system.
 * @readonly
 * @remarks
 * Created using UNDEAD_FactionNameTemplate with "skeleton" base name.
 * Used in mob alliance systems and combat scenario coordination.
 */
export const UNDEAD_FactionNameSkeleton =
  UNDEAD_FactionNameTemplate(UNDEAD_NameSkeleton);

/**
 * Factory function for constructing undead faction identifiers.
 * typeParam T Undead faction base name type.
 * @param undeadName Base undead faction identifier.
 * @returns {UndeadFactionTemplate<T>} Fully qualified faction name string.
 * @remarks
 * Generates "faction.undead.{undeadName}" identifiers for mob alliance systems.
 */
export const UNDEAD_FactionNameZombie =
  UNDEAD_FactionNameTemplate(UNDEAD_NameZombie);

/**
 * Registry of undead faction identifiers.
 * @readonly
 * @remarks
 * Contains skeleton/zombie factions with all array for coordinated systems.
 * Used in mob alliance occupation and invasion scenarios.
 */
export const UNDEAD_FactionNames: IUndeadFactionNames = {
  skeleton: UNDEAD_FactionNameSkeleton,
  zombie: UNDEAD_FactionNameZombie,
  all: [UNDEAD_FactionNameSkeleton, UNDEAD_FactionNameZombie],
};

/**
 * Comprehensive faction registry for global systems.
 * @readonly
 * @remarks
 * Aggregates cultural, End, piglin, player, host, and undead factions.
 * Used for world generation validation and system-wide faction tracking.
 */
export const FACTION_ALL: FactionAll = [
  ...CULTURE_FactionNames.all,
  ...END_FactionNames.all,
  ...PIGLIN_FactionNames.all,
  ...PLAYER_FactionNames.all,
  ...(HOSTS_FactionNames.all as AllHostFactions),
  ...UNDEAD_FactionNames.all,
];

/**
 * Faction registry excluding player-controlled groups.
 * @readonly
 * @remarks
 * Contains all non-player factions for AI-only systems and procedural generation.
 */
export const FACTION_ALL_NO_PLAYER: FactionAllNoPlayer = [
  ...CULTURE_FactionNames.all,
  ...END_FactionNames.all,
  ...PIGLIN_FactionNames.all,
  ...(HOSTS_FactionNames.all as AllHostFactions),
  ...UNDEAD_FactionNames.all,
];
