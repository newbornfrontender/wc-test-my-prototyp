import nodeResolve from 'rollup-plugin-node-resolve';

import string from './plugins/string';
import postcssPresetEnv from './plugins/postcss-preset-env';
import babel from './plugins/babel';

const isProd = !process.env.ROLLUP_WATCH;

export default {
  input: 'components/my-app/index.js',
  output: {
    format: 'esm',
    dir: 'public',
  },
  plugins: [
    nodeResolve({
      jsnext: true,
      browser: true,
      modulesOnly: true,
    }),
    string({
      include: '**/*.html',
    }),
    postcssPresetEnv({
      stage: 0,
      features: {
        'nesting-rules': {},
      },
      autoprefixer: isProd && {
        grid: true,
      },
    }),
    babel(),
  ],
  experimentalCodeSplitting: true,
};
