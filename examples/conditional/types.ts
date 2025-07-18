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

type BeerCityCode = {
  startDate: string;
  endDate: string;
};

type BeerCityCodeDay2 = {
  startTime: string;
  endTime: string;
};

// without conditional types, we would have to do something like this
function getDuration(epic: BeerCityCode): string;
function getDuration(epic: BeerCityCodeDay2): number;
function getDuration(epic: BeerCityCode | BeerCityCodeDay2): string | number {
  throw new Error('Not implemented');

  // Downsides:
  // 1 - this can be cumbersome to do over and over again
  // 2 - if we add a type to epic, the number of overloads we need to add to the function will grow
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
function getDuration2<T extends BeerCityCode | BeerCityCodeDay2>(
  epic: T
): T extends BeerCityCode ? string : number {
  throw new Error('Not implemented');
}

const epicWeek: BeerCityCode = {
  startDate: '2021-01-01',
  endDate: '2021-01-07',
};

const epicDay: BeerCityCodeDay2 = {
  startTime: '09:00',
  endTime: '17:00',
};

const durationWeek = getDuration2(epicWeek);
const durationDay = getDuration2(epicDay);

// ---------------- Example 3: To Array (on slides) ----------------

type ToArray<Type> = Type extends any ? Type[] : never;

type NumberArray = ToArray<number>;


type NumberOrStringArray = ToArray<number | string |>;

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
