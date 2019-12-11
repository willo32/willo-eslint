module.exports = {
    extends: [
        'eslint-config-willo-react',
        './rules/react-native',
    ].map(require.resolve),
    rules: {},
};
