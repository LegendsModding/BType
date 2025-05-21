/**
 * =============================================================================
 * Faction Build Actions - Camps
 * =============================================================================
 */

/**
 * type {Object} FactionActionBuildCamp
 * @property {string} default - A basic camp used for general purposes.
 * @property {string} trade - A camp that facilitates trading and market functions.
 * @property {string} siege - A camp specialized for siege operations.
 * @property {string} war - A camp geared toward direct combat or warlike operations.
 * @property {string} scout - A lightweight camp for reconnaissance missions.
 * @property {string} resource - A camp focused on resource gathering (e.g., hunting, mining).
 * @property {string} expedition - A camp used for long-range expeditions or advanced forays.
 * @property {string} rally - A camp serving as a temporary regrouping or command point.
 */
declare type FactionActionBuildCamp = {
  default: string;
  trade: string;
  siege: string;
  war: string;
  scout: string;
  resource: string;
  expedition: string;
  rally: string;
};

/**
 * =============================================================================
 * Faction Build Actions - Outposts
 * =============================================================================
 */

/**
 * type {Object} FactionActionBuildOutpost
 * @property {string} default - A standard outpost serving as a small forward base.
 * @property {string} defensive - An outpost with a focus on defensive features.
 * @property {string} offensive - An outpost designed to project offensive power.
 * @property {string} alliance - An outpost built cooperatively with allied factions.
 * @property {string} trade - An outpost that incorporates trade facilities.
 * @property {string} surveillance - An outpost equipped for observation and intelligence.
 * @property {string} border - An outpost positioned at territorial frontiers.
 * @property {string} command - An outpost that functions as a local command center.
 */
declare type FactionActionBuildOutpost = {
  default: string;
  defensive: string;
  offensive: string;
  alliance: string;
  trade: string;
  surveillance: string;
  border: string;
  command: string;
};

/**
 * =============================================================================
 * Faction Build Actions - Military Bases (Reworked “Base”)
 * =============================================================================
 *
 * We now have three distinct military base types:
 *   • Fortress – a heavily fortified military stronghold.
 *   • Citadel  – a central command center with administrative functions.
 *   • Bastion  – a forward-positioned stronghold for rapid defense or ambush.
 */

/**
 * type {Object} FactionActionBuildFortress
 * @property {string} default - The standard fortress design.
 * @property {string} defensive - Fortress optimized for static defense.
 * @property {string} expanded - A larger, sprawling fortress.
 * @property {string} high_ground - A fortress built on elevated terrain.
 * @property {string} alliance - A fortress built in partnership with an allied faction.
 * @property {string} trade - A fortress that includes trade facilities.
 * @property {string} siege - A fortress designed to support siege operations.
 * @property {string} resilient - A fortress emphasizing durability and recovery.
 */
declare type FactionActionBuildFortress = {
  default: string;
  defensive: string;
  expanded: string;
  high_ground: string;
  alliance: string;
  trade: string;
  siege: string;
  resilient: string;
};

/**
 * type {Object} FactionActionBuildCitadel
 * @property {string} default - The standard citadel design.
 * @property {string} command - A citadel emphasizing command and control.
 * @property {string} secure - A citadel with enhanced security features.
 * @property {string} elevated - A citadel built at an elevated position.
 * @property {string} alliance - A citadel constructed with allied collaboration.
 * @property {string} trade - A citadel that incorporates trading elements.
 * @property {string} reserve - A citadel with additional reserve capacity.
 * @property {string} rapid - A citadel designed for quick mobilization.
 */
declare type FactionActionBuildCitadel = {
  default: string;
  command: string;
  secure: string;
  elevated: string;
  alliance: string;
  trade: string;
  reserve: string;
  rapid: string;
};

