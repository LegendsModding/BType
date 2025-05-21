/**
 * Central registry for invasion system helper configurations.
 * @readonly
 * @remarks
 * Contains global phase tracking variable (invasionPhaseVar) and reserved factionObjects container.
 * factionObjects is currently unimplemented but reserved for future faction-specific data:
 * - attackFaction: Intended for offensive horde configurations with placement rules
 * - defendFaction: Reserved for defensive faction parameters including base archetypes
 * - obstacleFaction: Planned for terrain-altering faction mechanics
 * Commented templates indicate intended structure with proximity rules, outpost placement parameters,
 * and village archetype mappings. Actual implementation state matches EMPTY_OBJECT pattern.
 */
export const INVASION_HelperVal: IInvasionHelperValue = {
  invasionPhaseVar: "invasionSystemCurrentPhase",
  factionObjects: {
    //   attackFaction: {
    //     name: PIGLIN_FACTION_NAME.horderunners,
    //     villageArchetype: "badger:piglin_attack",
    //     villageArchetypes: {
    //       [BASE_SIZE_VANGUARD]: "badger:piglin_attack_small",
    //       [BASE_SIZE_OUTPOST]: "badger:piglin_attack_outpost",
    //       [BASE_SIZE_SMALL]: "badger:piglin_attack_small",
    //       [BASE_SIZE_MEDIUM]: "badger:piglin_attack_medium",
    //       [BASE_SIZE_LARGE]: "badger:piglin_attack_large",
    //       player: "",
    //       boss: "",
    //       default: "",
    //       debug: "",
    //       piglin_creeper: "",
    //       piglin_skeleton: "",
    //       piglin_zombie: "",
    //       frontlineA: "",
    //     },
    //     firstBasePlacement: [
    //       {
    //         wofMinDistance: 1800,
    //         wofMaxDistance: 2100,
    //         playerDistance: 500,
    //         otherFactionDistance: 3200,
    //         otherDistance: 750,
    //       },
    //       {
    //         wofMinDistance: 1600,
    //         wofMaxDistance: 2300,
    //         playerDistance: 500,
    //         otherFactionDistance: 2800,
    //         otherDistance: 500,
    //       },
    //     ],
    //     basePlacement: {
    //       newBaseAdjacents: [BASE_SIZE_LARGE, BASE_SIZE_MEDIUM, BASE_SIZE_SMALL],
    //       ruleList: [
    //         {
    //           ownMinDistance: 600,
    //           ownMaxDistance: 800,
    //           outpostDistance: 250,
    //           otherDistance: 500,
    //           playerDistance: 500,
    //         },
    //       ],
    //       initRuleList: [
    //         {
    //           ownMinDistance: 500,
    //           ownMaxDistance: 650,
    //           otherDistance: 300,
    //           playerDistance: 500,
    //         },
    //       ],
    //     },
    //     defensiveOutpostPlacement: [
    //       {
    //         ownMinDistance: 300,
    //         ownMaxDistance: 700,
    //         outpostDistance: 200,
    //         otherDistance: 200,
    //         playerDistance: 500,
    //       },
    //     ],
    //     initDefensiveOutpostPlacement: [
    //       {
    //         ownMinDistance: 300,
    //         ownMaxDistance: 400,
    //         outpostDistance: 150,
    //         otherDistance: 200,
    //         playerDistance: 500,
    //       },
    //     ],
    //     offensiveOutpostPlacement: [
    //       {
    //         ownMaxDistance: 780,
    //         villageMaxDistance: 480,
    //         allDistance: 275,
    //         playerDistance: 500,
    //       },
    //     ],
    //     farBasePlacement: [
    //       {
    //         ownMaxDistance: 1600,
    //         villageMaxDistance: 600,
    //         ownMinDistance: 1000,
    //         allDistance: 500,
    //         outpostDistance: 250,
    //         playerDistance: 500,
    //       },
    //     ],
    //   },
    //   defendFaction: {
    //     name: PIGLIN_FACTION_NAME.unbreakables,
    //     villageArchetype: "badger:piglin_defend",
    //     villageArchetypes: {
    //       [BASE_SIZE_VANGUARD]: "badger:piglin_defend_small",
    //       [BASE_SIZE_OUTPOST]: "badger:piglin_defend_outpost",
    //       [BASE_SIZE_SMALL]: "badger:piglin_defend_small",
    //       [BASE_SIZE_MEDIUM]: "badger:piglin_defend_medium",
    //       [BASE_SIZE_LARGE]: "badger:piglin_defend_large",
    //       [BASE_SIZE_BOSS]: "badger:piglin_defend_boss",
    //       player: "",
    //       default: "",
    //       debug: "",
    //       piglin_creeper: "",
    //       piglin_skeleton: "",
    //       piglin_zombie: "",
    //       frontlineA: "",
    //     },
    //     firstBasePlacement: [
    //       {
    //         wofMinDistance: 1800,
    //         wofMaxDistance: 2100,
    //         playerDistance: 500,
    //         otherFactionDistance: 3200,
    //         otherDistance: 750,
    //       },
    //     ],
    //     basePlacement: {
    //       newBaseAdjacents: [BASE_SIZE_LARGE, BASE_SIZE_MEDIUM, BASE_SIZE_SMALL],
    //       ruleList: [
    //         {
    //           ownMinDistance: 500,
    //           ownMaxDistance: 750,
    //           outpostDistance: 250,
    //           otherDistance: 500,
    //           playerDistance: 500,
    //         },
    //       ],
    //       initRuleList: [
    //         {
    //           ownMinDistance: 400,
    //           ownMaxDistance: 600,
    //           otherDistance: 300,
    //           playerDistance: 500,
    //         },
    //       ],
    //     },
    //     defensiveOutpostPlacement: [
    //       {
    //         ownMinDistance: 250,
    //         ownMaxDistance: 650,
    //         outpostDistance: 200,
    //         otherDistance: 200,
    //         playerDistance: 500,
    //       },
    //     ],
    //     initDefensiveOutpostPlacement: [
    //       {
    //         ownMinDistance: 200,
    //         ownMaxDistance: 400,
    //         outpostDistance: 150,
    //         otherDistance: 200,
    //         playerDistance: 500,
    //       },
    //     ],
    //     offensiveOutpostPlacement: [
    //       {
    //         ownMaxDistance: 580,
    //         villageMaxDistance: 480,
    //         allDistance: 275,
    //         playerDistance: 500,
    //       },
    //     ],
    //     farBasePlacement: [
    //       {
    //         ownMaxDistance: 1400,
    //         villageMaxDistance: 600,
    //         ownMinDistance: 800,
    //         allDistance: 500,
    //         outpostDistance: 200,
    //         playerDistance: 500,
    //       },
    //     ],
    //   },
    //   obstacleFaction: {
    //     name: PIGLIN_FACTION_NAME.rotters,
    //     villageArchetype: "badger:piglin_obstacle",
    //     villageArchetypes: {
    //       [BASE_SIZE_VANGUARD]: "badger:piglin_obstacle_small",
    //       [BASE_SIZE_OUTPOST]: "badger:piglin_obstacle_outpost",
    //       [BASE_SIZE_SMALL]: "badger:piglin_obstacle_small",
    //       [BASE_SIZE_MEDIUM]: "badger:piglin_obstacle_medium",
    //       [BASE_SIZE_LARGE]: "badger:piglin_obstacle_large",
    //       [BASE_SIZE_BOSS]: "badger:piglin_obstacle_boss",
    //       player: "",
    //       default: "",
    //       debug: "",
    //       piglin_creeper: "",
    //       piglin_skeleton: "",
    //       piglin_zombie: "",
    //       frontlineA: "",
    //     },
    //     firstBasePlacement: [
    //       {
    //         wofMinDistance: 1800,
    //         wofMaxDistance: 2100,
    //         playerDistance: 500,
    //         otherFactionDistance: 3200,
    //         otherDistance: 750,
    //       },
    //     ],
    //     basePlacement: {
    //       newBaseAdjacents: [BASE_SIZE_LARGE, BASE_SIZE_MEDIUM, BASE_SIZE_SMALL],
    //       ruleList: [
    //         {
    //           ownMinDistance: 550,
    //           ownMaxDistance: 800,
    //           outpostDistance: 250,
    //           otherDistance: 500,
    //           playerDistance: 500,
    //         },
    //       ],
    //       initRuleList: [
    //         {
    //           ownMinDistance: 400,
    //           ownMaxDistance: 600,
    //           otherDistance: 300,
    //           playerDistance: 500,
    //         },
    //       ],
    //     },
    //     defensiveOutpostPlacement: [
    //       {
    //         ownMinDistance: 250,
    //         ownMaxDistance: 650,
    //         outpostDistance: 200,
    //         otherDistance: 200,
    //         playerDistance: 500,
    //       },
    //     ],
    //     initDefensiveOutpostPlacement: [
    //       {
    //         ownMinDistance: 200,
    //         ownMaxDistance: 400,
    //         outpostDistance: 150,
    //         otherDistance: 200,
    //         playerDistance: 500,
    //       },
    //     ],
    //     offensiveOutpostPlacement: [
    //       {
    //         ownMaxDistance: 680,
    //         villageMaxDistance: 480,
    //         allDistance: 275,
    //         playerDistance: 500,
    //       },
    //     ],
    //     farBasePlacement: [
    //       {
    //         ownMaxDistance: 1500,
    //         villageMaxDistance: 600,
    //         ownMinDistance: 850,
    //         allDistance: 500,
    //         outpostDistance: 200,
    //         playerDistance: 500,
    //       },
    //     ],
    //   },
  },
};
