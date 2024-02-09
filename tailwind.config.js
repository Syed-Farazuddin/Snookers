/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: "Kumbh Sans , sans-serif",
      },
      colors: {
        Orange: "hsl(26, 100%, 55%)",
        PaleOrange: "hsl(25, 100%, 94%)",
        VeryDarkBlue: "hsl(220, 13%, 13%)",
        DarkGrayishBlue: "hsl(219, 9%, 45%)",
        LightGrayishBlue: " hsl(223, 64%, 98%)",
        pBlack: "hsl(0, 0%, 0%)",
      },
      screens: {
        xsm: "320px",
        md: "420px",
      },
    },
  },
  plugins: [],
};
