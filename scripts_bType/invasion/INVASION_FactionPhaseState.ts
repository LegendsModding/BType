/**
 * Registry tracking current progression phase for all registered factions.
 * @readonly
 * @remarks
 * Initializes all faction phases to 0. Updated through invasion event resolutions.
 * Contains entries for piglin hordes (horderunners/unbreakables/rotters), cultural factions,
 * undead factions, player factions, and special entities like ruined portals.
 * Used for coordinating multi-faction invasion cadence and objective unlocking.
 */
export const INVASION_FactionPhaseState: Record<FactionNameId, number> = {
  "faction.mob.creeper": 0,
  "faction.mob.skeleton": 0,
  "faction.mob.zombie": 0,
  "faction.culture.drylands": 0,
  "faction.culture.wetlands": 0,
  "faction.culture.curselands": 0,
  "faction.piglin.horderunners": 0,
  "faction.piglin.unbreakables": 0,
  "faction.piglin.rotters": 0,
  "faction.piglin.frost": 0,
  "faction.piglin.blaze": 0,
  "faction.player.campaign": 0,
  "faction.player.pvp": 0,
  "faction.end.ruined_portal": 0,
  "faction.host.action": 0,
  "faction.host.foresight": 0,
  "faction.host.knowledge": 0,
  "faction.undead.skeleton": 0,
  "faction.undead.zombie": 0,
};
