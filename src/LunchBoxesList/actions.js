import { bindActionCreators } from 'redux';

import { addAlertPopup } from 'common/ui-layout/Alerts';

import { GET_LUNCH_BOXES } from './types';

// eslint-disable-next-line import/prefer-default-export
export const getLunchBoxes = (callback = () => {}) => (dispatch) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  // Simula uma requisição AJAX
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))
    .then(() => { // Caso tenha sucesso
      callback();

      dispatch({ // Dispacha a action
        type: GET_LUNCH_BOXES,
        payload: [{
          id: '1',
          name: 'Escalopes do Futuro',
          price: '34.90',
          discount: '10',
        }],
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
