module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  plugins: [ 'json' ],
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/no-parsing-error": ["error", {
      "invalid-first-character-of-tag-name": false
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}