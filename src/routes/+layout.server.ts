import type { LayoutServerLoad } from './$types';

export const load = (async ({ url }) => {
  return {
    url: url.pathname
  };
}) satisfies LayoutServerLoad;