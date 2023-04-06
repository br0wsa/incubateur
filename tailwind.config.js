module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  theme: {
    fontFamily: {
      "open-dyslexic": ["OpenDyslexic-Regular"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("autoprefixer")],
};
