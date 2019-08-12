const webpack = require('webpack');
const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  devtool: 'source-map', // Ajuda no debug pelo navegador, apresentando alguns erros no código do projeto

  entry: [
    path.join(__dirname, 'src', 'index.jsx'), // Arquivo inicial de entrada, a partir daqui toda a aplicação é carregada
    path.join(__dirname, 'src', 'common', 'scss', 'dependencies.scss'), // Arquivo com importações dos estilos das dependencias
    path.join(__dirname, 'src', 'common', 'scss', 'custom.scss'), // Arquivo com estilos customizados
  ],

  output: {
    filename: '[name].js', // Nome gerado automáticamente
  },

  devServer: { // Servidor de desenvolvimento
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000,
  },

  resolve: {
    extensions: ['.js', '.jsx'], // As extensões que serão interpretadas pelo webpack

    alias: { // Pseudônimo para pastas e arquivos
      modules: path.join(__dirname, 'node_modules'), // Usado geralmente para importar arquivo de uma dependencia
      common: path.join(__dirname, 'src', 'common'), // Local com componentes e outros arquivos comuns do projeto
      images: path.join(__dirname, 'src', 'images'), // Local com imagens do projeto
      jquery: path.join(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.min.js'), // Local onde onde o jQuery está instalado no admin-lte
      bootstrap: path.join(__dirname, 'modules', 'admin-lte', 'bootstrap', 'js', 'bootstrap.js'), // Local onde onde o bootstrap está instalado no admin-lte
    },
  },

  plugins: [
    new DashboardPlugin(), // Fornece informaçõe do progresso ao webpack-dashboard

    new webpack.ProvidePlugin({ // Deixar o jQuery disponível
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),

    new HtmlPlugin({ // Gera o html de forma dinâmica
      title: 'Beleaf - Marmitas', // Título a ser exibido na página
      template: path.join(__dirname, 'src', 'html', 'template.html'), // Template no padrão ejs para gerar o html de forma dinâmica
    }),
  ],

  module: {
    rules: [{
      test: /.js[x]?$/, // Configura os arquios a serem lidos pelo babel
      loader: 'babel-loader', // Babel ajuda a interpretar o código
      exclude: /node_modules/, // Ignorar a pasta
    }, {
      test: /\.css$/, // Tratar arquivos CSS
      sideEffects: true,
      loader: [
        'style-loader', // Inclui o css em uma tag <style> dentro do html
        'css-loader', // Interpreta @import e url() como import/require() e irá resolvê-los
      ],
    }, {
      test: /\.scss$/, // Tratar arquivos de código LESS
      sideEffects: true,
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
