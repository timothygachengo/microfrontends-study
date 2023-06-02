const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    mode: 'development',
    devServer: {
        port: 3000,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            filename: 'remoteEntry.js',
            remotes: {
                products: 'products@http://localhost:3001/remoteEntry.js',
                cart: 'cart@http://localhost:3002/remoteEntry.js',
            },
            shared: {
                '@faker-js/faker': {
                    singleton: true,
                    eager: true,
                },
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ]
}
