export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'],
      },
      maxWidth: {
        page: '1200px',
      },
      fontSize: {
        small: ['16px', { lineHeight: '19px' }],
        medium: ['18px', { lineHeight: '29px' }],
        large: ['32px', { lineHeight: '38px' }],
        xlarge: ['60px', { lineHeight: '66px' }],
        xxlarge: ['72px', { lineHeight: '84px' }],
      },
      colors: {
        white: '#ffffff',
        grey: '#ECEBEC',
        purple: {
          light: '#C8A3F0',
          DEFAULT: '#6D09D8',
        },
        blue: {
          light: '#A3CDF0',
        },
      },
      backgroundImage: {
        grid: `linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 1px),
           linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px)`,
      },
      backgroundSize: {
        grid: '20px 20px',
      },
    },
  },
  plugins: [],
}
