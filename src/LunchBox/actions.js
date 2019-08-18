import { bindActionCreators } from 'redux';
import axios from 'axios';

import { addAlertPopup } from 'common/ui-layout/Alerts';
import { convertURLBlobToBase64 } from 'common/utils';

import {
  ADD_LUNCH_BOX,
  CHANGE_LUNCH_BOX_NAME,
  CHANGE_LUNCH_BOX_PRICE,
  CHANGE_LUNCH_BOX_QUANTITY,
  CHANGE_LUNCH_BOX_DESCRIPTION,
  CHANGE_LUNCH_BOX_INGREDIENTS,
  CHANGE_LUNCH_BOX_IMAGE,
  SELECT_LUNCH_BOX,
} from './types';

export const getLunchBox = (id, callback = () => {}) => (dispatch, getState) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  // Se já hover buscado a marmita, seleciona a que está em memória
  if (getState().lunchBox.list[id]) {
    dispatch({ // Dispacha a action
      type: SELECT_LUNCH_BOX,
      payload: getState().lunchBox.list[id],
    });

    callback();
  } else {
    axios.get(`http://localhost:8080/lunchbox/${id}`)
      .then((res) => { // Caso tenha sucesso
        callback();

        dispatch({ // Dispacha a action
          type: ADD_LUNCH_BOX,
          payload: res.data,
        });

        dispatch({ // Dispacha a action
          type: SELECT_LUNCH_BOX,
          payload: res.data,
        });
      })
      .catch(() => { // Caso tenha erro
        callback();

        boundAddAlertPopup({ // Dispara um AlertPopup de erro
          title: 'Falha na operação',
          body: 'Houve alguma falha ao buscar dados da marmita. Tente novamente.',
          color: 'danger',
        });
      });
  }
};

export const changeName = ({ id, name }, callback = () => {}) => (dispatch, getState) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  axios.put('http://localhost:8080/api/lunchbox', { id, name })
    .then(() => { // Caso tenha sucesso
      callback();

      dispatch({ // Dispacha a action
        type: CHANGE_LUNCH_BOX_NAME,
        payload: { id, name },
      });

      dispatch({ // Dispacha a action
        type: SELECT_LUNCH_BOX,
        payload: { ...getState().lunchBox.list[id], name },
      });
    })
    .catch(() => { // Caso tenha erro
      callback();

      boundAddAlertPopup({ // Dispara um AlertPopup de erro
        title: 'Falha na operação',
        body: 'Houve alguma falha ao tentar alterar o nome da marmita. Tente novamente.',
        color: 'danger',
      });
    });
};

export const changePrice = (
  { id, price, discount },
  callback = () => {},
) => (dispatch, getState) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  axios.put('http://localhost:8080/api/lunchbox', { id, price, discount })
    .then(() => { // Caso tenha sucesso
      callback();

      dispatch({ // Dispacha a action
        type: CHANGE_LUNCH_BOX_PRICE,
        payload: { id, price, discount },
      });

      dispatch({ // Dispacha a action
        type: SELECT_LUNCH_BOX,
        payload: { ...getState().lunchBox.list[id], price, discount },
      });
    })
    .catch(() => { // Caso tenha erro
      callback();

      boundAddAlertPopup({ // Dispara um AlertPopup de erro
        title: 'Falha na operação',
        body: 'Houve alguma falha ao tentar alterar o preço da marmita. Tente novamente.',
        color: 'danger',
      });
    });
};

export const changeQuantity = ({ id, quantity }, callback = () => {}) => (dispatch, getState) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  axios.put('http://localhost:8080/api/lunchbox', { id, quantity })
    .then(() => { // Caso tenha sucesso
      callback();

      dispatch({ // Dispacha a action
        type: CHANGE_LUNCH_BOX_QUANTITY,
        payload: { id, quantity },
      });

      dispatch({ // Dispacha a action
        type: SELECT_LUNCH_BOX,
        payload: { ...getState().lunchBox.list[id], quantity },
      });
    })
    .catch(() => { // Caso tenha erro
      callback();

      boundAddAlertPopup({ // Dispara um AlertPopup de erro
        title: 'Falha na operação',
        body: 'Houve alguma falha ao tentar alterar a quantidade de marmitas. Tente novamente.',
        color: 'danger',
      });
    });
};

export const changeDescription = (
  { id, description },
  callback = () => {},
) => (dispatch, getState) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  axios.put('http://localhost:8080/api/lunchbox', { id, description })
    .then(() => { // Caso tenha sucesso
      callback();

      dispatch({ // Dispacha a action
        type: CHANGE_LUNCH_BOX_DESCRIPTION,
        payload: { id, description },
      });

      dispatch({ // Dispacha a action
        type: SELECT_LUNCH_BOX,
        payload: { ...getState().lunchBox.list[id], description },
      });
    })
    .catch(() => { // Caso tenha erro
      callback();

      boundAddAlertPopup({ // Dispara um AlertPopup de erro
        title: 'Falha na operação',
        body: 'Houve alguma falha ao tentar alterar a descrição da marmita. Tente novamente.',
        color: 'danger',
      });
    });
};

export const changeIngredients = (
  { id, ingredients },
  callback = () => {},
) => (dispatch, getState) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  axios.put('http://localhost:8080/api/lunchbox', { id, ingredients })
    .then(() => { // Caso tenha sucesso
      callback();

      dispatch({ // Dispacha a action
        type: CHANGE_LUNCH_BOX_INGREDIENTS,
        payload: { id, ingredients },
      });

      dispatch({ // Dispacha a action
        type: SELECT_LUNCH_BOX,
        payload: { ...getState().lunchBox.list[id], ingredients },
      });
    })
    .catch(() => { // Caso tenha erro
      callback();

      boundAddAlertPopup({ // Dispara um AlertPopup de erro
        title: 'Falha na operação',
        body: 'Houve alguma falha ao tentar alterar os ingredientes da marmita. Tente novamente.',
        color: 'danger',
      });
    });
};

export const changeImage = ({ id, img }, callback = () => {}) => (dispatch, getState) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  const sendImage = (image) => {
    axios.put('http://localhost:8080/api/lunchbox', { id, image: image || 'null' })
      .then(() => { // Caso tenha sucesso
        callback();

        dispatch({ // Dispacha a action
          type: CHANGE_LUNCH_BOX_IMAGE,
          payload: { id, image },
        });

        dispatch({ // Dispacha a action
          type: SELECT_LUNCH_BOX,
          payload: { ...getState().lunchBox.list[id], image },
        });
      })
      .catch(() => { // Caso tenha erro
        callback();

        boundAddAlertPopup({ // Dispara um AlertPopup de erro
          title: 'Falha na operação',
          body: 'Houve alguma falha ao tentar alterar a imagem da marmita. Tente novamente.',
          color: 'danger',
        });
      });
  }
  if (img) {
    convertURLBlobToBase64(img)
      .then((image) => {
        sendImage(image);
      });
  } else {
    sendImage('');
  }
};

export const deleteLunchBox = ({ id }, history, callback = () => {}) => (dispatch) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  axios.put('http://localhost:8080/api/lunchbox/delete', { id })
    .then(() => { // Caso tenha sucesso
      callback();

      history.replace('/');
    })
    .catch(() => { // Caso tenha erro
      callback();

      boundAddAlertPopup({ // Dispara um AlertPopup de erro
        title: 'Falha na operação',
        body: 'Houve alguma falha ao tentar excluir marmita. Tente novamente.',
        color: 'danger',
      });
    });
};
