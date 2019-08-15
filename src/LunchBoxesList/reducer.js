const INITIAL_STATE = {
  list: [
    {
      id: '1',
      name: 'ESCALOPES DO FUTURO',
      price: '34.90',
      discount: '10',
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
