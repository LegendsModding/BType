import { PIGLIN_FactionNames } from "scripts_bType/FACTION_NAMES.ts";

import { FACTION_ACTIONS_PiglinDefault } from "./FACTION_ACTIONS_PiglinDefault.ts";

/**
 * Invasion deck configuration for Horderunners faction assault patterns.
 * @readonly
 * @remarks
 * Contains seven-phase structure using FACTION_ACTIONS_PiglinDefault formation strategy with order 1 priority.
 * factionName links to PIGLIN_FactionNames.horderunners identifier.
 * deckName serves as reference for attack wave coordination.
 * Order 1 priority suggests precedence in procedural generation calculations.
 */
export const INVASION_DeckHorderunners: InvasionDeck = {
  factionName: PIGLIN_FactionNames.horderunners,
  deckName: "horderunners_faction_invasion_deck",
  phases: [
    {
      phase: "1",
      formationByOrder: [
        {
          order: 1,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "2",
      formationByOrder: [
        {
          order: 1,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "3",
      formationByOrder: [
        {
          order: 1,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "4",
      formationByOrder: [
        {
          order: 1,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "5",
      formationByOrder: [
        {
          order: 1,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "6",
      formationByOrder: [
        {
          order: 1,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "7",
      formationByOrder: [
        {
          order: 1,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
  ],
};
