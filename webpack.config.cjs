const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isCypress = process.env.NODE_ENV === 'cypress';

module.exports = {
    mode: isCypress ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
        ],
    },
    plugins: isCypress
        ? []
        : [
            new HtmlWebpackPlugin({
                template: './public/index.html',
            }),
        ],
    devtool: isCypress ? 'eval-cheap-module-source-map' : 'source-map',
};
