const plugin = require("tailwindcss/plugin");
const typography = require('tailwindcss-typography');
const forms = require('@tailwindcss/custom-forms');

module.exports = {
  theme: {
    fontFamily: {
      sans: ["metropolis", "sans-serif"],
      serif: ["Lora", "georgia", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    },
    customForms: theme => ({
      default: {
        'input, textarea, multiselect, select': {
          borderRadius: theme('borderRadius.none'),
        },
      },
    }),
    extend: {
      headings: {
        h1: {
          sm: "4xl",
          md: "5xl",
          lg: "5xl",
          xl: "6xl"
        },
        h2: {
          sm: "2xl",
          md: "3xl",
          lg: "3xl",
          xl: "4xl"
        },
        h3: {
          sm: "lg",
          md: "xl",
          lg: "xl",
          xl: "2xl"
        },
      },
      minWidth: {
        "9": "9.35rem",
        "16": "16rem",
        "24": "24rem",
        "32": "32rem",
        "38": "38rem"
      },
      maxWidth: {
        "7xl": "90rem"
      },
      maxHeight: {
        "75": "18.75rem"
      },
      padding: {
        // 74rem = 90rem (7xl) - 16rem (px-32)
        "center-two-columns": "calc(calc(100vw - 74rem) / 2)"
      },
      height: theme => ({
        "screen/1": "75vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "rectangular/0.5": "192px",
        "rectangular/1": "384px",
        "rectangular/2": "768px",
        "rectangular/3": "1152px",
        "12": "12rem",
        "18": "18rem",
        "21": "21rem",
        "28": "28rem",
        "36": "36rem",
      }),
      spacing: {
        "7": "1.75rem",
        "11": "2.75rem",
        "13": "3.25rem",
        "14": "3.5rem",
        "15": "3.75rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "30": "7.5rem",
        "45": "11.25rem",
        "74": "18.5rem",
        "88": "22rem"
      },
      inset: {
        init: "initial"
      },
      letterSpacing: {
        "wide-light": "0.01em"
      },
      textShadow: {
        default: "0 2px 0 #000",
        md: "0 2px 2px #000",
        h1: "0 0 3px #FF0000, 0 0 5px #0000FF",
        xl: "0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)",
        none: "none"
      }
    }
  },
  variants: {
    // https://tailwindcss.com/docs/pseudo-class-variants/#default-variants-reference
    // https://tailwindcss.com/docs/configuring-variants/
    // Possible values:
    //   'responsive',
    //   'group-hover',
    //   'focus-within',
    //   'first',
    //   'last',
    //   'odd',
    //   'even',
    //   'hover',
    //   'focus',
    //   'active',
    //   'visited',
    //   'disabled',
    padding: ["first", "last", "responsive"],
    margin: ["first", "last", "responsive"],
    borderWidth: ["first", "last", "responsive"],
    backgroundColor: ["hover", "focus", "active", "responsive"],
    textColor: ["hover", "focus", "active"],
    width: ["responsive"],
    height: ["responsive"],
    typography: ["responsive", "hover"]
  },
  plugins: [
    typography,
    forms,
    plugin(function({ addBase, theme }) {
      Object.entries(theme("headings", {})).forEach(([h, sizes]) => {
        Object.entries(sizes).forEach(([bp, fs]) => {
          addBase({
            [`@screen ${bp}`]: {
              [h]: {
                fontSize: theme(`fontSize.${fs}`, fs)
              }
            }
          });
        });
      });
    })
  ]
};

// If you want the default values without the users changes then you can import `tailwindcss/defaultConfig`.
// It is the raw default config. This means some things will be functions to reference other values.
// If you want the resolved values you can use `tailwindcss/resolveConfig`.
