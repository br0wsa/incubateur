// vitest.config.js

export default {
  test: {
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.css$": "<rootDir>/node_modules/jest-css-modules-transform",
    },
    reporters: ["default", "html"],
  },
};
