import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#03081D",
      },
      fontFamily: {
        "glitch": ["Glitch", "sans-serif"],
        "offbittrialbold": ["OffBitTrialBold", "sans-serif"],
        "offbittrial": ["OffBitTrial", "sans-serif"],
        "offbittrialdot": ["OffBitTrialDot", "sans-serif"],
        "montserrat": ["var(--font-monsterrat)", "sans-serif"],
        
      },
      screens: {
        sm: {
          min: "300px",
          max: "640px",
        },
        md: {
          min: "640px",
          max: "1280px",
        },
        lg: {
          min: "1280px",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
