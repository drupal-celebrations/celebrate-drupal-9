const defaultTheme = require('tailwindcss/defaultTheme');
const { colors } = defaultTheme;
const plugin = require("tailwindcss/plugin");
const reset = require('@benface/tailwindcss-reset');
const typography = require('tailwindcss-typography');
const forms = require('@tailwindcss/custom-forms');

module.exports = {
  theme: {
    colors: {
      ...colors,
      gray: {
        '100': '#FBFCFD',
        '200': '#F5F8F9',
        '300': '#EFF3F6',
        '400': '#E3EAEF',
        '500': '#D7E1E8',
        '600': '#C2CBD1',
        '700': '#81878B',
        '800': '#616568',
        '900': '#414446',
      },
      red: {
        '100': '#FCECE9',
        '200': '#F8CFC7',
        '300': '#F4B2A5',
        '400': '#EB7962',
        '500': '#E33F1E',
        '600': '#CC391B',
        '700': '#882612',
        '800': '#661C0E',
        '900': '#441309',
      },
      yellow: {
        '100': '#FFFAEC',
        '200': '#FFF2CF',
        '300': '#FEEAB3',
        '400': '#FEDA79',
        '500': '#FDCA40',
        '600': '#E4B63A',
        '700': '#987926',
        '800': '#725B1D',
        '900': '#4C3D13',
      },
      green: {
        '100': '#ECF6E8',
        '200': '#CFE8C6',
        '300': '#B2DAA4',
        '400': '#79BE60',
        '500': '#3FA21C',
        '600': '#399219',
        '700': '#266111',
        '800': '#1C490D',
        '900': '#133108',
      },
      blue: {
        '100': '#EEF7FD',
        '200': '#D4EBFA',
        '300': '#BADFF7',
        '400': '#87C8F1',
        '500': '#53B0EB',
        '600': '#4B9ED4',
        '700': '#326A8D',
        '800': '#254F6A',
        '900': '#193547',
      },
    },
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
    typography: {
      h1: {
        fontSize: defaultTheme.fontSize['4xl'],
        fontWeight: defaultTheme.fontWeight.bold,
        color: defaultTheme.colors.gray[900],
        lineHeight: defaultTheme.lineHeight.none
      },
      'h1 + *': {
        marginTop: defaultTheme.spacing[8],
      },
      h2: {
        fontSize: defaultTheme.fontSize['2xl'],
        fontWeight: defaultTheme.fontWeight.medium,
        color: defaultTheme.colors.gray[900],
        lineHeight: defaultTheme.lineHeight.tight
      },
      '* + h2': {
        marginTop: defaultTheme.spacing[8],
      },
      'h2 + *': {
        marginTop: defaultTheme.spacing[4],
      },
      h3: {
        fontSize: defaultTheme.fontSize.lg,
        fontWeight: defaultTheme.fontWeight.medium,
        color: defaultTheme.colors.gray[900],
        lineHeight: defaultTheme.lineHeight.tight
      },
      '* + h3': {
        marginTop: defaultTheme.spacing[6],
      },
      'h2 + h3': {
        marginTop: defaultTheme.spacing[4],
      },
      'h3 + *': {
        marginTop: defaultTheme.spacing[2],
      },
      h4: {
        fontSize: defaultTheme.fontSize.base,
        fontWeight: defaultTheme.fontWeight.semibold,
        color: defaultTheme.colors.gray[900],
        lineHeight: defaultTheme.lineHeight.normal
      },
      '* + h4': {
        marginTop: defaultTheme.spacing[6],
      },
      'h3 + h4': {
        marginTop: defaultTheme.spacing[2],
      },
      'h4 + *': {
        marginTop: defaultTheme.spacing[2],
      },
      p: {
        fontSize: defaultTheme.fontSize['sm'],
        fontWeight: defaultTheme.fontWeight.normal,
        color: defaultTheme.colors.gray[800],
        lineHeight: defaultTheme.lineHeight.relaxed,
      },
      'p + p': {
        marginTop: defaultTheme.spacing[4]
      },
      strong: {
        fontWeight: defaultTheme.fontWeight.semibold,
        color: defaultTheme.colors.gray[900],
      },
      a: {
        fontWeight: defaultTheme.fontWeight.medium,
        color: defaultTheme.colors.blue[700],
      },
      'a:hover': {
        textDecoration: 'underline',
      },
      code: {
        backgroundColor: defaultTheme.colors.gray[200],
        fontSize: '.875em', // Use `em` so change is relative to current font size
        paddingLeft: defaultTheme.spacing[1],
        paddingRight: defaultTheme.spacing[1],
      },
      'img': {
        marginTop: defaultTheme.spacing[8],
        marginBottom: defaultTheme.spacing[8],
      },
      ol: {
        listStyleType: 'decimal',
        paddingLeft: defaultTheme.spacing[5]
      },
      '* + ol': {
        marginTop: defaultTheme.spacing[4],
      },
      'ol + *': {
        marginTop: defaultTheme.spacing[4],
      },
      'li ol': {
        marginTop: defaultTheme.spacing[2],
      },
      ul: {
        listStyleType: 'disc',
        paddingLeft: defaultTheme.spacing[5]
      },
      '* + ul': {
        marginTop: defaultTheme.spacing[4],
      },
      'ul + *': {
        marginTop: defaultTheme.spacing[4],
      },
      'li ul': {
        marginTop: defaultTheme.spacing[2],
      },
      li: {
        fontSize: defaultTheme.fontSize.sm,
        fontWeight: defaultTheme.fontWeight.normal,
        color: defaultTheme.colors.gray[800],
        lineHeight: defaultTheme.lineHeight.relaxed,
      },
      'li + li': {
        marginTop: defaultTheme.spacing[2],
      },
      'li p': {
        marginTop: defaultTheme.spacing[4],
      },
      'li p + p': {
        marginTop: defaultTheme.spacing[2],
      },
      'li:first-child p:first-child': {
        marginTop: defaultTheme.spacing[2],
      },
      blockquote: {
        fontStyle: 'italic',
        borderLeftWidth: defaultTheme.borderWidth[4],
        borderLeftStyle: 'solid',
        borderLeftColor: defaultTheme.colors.gray[300],
        paddingLeft: defaultTheme.spacing[4]
      },
      '* + blockquote': {
        marginTop: defaultTheme.spacing[4],
      },
      'blockquote + *': {
        marginTop: defaultTheme.spacing[4],
      },
      pre: {
        borderRadius: defaultTheme.borderRadius.md,
        backgroundColor: defaultTheme.colors.gray[800],
        color: defaultTheme.colors.white,
        fontSize: '.875em', // Use `em` so change is relative to current font size
        paddingTop: defaultTheme.spacing[3],
        paddingRight: defaultTheme.spacing[4],
        paddingBottom: defaultTheme.spacing[3],
        paddingLeft: defaultTheme.spacing[4],
        overflowX: "auto",
        '-webkit-font-smoothing': 'subpixel-antialiased',
        '-moz-osx-font-smoothing': 'auto',
      },
      '* + pre': {
        marginTop: defaultTheme.spacing[4],
      },
      'pre + *': {
        marginTop: defaultTheme.spacing[4],
      },
      'pre code': {
        backgroundColor: defaultTheme.colors.transparent,
        color: 'currentColor',
        fontSize: '.875em', // Use `em` so change is relative to current font size
        padding: 0,
        '-webkit-font-smoothing': 'subpixel-antialiased',
        '-moz-osx-font-smoothing': 'auto',
      },
      hr: {
        borderTopWidth: defaultTheme.borderWidth.default,
        borderColor: defaultTheme.colors.gray[500],
        marginTop: defaultTheme.spacing[10],
        marginBottom: defaultTheme.spacing[10],
      }
    },
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
    reset,
    typography,
    forms,
    plugin(function({ addBase, theme }) {
      Object.entries(theme("headings", {})).forEach(([h, sizes]) => {
        addBase({
          [h]: {
            fontSize: theme(`fontSize.${sizes.sm}`)
          },
        });
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
