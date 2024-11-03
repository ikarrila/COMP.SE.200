// jest.config.js
export default {
  collectCoverage: true,
  coverageDirectory: `coverage-${process.env.TEST_NUMBER}`, // Unique coverage folder for each parallel job
  coverageReporters: ["lcov", "text"]
};
