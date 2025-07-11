/* eslint-disable @typescript-eslint/no-unused-vars */
/**
never appears when TypeScript determines there’s nothing left in a union.
 */

function fn(x: string | number) {
  if (typeof x === 'string') {
    // do something
  } else if (typeof x === 'number') {
    // do something else
  } else {
    x; // has type 'never'!
  }
}

// a use case for never - only allow one of two properties to be set

type SpecInfo = {
  name: string;
  group: string;
} & (
  | { versionId: string; openApi?: never }
  | {
      openApi: string;
      versionId?: never;
    }
);

export const fetchPublicApiSpec = (
  specInfo: SpecInfo | undefined,
  apiPath: string | undefined
) => {
  // fetches api spec
};

fetchPublicApiSpec(
  {
    name: 'My API',
    group: 'My Group',
    versionId: 'v1',
  },
  'path'
);

fetchPublicApiSpec(
  {
    name: 'My API',
    group: 'My Group',
    openApi: 'v1',
  },
  'path'
);

fetchPublicApiSpec(
  {
    name: 'My API',
    group: 'My Group',
    versionId: 'v1',
    openApi: 'v1',
  },
  'path'
);
