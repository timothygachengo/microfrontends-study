const { dependencies } = require('./package.json');

module.exports = {
    name: 'cra',
    filename: 'remoteEntry.js',
    exposes: {
        './CraApp': './src/bootstrap'
    },
    shared: {
        ...dependencies,
        react: {
            singleton: true,
            requiredVersion: dependencies['react'],
        },
        'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
        },
    },
};
