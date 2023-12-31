import type { Config } from 'jest';

const config: Config = {
  displayName: 'demo',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {},
  coverageReporters: ['json', 'html', 'json-summary', 'text', 'lcov'],
  collectCoverage: true,
  coverageDirectory: '../../dist/coverage/apps/demo',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'dist/reports',
        outputName: 'unit-report.xml',
      },
    ],
  ],
};

export default config;
