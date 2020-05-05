module.exports = {
  theme: {
    fontFamily: {
      sans: ['metropolis', 'sans-serif'],
      serif: ['Lora', 'georgia', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
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
