import { PIGLIN_FactionNames } from "scripts_bType/FACTION_NAMES.ts";

import { FACTION_ACTIONS_PiglinDefault } from "./FACTION_ACTIONS_PiglinDefault.ts";

/**
 * Unbreakables faction invasion deck configuration for procedural combat scenarios.
 * @readonly
 * @remarks
 * Defines piglin defensive strategy formations across seven phases.
 * Maintains consistent FACTION_ACTIONS_PiglinDefault formation usage with order 2 priority.
 * deckName enables cross-system coordination and telemetry tracking.
 */
export const INVASION_DeckUnbreakables: InvasionDeck = {
  factionName: PIGLIN_FactionNames.unbreakables,
  deckName: "unbreakables_faction_invasion_deck",
  phases: [
    {
      phase: "1",
      formationByOrder: [
        {
          order: 2,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "2",
      formationByOrder: [
        {
          order: 2,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "3",
      formationByOrder: [
        {
          order: 2,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "4",
      formationByOrder: [
        {
          order: 2,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "5",
      formationByOrder: [
        {
          order: 2,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "6",
      formationByOrder: [
        {
          order: 2,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
    {
      phase: "7",
      formationByOrder: [
        {
          order: 2,
          formation: FACTION_ACTIONS_PiglinDefault,
        },
      ],
    },
  ],
};
