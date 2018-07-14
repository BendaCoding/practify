module.exports = {
  "collectCoverageFrom": [
    "**/*[^(.d)].{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  // "coverageThreshold": {
  //   "global": {
  //     "branches": 50,
  //     "functions": 50,
  //     "lines": 50,
  //     "statements": 50
  //   }
  // },
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