module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],

  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'comma-dangle': ['warning', 'always-multiline'],
  },

  'extends': [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ]
}
