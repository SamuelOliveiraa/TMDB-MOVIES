/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit-minmax": "repeat(auto-fit, minmax(250px, 1fr))"
      },
      width: {
        248: "248px"
      },
      height: {
        372: "372px"
      }
    }
  },
  plugins: []
};
