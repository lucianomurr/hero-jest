module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/"
  ],
  globalSetup: 'jest-preset-angular/global-setup',
}
