/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

import pino from 'pino';

import config from '@/config';

/**
 * @name getPino
 * @description Get a Pino logger instance
 */
function getPino() {
  const isDev = !config.production;

  // we inject "pino-pretty" only in dev mode to make our console logs look nice
  if (isDev) {
    const pretty = require('pino-pretty');

    return pino(
      {},
      pretty({
        colorize: true,
      }),
    );
  }

  return pino({
    browser: {},
    level: 'debug',
    base: {
      env: config.environment,
    },
  });
}

export default getPino();
