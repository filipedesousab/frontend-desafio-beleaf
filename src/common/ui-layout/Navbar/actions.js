import axios from 'axios';
import { bindActionCreators } from 'redux';

import { addAlertPopup } from 'common/ui-layout/Alerts';

import { SET_USER_DATA } from '../../../types';
import { updateSidebar } from '../Sidebar/actions';

export const login = ({ username, password }, callback = () => {}) => (dispatch) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  axios.post(`${__HOST__}/user/login`, { username, password })
    .then((res) => { // Caso tenha sucesso
      callback();

      axios.defaults.headers.common.Authorization = res.data.jwt;

      dispatch({ // Dispacha a action
        type: SET_USER_DATA,
        payload: { ...res.data },
      });

      const bind = bindActionCreators(
        { boundUpdateSidebar: updateSidebar },
        dispatch,
      );
      bind.boundUpdateSidebar();
    })
    .catch((err) => { // Caso tenha erro
      callback();

      if (err.response.status === 401) { // Se o usuário ou a senha for inválida
        boundAddAlertPopup({ // Dispara um AlertPopup de erro
          title: 'Usuário ou senha inválida',
          body: 'Verifique se o usuário e a senha e tente novamente.',
          color: 'danger',
        });
      } else {
        boundAddAlertPopup({ // Dispara um AlertPopup de erro
          title: 'Falha na operação',
          body: 'Houve alguma falha ao tentar efetuar o login. Tente novamente.',
          color: 'danger',
        });
      }
    });
};

export const logout = (callback = () => {}) => (dispatch) => {
  callback();

  delete axios.defaults.headers.common.Authorization;

  dispatch({ // Dispacha a action
    type: SET_USER_DATA,
    payload: {
      id: '',
      name: '',
      hash: '',
    },
  });

  const bind = bindActionCreators(
    { boundUpdateSidebar: updateSidebar },
    dispatch,
  );
  bind.boundUpdateSidebar();
};

export const register = ({ name, username, password }, callback = () => {}) => (dispatch) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  axios.post(`${__HOST__}/user/insert`, { name, username, password })
    .then((res) => { // Caso tenha sucesso
      callback();

      axios.defaults.headers.common.Authorization = res.data.jwt;

      dispatch({ // Dispacha a action
        type: SET_USER_DATA,
        payload: { ...res.data },
      });
    })
    .catch((err) => { // Caso tenha erro
      callback();

      if (err.response.status === 401) { // Se o username for duplicado
        boundAddAlertPopup({ // Dispara um AlertPopup de erro
          title: 'Nome de usuário já existe!',
          body: 'Tente outro nome de usuário.',
          color: 'danger',
        });
      } else {
        boundAddAlertPopup({ // Dispara um AlertPopup de erro
          title: 'Falha na operação',
          body: 'Houve alguma falha ao tentar registrar usuário. Tente novamente.',
          color: 'danger',
        });
      }
    });
};
