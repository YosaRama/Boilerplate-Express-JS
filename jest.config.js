module.exports = {
  setupFilesAfterEnv: ['./jest.mock.js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
