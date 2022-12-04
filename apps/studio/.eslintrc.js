module.exports = {
  root: true,
  extends: ['custom'],
  rules: {
    'import/no-unresolved': ['error', { ignore: ['.*:.*'] }],
  },
}
