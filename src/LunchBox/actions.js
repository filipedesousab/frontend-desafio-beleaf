import { bindActionCreators } from 'redux';

import { addAlertPopup } from 'common/ui-layout/Alerts';

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

  if (getState().lunchBox.list[id]) {
    dispatch({ // Dispacha a action
      type: SELECT_LUNCH_BOX,
      payload: getState().lunchBox.list[id],
    });
  } else {
    // Simula uma requisição AJAX
    new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))
      .then(() => { // Caso tenha sucesso
        const lunchBox = {
          id: '1',
          name: 'Escalopes do Futuro',
          price: '34.90',
          discount: '10',
          quantity: '10',
          image: '',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          ingredients: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        };

        callback();

        dispatch({ // Dispacha a action
          type: ADD_LUNCH_BOX,
          payload: lunchBox,
        });

        dispatch({ // Dispacha a action
          type: SELECT_LUNCH_BOX,
          payload: lunchBox,
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

  // Simula uma requisição AJAX
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))
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

  // Simula uma requisição AJAX
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))
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

  // Simula uma requisição AJAX
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))
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

export const changeDescription = ({ id, description }, callback = () => {}) => (dispatch, getState) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  // Simula uma requisição AJAX
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))
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

export const changeIngredients = ({ id, ingredients }, callback = () => {}) => (dispatch, getState) => {
  const { boundAddAlertPopup } = bindActionCreators( // Liga a Action Creator ao dispach
    { boundAddAlertPopup: addAlertPopup }, // Action Creator do AlertPopup
    dispatch, // Função para dispachar actions
  );

  // Simula uma requisição AJAX
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))
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

  let image = img;
  // const reader = new FileReader();
  // reader.readAsDataURL(img);
  // reader.onloadend = () => {
  //   image = reader.result;
  // };
console.log(image)
  // Simula uma requisição AJAX
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))
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
};
