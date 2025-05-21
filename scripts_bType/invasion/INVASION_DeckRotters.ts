import { PIGLIN_FactionNames } from "scripts_bType/FACTION_NAMES.ts";

import { FACTION_ACTIONS_PiglinDefault } from "./FACTION_ACTIONS_PiglinDefault.ts";

/**
 * Invasion deck configuration for Rotters faction obstacle deployment.
 * @readonly
 * @remarks
 * Contains seven-phase structure using FACTION_ACTIONS_PiglinDefault formation strategy with order 3 priority.
 * factionName maps to PIGLIN_FactionNames.rotters identifier.
 * deckName provides reference for procedural generation systems.
 * Maintains consistent formation patterns across all phases for predictable obstacle generation behavior.
 */
export const INVASION_DeckRotters: InvasionDeck = {
  factionName: PIGLIN_FactionNames.rotters,
  deckName: "rotters_faction_invasion_deck",
  phases: [
    {
      phase: "1",
      formationByOrder: [
        {
          order: 3,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "2",
      formationByOrder: [
        {
          order: 3,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "3",
      formationByOrder: [
        {
          order: 3,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "4",
      formationByOrder: [
        {
          order: 3,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "5",
      formationByOrder: [
        {
          order: 3,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "6",
      formationByOrder: [
        {
          order: 3,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "7",
      formationByOrder: [
        {
          order: 3,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
  ],
};
