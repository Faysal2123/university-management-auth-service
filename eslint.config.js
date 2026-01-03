import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    plugins: {
      prettier,
    },

    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
      'no-unused-expressions': 'error',
      'no-unreached': 'error',
      'consistent-type-definitions': ['error', 'interface'],

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-explicit-any': 'warn',
    },

    ignores: ['node_modules', 'dist'],
  },
]
