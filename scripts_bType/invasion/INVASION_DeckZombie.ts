import { UNDEAD_FactionNames } from "scripts_bType/FACTION_NAMES.ts";

import { FACTION_ACTIONS_UndeadDefault } from "./FACTION_ACTIONS_UndeadDefault.ts";

/**
 * Zombie faction invasion deck configuration for procedural combat scenarios.
 * @readonly
 * @remarks
 * Defines undead-specific attack formations across seven phases.
 * All phases use FACTION_ACTIONS_UndeadDefault formation strategy with order 2 priority.
 * deckName serves as reference for analytics and system coordination.
 */
export const INVASION_DeckZombie: InvasionDeck = {
  factionName: UNDEAD_FactionNames.zombie,
  deckName: "zombie_faction_invasion_deck",
  phases: [
    {
      phase: "1",
      formationByOrder: [
        {
          order: 2,
          formation: FACTION_ACTIONS_UndeadDefault,
        },
      ],
    },
    {
      phase: "2",
      formationByOrder: [
        {
          order: 2,
          formation: FACTION_ACTIONS_UndeadDefault,
        },
      ],
    },
    {
      phase: "3",
      formationByOrder: [
        {
          order: 2,
          formation: FACTION_ACTIONS_UndeadDefault,
        },
      ],
    },
    {
      phase: "4",
      formationByOrder: [
        {
          order: 2,
          formation: FACTION_ACTIONS_UndeadDefault,
        },
      ],
    },
    {
      phase: "5",
      formationByOrder: [
        {
          order: 2,
          formation: FACTION_ACTIONS_UndeadDefault,
        },
      ],
    },
    {
      phase: "6",
      formationByOrder: [
        {
          order: 2,
          formation: FACTION_ACTIONS_UndeadDefault,
        },
      ],
    },
    {
      phase: "7",
      formationByOrder: [
        {
          order: 2,
          formation: FACTION_ACTIONS_UndeadDefault,
        },
      ],
    },
  ],
};
