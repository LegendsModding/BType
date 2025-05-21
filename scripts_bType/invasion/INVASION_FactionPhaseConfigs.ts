/**
 * Registry of phase-based progression configurations for faction invasion systems.
 * @readonly
 * @remarks
 * Contains phase triggers and actions for multiple factions including mob alliances (creeper/skeleton/zombie),
 * cultural factions (drylands/wetlands/curselands), piglin hordes (horderunners/unbreakables/rotters/frost/blaze),
 * and player factions (campaign/pvp).
 * Phase 1 configurations contain placeholder trigger conditions (always true) and unimplemented action handlers.
 * Mob factions creeper and skeleton include phase 2 templates requiring implementation.
 * End faction and host factions currently have empty configurations.
 * Uses InvasionPhaseConfig interface for structure consistency across factions.
 */
export const INVASION_FactionPhaseConfigs: Record<
  FactionNameId,
  InvasionPhaseConfig
> = {
  "faction.mob.creeper": {
    1: {
      triggers: {
        trigger1: {
          /**
           * @returns boolean
           */
          eval: () => true,
        }, // Sample trigger, define your condition here
      },
      actions: [
        {
          /**
           *
           * @param _faction
           * @param _phase
           */
          action: (_faction: FactionNameId, _phase: number): void => {
            /* Handle Phase 1 for creeper */
          },
        },
      ],
    },
    2: {
      triggers: {
        trigger2: {
          /**
           * @returns {boolean}
           */
          eval: () => true,
        },
      },
      actions: [
        {
          /**
           *
           * @param _faction
           * @param _phase
           */
          action: (_faction: FactionNameId, _phase: number): void => {
            /* Handle Phase 2 for creeper */
          },
        },
      ],
    },
  },
  "faction.mob.skeleton": {
    1: {
      triggers: {
        trigger1: {
          /**
           * @returns {boolean}
           */
          eval: () => true,
        },
      },
      actions: [
        {
          /**
           *
           * @param _faction
           * @param _phase
           */
          action: (_faction: FactionNameId, _phase: number): void => {
            /* Handle Phase 1 for skeleton */
          },
        },
      ],
    },
    // Add additional phases and actions here for skeleton
  },
  "faction.mob.zombie": {
    1: {
      triggers: {
        trigger1: {
          /**
           * @returns {boolean}
           */
          eval: () => true,
        },
      },
      actions: [
        {
          /**
           *
           * @param _faction
           * @param _phase
           */
          action: (_faction: FactionNameId, _phase: number): void => {
            /* Handle Phase 1 for zombie */
          },
        },
      ],
    },
    // Add additional phases and actions here for zombie
  },
  "faction.culture.drylands": {
    1: {
      triggers: {
        trigger1: {
          /**
           * @returns {boolean}
           */
          eval: () => true,
        },
      },
      actions: [
        {
          /**
           *
           * @param _faction
           * @param _phase
           */
          action: (_faction: FactionNameId, _phase: number): void => {
            /* Handle Phase 1 for drylands */
          },
        },
      ],
    },
  },
  "faction.culture.curselands": {
    1: {
      triggers: {
        trigger1: {
          /**
           * @returns {boolean}
           */
          eval: () => true,
        },
      },
      actions: [
        {
          /**
           *
           * @param _faction
           * @param _phase
           */
          action: (_faction: FactionNameId, _phase: number): void => {
            /* Handle Phase 1 for drylands */
          },
        },
      ],
    },
  },
  "faction.culture.wetlands": {
    1: {
      triggers: {
        trigger1: {
          /**
           * @returns {boolean}
           */
          eval: () => true,
        },
      },
      actions: [
        {
          /**
           *
           * @param _faction
           * @param _phase
           */
          action: (_faction: FactionNameId, _phase: number): void => {
            /* Handle Phase 1 for drylands */
          },
        },
      ],
    },
  },
  "faction.piglin.horderunners": {
    1: {
      triggers: {
        trigger1: {
          /**
           * @returns {boolean}
           */
          eval: () => true,
        },
      },
      actions: [
        {
          /**
           *
           * @param _faction
           * @param _phase
           */
          action: (_faction: FactionNameId, _phase: number): void => {
            /* Handle Phase 1 for drylands */
          },
        },
      ],
    },
  },
  "faction.piglin.unbreakables": {
    1: {
      triggers: {
        trigger1: {
          /**
           * @returns {boolean}
           */
          eval: () => true,
        },
      },
      actions: [
        {
          /**
           *
           * @param _faction
           * @param _phase
           */
          action: (_faction: FactionNameId, _phase: number): void => {
            /* Handle Phase 1 for drylands */
          },
        },
      ],
    },
  },
  "faction.piglin.rotters": {
    1: {
      triggers: {
        trigger1: {
          /**
           * @returns {boolean}
           */
          eval: () => true,
        },
      },
      actions: [
        {
          /**
           *
           * @param _faction
           * @param _phase
           */
          action: (_faction: FactionNameId, _phase: number): void => {
            /* Handle Phase 1 for drylands */
          },
        },
      ],
    },
  },
  "faction.piglin.frost": {
    1: {
      triggers: {
        trigger1: {
          /**
           * @returns {boolean}
           */
          eval: () => true,
        },
      },
      actions: [
        {
          /**
           *
           * @param _faction
           * @param _phase
           */
          action: (_faction: FactionNameId, _phase: number): void => {
            /* Handle Phase 1 for drylands */
          },
        },
      ],
    },
  },
  "faction.piglin.blaze": {
    1: {
      triggers: {
        trigger1: {
          /**
           * @returns boolean
           */
          eval: () => true,
        },
      },
      actions: [
        {
          /**
           *
           * @param _faction
           * @param _phase
           */
          action: (_faction: FactionNameId, _phase: number): void => {
            /* Handle Phase 1 for drylands */
          },
        },
      ],
    },
  },
  "faction.player.campaign": {
    1: {
      triggers: {
        trigger1: {
          /**
           * @returns {boolean}
           */
          eval: () => true,
        },
      },
      actions: [
        {
          /**
           *
           * @param _faction
           * @param _phase
           */
          action: (_faction: FactionNameId, _phase: number): void => {
            /* Handle Phase 1 for drylands */
          },
        },
      ],
    },
  },
  "faction.player.pvp": {
    1: {
      triggers: {
        trigger1: {
          /**
           * @returns {boolean}
           */
          eval: () => true,
        },
      },
      actions: [
        {
          /**
           *
           * @param _faction
           * @param _phase
           */
          action: (_faction: FactionNameId, _phase: number): void => {
            /* Handle Phase 1 for drylands */
          },
        },
      ],
    },
  },
  "faction.end.ruined_portal": {},
  "faction.host.action": {},
  "faction.host.foresight": {},
  "faction.host.knowledge": {},
  "faction.undead.skeleton": {},
  "faction.undead.zombie": {},
};
