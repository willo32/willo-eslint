# eslint-config-willo-typescript

ESLint plugin to enforce Willo coding rules for Typescript projects

## Installation

```sh
$ yarn add --dev eslint-config-willo-typescript
```

## Usage

### Via `.eslintrc.js` (Recommended)

```js
module.exports = {
    extends: ['eslint-config-willo-typescript'],
    parserOptions: {
        project: __dirname + '/tsconfig.json',
    },
    rules: {
        // My Rules
    },
};
```
