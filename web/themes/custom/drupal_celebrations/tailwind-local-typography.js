const plugin = require('tailwindcss/plugin');
const _ = require('lodash');

const defaultOptions = {};

const camelCaseToKebabCase = function(string) {
  return string
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
    .toLowerCase();
};

module.exports = plugin.withOptions(function(options = {}) {
  return function({ theme, e, addBase }) {
    options = _.defaults({}, options, defaultOptions);

    const textStylesTheme = theme('textStyles');

    const resolveTextStyle = function(name, styles, topLevel = false) {
      if (_.isPlainObject(styles)) {
        const resolvedStyles = _.reduce(styles, function(result, value, key) {
          if (key === 'extends') {
            _.forEach(_.castArray(value), function(textStyleToExtend) {
              _.forEach(resolveTextStyle(textStyleToExtend, textStylesTheme[textStyleToExtend], true), function(extendedValue, extendedKey) {
                if (extendedKey === 'output') {
                  return; // continue
                }
                result = {
                  ...result,
                  ...resolveTextStyle(extendedKey, extendedValue),
                };
              });
            });
            return result;
          }
          return {
            ...result,
            ...resolveTextStyle(key, value),
          };
        }, {});

        if (topLevel) {
          return resolvedStyles;
        }

        return {
          [name]: resolvedStyles,
        };
      }

      if (_.isArray(styles)) {
        if (name === 'fontSize' && styles.length === 2) {
          return {
            fontSize: styles[0],
            lineHeight: styles[1],
          };
        }
        return {
          [name]: styles.join(', '),
        };
      }

      return {
        [name]: styles,
      };
    };

    const textStyles = _.fromPairs(
      _.map(textStylesTheme, (componentStyles, componentName) => {
        componentStyles = resolveTextStyle(componentName, componentStyles, true);
        if (componentStyles.output === false) {
          return [];
        }
        return [
          `${e(`${camelCaseToKebabCase(componentName)}`)}`,
          componentStyles,
        ];
      })
    );

    addBase(textStyles);
  };
}, function() {
  return {
    theme: {
      textStyles: {},
    }
  };
});
