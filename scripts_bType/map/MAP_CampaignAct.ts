/**
 * Contains campaign act state identifiers for map progression tracking.
 * @readonly
 * @remarks
 * Valid states include:
 * - DISABLED: Campaign acts inactive
 * - ACT1: First campaign act active
 * - ACT2: Second campaign act active
 * - ACT3: Third campaign act active
 * - ACT4: Fourth campaign act active
 * - EPILOGUE: Final campaign phase active
 */
export const MAP_CampaignAct = {
  DISABLED: "disabled",
  ACT1: "act_1",
  ACT2: "act_2",
  ACT3: "act_3",
  ACT4: "act_4",
  EPILOGUE: "epilogue",
};
