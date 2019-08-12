// Configuração do Webpack utilizado pelo storybook
const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'], // As extensões que serão interpretadas pelo webpack

    alias: { // Pseudônimo para pastas e arquivos
      modules: path.join(__dirname, '..', 'node_modules'), // Usado geralmente para importar arquivo de uma dependencia
      common: path.join(__dirname, '..', 'src', 'common'), // Local com componentes e outros arquivos comuns do projeto
      jquery: path.join(__dirname, '..', 'node_modules', 'jquery', 'dist', 'jquery.min.js'), // Local onde onde o jQuery está instalado no admin-lte
      bootstrap: path.join(__dirname, '..', 'node_modules', 'admin-lte', 'bootstrap', 'js', 'bootstrap.js'), // Local onde onde o bootstrap está instalado no admin-lte
    },
  },

  plugins: [
    new webpack.ProvidePlugin({ // Deixar o jQuery disponível
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],

  module: {
    rules: [{
      test: /.js[x]?$/, // Configura os arquios a serem lidos pelo loader
      loaders: [ require.resolve('@storybook/addon-storysource/loader') ], // Loader para apresentar o código no sotybook
      exclude: /node_modules/, // Ignorar as pastas
      include: [path.join(__dirname, '..', 'src')], // Apenas arquivos do src
      enforce: 'pre', // Executar antes dos loaders
    }, {
      test: /.js[x]?$/, // Configura os arquios a serem lidos pelo babel
      loader: 'babel-loader', // Babel ajuda a interpretar o código
      exclude: /node_modules/, // Ignorar a pasta
    }, {
      test: /\.css$/, // Tratar arquivos CSS
      loader: [
        'style-loader', // Inclui o css em uma tag <style> dentro do html
        'css-loader', // Interpreta @import e url() como import/require() e irá resolvê-los
      ],
    }, {
      test: /\.scss$/, // Tratar arquivos de código SCSS
      loader: [
        'style-loader', // Inclui o css em uma tag <style> dentro do html
        'css-loader', // Interpreta @import e url() como import/require() e irá resolvê-los
        'sass-loader', // Compila SASS e SCSS para CSS
      ],
    }, {
      test: /\.(woff2?|ttf|eot|jpe?g|png|gif|svg|ico)$/, // Configura os arquios a serem carregados na aplicação pelo file
      loader: 'file-loader', // Loader para carregar arquivos estáticos da aplicação
      query: {
        name: '[name].[ext]', // Nome de saída dos arquivos
      },
    }],
  },
};
