module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': 1,
    'linebreak-style': ["error", "unix"],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'jsx-a11y/no-onchange': 0,
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'react/destructuring-assignment': [
      2,
      'always',
      { 'ignoreClassFields': true }
    ],
    'react/static-property-placement': [1, 'static public field'],
    'react/state-in-constructor': [1, 'never'],
    'react/sort-comp': [
      2,
      {
        'order': [
          'static-methods',
          'static-variables',
          'instance-variables',
          'lifecycle',
          'everything-else',
          'render'
        ]
      }
    ]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
