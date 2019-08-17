import { bindActionCreators } from 'redux';

import { addAlertPopup } from 'common/ui-layout/Alerts';

import { SET_USER_DATA } from '../../../types';

export const login = ({ username, password }, callback = () => {}) => (dispatch) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  // Simula uma requisição AJAX
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))
    .then(() => { // Caso tenha sucesso
      callback();

      dispatch({ // Dispacha a action
        type: SET_USER_DATA,
        payload: {
          id: '1',
          name: 'Filipe Botelho',
        },
      });
    })
    .catch(() => { // Caso tenha erro
      callback();

      boundAddAlertPopup({ // Dispara um AlertPopup de erro
        title: 'Falha na operação',
        body: 'Houve alguma falha ao tentar efetuar o login. Tente novamente.',
        color: 'danger',
      });
    });
};

export const logout = (callback = () => {}) => (dispatch) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  // Simula uma requisição AJAX
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))
    .then(() => { // Caso tenha sucesso
      callback();

      dispatch({ // Dispacha a action
        type: SET_USER_DATA,
        payload: {
          id: '',
          name: '',
        },
      });
    })
    .catch(() => { // Caso tenha erro
      callback();

      boundAddAlertPopup({ // Dispara um AlertPopup de erro
        title: 'Falha na operação',
        body: 'Houve alguma falha ao tentar efetuar o logout. Tente novamente.',
        color: 'danger',
      });
    });
};
