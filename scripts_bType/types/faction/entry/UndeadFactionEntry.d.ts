/**
 * Configuration for Undead faction entries that defines progression triggers and faction pool.
 * Used to control when and how Undead factions enter the game.
 */
interface UndeadFactionEntry extends FactionEntryBase {
  /**
   * Discriminant for faction type identification.
   */
  type: "undead";

  /**
   * Pool of possible Undead factions that can be selected during entry.
   * type {AnyUndeadFaction[]}
   */
  factionPool: AnyUndeadFaction[];

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
