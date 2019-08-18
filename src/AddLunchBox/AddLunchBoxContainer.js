import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { insertLunchBox } from './actions';
import AddLunchBoxComponent from './AddLunchBoxComponent';

/**
 * Mapeando estado do redux para a props do AddLunchBoxComponent
 * @type {function}
 * @param  {object} state Estado do redux
 * @return {object}       Propriedades com os nomes alterados a serem mapeadas ao componente
 */
const mapStateToProps = state => ({
  user: state.global.user,
});

/**
 * Mapeando Action Creators para a props do AddLunchBoxComponent
 * @param {function} dispatch Dispacha uma action. A única maneira de atualizar o estado do redux
 * @return  {object}          Único objeto com as Action Creators
 */
const mapDispatchToProps = dispatch => bindActionCreators({ insertLunchBox }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddLunchBoxComponent);
