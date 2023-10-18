module.exports = {
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.svg$": "jest-transformer-svg",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/identity-obj-proxy",
    "^@assets(.*)$": "<rootDir>/src/assets$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@constants(.*)$": "<rootDir>/src/constants$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^@providers(.*)$": "<rootDir>/src/providers$1",
    "^@services(.*)$": "<rootDir>/src/services$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
  },
};
