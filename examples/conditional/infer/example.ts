/* eslint-disable @typescript-eslint/no-unused-vars */
// ********** Unwrap a Promise **********

// promises are Generic over the type of the value they resolve to
const eventuallyNumber = Promise.resolve(123);

type UnwrapPromise<P> = P extends PromiseLike<infer T> ? T : P;

type test1 = UnwrapPromise<Promise<string>>;
type test2 = UnwrapPromise<string[]>;

// ********** Parse out the first argument of a function **********

// type that represents a function that takes one argument
type OneArgFn<A> = (arg: A, ...args: any[]) => void;

type GetFirstArg<F> = F extends OneArgFn<infer A> ? A : never;

// test case
const notAFunction = 123;
type Test3 = GetFirstArg<typeof notAFunction>;

function testFn(arg1: string, arg2: number) {}
type Test4 = GetFirstArg<typeof testFn>;

// ********** Capitalize a string type **********

// this type should take a string and return a new string with the first letter capitalized
type MyCapitalize<S extends string> = any; // put type here

// ✨ what should go in place of `any` to make a type that capitalizes the first letter of a string?
//
//
//
//
//
//
//
//
//

// your answers
type MakeCapital<S extends string> = S extends `${infer x}${infer tail}`
  ? `${Uppercase<x>}${tail}`
  : S;

type test5 = MakeCapital<'hello'>;
type test6 = MakeCapital<'World'>;
