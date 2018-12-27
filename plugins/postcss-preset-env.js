import { createFilter } from 'rollup-pluginutils';
import postcssPresetEnv from 'postcss-preset-env';

export default (options = {}) => {
  const include = '**/*.css';
  const exclude = '';

  const filter = createFilter(include, exclude);

  return {
    name: 'postcss-preset-env',

    transform(code, id) {
      if (!filter(id)) return;

      return postcssPresetEnv
        .process(code, { from: id }, options)
        .then(({ css }) => ({
          code: `export default ${JSON.stringify(css)};`,
          map: { mappings: '' },
        }));
    },
  };
};
