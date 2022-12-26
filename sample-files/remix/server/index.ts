// Import the server build that was produced by `remix build`;
import { createRequestHandler } from '@remix-run/architect';

import * as remixServerBuild from '../build/index.js';

const localCache = {};

export const handler = createRequestHandler({
  build: remixServerBuild,
  getLoadContext: () => ({ localCache }),
});
