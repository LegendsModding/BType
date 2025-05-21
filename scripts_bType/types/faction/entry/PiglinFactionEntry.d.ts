/**
 * Configuration for Piglin faction entries that defines progression triggers and faction pool.
 * Used to control when and how Piglin factions enter the game.
 */
interface PiglinFactionEntry extends FactionEntryBase {
  /**
   * Discriminant for faction type identification.
   */
  type: "piglin";

  /**
   * Pool of possible Piglin factions that can be selected during entry.
   * type {AnyPiglinMainHorde[]}
   */
  factionPool: AnyPiglinMainHorde[];

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
