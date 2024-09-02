module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primecolor: "#118a7e",
        secoundarycolor: "#a3de83",
      },
      screens: {
        xs: { max: "480px" },
        sm: { max: "780px" },
      },
    },
  },
  plugins: [],
};