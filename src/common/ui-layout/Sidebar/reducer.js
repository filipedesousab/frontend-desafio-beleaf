const INITIAL_STATE = {
  menu: [
    {
      href: '#',
      label: 'Marmitas',
      icon: 'fa fa-cutlery',
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
