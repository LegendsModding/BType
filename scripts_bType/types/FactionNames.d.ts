/**
 * @fileoverview Contains types for faction and team names.
 * @file FactionNames.d.ts
 */

type TeamNameWild = "wild_team";
type TeamNameBlue = "team_two";
type TeamNameRed = "team_one";
type TeamNameOrange = "piglin_team";
type TeamNameMob = "mob_alliance";
type TeamNameEmpty = "";

// Interface for team names.
interface TeamNames {
  wild: TeamNameWild;
  blue: TeamNameBlue;
  red: TeamNameRed;
  orange: TeamNameOrange;
  mobAlliance: TeamNameMob;
  none: TeamNameEmpty;
}

type TeamName =
  | TeamNameWild
  | TeamNameBlue
  | TeamNameRed
  | TeamNameOrange
  | TeamNameMob
  | TeamNameEmpty;

/**
 * The simple names for Piglin factions.
 */
declare type PiglinFactionName =
  | "horderunners"
  | "unbreakables"
  | "rotters"
  | "frost"
  | "blaze";

declare type AllPiglinFactionNames = readonly [
  "horderunners",
  "unbreakables",
  "rotters",
  "frost",
  "blaze",
];
declare type AllCultureFactionNames = readonly [
  "curselands",
  "drylands",
  "wetlands",
];
declare type AllEndFactionNames = readonly ["ruined_portal"];
declare type AllHostFactionNames = readonly [
  "action",
  "foresight",
  "knowledge",
];
declare type AllUndeadFactionNames = readonly ["skeleton", "zombie"];

/**
 * Fully–qualified Piglin faction ID templates.
 */
declare type PiglinFactionIDTemplate = `faction.piglin`;
declare type PiglinHorderunnersFaction =
  `${PiglinFactionIDTemplate}.horderunners`;
declare type PiglinUnbreakablesFaction =
  `${PiglinFactionIDTemplate}.unbreakables`;
declare type PiglinRottersFaction = `${PiglinFactionIDTemplate}.rotters`;
declare type PiglinFrostFaction = `${PiglinFactionIDTemplate}.frost`;
declare type PiglinBlazeFaction = `${PiglinFactionIDTemplate}.blaze`;
declare type PiglinRoamingFaction = `${PiglinFactionIDTemplate}.roaming`;
declare type PiglinDbbFaction = `${PiglinFactionIDTemplate}.dbb`;
declare type PiglinWoFFaction = `${PiglinFactionIDTemplate}.wof`;

/**
 * All Piglin faction IDs as an array.
 */
declare type AllPiglinFactions = [
  PiglinHorderunnersFaction,
  PiglinUnbreakablesFaction,
  PiglinRottersFaction,
  PiglinFrostFaction,
  PiglinBlazeFaction,
];

declare type AnyPiglinMainHorde =
  | PiglinHorderunnersFaction
  | PiglinUnbreakablesFaction
  | PiglinRottersFaction
  | PiglinFrostFaction
  | PiglinBlazeFaction;

/**
 * An interface for the Piglin faction names.
 */
declare interface IPiglinFactionNames {
  horderunners: PiglinHorderunnersFaction;
  unbreakables: PiglinUnbreakablesFaction;
  rotters: PiglinRottersFaction;
  frost: PiglinFrostFaction;
  blaze: PiglinBlazeFaction;
  hordes: [
    PiglinHorderunnersFaction,
    PiglinUnbreakablesFaction,
    PiglinRottersFaction,
    PiglinFrostFaction,
    PiglinBlazeFaction,
  ];
  all: AllPiglinFactions;
}

/**
 * The simple names for Mob (Alliance) factions.
 */
declare type MobAllianceType = "creeper" | "skeleton" | "zombie";

declare type AllMobAllianceFactions = [
  MobAllianceNameCreeper,
  MobAllianceNameSkeleton,
  MobAllianceNameZombie,
];

/**
 * An interface for the Mob faction names.
 */
declare interface IMobFactionNames {
  creeper: `faction.mob.creeper`;
  skeleton: `faction.mob.skeleton`;
  zombie: `faction.mob.zombie`;
  all: AllMobAllianceFactions;
}

type MobAllianceNameCreeper = "faction.mob.creeper";
type MobAllianceNameSkeleton = "faction.mob.skeleton";
type MobAllianceNameZombie = "faction.mob.zombie";

// Interface for mob alliance names.
interface MobAllianceNames {
  creeper: MobAllianceNameCreeper;
  skeleton: MobAllianceNameSkeleton;
  zombie: MobAllianceNameZombie;
  all: [MobAllianceNameCreeper, MobAllianceNameSkeleton, MobAllianceNameZombie];
}

/**
 * The simple names for Culture factions.
 */
declare type CultureFactionName = "drylands" | "wetlands" | "curselands";

declare type CultureFactionDrylands = `faction.culture.drylands`;
declare type CultureFactionWetlands = `faction.culture.wetlands`;
declare type CultureFactionCurselands = `faction.culture.curselands`;

declare type AllCultureFactions = [
  CultureFactionCurselands,
  CultureFactionDrylands,
  CultureFactionWetlands,
];

/**
 * An interface for the Culture faction names.
 */
declare interface ICultureFactionNames {
  curselands: CultureFactionCurselands;
  drylands: CultureFactionDrylands;
  wetlands: CultureFactionWetlands;
  all: AllCultureFactions;
}

/**
 * The simple names for Player factions.
 */
declare type PlayerFactionName = "campaign" | "pvp";
type CampaignStr = "campaign";
type PvpStr = "pvp";
type PlayerStr = "player";
type WellStr = "well";
declare type PlayerFactionNameTemplate = `faction.player.`;
declare type AnyPlayerFactionName =
  `${PlayerFactionNameTemplate}${PlayerFactionName}`;
