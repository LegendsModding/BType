/**
 * Configuration for Host faction entries that defines progression triggers and faction pool.
 * Used to control when and how Host factions enter the game.
 */
interface HostFactionEntry extends FactionEntryBase {
  /**
   * Discriminant for faction type identification.
   */
  type: "host";

  /**
   * Pool of possible Host factions that can be selected during entry.
   * type {AnyHostFaction[]}
   */
  factionPool: AnyHostFaction[];

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
