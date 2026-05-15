/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aws: {
          primary: "#FF9900",
          dark: "#232F3E",
          light: "#146EB4",
          accent: "#FF9900",
        },
      },
      backgroundImage: {
        "gradient-aws": "linear-gradient(135deg, #232F3E 0%, #146EB4 100%)",
      },
    },
  },
  plugins: [],
}
