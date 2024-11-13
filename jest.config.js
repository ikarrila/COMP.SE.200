// jest.config.js
export default {
  collectCoverage: true,
  coverageDirectory: `coverage-${process.env.TEST_NUMBER}`,
  coverageReporters: ["lcov", "text"],
  collectCoverageFrom: [
    "src/**/filter.js",
    "src/**/isEmpty.js",
    "src/**/chunk.js",
    "src/**/eq.js",
    "src/**/get.js",
    "src/**/add.js",
    "src/**/isDate.js",
    "src/**/toNumber.js",
    "src/**/reduce.js",
    "src/**/isLength.js",
  ],
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest-chain.js'],
};