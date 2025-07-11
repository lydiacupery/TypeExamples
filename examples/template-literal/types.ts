/* eslint-disable @typescript-eslint/no-unused-vars */
type Blah = 'blah';

type Main = '🍔' | '🍕' | '🌭' | '🍣' | '🍜' | '🍝';
type Side = '🍟' | '🥗' | '🍲' | '🍚' | '🍞' | '🍦';
type Drink = '🥤' | '🍺' | '🍷' | '🍵' | '☕️' | '🥛';

type MealCombo = `${Main} with ${Side} and ${Drink}`;

const combo1: MealCombo = '🍝 with 🥗 and 🍺';

// **** Example: Derive button tracker keys from standard task keys ****

export const standardTaskKeys = [
  'step1_install',
  'step2_configure',
  'step3_deploy',
  'step4_test',
  'step5_review',
] as const;

export type StandardTaskKey = (typeof standardTaskKeys)[number];

type TrackerKey = `${StandardTaskKey}-started` | `${StandardTaskKey}-finished`;

const taskTrackerKey: TrackerKey = `step3_deploy-finished`;
