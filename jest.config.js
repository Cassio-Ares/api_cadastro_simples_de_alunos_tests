module.exports = {
  clearMocks: true,
  collectCoverage:true,
  collectCoverageFrom:[
    '<rootDir>/src/module/aluno/aluno.model.ts'
  ],
  coverageDirectory:'coverage',
  testEnvironment:'node',
  coverageReporters:[
    "text-summary",
    "lcov"
  ],

  preset:'ts-jest',
  testMatch:['<rootDir>/src/module/**/**/*.spec.ts']
}