/**
 * type {Object} FactionActionBuildBastion
 * @property {string} default - The standard bastion design.
 * @property {string} fortified - A bastion with extra fortification.
 * @property {string} forward - A bastion built at the forefront of conflict.
 * @property {string} outlying - A bastion positioned at the periphery.
 * @property {string} alliance - A bastion constructed with allied input.
 * @property {string} trade - A bastion that integrates trade facilities.
 * @property {string} siege - A bastion tailored for siege operations.
 * @property {string} ambush - A bastion designed to support ambush tactics.
 */
declare type FactionActionBuildBastion = {
  default: string;
  fortified: string;
  forward: string;
  outlying: string;
  alliance: string;
  trade: string;
  siege: string;
  ambush: string;
};

/**
 * =============================================================================
 * Faction Build Actions - Villages
 * =============================================================================
 *
 * Villages now represent civilian settlements with different social or economic focuses.
 */

/**
 * type {Object} FactionActionBuildVillage
 * @property {string} default - A generic village layout.
 * @property {string} agrarian - A village focused on agriculture and farming.
 * @property {string} trading - A village built around market and trade activities.
 * @property {string} artisan - A village known for craft and artisan work.
 * @property {string} mining - A village centered on mining and resource extraction.
 * @property {string} religious - A village with religious or spiritual significance.
 * @property {string} frontier - A village established at the edge of settled territory.
 * @property {string} cultural - A village that acts as a cultural or artistic hub.
 */
declare type FactionActionBuildVillage = {
  default: string;
  agrarian: string;
  trading: string;
  artisan: string;
  mining: string;
  religious: string;
  frontier: string;
  cultural: string;
};

/**
 * =============================================================================
 * Faction Build Actions - Structures
 * =============================================================================
 *
 * Structures are subdivided into eight distinct categories. Each category
 * defines six different build types. These cover a comprehensive range of
 * construction options (resource, defensive, military, civic, religious, cultural,
 * infrastructure, and commercial).
 */

/* --- Structure: Resources --- */

/**
 * type {Object} FactionActionBuildStructureResources
 * @property {string} default - A generic resource structure.
 * @property {string} farm - A farm for agricultural production.
 * @property {string} mine - A mining operation.
 * @property {string} lumber - A lumber processing facility.
 * @property {string} quarry - A quarry for stone extraction.
 * @property {string} water - A water management or irrigation system.
 */
declare type FactionActionBuildStructureResources = {
  default: string;
  farm: string;
  mine: string;
  lumber: string;
  quarry: string;
  water: string;
};

/* --- Structure: Defensive --- */

/**
 * type {Object} FactionActionBuildStructureDefensive
 * @property {string} default - A basic defensive structure.
 * @property {string} wall - A wall or barrier.
 * @property {string} tower - A defensive tower.
 * @property {string} gate - A fortified gate.
 * @property {string} barricade - A temporary or reinforced barricade.
 * @property {string} moat - A defensive water barrier.
 */
declare type FactionActionBuildStructureDefensive = {
  default: string;
  wall: string;
  tower: string;
  gate: string;
  barricade: string;
  moat: string;
};

/* --- Structure: Military --- */

/**
 * type {Object} FactionActionBuildStructureMilitary
 * @property {string} default - A generic military structure.
 * @property {string} barracks - A barracks for troop housing.
 * @property {string} armory - An armory for storing weapons.
 * @property {string} training - A training facility.
 * @property {string} command - A military command center.
 * @property {string} parade - A structure for military displays.
 */
declare type FactionActionBuildStructureMilitary = {
  default: string;
  barracks: string;
  armory: string;
  training: string;
  command: string;
  parade: string;
};

/* --- Structure: Civic --- */

/**
 * type {Object} FactionActionBuildStructureCivic
 * @property {string} default - A basic civic structure.
 * @property {string} town_center - A town center.
 * @property {string} council - A council hall.
 * @property {string} hall - A public hall.
 * @property {string} library - A library.
 * @property {string} archive - An archive or record center.
 */
declare type FactionActionBuildStructureCivic = {
  default: string;
  town_center: string;
  council: string;
  hall: string;
  library: string;
  archive: string;
};

