module.exports = {
  theme: {
    // Font sizes / line heights from designs:
    //                SIZE IN PX    SIZE IN TAILWIND
    // Body small     14px / 21px   xs / xs
    // Body           16px / 24px   md / md
    // Body large     20px / 35px   lg / lg
    // alternate H5   13px / 21px   2xs / 2xs
    // H5             14px / 17px   xs / xs-heading
    // alternate H4   15px / 20px   sm / sm
    // H4             16px / 28px   md / md-heading
    // H3             20px / 27px   lg / lg-heading
    // H2             36px / 49px   xl / xl
    // H1 (mobile)    36px / 49px   xl / xl
    // H1             66px / 90px   2xl / 2xl
    fontSize: {
      '2xs': '0.8125rem', // 13px
      xs: '0.875rem', //     14px
      sm: '0.9375rem', //    15px
      md: '1rem', //         16px
      lg: '1.25rem', //      20px
      xl: '2.25rem', //      36px
      '2xl': '4.125rem', //  66px
    },
    lineHeight: {
      '2xs': '1.3125rem', //        21px
      xs: '1.3125rem', //           21px
      'xs-heading': '1.0625rem', // 17px
      sm: '1.25rem', //             20px
      md: '1.5rem', //              24px
      'md-heading': '1.75rem', //   28px
      lg: '2.1875rem', //           35px
      'lg-heading': '1.6875rem', // 27px
      xl: '3.0625rem', //           49px
      '2xl': '5.625rem', //         90px
      none: 0,
      tight: 0.9,
      normal: 1,
      relaxed: 1.1,
      cozy: 1.2,
      loose: 1.3,
      // Naming follows https://tailwindcss.com/docs/line-height, "unit" is 0.25.
      6: 1.5,
      7: 1.75,
      8: 2,
    },
    colors: {
      transparent: 'rgba(0, 0, 0, 0)',
      black: '#000000',
      white: '#ffffff',
      gray: {
        '100': '#f7f7f7',
        '200': '#edeeef',
        '300': '#bec4c9',
        '300-60': 'rgba(190, 196, 201, 0.6)',
        '400': '#878d90',
        '500': '#5e717d',
        '600': '#39424a',
      },
      'bright-blue': {
        '100': '#f1fcff',
        '200': '#d1f2fc',
        '300': '#bbefff',
        '400': '#88d6f1',
        '500': '#20bbe6',
        '600': '#019fcb',
        '600-50': 'rgba(1, 159, 203, 0.5)',
      },
      'dark-blue': {
        '200': '#8ca8ce',
        '300': '#177a97',
        '400': '#19519c',
        '500': '#0c3c7c',
        '600': '#0c3266',
      },
      purple: {
        '100': '#f4dcef',
        '600': '#872175',
      },
      green: {
        '100': '#f0f7ea',
        '300': '#99cc72',
        '600': '#017474',
      },
      red: {
        '100': '#fae1de',
        '300': '#db908b',
        '600': '#b82216',
      },
      gold: {
        '500': '#f6be5a',
        '600': '#f7a81b',
      },
    },
    screens: {
      'mobile-l': '576px', //   => @media (min-width: 576px) { ... }
      tablet: '768px', //       => @media (min-width: 768px) { ... }
      desktop: '992px', //      => @media (min-width: 992px) { ... }
      'desktop-l': '1440px', // => @media (min-width: 1440px) { ... }
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      '2': '2 2 0%',
      '3': '3 3 0%',
    },
    extend: {
      minWidth: {
        '9': '9.35rem',
        '16': '16rem',
        '24': '24rem',
        '32': '32rem',
        '38': '38rem',
      },
      maxWidth: {
        '7xl': '90rem',
      },
      maxHeight: {
        '75': '18.75rem',
      },
      padding: {
        // 74rem = 90rem (7xl) - 16rem (px-32)
        'center-two-columns': 'calc(calc(100vw - 74rem) / 2)',
      },
      spacing: {
        '7': '1.75rem',
        '11': '2.75rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '30': '7.5rem',
        '45': '11.25rem',
        '74': '18.5rem',
        '88': '22rem',
      },
      inset: {
        init: 'initial',
      },
      letterSpacing: {
        'wide-light': '0.01em',
      },
    },
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
    padding: ['first', 'last', 'responsive'],
    margin: ['first', 'last', 'responsive'],
    borderWidth: ['first', 'last', 'responsive'],
    backgroundColor: ['hover', 'focus', 'active', 'responsive'],
    textColor: ['hover', 'focus', 'active'],
    width: ['responsive'],
    height: ['responsive'],
  },
  plugins: [
    // TODO: Add custom plugins to implement dynamic utilities or components.
    // https://tailwindcss.com/docs/extracting-components#writing-a-component-plugin
    // https://tailwindcss.com/docs/adding-new-utilities#using-a-plugin
  ],
};

