/* eslint-disable @typescript-eslint/no-unused-vars */

function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
}

type Color = 'pink' | 'blue' | 'green';

const getColorCode = (color: Color) => {
  if (color === 'pink') {
    return '#FFC0CB';
  }
  if (color === 'blue') {
    return '#0000FF';
  }
  if (color === 'green') {
    return '#008000';
  }
};

// make your own type guard!

type Fish = {
  swim: () => void;
  name: string;
};

type Bird = {
  fly: () => void;
  name: string;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const move = (pet: Fish | Bird) => {
  if (isFish(pet)) {
    pet.swim();
    console.log(`Pet ${pet.name} is swimming!`);
  } else {
    pet.fly();
    console.log(`Pet ${pet.name} is flying!`);
  }
};

// how did we use this in a real project?

const labels = {
  label1: () => 'Label 1',
  label2: () => 'Label 2',
  label3: () => 'Label 3',
} as const;

type LabelKey = keyof typeof labels;

export function isLabel(label: string): label is LabelKey {
  const labelExists = label in labels;
  if (!labelExists) {
    console.error(`Invalid label: ${label}`);
    return false;
  }
  return true;
}

const label1 = 'notALabel' as string;

if (isLabel(label1)) {
  console.log(`Label exists: ${label1}`);
} else {
  console.log(`Label does not exist: ${label1}`);
}

// or, if you want to check if the label exists or otherwise through an error, use an assertion function

// the assert function checks to see if the paramater fulfills certain criteria (in this case, if it is a label)
// if it does not, it throws an error
export function assertLabel(label: string): asserts label is LabelKey {
  if (!(label in labels)) {
    throw new Error(`Invalid label: ${label}`);
  }
}

// will throw an error if the string is not a label
const label2 = 'label2' as string;
assertLabel(label2);
console.log(`Label exists: ${label2}`);
