const nextJest = require("next/jest");

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config = {
  testEnvironment: "jsdom",
  watchPathIgnorePatterns: ["globalConfig"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/cypress/",
  ],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
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
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "coverage", outputName: "junit.xml" }],
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