/* --- Structure: Religious --- */

/**
 * type {Object} FactionActionBuildStructureReligious
 * @property {string} default - A generic religious structure.
 * @property {string} temple - A temple.
 * @property {string} shrine - A shrine.
 * @property {string} monastery - A monastery.
 * @property {string} chapel - A chapel.
 * @property {string} cathedral - A large cathedral.
 */
declare type FactionActionBuildStructureReligious = {
  default: string;
  temple: string;
  shrine: string;
  monastery: string;
  chapel: string;
  cathedral: string;
};

/* --- Structure: Cultural --- */

/**
 * type {Object} FactionActionBuildStructureCultural
 * @property {string} default - A basic cultural structure.
 * @property {string} monument - A monument.
 * @property {string} statue - A statue.
 * @property {string} arena - An arena.
 * @property {string} museum - A museum.
 * @property {string} festival - A venue for festivals.
 */
declare type FactionActionBuildStructureCultural = {
  default: string;
  monument: string;
  statue: string;
  arena: string;
  museum: string;
  festival: string;
};

/* --- Structure: Infrastructure --- */

/**
 * type {Object} FactionActionBuildStructureInfrastructure
 * @property {string} default - A generic infrastructure structure.
 * @property {string} road - A road.
 * @property {string} bridge - A bridge.
 * @property {string} aqueduct - An aqueduct.
 * @property {string} gate - A fortified gate.
 * @property {string} tunnel - A tunnel.
 */
declare type FactionActionBuildStructureInfrastructure = {
  default: string;
  road: string;
  bridge: string;
  aqueduct: string;
  gate: string;
  tunnel: string;
};

/* --- Structure: Commercial --- */

/**
 * type {Object} FactionActionBuildStructureCommercial
 * @property {string} default - A basic commercial structure.
 * @property {string} market - A market.
 * @property {string} bazaar - A bazaar.
 * @property {string} trade_post - A trade post.
 * @property {string} merchant - A merchant house or facility.
 * @property {string} exchange - A trading exchange.
 */
declare type FactionActionBuildStructureCommercial = {
  default: string;
  market: string;
  bazaar: string;
  trade_post: string;
  merchant: string;
  exchange: string;
};

/**
 * type {Object} FactionActionBuildStructure
 * @description Aggregates all structure build action sub-categories.
 */
declare type FactionActionBuildStructure = {
  resources: FactionActionBuildStructureResources;
  defensive: FactionActionBuildStructureDefensive;
  military: FactionActionBuildStructureMilitary;
  civic: FactionActionBuildStructureCivic;
  religious: FactionActionBuildStructureReligious;
  cultural: FactionActionBuildStructureCultural;
  commercial: FactionActionBuildStructureCommercial;
};

/**
 * =============================================================================
 * Faction Build Actions - Additional Categories
 * =============================================================================
 *
 * Some more :)
 */

/* --- Wonder --- */

/**
 * type {Object} FactionActionBuildWonder
 * @property {string} default - A generic wonder build action.
 * @property {string} monumental - A truly monumental construction.
 * @property {string} astronomical - A build that reaches for the stars.
 * @property {string} historic - A construction with historical significance.
 * @property {string} visionary - A futuristic, visionary build.
 * @property {string} epic - An epic, awe-inspiring structure.
 */
declare type FactionActionBuildWonder = {
  default: string;
  monumental: string;
  astronomical: string;
  historic: string;
  visionary: string;
  epic: string;
};

/* --- Communication --- */

/**
 * type {Object} FactionActionBuildCommunication
 * @property {string} default - A basic communication structure.
 * @property {string} beacon - A beacon for long-distance signaling.
 * @property {string} signal_fire - A signal fire for emergency communication.
 * @property {string} relay - A relay station for message transmission.
 * @property {string} tower - A dedicated communication tower.
 * @property {string} network - A network hub for integrated signals.
 */
