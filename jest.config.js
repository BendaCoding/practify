module.exports = {
  "collectCoverageFrom": [
    "**/*[^(.d)].{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!src/storybook/**",
  ],
  "coverageThreshold": {
    "global": {
      "branches": 1,
      "functions": 1,
      "lines": 1,
      "statements": 1
    }
  },
  "coveragePathIgnorePatterns": [
    "<rootDir>/cypress"
  ],
  "moduleFileExtensions": [
    "js",
    "jsx",
    "ts",
    "tsx",
  ],
  "moduleNameMapper": {
    "^practify/(.*)": "<rootDir>/src/$1"
  },
  "modulePaths": [
    "<rootDir>/node_modules/"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/cypress",
    "<rootDir>/scripts"
  ],
  "testRegex": "(/__tests__/.*|(\\.|/)(test))\\.(jsx?|tsx?)$",
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  }
}