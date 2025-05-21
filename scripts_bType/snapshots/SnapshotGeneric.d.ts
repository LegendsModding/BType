/**
 * The snapshot object interface.
 */
interface SnapshotGeneric {
  /** Returns the snapshot’s “base” name. */
  GetSnapshotName: () => string;

  /** Prepares a snapshot by setting all restricted counters to SNAPSHOT_NOT_SET. */
  Reset: () => void;

  /** Takes a snapshot by storing each counter’s current value. */
  Take: () => void;

  /**
   * Returns the difference between the current counter value and its snapshot.
   * @param counter A generic counter.
   * @param input Zero or more parameters passed to the counter.
   * @returns The difference (or SNAPSHOT_NOT_SET if no snapshot is available).
   */
  Get: (
    counter: GenericCounterType,
    ...input: (string | number | boolean)[]
  ) => number;

  /**
   * Manually patches the snapshot value for a counter.
   * @param counter A generic counter.
   * @param value The value to store.
   * @param input Zero or more parameters passed to the counter.
   */
  PatchSet: (
    counter: GenericCounterType,
    value: number,
    ...input: (string | number | boolean)[]
  ) => void;
}

/**
 * Defines the return type for snapshot comparison functions.
 */
interface SnapshotComparator {
  /**
   * Gets the computed difference based on the snapshot comparison logic.
   * @param counter A generic counter.
   * @param input Zero or more parameters passed to the counter.
   * @returns The computed difference or `SNAPSHOT_NOT_SET` if no valid snapshot is found.
   */
  Get: (
    counter: GenericCounterType,
    ...input: (string | number | boolean)[]
  ) => number;
}
