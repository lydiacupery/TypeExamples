/* eslint-disable @typescript-eslint/no-unused-vars */
type OneThroughFive = 1 | 2 | 3 | 4 | 5;
type FiveTHroughTen = 5 | 6 | 7 | 8 | 9 | 10;
type OneThroughTen = OneThroughFive | FiveTHroughTen;

const one: OneThroughTen = 1;
const nine: OneThroughTen = 9;
const nine2: OneThroughFive = 9;
const eleven: OneThroughTen = 11;
