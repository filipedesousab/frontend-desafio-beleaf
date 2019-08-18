import axios from 'axios';
import { bindActionCreators } from 'redux';

import { addAlertPopup } from 'common/ui-layout/Alerts';

import { SET_USER_DATA } from '../../../types';

export const login = ({ username, password }, callback = () => {}) => (dispatch) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  // Simula uma requisição AJAX
  axios.post('http://localhost:8080/login', { username, password })
    .then((res) => { // Caso tenha sucesso
      callback();

      dispatch({ // Dispacha a action
        type: SET_USER_DATA,
        payload: { ...res.data },
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
  callback();

  dispatch({ // Dispacha a action
    type: SET_USER_DATA,
    payload: {
      id: '',
      name: '',
      hash: '',
    },
  });
};

export const register = ({ name, username, password }, callback = () => {}) => (dispatch) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  // Simula uma requisição AJAX
  axios.post('http://localhost:8080/insert', { name, username, password })
    .then((res) => { // Caso tenha sucesso
      callback();

      dispatch({ // Dispacha a action
        type: SET_USER_DATA,
        payload: { ...res.data },
      });
    })
    .catch(() => { // Caso tenha erro
      callback();

      boundAddAlertPopup({ // Dispara um AlertPopup de erro
        title: 'Falha na operação',
        body: 'Houve alguma falha ao tentar registrar usuário. Tente novamente.',
        color: 'danger',
      });
    });
};
