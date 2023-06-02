const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    mode: 'development',
    devServer: {
        port: 3001,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/index',
            },
            shared: {
                '@faker-js/faker': {
                    singleton: true,
                },
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ]
}
