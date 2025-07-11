/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-unused-vars */
type Fish = {
  swim: () => void;
  name: string;
  kind: 'fish';
};

type Bird = {
  fly: () => void;
  name: string;
  kind: 'bird';
};

type Dog = {
  bark: () => void;
  name: string;
  kind: 'dog';
};

type Cat = {
  meow: () => void;
  name: string;
  kind: 'cat';
};

type Pet = Fish | Bird | Dog;

function move(pet: Pet) {
  switch (pet.kind) {
    case 'fish':
      pet.swim();
      console.log(`Pet ${pet.name} is swimming!`);
      break;
    case 'bird':
      pet.fly();
      console.log(`Pet ${pet.name} is flying!`);
      break;
    case 'dog':
      pet.bark();
      console.log(`Pet ${pet.name} is barking!`);
      break;
    default:
      break;
  }
}

// using with never type

let foo: never = 123; // Error: Type number is not assignable to never

function move2(pet: Pet) {
  switch (pet.kind) {
    case 'fish':
      pet.swim();
      console.log(`Pet ${pet.name} is swimming!`);
      break;
    case 'bird':
      pet.fly();
      console.log(`Pet ${pet.name} is flying!`);
      break;
    case 'dog':
      pet.bark();
      console.log(`Pet ${pet.name} is barking!`);
      break;
    default:
      const _exhaustiveCheck: never = pet;
  }
}
