/**
 * Telemetry funnel step definitions for user progression tracking.
 * @readonly
 * @remarks
 * Contains Act 1 and tutorial progression markers with versioned funnel names.
 * ACT1_START initiates the first-time user experience tracking.
 * ACT1_LEAVE_RUINED_PORTAL tracks portal departure events during early progression.
 * ACT1_COMPLETE marks campaign completion with specific version identifiers.
 */
export const TELEMETRY_FunnelSteps = {
  //------- TUTORIAL -------//

  //------- ACT 1 -------//

  ACT1_START: {
    key: "Act1_Start",
    stepNumberCurrent: 1,
    stepNumberMax: 1,
    category: "FTUE",
    funnelName: "FTUE_Act_1_Linear_20250226",
  },
  ACT1_LEAVE_RUINED_PORTAL: {
    key: "LeaveRuinedEndPortal",
    stepNumberCurrent: 2,
    stepNumberMax: 3,
    category: "FTUE",
    funnelName: "FTUE_Act1_Linear_20250226",
  },
  ACT1_COMPLETE: {
    key: "Complete",
    stepNumberCurrent: 3,
    stepNumberMax: 3,
    category: "FTUE",
    funnelName: "FTUE_Act1_Linear_20230701",
  },
};
