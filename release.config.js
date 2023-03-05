module.exports = {
  branches: [
    'main',
    'next',
    'semantic-release',
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true }
  ],
  tagFormat: '${version}',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
        }
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        presetConfig: {
          header: 'Release Notes Of NGX Multi Keywords Highlighter',
          commitUrlFormat: 'https://github.com/dylannnn/ngx-multi-keywords-highlighter/commit/{{hash}}',
          compareUrlFormat: 'https://github.com/dylannnn/ngx-multi-keywords-highlighter/compare/{{previousTag}}...{{currentTag}}',
          releaseCommitMessageFormat: 'chore(release): {{currentTag}}',
          tagPrefix:  '',
          types: [
            {
              type: 'build',
              section: 'BUILD SYSTEM/EXTERNAL DEPENDENCIES'
            },
            {
              type: 'chore',
              hidden: true
            },
            {
              type: 'ci',
              section: 'CI CHANGES'
            },
            {
              type: 'docs',
              section: 'DOCUMENTATION'
            },
            {
              type: 'feat',
              section: 'FEATURES'
            },
            {
              type: 'fix',
              section: 'BUG FIXES'
            },
            {
              type: 'perf',
              section: 'PERFORMANCE'
            },
            {
              type: 'refactor',
              section: 'REFACTOR'
            },
            {
              type: 'revert',
              section: 'REVERTED'
            },
            {
              type: 'style',
              section: 'UI/UX CHANGES'
            },
            {
              type: 'test',
              section: 'TEST'
            }
          ],
          bumpFiles: [
            {
              filenam: 'package.json',
              typ: 'json'
            },
            {
              filename: 'package-lock.json',
              type: 'json'
            },
            {
              filename: 'libs/ngx-multi-keywords-highlighter/package.json',
              type: 'json'
            }
          ]
        }
      }
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md'
      }
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'dist/libs/ngx-multi-keywords-highlighter'
      }
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json', 'libs/ngx-multi-keywords-highlighter/package.json'],
        message: 'chore(release): set `package.json` to ${nextRelease.version} [skip ci]'
      }
    ]
  ],
  debug: true
}