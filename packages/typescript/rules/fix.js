module.exports = {
    rules: {
        'no-undef': 'off',
        'import/extensions': [
            'error', 'ignorePackages', {
                'js': 'never',
                'mjs': 'never',
                'jsx': 'never',
                'ts': 'never',
                'tsx': 'never',
            }
        ],
    },
};
