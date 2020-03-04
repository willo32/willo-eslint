module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        'eslint-config-willo-base',
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
    ],
    rules: {
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/interface-name-prefix': [2, 'never'],
        '@typescript-eslint/member-ordering': [2, {
            default: [
                // Index signature
                // No accessibility for index signature. See above.
                // Fields
                'private-field', // = ['private-static-field', 'private-instance-field'])
                'protected-field', // = ['protected-static-field', 'protected-instance-field'])
                'public-field', // = ['public-static-field', 'public-instance-field'])

                // Constructors
                'constructor',

                // Only the accessibility of constructors is configurable. See below.
                // Methods
                'private-method', // = ['private-static-method', 'private-instance-method'])
                'protected-method', // = ['protected-static-method', 'protected-instance-method'])
                'public-method', // = ['public-static-method', 'public-instance-method'])
            ]
        }],
        // Allow requires
        '@typescript-eslint/no-require-imports': 0,
        // Allow empty
        '@typescript-eslint/no-empty-interface': 0,
    },
};
