module.exports = {
    extends: [
        'eslint-config-willo-base',
        'plugin:@typescript-eslint/recommended',
        './rules/fix.js',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        /*
         * Omit the project property as it should be defined in the project itself
         * project: `${__dirname}/tsconfig.json`,
         */
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js', '.jsx', '.json',
                    '.ts', '.tsx', '.native.js', '.d.ts'
                ]
            }
        }
    },
    plugins: [
        '@typescript-eslint',
        '@typescript-eslint/tslint',
    ],
    rules: {
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/tslint/config': [2, {
            lintFile: 'eslint-config-willo-typescript/tslint.json',
        }],
    },
};
