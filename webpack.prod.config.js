const webpack = require('webpack');
const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PreBuildPlugin = require('pre-build-webpack');
const fse = require('fs-extra');

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'index.jsx'), // Arquivo inicial de entrada, a partir daqui toda a aplicação é carregada
    path.join(__dirname, 'src', 'common', 'scss', 'dependencies.scss'), // Arquivo com importações dos estilos das dependencias
    path.join(__dirname, 'src', 'common', 'scss', 'custom.scss'), // Arquivo com estilos customizados
  ],

  output: {
    path: path.join(__dirname, '..', 'backend', 'public'), // Local de saída dos arquivos compilados
    filename: path.join('js', '[name]-[chunkhash:8].js'), // Nome gerado automáticamente com uma hash do conteúdo, após a compilação
    publicPath: '../',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss'], // As extensões que serão interpretadas pelo webpack

    alias: { // Pseudônimo para pastas e arquivos
      modules: path.join(__dirname, 'node_modules'), // Usado geralmente para importar arquivo de uma dependencia
      common: path.join(__dirname, 'src', 'common'), // Local com componentes e outros arquivos comuns do projeto
      images: path.join(__dirname, 'src', 'images'), // Local com imagens do projeto
      jquery: path.join(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.min.js'), // Local onde onde o jQuery está instalado no admin-lte
      bootstrap: path.join(__dirname, 'modules', 'admin-lte', 'bootstrap', 'js', 'bootstrap.js'), // Local onde onde o bootstrap está instalado no admin-lte
    },
  },

  plugins: [
    new webpack.DefinePlugin({ // Definir valores globais a serem substituídos na compilação
      __HOST__: '""',
    }),

    new MiniCssExtractPlugin({ // Extai o CSS dos loaders
      filename: path.join('css', '[name]-[contenthash:8].css'),
    }),

    new webpack.ProvidePlugin({ // Deixar o jQuery disponível
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),

    new HtmlPlugin({ // Gera o html de forma dinâmica
      title: 'Beleaf - Marmitas', // Título a ser exibido na página
      inject: false,
      filename: 'index.html', // Arquivo de saída do HTML gerado
      template: path.join(__dirname, 'src', 'html', 'template.prod.html'), // Template no padrão ejs para gerar o html de forma dinâmica
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),

    new PreBuildPlugin(() => { // Executado antes do webpack começar a compilar
      console.log('-----===== Remover arquivos do public =====-----');
      fse.remove(path.resolve(__dirname, '..', 'backend', 'public'));
      console.log('-----===== Concluído remoção dos arquivos do public =====-----');
    }),
  ],

  module: {
    rules: [{
      test: /.js[x]?$/, // Configura os arquios a serem lidos pelo babel
      loader: 'babel-loader', // Babel ajuda a interpretar o código
      exclude: /node_modules/, // Ignorar a pasta
    }, {
      test: /\.css$/, // Tratar arquivos CSS
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader', // Interpreta @import e url() como import/require() e irá resolvê-los
      ],
    }, {
      test: /\.scss$/, // Tratar arquivos de código SCSS
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader', // Interpreta @import e url() como import/require() e irá resolvê-los
        'sass-loader', // Compila SASS e SCSS para CSS
      ],
    }, {
      test: /\.(woff2?|ttf|eot|svg)$/, // Configura os arquios a serem carregados na aplicação pelo file
      include: /node_modules/,
      loader: 'file-loader', // Loader para carregar estáticos da aplicação
      query: {
        name: 'fonts/[name]-[hash:8].[ext]', // Nome de saída dos arquivos com hash
      },
    }, {
      test: /\.(jpe?g|png|gif|svg|ico)$/, // Configura os arquios a serem carregados na aplicação pelo file
      include: /src/,
      loader: 'file-loader', // Loader para carregar estáticos da aplicação
      query: {
        name: 'images/[name]-[hash:8].[ext]', // Nome de saída dos arquivos com hash
      },
    }],
  },
};
