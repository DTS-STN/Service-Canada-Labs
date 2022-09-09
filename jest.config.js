module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/cypress/",
  ],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  watchPathIgnorePatterns: ["globalConfig"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|graphql)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
  collectCoverageFrom: [
    "components/**/*.{js,jsx}",
    "lib/**/*.{js,jsx}",
    "pages/**/*.{js,jsx}",
    "middlewares/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  preset: "@shelf/jest-mongodb",
};
