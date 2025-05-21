// Valid integer
//export const validInt: Int<5> = 5; // OK

// Invalid integer (float)
//export const invalidInt: Int<5.5> = 5.5; // Error: Type '5.5' is not assignable to type 'never'.

// Valid float between 0 and 1
//export const validFloat: FloatBetween0And1<T> = 0.5 as T; // OK

// Invalid float (out of range)
//export const invalidFloat: FloatBetween0And1<1.5> = 1.5; // Error: Type '1.5' is not assignable to type 'never'.
