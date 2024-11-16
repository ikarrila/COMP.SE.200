// jest.config.js
export default {
  collectCoverage: true,
  coverageDirectory: `coverage-${process.env.TEST_NUMBER}`,
  coverageReporters: ["lcov", "text"],
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/.internal/*.js",
  ],
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest-chain.js'],
};