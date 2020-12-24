module.exports = {
  roots: ["<rootDir>/test"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    //"^.+\\.(ts|tsx)$": "ts-jest",
    //"^.+\\.(js|jsx)$": "babel-jest"
    "\\.[jt]sx?$": [
      "babel-jest",
      {
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          "@babel/preset-react"
        ],
        plugins: [
          "@babel/proposal-class-properties",
          "@babel/proposal-object-rest-spread"
        ]
      }
    ]
  }
};
