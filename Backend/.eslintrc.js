module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'prettier/prettier': 'error',
  },
};
