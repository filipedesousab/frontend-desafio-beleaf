import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';

/**
 * Habilita o Redux DevTools do navegador retornando a função compose
 * Ou utiliza a função compose do redux caso não tenha o DevTools no navegador
 * @constant
 * @type {function}
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Aplicação disponível para ser renderizada
 * @constant
 * @type {object}
 */
const AppToRender = (
  /**
   * Provider Disponibiliza a camada de estado à aplicação
   * store - Estado da aplicação
   * createStore - Criar estado do redux, recebe os reducers combinados
   * composeEnhancers - O compose executa funções da direita para esquerda passando o retorno como parâmetro
   * applyMiddleware() - Para aplicar middlewares ao redux
   */
  <Provider store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}>
    <App />
  </Provider>
);

ReactDOM.render(AppToRender, document.getElementById('app'));
