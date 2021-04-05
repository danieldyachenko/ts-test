const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (_, argv) => {
  const isProductionMode = argv.mode === 'production';
  return {
    mode: isProductionMode ? 'production' : 'development',
    target: 'web',
    entry: {
      index: './src/index.ts',
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].bundle.js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.ts', '.js', '.json'], // Расширения, которые используются
    },
    devServer: {
      index: 'index.html',
      contentBase: path.join(__dirname, 'public'), // Расположение статических файлов
      watchContentBase: true, // Изменение файлов вызывает полную перезагрузку страницы.
      //compress: true, // Включить сжатие gzip
      hot: true, // Горячая замена модуля
      //open: true,
      port: 4200,
      // noInfo: true, // Только ошибки и предупреждения о горячей перезагрузке
    },
    devtool: isProductionMode ? false : 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
          },
        },
        {
          test: /\.((c|sa|sc)ss)$/i, //For Less - /\.((c|le)ss)$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: {
                  auto: true, ///\.module\.\w+$/i.test(filename)
                  exportGlobals: true,
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['postcss-preset-env'],
                },
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images',
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[contenthash].[ext]',
                outputPath: 'fonts',
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new ESLintPlugin({
        extensions: ['ts', 'tsx', 'js', 'jsx'],
      }),
    ],
  };
};