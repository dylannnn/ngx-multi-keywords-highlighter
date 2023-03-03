import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'ngx-multi-keywords-highlighter',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageReporters: ['json', 'html'],
  coverageDirectory: '../../coverage/libs/ngx-multi-keywords-highlighter',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
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
        outputDirectory: 'reports',
        outputName: 'unit-report.xml',
      },
    ],
  ],
};
export default config;

// export default {
//   displayName: 'ngx-multi-keywords-highlighter',
//   preset: '../../jest.preset.js',
//   setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
//   globals: {
//     'ts-jest': {
//       tsconfig: '<rootDir>/tsconfig.spec.json',
//       stringifyContentPathRegex: '\\.(html|svg)$',
//     },
//   },
//   coverageDirectory: '../../coverage/libs/ngx-multi-keywords-highlighter',
//   transform: {
//     '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
//   },
//   transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
//   snapshotSerializers: [
//     'jest-preset-angular/build/serializers/no-ng-attributes',
//     'jest-preset-angular/build/serializers/ng-snapshot',
//     'jest-preset-angular/build/serializers/html-comment',
//   ]
// };
