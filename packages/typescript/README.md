# eslint-willo-config-typescript

ESLint plugin to enforce Willo coding rules for Typescript projects

## Installation

```sh
$ yarn add --dev eslint-willo-config-typescript
```

## Usage

### Via `.eslintrc.js` (Recommended)

```js
module.exports = {
    extends: ['eslint-willo-config-typescript'],
    parserOptions: {
        project: __dirname + '/tsconfig.json',
    },
    rules: {
        // My Rules
    },
};
```