declare type FactionActionBuildCommunication = {
  default: string;
  beacon: string;
  signal_fire: string;
  relay: string;
  tower: string;
  network: string;
};

/* --- Trap --- */

/**
 * type {Object} FactionActionBuildTrap
 * @property {string} default - A generic trap build action.
 * @property {string} pitfall - A pitfall trap.
 * @property {string} spike - A spike trap.
 * @property {string} net - A net trap for capturing enemies.
 * @property {string} freeze - An ice trap for freezing and slowing down enemies.
 * @property {string} explosive - An explosive trap.
 * @property {string} ambush - A trap designed for ambush scenarios.
 */
declare type FactionActionBuildTrap = {
  default: string;
  pitfall: string;
  spike: string;
  net: string;
  freeze: string;
  explosive: string;
  ambush: string;
};

/* --- Agriculture --- */

/**
 * type {Object} FactionActionBuildAgriculture
 * @property {string} default - A generic agricultural development.
 * @property {string} field - An open field for crop cultivation.
 * @property {string} orchard - An orchard for fruit production.
 * @property {string} vineyard - A vineyard for wine production.
 * @property {string} pasture - A pasture for livestock.
 * @property {string} greenhouse - A controlled environment for advanced farming.
 */
declare type FactionActionBuildAgriculture = {
  default: string;
  field: string;
  orchard: string;
  vineyard: string;
  pasture: string;
  greenhouse: string;
};

/* --- Research --- */

/**
 * type {Object} FactionActionBuildResearch
 * @property {string} default - A generic research facility.
 * @property {string} laboratory - A laboratory for scientific experiments.
 * @property {string} library - A research library.
 * @property {string} observatory - An observatory for astronomical research.
 * @property {string} academy - An academic institution.
 * @property {string} archive - A knowledge archive.
 */
declare type FactionActionBuildResearch = {
  default: string;
  laboratory: string;
  library: string;
  observatory: string;
  academy: string;
  archive: string;
};

/**
 * =============================================================================
 * Top-Level Faction Build Actions
 * =============================================================================
 *
 * This aggregated type includes all categories:
 *   - Camp, Outpost, Fortress, Citadel, Bastion, Village, Structure,
 *     Wonder, Communication, Trap, Agriculture, and Research.
 */

/**
 * type {Object} FactionActionBuild
 * @property {FactionActionBuildCamp} camp - Build actions for small, tactical camps.
 * @property {FactionActionBuildOutpost} outpost - Build actions for larger forward outposts.
 * @property {FactionActionBuildFortress} fortress - Build actions for heavily fortified fortresses.
 * @property {FactionActionBuildCitadel} citadel - Build actions for centralized citadels.
 * @property {FactionActionBuildBastion} bastion - Build actions for forward-positioned bastions.
 * @property {FactionActionBuildVillage} village - Build actions for civilian settlements.
 * @property {FactionActionBuildStructure} structure - Build actions for a wide range of constructed structures.
 * @property {FactionActionBuildWonder} wonder - Build actions for epic, monumental wonders.
 * @property {FactionActionBuildCommunication} communication - Build actions for communication installations.
 * @property {FactionActionBuildTrap} trap - Build actions for defensive and ambush traps.
 * @property {FactionActionBuildAgriculture} agriculture - Build actions for agricultural developments.
 * @property {FactionActionBuildResearch} research - Build actions for research and knowledge facilities.
 */
declare type FactionActionBuild = {
  camp: FactionActionBuildCamp;
  outpost: FactionActionBuildOutpost;
  fortress: FactionActionBuildFortress;
  citadel: FactionActionBuildCitadel;
  bastion: FactionActionBuildBastion;
  village: FactionActionBuildVillage;
  structure: FactionActionBuildStructure;
  wonder: FactionActionBuildWonder;
  communication: FactionActionBuildCommunication;
  trap: FactionActionBuildTrap;
  agriculture: FactionActionBuildAgriculture;
};
