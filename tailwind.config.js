module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        showIconKey: {
          '0%': {
            transform: 'translateX(-1rem)',
            opacity: '0'
          },

          '100%': { transform: 'translateX(0.5rem)' },
        },
      },
      animation: {
        'showIcon': 'showIconKey 400ms ease-out ',
      },
      colors: {

        'soft-purple': '#9B6DFF',
        'soft-purple-hover': '#AA83FF',
        'soft-purple-outline-hover': '#EFE8FF',
        'soft-purple-disabled': '#CEB7FF',

        'light-purple': "#7C40FF",

        'overdue-color': '#FF304C',
        'overdue-color-hover': 'rgba(255,48,76,0.5)',

        'paid-color': '#87E460',
        'paid-color-hover': 'rgba(135,228,96,0.5)',

        'notif-created': '#21A9FF',
        'notif-created-hover': 'rgba(33,169,255,0.5)',


        'unpaid-color': '#FFCC00',
        'unpaid-color-hover': 'rgba(255,204,0,0.5)',

      },
      boxShadow: {
        'invoicein': '4px 5px 10px rgba(155, 109, 255, 0.15)',
        'card-import-export': '4px 5px 10px 4px rgba(155, 109, 255, 0.2)',
        'card-bottom': '4px -1px 10px 4px rgba(155, 109, 255, 0.2)'
      }

    },
  },
  plugins: [require("@tailwindcss/forms")],
}
