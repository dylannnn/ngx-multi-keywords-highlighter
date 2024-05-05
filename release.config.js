module.exports = {
  branches: [
    'main',
    { name: 'feature/**', prerelease: "${name.split('/').slice(0, 2).join('-').toLowerCase()}" },
    { name: 'develop', prerelease: true, channel: "develop" },
    { name: 'next', prerelease: true, channel: "next" },
    { name: 'beta', prerelease: true, channel: "beta" }
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
        parserOpts: {
          "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
        },
        presetConfig: {
          header: '# Release Notes Of NGX Multi Keywords Highlighter',
          commitUrlFormat: 'https://github.com/dylannnn/ngx-multi-keywords-highlighter/commit/{{hash}}',
          compareUrlFormat: 'https://github.com/dylannnn/ngx-multi-keywords-highlighter/compare/{{previousTag}}...{{currentTag}}',
          releaseCommitMessageFormat: 'chore(release): {{currentTag}}',
          tagPrefix: '',
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
              filename: '.compodocrc.yaml',
              type: 'yaml'
            },
            {
              filename: 'libs/ngx-multi-keywords-highlighter/src/lib/core/version.ts',
              type: 'typescript'
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
    [
      '@semantic-release/exec',
      {
        "verifyReleaseCmd": "bash tools/semantic-release/update-version.sh ${lastRelease.version} ${nextRelease.version}",
      }
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json', '.compodocrc.yaml', 'libs/ngx-multi-keywords-highlighter/package.json', 'libs/ngx-multi-keywords-highlighter/src/lib/core/version.ts'],
        message: 'chore(release): release new version: ${nextRelease.version} [skip ci]'
      }
    ]
  ]
}