/**
 * Registry for village reward system parameters.
 * Contains configuration for token-based reward mechanics and chest management.
 * @remarks
 * Token capacity and fill rates control resource accumulation pacing.
 * Message keys map to localization strings for UI feedback.
 * Unlock configurations coordinate with progression systems.
 * @example
 * // Check coal unlock requirements
 * const coalUnlock = VILLAGE_RewardData.unlocks.linkedChest;
 * @see {@link VILLAGE_ResourceStore} for storage implementation
 */
export const VILLAGE_RewardData = {
  tokenCapacity: 1, // the number of refreshes before the chest is full
  tokenFillRate: 30 * 60, // 1 token every 30 minutes (1 day)
  tokenTimer: "timer_village_token_refill",
  updateTime: 5, // seconds after opening chest to recheck if it should be closed
  variables: {
    openedFirstChest: "gv_village_chest_first_open",
    daysRareResourceLocked: "gv_days_rare_resource_locked",
  },
  unlocks: {
    linkedChest: "unlock_linked_village_chest",
  },
  unlockVillageRewardDays: [
    { resourceName: "coal", unlockDays: 9, cap: 11 },
    { resourceName: "iron", unlockDays: 6, cap: 11 },
    { resourceName: "redstone", unlockDays: 12, cap: 11 },
    { resourceName: "diamond", unlockDays: 15, cap: 11 },
  ],
  messages: {
    all: {
      cannotOpenNoSpace: "village_chest_cannot_open_no_space",
      cannotOpenEmpty: "village_chest_cannot_open_empty",
      openExcess: "village_chest_rewards_with_excess",
      open: "village_chest_rewards",
    },
    single: {
      cannotOpenNoSpace: "village_chest_cannot_open_no_space",
      cannotOpenEmpty: "village_chest_cannot_open_empty",
      openExcess: "village_chest_rewards_single_with_excess",
      open: "village_chest_rewards_single",
    },
  },
};
