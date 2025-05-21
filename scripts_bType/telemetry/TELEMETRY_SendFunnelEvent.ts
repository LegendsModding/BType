/**
 *
 * @param playerEntity
 * @param funnelStepInfo
 * @param funnelStepInfo.key
 * @param funnelStepInfo.stepNumberCurrent
 * @param funnelStepInfo.stepNumberMax
 * @param funnelStepInfo.category
 * @param funnelStepInfo.funnelName
 */
export const TELEMETRY_SendFunnelEvent = (
  playerEntity: EntityGroup,
  funnelStepInfo: {
    key: FunnelStepKey;
    stepNumberCurrent: StepNumber;
    stepNumberMax: StepNumber;
    category: FunnelStepCategory;
    funnelName: FunnelStepName;
  },
): NoReturn => {
  OUTPUT_TelemetryRecordFunnelEvent(
    playerEntity,
    funnelStepInfo.key,
    funnelStepInfo.stepNumberCurrent,
    funnelStepInfo.stepNumberMax,
    funnelStepInfo.category,
    funnelStepInfo.funnelName,
  );
};
