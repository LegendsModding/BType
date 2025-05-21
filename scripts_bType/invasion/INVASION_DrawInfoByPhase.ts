/**
 * Phase-based invasion draw parameters for normal difficulty progression.
 * @readonly
 * @remarks
 * Contains per-phase configurations with totalDraws (max attempts),
 * inactiveDaysToLoseDraw (time thresholds for draw expiration),
 * and minimumDraws (floor values for phase requirements).
 * Later phases introduce overNumberOfDays parameters for extended duration events.
 * TODO: Verify phase progression alignment with campaign milestones.
 */
export const INVASION_DrawInfoByPhase = [
  {
    totalDraws: 1,
    inactiveDaysToLoseDraw: 6,
    minimumDraws: 0,
  },
  {
    totalDraws: 1,
    inactiveDaysToLoseDraw: 8,
    minimumDraws: 0,
  },
  {
    totalDraws: 1,
    inactiveDaysToLoseDraw: 10,
    minimumDraws: 1,
  },
  {
    totalDraws: 1,
    inactiveDaysToLoseDraw: 12,
    minimumDraws: 1,
  },
  {
    totalDraws: 2,
    overNumberOfDays: 2,
    inactiveDaysToLoseDraw: 12,
    minimumDraws: 1,
  },
  {
    totalDraws: 2,
    inactiveDaysToLoseDraw: 12,
    minimumDraws: 2,
  },
  {
    totalDraws: 2,
    inactiveDaysToLoseDraw: 12,
    minimumDraws: 2,
  },
];
