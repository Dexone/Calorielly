import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-config-prettier'

export default [
  { ignores: ['node_modules', 'dist'] },

  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: { vue, '@typescript-eslint': tseslint, import: importPlugin },
    rules: {
      ...vue.configs['flat/recommended'].rules,
      ...tseslint.configs.recommended.rules,
        'import/first': 'error',
      'import/order': [
        'error',
        { alphabetize: { order: 'asc' }, 'newlines-between': 'always' },
      ],
    },
  },

  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: { '@typescript-eslint': tseslint, import: importPlugin },
    rules: {
      ...tseslint.configs.recommended.rules,
        'import/first': 'error',
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'], // стандартные модули и npm-пакеты
            'internal', // абсолютные импорты внутри проекта
            ['parent', 'sibling', 'index'], // относительные импорты
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },

  prettier, // отключает конфликтующие правила
]
