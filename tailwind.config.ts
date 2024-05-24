/** @type {import('tailwindcss').Config} */
const cssMacro = require('weapp-tailwindcss/css-macro')

module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      spacing: {
        '3.5': '0.875rem',
        '2px': '0.125rem',
        '23': '5.625rem',
        '12.5': '3.125rem',
      },
      borderRadius: {
        ssm: '0.25rem',
        '2.5xl': '1.25rem',
      },
      lineHeight: {
        '6.25': '1.5625rem',
        '13.55': '3.375rem',
      },
      width: {
        '3.5': '0.875rem',
        '16.5': '4.125rem',
        '15': '3.75rem',
        '18.25': '4.8125rem',
      },
      height: {
        '3.5': '0.875rem',
        '6.25': '1.5625rem',
        '15': '3.75rem',
        '66': '16.5rem',
        '13.55': '3.375rem',
        '18.25': '4.8125rem',
      },
      colors: {
        'pomegranate-color': '#F12B2C',
        'pomegranate-color-8': '#F12B2C14',
        'big-stone-color': '#111A34',
        'manatee-color': '#858B9C',
        'athens-gray': '#F9FAFB',
        'border-color': '#E2E4EA',
        FBFBFB: '#FBFBFB',
        '858B9C': '#858B9C',
        F12B2C: '#F12B2C',
        F9FAFB: '#F9FAFB',
        FEEEEF: '#FEEEEF',
        E2E4EA: '#E2E4EA',
        F6F7F9: '#F6F7F9',
        '73D13D': '#73D13D',
        F4FCF0: '#F4FCF0',
        FFA940: '#FFA940',
        FFF9F0: '#FFF9F0',
        E6E6E6: '#E6E6E6',
        DD3230: '#DD3230',
        f8f8f8: '#f8f8f8',
        FFf9f0: '#FFf9f0',
        323233: '#323233',
      },
      backgroundColor: {
        'list-bg': '#F6F7F9',
        'msg-tip-color': '#FF4D4F',
        'FFFFFF-4': 'rgba(255, 255, 255, .4)',
      },
      textColor: {
        secondary: '#858B9CFF',
      },
      fontSize: {
        xxs: ['0.375rem', '0.5rem'],
      },
      backgroundImage: {},
    },
  },
  // https://weapp-tw.icebreaker.top/docs/quick-start/uni-app-css-macro
  plugins: [
    require('tailwindcss-animate'),
    cssMacro({
      variantsMap: {
        wx: 'MP-WEIXIN',
        '-wx': {
          value: 'MP-WEIXIN',
          negative: true,
        },
        // mv: {
        //   value: 'H5 || MP-WEIXIN'
        // },
        // '-mv': {
        //   value: 'H5 || MP-WEIXIN',
        //   negative: true
        // }
      },
    }),
  ],
  corePlugins: {
    preflight: false,
  },
  important: true,
}
