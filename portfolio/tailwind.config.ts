import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'league-gothic': ['league gothic', 'helvetica', 'serif'],
      },
      colors: {
        'custom-white': '#F9FBF8',
      },
      backgroundImage: {
        'custom-bg': "url('../assets/photos/background-img.jpg')",
      },
      transitionProperty: {
        'background-position': 'background-position',
      },
      backgroundPosition: {
        'center-45': 'center 45%',
      }
    },
  },
  plugins: [],
};
export default config;
