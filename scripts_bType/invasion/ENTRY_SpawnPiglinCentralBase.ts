import { VILLAGE_PlacePiglin } from "scripts_bType/placement/VILLAGE_PlacePiglin.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { ENTRY_PiglinVillagesSetup } from "./ENTRY_PiglinVillagesSetup.ts";
import { FACTION_Establishment } from "./FACTION_Establishment.ts";

/**
 *
 * @param faction
 */
export const ENTRY_SpawnPiglinCentralBase = (
  faction: AnyPiglinMainHorde,
): void => {
  const config: IHordeBasesSetupConfig = ENTRY_PiglinVillagesSetup[faction];
  if (
    !VILLAGE_PlacePiglin(faction, config.centralBase.size as VillageSizeKey)
  ) {
    FORESIGHT.error(`Failed to place initial base for ${faction} - aborting.`);
    return;
  }
  const bases = FILTER_ByVillageSize(
    FILTER_ByFactionName(QUERY_GetAllAliveVillages(), [faction]),
    [config.centralBase.size],
  );
  const centralBaseId: number = QUERY_GetVillageIDFromEntity(
    bases as SingleEntity,
  );
  FACTION_Establishment.SetCentralBaseID(faction, centralBaseId);
};