declare type PlayerFactionCampaign =
  `${PlayerFactionNameTemplate}${CampaignStr}`;
declare type PlayerFactionPVP = `${PlayerFactionNameTemplate}${PvpStr}`;
declare type PlayerFactionPlayer = `${PlayerFactionNameTemplate}${PlayerStr}`;
declare type PlayerFactionWell = `${PlayerFactionNameTemplate}${WellStr}`;

/**
 * A tuple type representing all available player factions.
 * @name AllPlayerFactions
 * @description A tuple containing both the campaign and PvP player factions.
 * @example
 * const factions: AllPlayerFactions = ["faction.player.campaign", "faction.player.pvp"];
 */
declare type AllPlayerFactions = [PlayerFactionCampaign, PlayerFactionPVP];

/**
 * An interface for the player faction names.
 * @name IPlayerFactionNames
 * @description Contains the names for campaign and PvP factions along with a tuple of all player factions.
 * @example
 * const playerFactions: IPlayerFactionNames = {
 *   campaign: "faction.player.campaign",
 *   pvp: "faction.player.pvp",
 *   all: ["faction.player.campaign", "faction.player.pvp"]
 * };
 */
declare interface IPlayerFactionNames {
  campaign: PlayerFactionCampaign;
  pvp: PlayerFactionPVP;
  all: AllPlayerFactions;
}

// Host Faction Names
declare type HostNameAction = "action";
declare type HostNameForesight = "foresight";
declare type HostNameKnowledge = "knowledge";

declare type AnyHostName =
  | HostNameAction
  | HostNameForesight
  | HostNameKnowledge;

declare type HostFactionTemplate<nameOfHost extends AnyHostName> =
  `faction.host.${nameOfHost}`;

declare type HostFactionAction = HostFactionTemplate<HostNameAction>;
declare type HostFactionForesight = HostFactionTemplate<HostNameForesight>;
declare type HostFactionKnowledge = HostFactionTemplate<HostNameKnowledge>;

declare type AnyHostFaction =
  | HostFactionAction
  | HostFactionForesight
  | HostFactionKnowledge;

declare type AllHostFactions = [
  HostFactionAction,
  HostFactionForesight,
  HostFactionKnowledge,
];

/**
 * An interface for the host faction names.
 * @name IHostFactionNames
 * @description Contains the fully qualified names for each host faction.
 * @example
 * const hostFactions: IHostFactionNames = {
 *   action: "faction.host.action",
 *   foresight: "faction.host.foresight",
 *   knowledge: "faction.host.knowledge"
 * };
 */
declare interface IHostFactionNames {
  action: HostFactionAction;
  foresight: HostFactionForesight;
  knowledge: HostFactionKnowledge;
  all: [HostFactionAction, HostFactionForesight, HostFactionKnowledge];
}

declare type RuinedEndPortalName = "ruined_portal";
declare type AnyEndName = RuinedEndPortalName;
declare type EndFactionTemplate<T extends AnyEndName> = `faction.end.${T}`;
declare type RuinedEndPortalFaction = EndFactionTemplate<RuinedEndPortalName>;
declare type AnyEndFaction = RuinedEndPortalFaction;
declare type AllEndFactions = [RuinedEndPortalFaction];
declare interface IEndFactionNames {
  ruinedPortal: RuinedEndPortalFaction;
  all: AllEndFactions;
}

declare type UndeadNameSkeleton = "skeleton";
declare type UndeadNameZombie = "zombie";
declare type AnyUndeadName = UndeadNameSkeleton | UndeadNameZombie;
declare type UndeadFactionTemplate<T extends AnyUndeadName> =
  `faction.undead.${T}`;
declare type UndeadFactionNameSkeleton =
  UndeadFactionTemplate<UndeadNameSkeleton>;
declare type UndeadFactionNameZombie = UndeadFactionTemplate<UndeadNameZombie>;
declare type AnyUndeadFaction =
  | UndeadFactionNameSkeleton
  | UndeadFactionNameZombie;
declare type AllUndeadFactions = [
  UndeadFactionNameSkeleton,
  UndeadFactionNameZombie,
];
declare interface IUndeadFactionNames {
  skeleton: UndeadFactionNameSkeleton;
  zombie: UndeadFactionNameZombie;
  all: AllUndeadFactions;
}

declare type AnyCultureFaction = `faction.culture.${CultureFactionName}`;
declare type AnyMobAllianceFaction = `faction.mob.${MobAllianceType}`;
declare type AnyPiglinFaction = `faction.piglin.${PiglinFactionName}`;
declare type AnyPlayerFaction = `faction.player.${PlayerFactionName}`;
declare type FactionNameId =
  | AnyMobAllianceFaction
  | AnyCultureFaction
  | AnyPiglinFaction
  | AnyPlayerFaction
  | AnyEndFaction
  | AnyHostFaction
  | AnyUndeadFaction;

type FactionNameArray = FactionNameId[];
declare type FactionAll = [
  ...AllCultureFactions,
  ...AllEndFactions,
  ...AllPiglinFactions,
  ...AllPlayerFactions,
  ...AllHostFactions,
  ...AllUndeadFactions,
];

declare type FactionAllNoPlayer = [
  ...AllCultureFactions,
  ...AllEndFactions,
  ...AllPiglinFactions,
  ...AllHostFactions,
  ...AllUndeadFactions,
];

type FactionMapping = {
  culture: AllCultureFactionNames;
  end: AllEndFactionNames;
  piglin: AllPiglinFactionNames;
  host: AllHostFactionNames;
  undead: AllUndeadFactionNames;
};
