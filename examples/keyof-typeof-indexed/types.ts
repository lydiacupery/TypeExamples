/* eslint-disable @typescript-eslint/no-unused-vars */
// ---------- Typeof ----------
function f() {
  return { x: 10, y: 3 };
}

type F = typeof f;

// very handy with ReturnType which takes a function type and produces its return type

// export type AppState = ReturnType<typeof rootReducer>;

type Result = ReturnType<F>;

// ---------- Keyof ----------

type Point = { x: number; y: number };
type P = keyof Point;

const DIFF_TABS = {
  tab1: 'source',
  tab2: 'render',
  tab3: 'other',
} as const;

type TabKey = keyof typeof DIFF_TABS;

// ---------- Indexed Access ----------

type V = Point[keyof Point];

type TabValue = any;
// ✨ Challenge: how would you get the type of the values of DIFF_TABS? I.e. the type of 'source' | 'render' | 'other'
//
//
//
//
//
//
//

// uses typeof to get the type of DIFF_TABS then indexes into it with TabKey
type TabValueAnswer = (typeof DIFF_TABS)[TabKey];

// get the keys of an array
export const productTiers = [
  'FREE',
  'STARTER',
  'PROFESSIONAL',
  'ENTERPRISE',
] as const;

export type ProductTier = (typeof productTiers)[number];
