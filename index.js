const replace = require('@rollup/plugin-replace');
const { config } = require('dotenv');

const addEnv = () =>
  replace({
    process: JSON.stringify({
      env: {
        ...config().parsed,
      },
    }),
  });

module.exports = addEnv;
