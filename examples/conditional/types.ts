/* eslint-disable @typescript-eslint/no-unused-vars */
// ---------------- Example 1: Grill/Oven (on slides) ----------------

class Grill {
  startGas() {}
  stopGas() {}
}

class Oven {
  setTemperature() {}
}

// evaluating whether T is a subtype of 'grill'
type CookingDevice<T> = T extends 'grill' ? Grill : Oven;

let device1: CookingDevice<'grill'>;
let device2: CookingDevice<'oven'>;

// ---------------- Example 2: Epic Week and Epic Day ----------------

type Event = {
  startDate: string;
  endDate: string;
};

type Session = {
  startTime: string;
  endTime: string;
};


// without conditional types, we would have to do something like this
function getDuration(epic: Event): string;
function getDuration(epic: Session): number;
function getDuration(epic: Event | Session): string | number {
  throw new Error('Not implemented');

  // Downsides:
  // 1 - this can be cumbersome to do over and over again
  // 2 - if we add a type to beer city code, the number of overloads we need to add to the function will grow
}

// ✨ Challenge - how would you implement the return type of getDuration using conditional types?
/*
 **
 **
 **
 **
 **
 **/

/**
 * The getDuration function returns the duration in a human-readable string for the epic week and as a number of hours for the epic day
 */
function getDuration2<T extends Event | Session>(
  epic: T
): T extends Event ? string : number {
  throw new Error('Not implemented');
}

const epicWeek: Event = {
  startDate: '2021-01-01',
  endDate: '2021-01-07',
};

const session: Session = {
  startTime: '09:00',
  endTime: '17:00',
};

const durationWeek = getDuration2(epicWeek);
const sessionDuration = getDuration2(session);

// ---------------- Example 3: To Array (on slides) ----------------

type ToArray<Type> = Type extends any ? Type[] : never;

//conditional types are distributive when the type is a union
type Thing2 = ToArray<number | string>;

type ToArray2<Type> = Type[]

type NumberArray = ToArray<number>;

type Thing = ToArray2<number | string>;




type NumberOrStringArray = ToArray<number | string >;

// ---------------- Example 4: Flatten  ----------------

// reverse of ToArray

// If T is an array, return the element type.
// Otherwise, return the type itself.
type Flatten<T> = T extends any[] ? T[number] : T;

// Extracts out the element type.
type Str = Flatten<string[]>;

// Leaves the type alone.
type Num = Flatten<number>;

// ---------------- Example 5: FlattenDeep  ----------------

type FlattenDeepChallenge<T> = any;

// ✨ Challenge - how would you implement flatten deep?
/*
 **
 **
 **
 **
 **
 **/

type FlattenDeep<T> = T extends any[] ? FlattenDeep<T[number]> : T;

type Num2 = FlattenDeep<number>; // number
type Str2 = FlattenDeep<string[]>; // string
type Str3 = FlattenDeep<string[][]>; // string
