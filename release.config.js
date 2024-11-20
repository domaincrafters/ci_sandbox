module.exports = {
    branches: ['main', { name: 'beta', prerelease: true }],
    repositoryUrl: 'https://github.com/domaincrafters/ci_sandbox.git',
    plugins: [
      '@semantic-release/commit-analyzer', // Analyzes the commits to determine the version bump (major/minor/patch)
      '@semantic-release/release-notes-generator', // Generates release notes from the commits
      '@semantic-release/changelog', // Updates the changelog file
      '@semantic-release/git', // Commits the changelog and version bump
      '@semantic-release/github', // Publishes releases to GitHub
    ]
  };
  