/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sanf-serif'],
        PoppinsLight: ['Poppins Light', 'sanf-serif'],
        PoppinsSemiBold: ['Poppins SemiBold', 'sanf-serif'],
        PoppinsBold: ['Poppins Bold', 'sanf-serif'],
        Podkova: ['Podkova', 'sanf-serif']
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 2s linear infinite',
      },
    },
  },
  plugins: [],
};
