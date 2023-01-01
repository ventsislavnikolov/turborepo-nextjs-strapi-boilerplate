module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/strict',
    'plugin:react/recommended',
    'plugin:security/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'next',
    'turbo',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: ['react', 'jsx-a11y', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    complexity: ['error', 20],
    semi: ['error', 'never'],
    eqeqeq: ['error', 'smart'],
    quotes: ['error', 'single'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-var': 'error',
    'brace-style': 'error',
    'prefer-template': 'error',
    'space-before-blocks': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'import/prefer-default-export': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'react/prop-types': [
      'error',
      {
        ignore: ['children', 'location'],
      },
    ],
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any'],
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        tabWidth: 2,
        useTabs: false,
        parser: 'flow',
        printWidth: 100,
        endOfLine: 'auto',
        singleQuote: true,
        bracketSpacing: true,
        trailingComma: 'all',
        jsxSingleQuote: true,
        arrowParens: 'always',
        eslintIntegration: true,
        jsxBracketSameLine: true,
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.tsx', '**/*.spec.tsx'],
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    next: {
      rootDir: 'packages/eslint-config-react/',
    },
  },
}
