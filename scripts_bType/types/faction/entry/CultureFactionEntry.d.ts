/**
 * Configuration for Culture faction entries that defines progression triggers and faction pool.
 * Used to control when and how Culture factions enter the game.
 */
interface CultureFactionEntry extends FactionEntryBase {
  /**
   * Discriminant for faction type identification.
   */
  type: "culture";

  /**
   * Pool of possible Culture factions that can be selected during entry.
   * type {AnyCultureFaction[]}
   */
  factionPool: AnyCultureFaction[];

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
