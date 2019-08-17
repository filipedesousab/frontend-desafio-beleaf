import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getLunchBox } from './actions';
import LunchBoxComponent from './LunchBoxComponent';

/**
 * Mapeando estado do redux para a props do LunchBoxComponent
 * @type {function}
 * @param  {object} state Estado do redux
 * @return {object}       Propriedades com os nomes alterados a serem mapeadas ao componente
 */
const mapStateToProps = state => ({
  lunchBoxes: state.lunchBox.list,
});

/**
 * Mapeando Action Creators para a props do LunchBoxComponent
 * @param {function} dispatch Dispacha uma action. A única maneira de atualizar o estado do redux
 * @return  {object}          Único objeto com as Action Creators
 */
const mapDispatchToProps = dispatch => bindActionCreators({ getLunchBox }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LunchBoxComponent);
