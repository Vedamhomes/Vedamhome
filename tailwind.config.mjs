/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'custom-shadow': '0px 3px 8px rgba(0, 0, 0, 0.24)',
        'project-custom': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        'project-image': 'rgb(38, 57, 77) 0px 20px 30px -10px',
      },
    },
  },
  plugins: [],
};
