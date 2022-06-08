module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        
        'soft-purple': '#9B6DFF',
        'soft-purple-hover': '#AA83FF',
        'soft-purple-outline-hover': '#EFE8FF',
        'soft-purple-disabled': '#CEB7FF',
        
        'overdue-color':'#FF304C',
        'paid-color':'#87E460',
        'notif-created':'#21A9FF',
        'unpaid-color':'#FFCC00',

      }
     
    },
  },
  plugins: [],
}
