import { connect } from 'react-redux';

import LunchBoxesListComponent from './LunchBoxesListComponent';

/**
 * Mapeando estado do redux para a props do MenuComponent
 * @type {function}
 * @param  {object} state Estado do redux
 * @return {object}       Propriedades com os nomes alterados a serem mapeadas ao componente
 */
const mapStateToProps = state => ({
  lunchBoxes: state.lunchBoxesList.list,
});

export default connect(mapStateToProps)(LunchBoxesListComponent);
