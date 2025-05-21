/**
 * Represents a faction action with associated quantity.
 * Used for defining AI behavior priorities and frequencies.
 */
type FactionActionAmount = {
  /**
   * Faction action identifier.
   * @see FACTION_ACTION_* constants
   */
  action: string;

  /**
   * Execution frequency or quantity.
   * Controls how often the action occurs per evaluation cycle.
   */
  amount: number;
};
