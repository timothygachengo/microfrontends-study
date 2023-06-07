const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
/**
 * @type {import('webpack').Configuration}
 */
const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:3002/',
    },
    devServer: {
        port: 3002,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthApp': './src/bootstrap'
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
