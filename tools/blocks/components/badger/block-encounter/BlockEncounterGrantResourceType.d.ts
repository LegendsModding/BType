/**
 * Represents the resource granted during an encounter with a block in Minecraft Legends.
 *
 * This type specifies the resource identifier for rewards or unlocks during block interactions. It allows
 * developers to define specific resources for block encounters.
 *
 * type {"unlock_journal_hazard_geyser" | "unlock_journal_hazard_redthorn" | "unlock_journal_hazard_mud_pit" | string} BlockEncounterGrantResourceType
 * @category Block Configuration
 * @example
 * const grantResource: BlockEncounterGrantResourceType = "unlock_journal_hazard_geyser";
 * @remarks
 * Properly configuring this setting ensures that resources are granted correctly during encounters.
 * Misconfigured values may lead to missing rewards or functionality issues.
 */
declare type BlockEncounterGrantResourceType =
  | "unlock_journal_hazard_geyser"
  | "unlock_journal_hazard_redthorn"
  | "unlock_journal_hazard_mud_pit"
  | string; // can be any "resource"
