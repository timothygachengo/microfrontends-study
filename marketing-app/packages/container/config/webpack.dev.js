const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

/**
 * @type {import('webpack').Configuration}
 */
const devConfig = {
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:3001/remoteEntry.js',
                auth: 'auth@http://localhost:3002/remoteEntry.js',
                cra: 'cra@http://localhost:3004/remoteEntry.js',
            },
            shared: {
                ...packageJson.dependencies,
                react: {
                    singleton: true,
                    requiredVersion: packageJson.dependencies.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: packageJson.dependencies["react-dom"],
                },
            }
        }),
    ]
}

module.exports = merge(commonConfig, devConfig);
