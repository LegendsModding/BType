import { FACTION_GetShortNameAndType } from "./FACTION_GetShortNameAndType.ts";

/**
 * Factory function creating a faction-agnostic entry management interface.
 * @param gvName Base name for global variables.
 * @param allowedValues Array of valid faction names for entry tracking.
 * @returns {IFactionEntry} Interface object for managing faction entry/order state.
 * @remarks Replaces legacy StaggeredOrderedCollection implementations. Provides methods for tracking faction arrival order and entry status.
 */
export const FACTION_Entry = (
  gvName: GlobalVariableName,
  allowedValues: FactionNameArray,
): IFactionEntry => {
  return {
    /**
     * Generates global variable name for faction entry status tracking.
     * @param factionName Target faction identifier.
     * @returns {string} Namespaced global variable identifier.
     * @remarks Format: "{gvName}_{factionType}_{factionShortName}". Uses FACTION_GetShortNameAndType for name decomposition.
     */
    gvEntered: function (factionName: FactionNameId): string {
      // TODO: Apply this same logic to:

      /** @see FACTION_Establishment */
      const nameAndType = FACTION_GetShortNameAndType(factionName);
      return `${gvName}_${nameAndType?.factionType}_${nameAndType?.factionShortName}`;
    },

    /**
     * Generates global variable name for order tracking.
     * @param orderNum Order index in sequence.
     * @returns {string} Namespaced global variable identifier.
     * @remarks Format: "{gvName}_order_{orderNum}". Used for storing faction arrival order indices.
     */
    gvOrder: function (orderNum: number): string {
      return `${gvName}_order_${orderNum}`;
    },

    /**
     * Generates identifier for randomization groups.
     * @returns {string} Namespaced randomization group name.
     * @remarks Format: "{gvName}_random_group". Used for consistent randomization contexts.
     */
    randomGroup: function (): string {
      return `${gvName}_random_group`;
    },

    /**
     * Retrieves stored order value from global variables.
     * @param orderNum Target order index.
     * @returns {number} Stored faction index or -1 if unset.
     * @remarks Initializes unset variables to -1 automatically. Value corresponds to faction position in allowedValues array.
     */
    GetOrderValue: function (orderNum: number): number {
      const globalVar = this.gvOrder(orderNum);
      if (!QUERY_IsGlobalVariableSet(globalVar)) {
        OUTPUT_SetGlobalVariable(globalVar, -1);
      }
      return QUERY_GetGlobalVariable(globalVar);
    },

    /**
     * Stores faction arrival order in global variables.
     * @param orderNum Target order index.
     * @param factionName Faction identifier to record.
     * @remarks Persists faction arrival sequence data. Uses array index from allowedValues for storage efficiency.
     */
    SetOrderValue: function (
      orderNum: number,
      factionName: FactionNameId,
    ): void {
      const globalVar = this.gvOrder(orderNum);
      OUTPUT_SetGlobalVariable(globalVar, allowedValues.indexOf(factionName));
    },

    /**
     * Registers faction in arrival order sequence.
     * @param faction Target faction identifier.
     * @remarks Finds first available order slot and records faction's arrival. No-op if all slots are occupied.
     */
    AddNextInOrder: function (faction: FactionNameId): void {
      for (let i = 0; i < allowedValues.length; i++) {
        if (this.GetOrderValue(i) === -1) {
          this.SetOrderValue(i, faction);
          return;
        }
      }
    },

    /**
     * Retrieves faction by arrival order index.
     * @param orderNum Arrival sequence index.
     * @returns {FactionNameId | null} Faction identifier or null if invalid index.
     * @remarks Returns null for out-of-bounds indices or unset order slots. Value corresponds to allowedValues array entries.
     */
    GetByArrivedOrder: function (orderNum: number): FactionNameId | null {
      if (orderNum < 0 || orderNum >= allowedValues.length) {
        return null;
      }
      const unitIndex = this.GetOrderValue(orderNum);
      if (unitIndex === -1) {
        return null;
      }
      return allowedValues[unitIndex];
    },

    /**
     * Retrieves arrival order index by faction name.
     * @param faction Target faction identifier.
     * @returns {number} Order index or -1 if not found.
     * @remarks Scans all order slots to find matching faction. Returns -1 if faction is unregistered.
     */
    GetOrderByName: function (faction: FactionNameId): number {
      const unitIndex = allowedValues.indexOf(faction);
      for (let i = 0; i < allowedValues.length; i++) {
        if (this.GetOrderValue(i) === unitIndex) {
          return i;
        }
      }
      return -1;
    },

    /**
     * Checks faction entry status in global variables.
     * @param factionName Target faction identifier.
     * @returns {boolean} True if faction has been marked as entered.
     * @remarks Uses binary state (0/1) for entry tracking. Automatically initializes unset variables.
     */
    IsEntered: function (factionName: FactionNameId): boolean {
      return QUERY_GetGlobalVariable(this.gvEntered(factionName)) === 1;
    },

    /**
     * Updates faction entry status and arrival order.
     * @param factionName Target faction identifier.
     * @param entered Activation flag for entry status.
     * @remarks Maintains both entry state and arrival sequence. Automatically registers faction in order when entering.
     */
    SetEntered: function (factionName: FactionNameId, entered: boolean): void {
      OUTPUT_SetGlobalVariable(this.gvEntered(factionName), entered ? 1 : 0);
      if (entered) {
        this.AddNextInOrder(factionName);
      }
    },

    /**
     * Retrieves random faction from specified entry state group.
     * @param entries Collection of factions to evaluate.
     * @param entered Target entry status (true for entered factions, false for pending).
     * @returns {FactionNameId | null} Random faction matching criteria or null.
     * @remarks Uses QUERY_RandomNumberGroup for deterministic randomization. Returns null when no factions match criteria.
     */
    GetRandomEntry: function (
      entries: FactionNameId[],
      entered: boolean,
    ): FactionNameId | null {
      const resultEntries: FactionNameId[] = [];
      for (const entry of entries) {
        if (this.IsEntered(entry) === entered) {
          resultEntries.push(entry);
        }
      }
      if (resultEntries.length === 0) {
        return null;
      }
      const index = QUERY_RandomNumberGroup(
        0,
        resultEntries.length - 1,
        this.randomGroup(),
      );
      return resultEntries[index];
    },

    /**
     * Validates faction inclusion in allowed entries.
     * @param faction Target faction identifier.
     * @returns {boolean} True if faction is in allowedValues list.
     * @remarks Enforces faction whitelist defined during interface creation.
     */
    IsAllowed: function (faction: FactionNameId): boolean {
      return allowedValues.indexOf(faction) !== -1;
    },
  };
};
