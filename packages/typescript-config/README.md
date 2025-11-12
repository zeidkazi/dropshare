# @dropshare/typescript-config

Shared TypeScript configuration for Dropshare monorepo.

## Installation

This package is part of the Dropshare monorepo and is automatically available to all workspace packages.

## Usage

### Base Configuration

For React/Web apps:

```json
{
  "extends": "@dropshare/typescript-config/base",
  "compilerOptions": {
    "jsx": "react-jsx",
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

### Node.js Configuration

For Node.js/Server apps:

```json
{
  "extends": "@dropshare/typescript-config/node",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

## Available Configs

- `@dropshare/typescript-config/base` - Base TypeScript configuration
- `@dropshare/typescript-config/node` - Node.js specific configuration

## Features

- ES2022 target
- Strict mode enabled
- Module resolution: bundler (base) or node (node config)
- Source maps enabled
- Declaration files enabled
- Incremental compilation

