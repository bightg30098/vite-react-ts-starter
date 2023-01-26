module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'tailwindcss'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-else-return': 'warn',
    'newline-before-return': 'warn',
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: ['block-like', 'multiline-const', 'multiline-let', 'multiline-var', 'directive'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['block-like'],
      },
      {
        blankLine: 'always',
        prev: ['import', 'cjs-import'],
        next: ['export', 'cjs-export', 'block-like', 'const', 'let', 'var', 'function'],
      },
    ],
    curly: ['warn', 'multi-line'],
  },
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      rules: {
        'import/order': [
          'warn',
          {
            groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@/**',
                group: 'external',
                position: 'after',
              },
            ],
            alphabetize: {
              order: 'asc',
            },
            pathGroupsExcludedImportTypes: ['type'],
            'newlines-between': 'always',
          },
        ],
        'import/no-duplicates': [
          'warn',
          {
            considerQueryString: true,
          },
        ],
        'import/no-unresolved': 'error',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    tailwindcss: {
      callees: ['clsx', 'twMerge'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.json'],
      },
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.json'],
        map: [['@', './src']],
      },
    },
  },
}
