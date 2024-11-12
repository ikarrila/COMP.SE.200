// jest.config.js
export default {
  collectCoverage: true,
  coverageDirectory: `coverage-${process.env.TEST_NUMBER}`,
  coverageReporters: ["lcov", "text"],

  //collectCoverageFrom: ["src/**/*.test.js",
  // '!src/**/.*.js',
  //  "!src/.internal/**"
  //],
  testMatch: ["**/*.test.js"],
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest-chain.js'],
};
