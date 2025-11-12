import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

/**
 * Shared ESLint configuration for Dropshare
 * Uses ESLint 9+ flat config format
 *
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  // Base JavaScript recommended rules
  js.configs.recommended,

  // Prettier integration (must be last)
  eslintConfigPrettier,

  // TypeScript ESLint recommended configs
  ...tseslint.configs.recommended,

  // React plugin recommended config
  pluginReact.configs.flat.recommended,

  // Language options with globals
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2022,
      },
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  // Plugins and rules
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // React Hooks rules
      ...pluginReactHooks.configs.recommended.rules,

      // TypeScript rules
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // React rules
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "react/prop-types": "off", // Using TypeScript instead
      "react-hooks/exhaustive-deps": "warn",

      // General rules
      "no-console": "warn",
    },
  },

  // Ignore patterns
  {
    ignores: [
      "dist/**",
      "build/**",
      ".next/**",
      "node_modules/**",
      "*.config.js",
      "*.config.mjs",
    ],
  },
];

