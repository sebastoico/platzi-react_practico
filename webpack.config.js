const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',                // Archivo de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',                // Archivo de salida
    publicPath: '/'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],          // Extensiones a usar
    alias: {
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@logos': path.resolve(__dirname, 'src/assets/logos'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,              // Reglas .js y .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,                  // Reglas .html
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.s?[ca]ss$/,              // Reglas CSS y Sass
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/, // Reglas para imágenes
        type: 'asset/resource',
        generator: {
          filename: 'assets/pictures/[hash][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({               // Configuración plugin HTML
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({            // Configuración plugin CSS
      filename: '[name].css'
    })
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true
  }
}