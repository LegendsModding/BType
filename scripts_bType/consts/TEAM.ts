/**
 * Team name identifiers for faction association systems.
 * @readonly
 * @remarks
 * Contains mappings for player teams, wild entities, and mob alliances. Used in ownership tracking and conflict resolution systems.
 */
export const TEAM: TeamNames = {
  wild: "wild_team" as TeamNameWild,
  blue: "team_two" as TeamNameBlue,
  red: "team_one" as TeamNameRed,
  orange: "piglin_team" as TeamNameOrange,
  mobAlliance: "mob_alliance" as TeamNameMob,
  none: "" as TeamNameEmpty,
};
