module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  plugins: ['prettier'],
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: ['dist/*.js'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': 2
  }
};
