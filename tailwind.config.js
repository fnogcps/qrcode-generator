module.exports = {
  content: ["./src/*.html", "./src/**/*.html"],
  darkMode: ["class"],
  theme: {
    container: (theme) => ({
      center: true,
    }),
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [require("daisyui")],
};
