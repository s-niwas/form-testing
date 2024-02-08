/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        backgroundImage: {
          "gradient-primary":
            "linear-gradient(180deg, #603AF8 0%, #3EF0A5 100%)",
          "gradient-secondary":
            "linear-gradient(106.21deg, #3333FF -1.55%, #F83A57 100.85%)",
        },
		
      },
    },
  },
  plugins: [],
};
