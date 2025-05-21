interface IGenericCounterBase {
  readonly gv: string;
  readonly allowedInput: (string | number | boolean)[][];
  readonly inputSize: number;
  GetGV: (...input: (string | number | boolean)[]) => string;
  Reset: (...input: (string | number | boolean)[]) => void;
  Get: (...input: (string | number | boolean)[]) => number;
  Increment: (...input: (string | number | boolean)[]) => number;
  Decrement: (...input: (string | number | boolean)[]) => number;
  Set: (value: number, ...input: (string | number | boolean)[]) => number;
  IsRestricted: () => boolean;
}

/**
 * A generic counter interface.
 * @template T The tuple type for the expected input parameters.
 */
interface GenericCounterType<
  T extends (string | number | boolean)[] = (string | number | boolean)[],
> {
  readonly gv: string;
  readonly allowedInput: T[];
  readonly inputSize: number;
  // NOTE: The methods’ parameter types have been “widened” so that they match the base.
  GetGV: (...input: (string | number | boolean)[]) => string;
  Reset: (...input: (string | number | boolean)[]) => void;
  Get: (...input: (string | number | boolean)[]) => number;
  Increment: (...input: (string | number | boolean)[]) => number;
  Decrement: (...input: (string | number | boolean)[]) => number;
  Set: (value: number, ...input: (string | number | boolean)[]) => number;
  IsRestricted: () => boolean;
}

type TriggerTimeDawn = "trigger_time_dawn";
type TriggerTimeDusk = "trigger_time_dusk";
type TriggerTimeImmediate = "trigger_time_immediate";
type TriggerTimeAtVillage = "trigger_time_at_village";
type TriggerTimeMidnight = "trigger_time_midnight";
type TriggerTimeNoon = "trigger_time_noon";
type TriggerTimeFull =
  | TriggerTimeDawn
  | TriggerTimeDusk
  | TriggerTimeImmediate
  | TriggerTimeAtVillage;
