import genHash from 'random-hash';

import {
  ADD_ALERT,
  DEL_ALERT,
  ADD_ALERT_POPUP,
  DEL_ALERT_POPUP,
} from './types';

/**
 * Adicionar um Alert no estado
 * @param {!object} { title, body, color } Dados do alert
 * @return {object}                        Action
 */
export const addAlert = ({ title, body, color }) => {
  const alertName = genHash();

  return ({
    type: ADD_ALERT,
    payload: {
      title,
      body,
      color,
      alertName,
    },
  });
};

/**
 * Remover um Alert do estado
 * @param {!object} alertName Hash que identifica o Alert
 * @return {object}           Action
 */
export const delAlert = alertName => ({
  type: DEL_ALERT,
  payload: alertName,
});

/**
 * Adicionar um AlertPopup no estado
 * @param {!object} { title, body, color } Dados do AlertPopup
 * @return {object}                        Action
 */
export const addAlertPopup = ({ title, body, color }) => (dispatch) => {
  const alertName = genHash();

  dispatch({
    type: ADD_ALERT_POPUP,
    payload: {
      title,
      body,
      color,
      alertName,
    },
  });

  /** Remover o AlertPopup do estado após 5 segundos */
  setTimeout(() => {
    dispatch({
      type: DEL_ALERT_POPUP,
      payload: alertName,
    });
  }, 5000);
};

/**
 * Remover um AlertPopup do estado
 * @param {!object} alertName Hash que identifica o AlertPopup
 * @return {object}           Action
 */
export const delAlertPopup = alertName => ({
  type: DEL_ALERT_POPUP,
  payload: alertName,
});
