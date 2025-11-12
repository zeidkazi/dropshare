# @dropshare/prettier-config

Shared Prettier configuration for Dropshare monorepo.

## Installation

This package is part of the Dropshare monorepo and is automatically available to all workspace packages.

## Usage

### Option 1: package.json

Add to your `package.json`:

```json
{
  "prettier": "@dropshare/prettier-config"
}
```

### Option 2: .prettierrc.json

Copy the config values into your `.prettierrc.json` file, or use Option 1 (package.json) which is recommended.

### Option 3: prettier.config.js (CommonJS)

Create a `prettier.config.js` file:

```javascript
module.exports = require("@dropshare/prettier-config");
```

### Option 4: prettier.config.mjs (ES Modules)

Create a `prettier.config.mjs` file:

```javascript
export default (await import("@dropshare/prettier-config")).default;
```

## Configuration

The config includes:
- Semicolons: enabled
- Trailing commas: ES5
- Single quotes: disabled (double quotes)
- Print width: 80 characters
- Tab width: 2 spaces
- Arrow parens: always
- End of line: LF

## Customization

To customize, create a `.prettierrc.json` file that extends the config and overrides specific settings:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

Or in `package.json`:

```json
{
  "prettier": {
    "printWidth": 100,
    "singleQuote": true
  }
}
```

