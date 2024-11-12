// jest.config.js
export default {
  collectCoverage: true,
  coverageDirectory: `coverage-${process.env.TEST_NUMBER}`,
  coverageReporters: ["lcov", "text"],
  transform: {
    "^.+\\.js$": "babel-jest"
  }
};