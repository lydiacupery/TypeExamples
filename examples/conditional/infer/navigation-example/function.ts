import { breadcrumbs, labels } from './constants';
import { BreadcrumbKey, BreadcrumbWithSlash, LabelKey } from './types';

/**
 * Function using type
 */
export const deriveLabelAndPathFromUrl = <T extends string>(
  url: BreadcrumbWithSlash<T>
) => {
  // split the url into parts where there is a /
  const urlParts = url.split('/').filter((part) => part !== '');

  // the last part of the url corresponds to the label
  const urlLabel = urlParts[urlParts.length - 1];
  const labelExists = isLabel(urlLabel);
  if (!labelExists) {
    return undefined;
  }

  // the path is all the parts except the last one
  const urlBreadcrumbs = urlParts.slice(0, urlParts.length - 1);
  assertIsBreadcrumbKeyArray(urlBreadcrumbs);

  return {
    label: deriveLabelFromUrl(urlLabel),
    path: derivePathFromUrl(urlBreadcrumbs),
  };
};

/**
 * Helper functions
 */

export const deriveLabelFromUrl = (label: keyof typeof labels) => {
  return () => labels[label]();
};

type UrlPath = Array<keyof typeof breadcrumbs>;

export const derivePathFromUrl = (urlParts: UrlPath) => {
  return () => urlParts.map((p) => breadcrumbs[p]());
};

export function assertIsBreadcrumbKeyArray(
  array: Array<string>
): asserts array is Array<BreadcrumbKey> {
  for (const key of array) {
    if (!(key in breadcrumbs)) {
      throw new Error(`Invalid breadcrumb key: ${key}`);
    }
  }
}

export function isLabel(label: string): label is LabelKey {
  const labelExists = label in labels;
  if (!labelExists) {
    console.error(`Invalid label: ${label}`);
  }
  return labelExists;
}
