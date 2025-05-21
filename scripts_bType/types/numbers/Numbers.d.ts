// Numbers.d.ts

/**
 * Represents a strictly positive number (non-zero).
 * Validates that the number is positive and not zero by checking its string representation.
 * @template T - The number type to validate.
 * @example
 * ```typescript
 * type Valid = StrictlyPositive<5>; // 5
 * type Invalid = StrictlyPositive<-3>; // never
 * ```
 */
type StrictlyPositive<T extends number> = `${T}` extends
  | `-${string}`
  | "0"
  | "-0"
  ? never
  : T;

/**
 * Represents a strictly negative number (non-zero).
 * Validates that the number is negative and not zero by checking its string representation.
 * @template T - The number type to validate.
 * @example
 * ```typescript
 * type Valid = StrictlyNegative<-5>; // -5
 * type Invalid = StrictlyNegative<0>; // never
 * ```
 */
type StrictlyNegative<T extends number> = `${T}` extends `-${string}`
  ? T extends "0" | "-0"
    ? never
    : T
  : never;

/**
 * Represents a non-zero number.
 * Validates that the number is not zero (positive or negative).
 * @template T - The number type to validate.
 * @example
 * ```typescript
 * type Valid = NonZero<5>; // 5
 * type Invalid = NonZero<0>; // never
 * ```
 */
type NonZero<T extends number> = `${T}` extends "0" | "-0" ? never : T;

/**
 * Represents a non-negative number (zero or positive).
 * Validates that the number is not negative.
 * @template T - The number type to validate.
 * @example
 * ```typescript
 * type Valid = NonNegative<5>; // 5
 * type Invalid = NonNegative<-3>; // never
 * ```
 */
type NonNegative<T extends number> = `${T}` extends `-${string}` ? never : T;

/**
 * Represents a non-positive number (zero or negative).
 * Validates that the number is not positive.
 * @template T - The number type to validate.
 * @example
 * ```typescript
 * type Valid = NonPositive<-5>; // -5
 * type Invalid = NonPositive<3>; // never
 * ```
 */
type NonPositive<T extends number> = `${T}` extends `-${string}`
  ? T
  : T extends 0
    ? T
    : never;

/**
 * Brand for integer numbers.
 * Ensures the number is an integer by checking its string representation.
 * @template T - The number type to brand.
 * @example
 * ```typescript
 * type ValidInt = Int<5>; // 5 & { __brand: "int" }
 * type InvalidInt = Int<5.5>; // never
 * ```
 */
type Int<T extends number> = `${T}` extends `${number}.${string}`
  ? never
  : T & { __brand: "int" };

/**
 * Brand for floating-point numbers.
 * Ensures the number is a float by checking its string representation.
 * @template T - The number type to brand.
 * @example
 * ```typescript
 * type ValidFloat = Float<5.5>; // 5.5 & { __brand: "float" }
 * type InvalidFloat = Float<5>; // never
 * ```
 */
type Float<T extends number> = `${T}` extends `${number}.${string}`
  ? T & { __brand: "float" }
  : never;

/**
 * Builds a tuple of a specified length to facilitate number range creation.
 * @template L - The desired length of the tuple.
 * @template T - The accumulator tuple (internal use).
 * @example
 * ```typescript
 * type TupleOf3 = BuildTuple<3>; // [unknown, unknown, unknown]
 * ```
 */
type BuildTuple<
  L extends number,
  T extends unknown[] = [],
> = T["length"] extends L ? T : BuildTuple<L, [...T, unknown]>;

/**
 * Enumerates numbers from 0 up to N-1.
 * @template N - The upper bound (exclusive).
 * @example
 * ```typescript
 * type ZeroToTwo = Enumerate<3>; // 0 | 1 | 2
 * ```
 */
type EnumerateInternal<
  N extends number,
  T extends unknown[] = [],
> = T["length"] extends N ? T[number] : EnumerateInternal<N, [...T, unknown]>;
type Enumerate<N extends number> = EnumerateInternal<N>;

/**
 * Creates a union type of integers in the inclusive range [Min, Max].
 * @template Min - The lower bound (inclusive).
 * @template Max - The upper bound (inclusive).
 * @example
 * ```typescript
 * type OneToFive = NumberRange<1, 5>; // 1 | 2 | 3 | 4 | 5
 * ```
 */
type NumberRange<Min extends number, Max extends number> = Exclude<
  Enumerate<Add<Max, 1> & number>,
  Enumerate<Min>
>;

/**
 * Adds two numbers at the type level using tuple concatenation.
 * @template A - The first addend.
 * @template B - The second addend.
 * @example
 * ```typescript
 * type Sum = Add<2, 3>; // 5
 * ```
 */
type Add<A extends number, B extends number> = [
  ...BuildTuple<A>,
  ...BuildTuple<B>,
]["length"];

/**
 * Brand for floating-point numbers between 0.0 and 1.0.
 * Ensures the number is a float within the specified range by checking its string representation.
 * @template T - The number type to brand.
 * @example
 * ```typescript
 * type Valid = FloatBetween0And1<0.5>; // 0.5 & { __brand: "floatBetween0And1" }
 * type Invalid = FloatBetween0And1<1.5>; // never
 * ```
 */
type FloatBetween0And1<T extends number> = T extends number
  ? `${T}` extends `-${string}`
    ? never
    : T extends 0
      ? T & { __brand: "floatBetween0And1" }
      : T extends 1
        ? T & { __brand: "floatBetween0And1" }
        : `${T}` extends `${number}.${string}`
          ? T extends number
            ? number extends T
              ? never
              : T & { __brand: "floatBetween0And1" }
            : never
          : never
  : never;
