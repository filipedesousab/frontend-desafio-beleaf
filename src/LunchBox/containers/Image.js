import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeImage } from '../actions';
import ImageComponent from '../components/Image';

/**
 * Mapeando estado do redux para a props do ImageComponent,
 * @type {function}
 * @param  {object} state Estado do redux
 * @return {object}       Propriedades com os nomes alterados a serem mapeadas ao componente
 */
const mapStateToProps = state => ({
  user: state.global.user,
  lunchBox: state.lunchBox.selected,
});

/**
 * Mapeando Action Creators para a props do ImageComponent
 * @param {function} dispatch Dispacha uma action. A única maneira de atualizar o estado do redux
 * @return  {object}          Único objeto com as Action Creators
 */
const mapDispatchToProps = dispatch => bindActionCreators({ changeImage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ImageComponent);
