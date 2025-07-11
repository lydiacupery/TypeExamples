/* eslint-disable @typescript-eslint/no-unused-vars */
import { breadcrumbs, labels } from './constants';

export type BreadcrumbKey = keyof typeof breadcrumbs;

export type LabelKey = keyof typeof labels;

/**
 * Previous iteration of the breadcrumb key
 * What's wrong??
 */

// export type BreadcrumbWithSlash<T extends string> = T extends
//   | BreadcrumbKey
//   | LabelKey
//   ? T
//   : T extends `${infer A}/${infer B}`
//   ? `${BreadcrumbWithSlash<A>}/${BreadcrumbWithSlash<B>}`
//   : never;

// const test1: BreadcrumbWithSlash<'breadcrumb1/breadcrumb2/label1'> =
//   'breadcrumb1/breadcrumb2/label1';

/**
 * 2nd iteration - what's wrong?
 */

// export type BreadcrumbWithSlash<T extends string> = T extends BreadcrumbKey
//   ? T
//   : T extends `${infer A}/${infer B}`
//   ? B extends `${string}/${string}`
//     ? `${BreadcrumbWithSlash<A>}/${BreadcrumbWithSlash<B>}`
//     : B extends LabelKey // if B is the last part of the string, it should be a label
//     ? `${BreadcrumbWithSlash<A>}/${B}`
//     : never
//   : never;

/**
 * Final iteration of the breadcrumb key
 */
export type BreadcrumbWithSlash<T extends string> = T extends LabelKey
  ? T
  : RestOfBreadcrumb<T>;

// iteration that requires ending in a label and only one
export type RestOfBreadcrumb<T extends string> = T extends BreadcrumbKey
  ? T
  : T extends `${infer A}/${infer B}`
  ? B extends `${string}/${string}`
    ? `${RestOfBreadcrumb<A>}/${RestOfBreadcrumb<B>}`
    : B extends LabelKey // if B is the last part of the string, it should be a label
    ? `${RestOfBreadcrumb<A>}/${B}`
    : never
  : never;
