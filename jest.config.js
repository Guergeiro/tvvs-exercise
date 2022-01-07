/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  reporters: [
    "default",
    [
      "jest-sonar",
      {
        reportedFilePath: "relative",
      },
    ],
  ],
  collectCoverageFrom: ["./src/**"],
  coverageThreshold: {
    global: {
      lines: 50,
    },
  },
};
