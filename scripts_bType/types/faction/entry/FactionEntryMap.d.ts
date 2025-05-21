/**
 * Mapping of faction categories to their respective entry configurations.
 * Serves as a registry for all possible faction entry types.
 */
type FactionEntryMap = {
  piglin: PiglinHordeEntry;
  undead: UndeadFactionEntry;
  culture: CultureFactionEntry;
  end: EndFactionEntry;
  host: HostFactionEntry;
};
