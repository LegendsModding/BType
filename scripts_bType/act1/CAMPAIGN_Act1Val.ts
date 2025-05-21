import { ANNOUNCEMENTS_Act1 } from "./ANNOUNCEMENTS_Act1.ts";

/**
 * Campaign Act 1 configuration parameters.
 * @readonly
 * @remarks
 * Contains announcement references and debug state. Debug flag enables verbose logging for development scenarios.
 */
export const CAMPAIGN_Act1Val = {
  announcements: ANNOUNCEMENTS_Act1,
  // TODO: Change debug enabling to a custom setting
  debug: true,
};
