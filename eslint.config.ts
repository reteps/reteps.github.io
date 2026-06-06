import js from '@eslint/js';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { configs as astroConfigs } from 'eslint-plugin-astro';
import { createNodeResolver, importX } from 'eslint-plugin-import-x';
import promise from 'eslint-plugin-promise';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { config, configs, parser } from 'typescript-eslint';

export default config(
  {
    ignores: ['node_modules/**', 'dist/**', '.astro/**', 'public/**', '**/*.cjs', 'pnpm-lock.yaml']
  },
  js.configs.recommended,
  ...configs.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  promise.configs['flat/recommended'],
  ...svelte.configs['flat/base'],
  ...astroConfigs.recommended,
  {
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          project: './tsconfig.json'
        }),
        createNodeResolver()
      ]
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2017
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'import-x/no-unresolved': [
        'error',
        {
          ignore: ['\\?', '^~icons/', '^astro:']
        }
      ]
    }
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off'
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser,
        extraFileExtensions: ['.svelte']
      }
    },
    rules: {
      'svelte/no-reactive-functions': 'off'
    }
  }
);
