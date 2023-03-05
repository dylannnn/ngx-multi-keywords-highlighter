import type { Config } from 'jest';

const config: Config = {
  displayName: 'ngx-multi-keywords-highlighter',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {},
  coverageReporters: ['json', 'html', 'json-summary', 'text', 'lcov'],
  collectCoverage: true,
  coverageDirectory: '../../dist/coverage/libs/ngx-multi-keywords-highlighter',
  coverageThreshold: {
    global: {
      // TODO: increase to 80
      branches: 60,
      functions: 80,
      lines: 80,
      // TODO: reduce statements to 10 or 5
      statements: -40
    },
  },
  collectCoverageFrom: [
    '!<rootDir>/.storybook/**',
    '!<rootDir>/jest.config.ts',
    '!<rootDir>/tailwind.config.js',
    '!<rootDir>/src/index.ts',
    '!<rootDir>/src/public-api.ts',
    '!<rootDir>/**/*.stories.ts'
  ],
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ]
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment'
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'dist/reports',
        outputName: 'unit-report.xml',
      }
    ]
  ]
};

export default config;