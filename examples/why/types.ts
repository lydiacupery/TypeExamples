/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 */

const thing = {
  a: 1,
  b: 2,
  c: 3,
};

const result = thing.a + thing.b;


const otherResult = result.toPrecision(2);

const other = 'hello' as const;

other.toPrecision(1);
