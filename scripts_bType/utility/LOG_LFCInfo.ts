import { LOG_Info } from "./LOG_Info.ts";

// DEBUG

/**
 *
 * @param message
 */
export const LOG_LFCInfo = (message: LogMessage): void => {
  LOG_Info(`[LFC] ${message}`);
};
