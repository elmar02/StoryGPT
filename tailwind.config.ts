import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: 'clamp(1rem, 2.5vw, 1.25rem)', // Responsive base font size
        lg: 'clamp(1.125rem, 2.5vw, 1.5rem)', // Large size
        xl: 'clamp(1.25rem, 3vw, 1.75rem)', // Extra large size
        '2xl': 'clamp(1.5rem, 3.5vw, 2rem)', // Double extra large
        '3xl': 'clamp(2rem, 4vw, 2.5rem)', // Triple extra large
        '4xl': 'clamp(2.5rem, 5vw, 3rem)', // Quadruple extra large
        '5xl': 'clamp(3rem, 6vw, 4rem)', // Quintuple extra large
      },
      transitionDuration: {
        DEFAULT: '500ms', // Change default to 500ms
      },
    },
  },
  plugins: [],
};
export default config;
