import markdown from '@eslint/markdown'
import tsParser from '@typescript-eslint/parser'
import unocss from '@unocss/eslint-config/flat'
import astroParser from 'astro-eslint-parser'
import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'
import astroPlugin from 'eslint-plugin-astro'
import importPlugin from 'eslint-plugin-import-x'
import unicornPlugin from 'eslint-plugin-unicorn'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig(
  {
    ignores: [
      'dist/**',
      '.astro/**',
      '**/node_modules/**',
      'public/**',
      'playwright-report/**',
      '.netlify/**',
      'src/**/.astro/**'
    ]
  },

  // Base configuration
  {
    files: ['**/*.{js,mjs,cjs,ts,astro}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      'import-x': importPlugin,
      unicorn: unicornPlugin
    },
    rules: {
      ...unicornPlugin.configs.recommended.rules,
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/null-as-undefined': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/prefer-query-selector': 'warn',
      'unicorn/no-array-reverse': 'warn',
      'unicorn/no-array-sort': 'warn',
      'unicorn/no-useless-undefined': 'off',

      'no-console': ['warn', { allow: ['warn', 'error'] }],

      'import-x/no-duplicates': 'error',
      'import-x/no-unresolved': 'off', // Handled by TypeScript
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
            'object',
            'type'
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ]
    }
  },

  // JS/TS
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    extends: [...tseslint.configs.recommendedTypeChecked, ...tseslint.configs.stylisticTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' }
      ],
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },

  // JS-only rules
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off'
    }
  },

  // Tests
  {
    files: ['tests/**/*.ts', '**/*.spec.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off'
    }
  },

  // Astro
  unocss,
  ...astroPlugin.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
        project: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      'astro/no-unused-define-vars-in-style': 'error',
      'unocss/order': 'off',
      'unocss/order-attributify': 'off'
    }
  },

  // Markdown
  {
    files: ['**/*.md'],
    plugins: {
      markdown
    },
    language: 'markdown/commonmark'
  },

  // Prettier (must be last)
  eslintConfigPrettier
)
