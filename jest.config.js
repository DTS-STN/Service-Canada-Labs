module.exports = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    collectCoverageFrom: [
        "components/**/*.{js,jsx}",
        "lib/**/*.{js,jsx}",
        "pages/**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**"
    ]
};