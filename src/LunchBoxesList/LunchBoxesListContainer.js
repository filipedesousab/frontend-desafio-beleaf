import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getLunchBoxes } from './actions';
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

/**
 * Mapeando Action Creators para a props do MenuComponent
 * @param {function} dispatch Dispacha uma action. A única maneira de atualizar o estado do redux
 * @return  {object}          Único objeto com as Action Creators
 */
const mapDispatchToProps = dispatch => bindActionCreators({ getLunchBoxes }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LunchBoxesListComponent);
