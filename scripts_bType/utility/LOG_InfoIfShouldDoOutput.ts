import { LOG_Info } from "./LOG_Info.ts";

/**
 * Outputs a debug message if the condition is met.
 * @param message The message to output.
 * @param shouldDoOutput Whether to output the message.
 */
export const LOG_InfoIfShouldDoOutput = (
  message: LogMessage,
  shouldDoOutput: boolean = false,
): void => {
  if (shouldDoOutput) {
    LOG_Info(message);
  }
};
