import { bindActionCreators } from 'redux';
import axios from 'axios';

import { addAlertPopup } from 'common/ui-layout/Alerts';

import { GET_LUNCH_BOXES } from './types';

// eslint-disable-next-line import/prefer-default-export
export const getLunchBoxes = (callback = () => {}) => (dispatch, getState) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  const host = `${__HOST__}${getState().global.user.id ? '/api' : ''}`;

  axios.get(`${host}/lunchbox`)
    .then((res) => { // Caso tenha sucesso
      callback();

      dispatch({ // Dispacha a action
        type: GET_LUNCH_BOXES,
        payload: res.data,
      });
    })
    .catch(() => { // Caso tenha erro
      callback();

      boundAddAlertPopup({ // Dispara um AlertPopup de erro
        title: 'Falha na operação',
        body: 'Houve alguma falha ao buscar a lista de marmitas. Tente novamente.',
        color: 'danger',
      });
    });
};
