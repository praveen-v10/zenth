/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      fontFamily:{
        PO:['Poppins'],
        OS:['Open Sans'],
        MO:['Montserrat'],
        K:['Kaushan Script'],
      },

      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
    },
    keyframes: {
        'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
        }
    }   
    
    },
 
  },
  plugins: [],
};
