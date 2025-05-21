/**
 * @module Foresight
 * @description
 * Provides a comprehensive logging and debugging system for Minecraft Legends modding.
 * Supports multiple log levels, telemetry, and in-game debugging via UI.
 */

import { LOG_LEVEL } from "../consts/LOG_LEVEL.ts";
import { TELEMETRY_SendFunnelEvent } from "../telemetry/TELEMETRY_SendFunnelEvent.ts";

/**
 * Comprehensive logging and debugging system for mod development.
 * Implements hierarchical log levels and telemetry integration.
 */
class Foresight {
  /**
   * Singleton instance of the logging system.
   * Ensures consistent logging configuration across systems.
   */
  private static instance: Foresight;

  /**
   * Current log level setting.
   * Controls message visibility across different systems.
   */
  private logLevel: AnyLogLevel;

  /**
   * Singleton constructor for logging system.
   * Initializes default log level to INFO.
   */
  private constructor() {
    this.logLevel = LOG_LEVEL.INFO; // Default log level
  }

  /**
   * Retrieves the singleton logging instance.
   * Creates instance if not already initialized.
   * @returns {Foresight} Logging system instance
   */
  public static getInstance(): Foresight {
    if (!Foresight.instance) {
      Foresight.instance = new Foresight();
    }
    return Foresight.instance;
  }

  /**
   * Sets the active log level for filtering message output.
   * @param {AnyLogLevel} level New log level threshold
   */
  public setLogLevel(level: AnyLogLevel): void {
    this.logLevel = level;
  }

  /**
   * Outputs verbose diagnostic messages.
   * Only visible when log level is set to VERBOSE.
   * @param {LogMessage} message Diagnostic message
   */
  public verbose(message: LogMessage): void {
    if (this.logLevel <= LOG_LEVEL.VERBOSE) {
      //OUTPUT_DebugLog(`[VERBOSE] ${message}`, 0);
    }
  }

  /**
   * Outputs informational messages with optional data.
   * Visible at INFO level and above.
   * @param {LogMessage} message Primary message
   * @param {string} [data] Supplementary information
   */
  public info(message: LogMessage, data?: string): void {
    if (this.logLevel <= LOG_LEVEL.INFO) {
      //OUTPUT_DebugLog(`[INFO] ${message}`, 1);
      if (data) {
        //OUTPUT_DebugLog(`[INFO] Data: ${data}`, 1);
      }
    }
  }

  /**
   * Outputs warning messages.
   * Visible at WARNING level and above.
   * @param {LogMessage} message Warning description
   */
  public warning(message: LogMessage): void {
    if (this.logLevel <= LOG_LEVEL.WARNING) {
      //OUTPUT_DebugLog(`[WARNING] ${message}`, 2);
    }
  }

  /**
   *
   * @param methodName
   * @param unknownKeys
   * @returns {void}
   */
  public warnMethod(methodName: string, unknownKeys: string[]): void {
    this.warning(
      `Unknown parameters in ${methodName}: ${unknownKeys.join(", ")}`,
    );
  }

  /**
   *
   * @param params
   * @param knownKeys
   * @param methodName
   */
  public logUnknownParams<T extends object>(
    params: T,
    knownKeys: string[],
    methodName: string,
  ): void {
    const unknownKeys = Object.keys(params).filter(
      (key) => !knownKeys.includes(key),
    );
    if (unknownKeys.length > 0) {
      this.warnMethod(methodName, unknownKeys);
    }
  }

  /**
   * Outputs error messages.
   * Visible at ERROR level and persists in logs.
   * @param {LogMessage} message Error description
   */
  public error(message: LogMessage): void {
    if (this.logLevel <= LOG_LEVEL.ERROR) {
      //OUTPUT_DebugLog(`[ERROR] ${message}`, 3);
    }
  }

  /**
   * Conditional debug output based on configuration.
   * @param {LogMessage} message Debug message
   * @param {boolean} shouldDoOutput Toggle output visibility
   */
  public debug(message: LogMessage, shouldDoOutput: boolean = false): void {
    if (shouldDoOutput) {
      this.info(message);
    }
  }

  /**
   * Logs progression milestones for analytics and telemetry tracking.
   * Captures player progression through predefined funnels for behavioral analysis.
   * This method sends structured data to telemetry systems for funnel visualization and metrics tracking.
   * @param {SingleEntity} playerEntity Player entity associated with the progression event
   * @param {Object} funnelStepInfo Container for progression tracking parameters
   * @param {FunnelStepKey} funnelStepInfo.key Unique identifier for the funnel step
   * @param {StepNumber} funnelStepInfo.stepNumberCurrent Current step number in progression sequence
   * @param {StepNumber} funnelStepInfo.stepNumberMax Total number of steps in the funnel
   * @param {FunnelStepCategory} funnelStepInfo.category Category for analytics grouping
   * @param {FunnelStepName} funnelStepInfo.funnelName Human-readable funnel identifier
   * @example
   * // Track main quest progression
   * FORESIGHT.logFunnelStep(player, {
   *   key: "QUEST_MAIN",
   *   stepNumberCurrent: 3,
   *   stepNumberMax: 5,
   *   category: "Campaign",
   *   funnelName: "MainQuestLine"
   * });
   * @see {@link TELEMETRY_SendFunnelEvent} for data transmission implementation
   * @see {@link FunnelStepKey} for key naming conventions
   * @remarks
   * This function requires valid player entity references and properly configured funnel definitions.
   * All parameters must contain meaningful values for accurate analytics tracking.
   */
  public logFunnelStep(
    playerEntity: SingleEntity,
    funnelStepInfo: {
      key: FunnelStepKey;
      stepNumberCurrent: StepNumber;
      stepNumberMax: StepNumber;
      category: FunnelStepCategory;
      funnelName: FunnelStepName;
    },
  ): void {
    TELEMETRY_SendFunnelEvent(playerEntity, funnelStepInfo);
  }
}

/**
 * Singleton instance of the Foresight logging system.
 * Provides global access to logging functionality.
 */
export const FORESIGHT = Foresight.getInstance();
