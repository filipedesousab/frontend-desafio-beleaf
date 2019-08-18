import { bindActionCreators } from 'redux';
import axios from 'axios';

import { addAlertPopup } from 'common/ui-layout/Alerts';

// eslint-disable-next-line import/prefer-default-export
export const insertLunchBox = (data, history, callback = () => {}) => (dispatch) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  axios.post('http://localhost:8080/api/lunchbox', data)
    .then((res) => { // Caso tenha sucesso
      callback();

      // dispatch({ // Dispacha a action
      //   type: SELECT_LUNCH_BOX,
      //   payload: { ...data, id: res.data.id },
      // });

      history.push(`/lunchBox/${res.data.id}`);
    })
    .catch(() => { // Caso tenha erro
      callback();

      boundAddAlertPopup({ // Dispara um AlertPopup de erro
        title: 'Falha na operação',
        body: 'Houve alguma falha ao tentar inserir marmita. Tente novamente.',
        color: 'danger',
      });
    });
};
