/**
 * Player-specific variable tracking identifiers.
 * @readonly
 * @remarks
 * teleportedAtInit: Tracks players teleported during campaign initialization.
 * Used for persistence and post-teleportation behavior management.
 */
export const PLAYER_VARIABLE = {
  // Used in SNIPPET.INIT_TELEPORT to track what players were present at campaign world initialization(and thus were teleported to the ruined end portal)
  // We could maybe use this later for some sort of effect or something.
  teleportedAtInit: "was_teleported_at_campaign_init",
};
