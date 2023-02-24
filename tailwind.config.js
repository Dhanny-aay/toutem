/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'toutemgreen':'#5fd788',
        'toutedark':'#1f2937',
        'toutedarkbox':'#374151',
        'toutemgrey':'#9ca3af',
        'whiteshade':'#f9fafb',
        'whiteshade1':'#f3f4f6',
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
        'diffuse': "url('/diffuser.png')",
        'diffuse1': "url('/diffuser2.png')",
        'soap': "url('/soaps.png')",
        'soaps': "url('/soap.png')",
        'soa': "url('/soa.png')",
        'flower': "url('/flower1.png')",
        'basket': "url('/basket.png')",
        'cream': "url('/cream.png')",
        'glow': "url('/glow.png')",
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
