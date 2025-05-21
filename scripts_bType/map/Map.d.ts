/**
 * Type mapping faction categories to their respective faction name unions.
 * typeParam FactionCategoryToFactionNames
 * @remarks
 * Structure includes:
 * - culture: Cultural faction identifiers (e.g., faction.culture.drylands)
 * - end: Endgame faction identifiers (e.g., faction.end.dragon)
 * - piglin: Piglin horde identifiers
 * - host: Host faction identifiers
 * - undead: Undead faction identifiers
 */
type FactionCategoryToFactionNames = {
  culture: AnyCultureFaction; // Union of strings like "faction.culture.drylands"
  end: AnyEndFaction; // Union of strings like "faction.end.dragon"
  piglin: AnyPiglinMainHorde;
  host: AnyHostFaction;
  undead: AnyUndeadFaction;
};

/**
 * Type defining arrival key mappings for faction categories.
 * typeParam MAP_ArrivalKeysType
 * @remarks
 * Structure maps each faction category to its respective arrival key records:
 * - culture: Cultural faction arrival keys
 * - end: End faction arrival keys
 * - piglin: Piglin horde arrival keys
 * - host: Host faction arrival keys
 * - undead: Undead faction arrival keys
 */
type MAP_ArrivalKeysType = {
  [Category in keyof FactionCategoryToFactionNames]: Record<
    FactionCategoryToFactionNames[Category], // Union of strings (valid keys)
    string
  >;
};
