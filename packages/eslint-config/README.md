# @dropshare/eslint-config

Shared ESLint configuration for Dropshare monorepo. Uses ESLint 9+ flat config format.

## Installation

This package is part of the Dropshare monorepo and is automatically available to all workspace packages.

## Usage

Create an `eslint.config.js` (or `eslint.config.mjs`) file in your app/package:

```javascript
import baseConfig from "@dropshare/eslint-config";

export default [
  ...baseConfig,
  {
    // Your app-specific overrides
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Custom rules
    },
  },
];
```

## Features

- ESLint 9+ flat config format
- TypeScript support
- React and React Hooks support
- Prettier integration
- Node.js and browser globals
- Sensible default rules

## Configuration

The config includes:
- Base JavaScript recommended rules
- TypeScript ESLint recommended rules
- React plugin recommended rules
- React Hooks rules
- Prettier integration (disables conflicting rules)

## Customization

You can extend and override the base config in your `eslint.config.js`:

```javascript
import baseConfig from "@dropshare/eslint-config";

export default [
  ...baseConfig,
  {
    files: ["**/*.test.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
```

