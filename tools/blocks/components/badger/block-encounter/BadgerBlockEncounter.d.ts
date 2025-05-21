/**
 * Represents the resources granted during an encounter with a block in Minecraft Legends.
 *
 * This interface specifies the resource granted when interacting with the block. It allows developers
 * to define rewards or unlocks for specific block interactions.
 * @interface BadgerBlockEncounter
 * @category Block Configuration
 * @property {BlockEncounterGrantResourceType} [grantResource] - The resource granted during the encounter. Must follow the namespace format (e.g., "example:unlock_journal_hazard_geyser").
 * @example
 * const blockEncounter: BadgerBlockEncounter = {
 *   grantResource: "unlock_journal_hazard_geyser"
 * };
 * @remarks
 * Properly configuring this setting ensures that resources are granted correctly during encounters.
 * Misconfigured values may lead to broken functionality or missing rewards.
 */
interface BadgerBlockEncounter {
  grantResource?: BlockEncounterGrantResourceType;
}
