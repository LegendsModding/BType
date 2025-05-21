/**
 * Configuration for End faction entries that defines progression triggers and faction pool.
 * Used to control when and how End factions enter the game.
 */
interface EndFactionEntry extends FactionEntryBase {
  /**
   * Discriminant for faction type identification.
   */
  type: "end";

  /**
   * Pool of possible End factions that can be selected during entry.
   * type {AnyEndFaction[]}
   */
  factionPool: AnyEndFaction[];

  /**
   * Triggers for the pre-game preparation phase.
   * Maps trigger times to specific trigger configurations.
   */
  pregame: FactionPregame;

  /**
   * Triggers for the first base establishment phase.
   * Maps trigger times to specific trigger configurations.
   */
  firstBase: FactionFirstBase;
}
