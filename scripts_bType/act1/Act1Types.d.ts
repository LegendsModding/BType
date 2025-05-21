type OnboardingIDWithMisc =
  | "misc"
  | "findVillageUnderAttack"
  | "firstVillageUnderAttack"
  | "repairFountain"
  | "findSecondVillage"
  | "freeSecondVillage"
  | "villageChest"
  | "buildDefensesInSecondVillage"
  | "firstSkirmish"
  | "threePiglinCamps"
  | "endPortalUpgrade"
  | "secondSkirmish"
  | "destroyDBB"
  | "respawn"
  | "outpost";

type OnboardingID =
  | "findVillageUnderAttack"
  | "firstVillageUnderAttack"
  | "repairFountain"
  | "findSecondVillage"
  | "freeSecondVillage"
  | "villageChest"
  | "buildDefensesInSecondVillage"
  | "firstSkirmish"
  | "threePiglinCamps"
  | "endPortalUpgrade"
  | "secondSkirmish"
  | "destroyDBB"
  | "respawn"
  | "outpost";

type Act1FlowVal = {
  misc: {
    successAudio: string;
    act1FlowComplete: string;
    gameIntroCinematic: string;
    timeToStartOnboardingAfterIntroCine: number;
    timeToStartPassiveOnboardingAfterIntroCine: number;
    firstVillageTag: string;
    secondVillageTag: string;
    skipAct1Flow: string;
    towersBuilt: string;
    villageCageTag: string;
    totalCagesNumber: number;
    noPoiNisDuringAct1: string;
    activeOnboardingNudge: string;
    miscTutorials: {
      worldMap: {
        tutorialKey: string;
        delay: number;
      };
      compass: { tutorialKey: string; delay: number };
    };
    miscVO: {
      fastTravel: {
        timers: {
          timeToTellPlayerAboutFastTravel: number;
        };
        tracker: string;
      };
    };
    message?: object;
  };
  findVillageUnderAttack: {
    id: string;
    global: {
      isThisStepCurrentlyActive: string;
      stepComplete: string;
    };
    consts: Record<string, number | number[]>;
    cinematic: "hrd00_c01_village_occupied";
    message: {
      onboardingNudge: string;
    };
  };
  firstVillageUnderAttack: {
    id: string;
    global: {
      isThisStepCurrentlyActive: string;
      stepComplete: string;
    };
    consts: object;
    message: {
      onboardingNudge: string;
    };
  };
  repairFountain: {
    id: string;
    global: {
      isThisStepCurrentlyActive: string;
      stepComplete: string;
    };
    consts?: object;
    message: {
      onboardingNudge: string;
    };
    hudItem: ["utility", "badger:zoner_regen_structures"];
  };
  findSecondVillage: {
    id: string;
    global: {
      isThisStepCurrentlyActive: string;
      stepComplete: string;
    };
    consts?: object;
    message: {
      onboardingNudge: string;
    };
    vo: object;
    hasIntroCinePlayed: string;
  };
  freeSecondVillage: {
    id: string;
    global: {
      onboardingNudge?: string;
      fountainDisabled: string;
      allPiglinsDefeated: string;
      stepComplete: string;
      isThisStepCurrentlyActive: string;
    };
    consts?: object;
    message: {
      onboardingNudge: string;
      repairFountain: string;
    };
    vo: object;
    miscReminders: object;
  };
  villageChest: {
    id: string;
    global: {
      isThisStepCurrentlyActive: string;
      stepComplete: string;
    };
    consts?: object;
    message: {
      onboardingNudge: string;
    };
  };
  buildDefensesInSecondVillage: {
    id: string;
    global: {
      isThisStepCurrentlyActive: string;
      stepComplete: string;
    };
    consts?: object;
    message: {
      onboardingNudge: string;
    };
    vo: object;
    hudItem: ["utility", "badger:tower_arrow"];
  };
  firstSkirmish: {
    id: string;
    global: {
      firstSkirmishNudgesEnabled: string;
      stepComplete: string;
      isThisStepCurrentlyActive: string;
      nudgeTracker: string;
    };
    consts?: object;
    message: {
      repairFountainNudge: string;
      onboardingNudge: string;
      abandonedNudge: string;
      hint: string;
    };
    vo: {
      returnToOccupiedVillage: string;
    };
  };
  threePiglinCamps: {
    id: string;
    global: {
      campsDestroyed: string;
      stepComplete: string;
      isThisStepCurrentlyActive: string;
    };
    consts: {
      timeGoToCampsReminder: number;
    };
    bases?: object;
    message: {
      onboardingNudge: string;
      onboardingNudges: string[];
      onboardingNudgesWithoutBannerview: string[];
    };
    vo?: Record<string, string | string[]>;
    timers: {
      goToCampsReminderTimer: string;
    };
    cinematic?: string | Record<string, string>;
  };
  endPortalUpgrade: {
    id: string;
    global: {
      hasReturnedToEndPortal: string;
      hasPlayerOpenedSongBook: string;
      stepComplete: string;
      isThisStepCurrentlyActive: string;
      hasPlacedUpgradeInHotbar: string;
    };
    consts?: Record<string, number | number[]>;
    message: {
      onboardingNudge: string;
      atRuinedPortalNudge: string;
      buildIronUpgradeNudge: string;
    };
    vo: Record<string, string | string[]>;
  };
  secondSkirmish: {
    id: string;
    global: {
      hasUpdatedNudge: string;
      stepComplete: string;
      isThisStepCurrentlyActive: string;
    };
    consts?: object;
    village: object;
    message: {
      onboardingNudge: string;
      secondOnboardingNudge: string;
    };
    vo: object;
    cinematic: string | Record<string, string>;
  };
  destroyDBB: {
    id: string;
    tutorialKey: string;
    onboardingCompleteResource: string;
    global: {
      isThisStepCurrentlyActive: string;
      stepComplete: string;
      hasApproachedDbb: string;
      playNightfall: string;
    };
    consts: {
      timeToTriggerNudgeAfterVO: number;
      timeToTriggerNightFallFMV: number;
    };
    message: {
      onboardingNudge: string;
      onboardingNudgeAfterOutpostNoApproach: string;
      onboardingNudgeApproachNoOutpost: string;
      onboardingNudgeApproachedBuiltOutpost: string;
    };
  };
  respawn: {
    id: string;
    global: {
      hasPlayerRespawned: string;
      isThisStepCurrentlyActive: string;
      stepComplete: string;
    };
    consts: {
      timeToIntroVo: number;
    };
    message?: object;
  };
  outpost: {
    id: string;
    global: {
      hasBuiltAnOutpost: string;
      outpostNudgeIsActive: string;
      isThisStepCurrentlyActive: string;
      stepComplete: string;
    };
    consts: {
      outpostTag: string;
    };
    hudItem: ["utility", "badger:zoner_fort_outpost"];
    message: {
      onboardingNudge: string;
    };
  };
};
