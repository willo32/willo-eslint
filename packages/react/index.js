module.exports = {
    extends: [
        'eslint-config-willo-base',
        './rules/react',
        './rules/react-a11y',
        './rules/react-hooks',
    ].map(require.resolve),
    rules: {},
};
