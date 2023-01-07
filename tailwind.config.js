/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'toutemgreen':'#5fd788',
        'toutemgrey':'#9ca3af',
        'whiteshade':'#f9fafb',
        'greyshade':'#1f2937',
        'greyshade1':'#6b7280',
        'bg-rgba': 'rgba(255, 255, 255, 0.3)',
        'bg-rgba1': 'rgba(255, 255, 255, 0.75)',
      },

      fontFamily: {
        'sp':['"Source Sans Pro"','sans-serif'],
        'muli': ['"Mulish"', 'sans-serif']
      },
      backgroundImage: {
        'diffuse': "url('/src/diffuser.png')",
        'diffuse1': "url('/src/diffuser2.png')",
        'soap': "url('/src/soaps.png')",
        'soaps': "url('/src/soap.png')",
        'soa': "url('/src/soa.png')",
        'flower': "url('/src/flower1.png')",
        'basket': "url('/src/basket.png')",
        'cream': "url('/src/cream.png')",
        'glow': "url('/src/glow.png')",
      },
      boxShadow: {
        'cust': '0px 4px 8px rgba(0, 0, 0, 0.1)'
      },
      backgroundSize: {
        '30%':'30%',
      }
    },
  },
  plugins: [],
}
