import { UPDATE_SIDEBAR } from './types';

// eslint-disable-next-line import/prefer-default-export
export const updateSidebar = () => (dispatch, getState) => {
  if(getState().global.user.id) {
    dispatch({
      type: UPDATE_SIDEBAR,
      payload: [{
        href: '#',
        label: 'Marmitas',
        icon: 'fa fa-cutlery',
      }, {
        href: '#/addLunchBox',
        label: 'Adicionar Marmita',
        icon: 'fa fa-plus',
      }],
    });
  } else {
    dispatch({
      type: UPDATE_SIDEBAR,
      payload: [{
        href: '#',
        label: 'Marmitas',
        icon: 'fa fa-cutlery',
      }],
    });
  }
};
