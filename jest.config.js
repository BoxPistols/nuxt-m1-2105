module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1", // '@'エイリアスをプロジェクトのルートディレクトリにマッピング
  },
  moduleFileExtensions: ["js", "vue", "json"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.scss$": "jest-css-modules-transform",
    collectCoverage: true,
    collectCoverageFrom: [
      "<rootDir>/components/**/*.vue",
      "<rootDir>/pages/**/*.vue",
    ],
  },
};
