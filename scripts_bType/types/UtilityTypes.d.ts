/**
 * Extracts value types from arrays
 * @template T
 * type {T extends Array<infer U> ? U : never} ValueOfArray
 */
type ValueOfArray<T> = T extends (infer U)[] ? U : never;

/**
 * Represents permutations of allowed inputs
 * @template T
 * type {T extends [infer First, ...infer Rest] ?
 *   First extends Array<infer F> ?
 *     Rest extends any[] ?
 *       `${F & string}_${Permutation<Rest>}` :
 *       never :
 *     never :
 *   never} Permutation
 */
type Permutation<T> = T extends [infer First, ...infer Rest]
  ? First extends (infer F)[]
    ? Rest extends unknown[]
      ? `${F & string}_${Permutation<Rest>}`
      : never
    : never
  : never;

/**
 * type {string} GlobalVariableName
 * @description Represents the name of a global variable.
 */
declare type GlobalVariableName = string;

type LogLevelVerbose = 0;
type LogLevelInfo = 1;
type LogLevelWarning = 2;
type LogLevelError = 3;
type AnyLogLevel =
  | LogLevelVerbose
  | LogLevelInfo
  | LogLevelWarning
  | LogLevelError;
interface LogLevels {
  VERBOSE: LogLevelVerbose;
  INFO: LogLevelInfo;
  WARNING: LogLevelWarning;
  ERROR: LogLevelError;
}

/**
 * @interface BadgerCounter
 * @description Represents a counter object that tracks global variables.
 * @template T - Tuple type representing allowed inputs.
 */
interface BadgerCounter<T extends unknown[]> {
  gv: GlobalVariableName;
  defaultValue: number;
  allowedInput: T;
  inputSize: number;

  GetGV: (...input: PermutationParams<T>) => GlobalVariableName | null;
  Reset: (...input: PermutationParams<T>) => void;
  Get: (...input: PermutationParams<T>) => number | null;
  Increment: (...input: PermutationParams<T>) => number | null;
  Decrement: (...input: PermutationParams<T>) => number | null;
  Set: (value: number, ...input: PermutationParams<T>) => number | null;
  IsRestricted: () => boolean;
}

/**
 * @interface Trigger
 * @description Represents a trigger object that evaluates conditions based on counters.
 */
interface Trigger {
  eval: () => boolean;
}

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

/**
 * type {string} SnapshotName
 * @description Represents the name of a snapshot.
 */
declare type SnapshotName = string;

/**
 * type {number} SnapshotValue
 * @description Represents the value of a snapshot.
 */
declare type SnapshotValue = number;

/**
 * @interface Snapshot
 * @description Represents a snapshot object that captures the state of counters at a specific time.
 */
interface Snapshot {
  GetSnapshotName: () => SnapshotName;
  Reset: () => void;
  Take: () => void;
  Get: (
    counter: GenericCounterType,
    ...input: (PiglinFactionName | MobAllianceType | VillageSizeKey)[]
  ) => SnapshotValue;

  PatchSet: (
    counter: GenericCounterType,
    value: SnapshotValue,
    ...input: (PiglinFactionName | MobAllianceType | VillageSizeKey)[]
  ) => void;
}

/**
 * type {Utility Type} PermutationParams
 * @description Extracts the union of all possible input types from the allowedInput tuple.
 * @template T - Tuple type representing allowed inputs.
 */
type PermutationParams<T extends unknown[]> = {
  [K in keyof T]: T[K] extends (infer U)[] ? U : T[K];
};

/**
 * A key in an object (string, number, or symbol).
 */
type Key = string | number | symbol;

/**
 * A readonly tuple of keys.
 */
type KeyTuple = readonly Key[];

/**
 * Recursively retrieves the type at a nested key path in object T.
 *
 * Example:
 *   type Nested = DeepValue<{ a: { b: number } }, ['a', 'b']>; // Nested is number
 */
type DeepValue<T, Keys extends KeyTuple> = Keys extends [infer K, ...infer Rest]
  ? K extends keyof T
    ? Rest extends KeyTuple
      ? DeepValue<T[K], Rest>
      : T[K]
    : never
  : T;

/**
 * A tuple type representing a path of keys.
 */
type KeyPath = readonly Key[];

/**
 * Given an object type T and a key path Keys, NestedValue returns the type
 * at that nested location. If Keys is empty, it yields T.
 */
type NestedValue<T, Keys extends KeyPath> = Keys extends []
  ? T
  : Keys extends [infer First, ...infer Rest]
    ? First extends keyof T
      ? NestedValue<T[First], Rest extends KeyPath ? Rest : []>
      : never
    : T;

/**
 * A permutation is an array of items of type T.
 */
type ArrayPermutation<T> = T[];

/**
 * Permutations is an array of Permutation<T>.
 */
type ArrayOfArrayPermutations<T> = ArrayPermutation<T>[];

/**
 * An ItemSet is an array of items of type T (one set to be permuted).
 */
type ItemSet<T> = T[];

/**
 * ItemSets is an array of ItemSet<T>, representing multiple sets.
 */
type ItemSets<T> = ItemSet<T>[];

/**
 * Type for rest parameters that might be an array of arrays
 */
type RestParameter<T> = (T | T[])[];

/**
 * @interface WeightedElement
 * @description Represents an element with a weight for weighted random selection.
 */
interface WeightedElement {
  weight: number;
}

/**
 * A type alias for an array of weighted elements.
 */
type WeightedArray<T extends WeightedElement = WeightedElement> = T[];

/**
 * A type alias for a function that returns a random floating-point number in [0,1).
 */
type RandomFloatFn = () => number;

/**
 * A type alias for a function that returns a random floating-point number in [0,1)
 * using a group identifier.
 */
type RandomFloatGroupFn = (group: string) => number;

/**
 * Defines a set of trigger tags.
 */
interface TriggerTags {
  include?: TagArray;
  exclude?: TagArray;
  alliance?: string;
}

/**
 * A trigger tag input can be either a single TriggerTags object or an array of them.
 */
type TriggerTag = TriggerTags | TriggerTags[];

/**
 * Special data parameter that holds either a string, a number, or a boolean value.
 */
declare interface VariantData {
  /**
   * The value this variant holds. Either a string, number, or boolean.
   */
  value: string | number | boolean;
}

type FunnelStepKey = string;
type StepNumber = number;
type FunnelStepCategory = string;
type FunnelStepName = string;

/**
 * Represents a generic array type for cross-system compatibility.
 * Used for collections that require flexible element types.
 */
type AnyArray = unknown[];

/**
 * Represents a random number generation context group.
 * Used for synchronized random operations across networked systems.
 */
type RandomNumberGroup = string;
type TutorialKey = string;
type NudgeMessage = string;
type TutorialStepId = string;
type TutorialMessage = string;
type PresentationMessage = string;
type TimeToDelay = number;
type UserId = string;
type VariableKey = string;
type VariableValue = number;
type IconPriority = number;
type AudioPhaseName = string;
