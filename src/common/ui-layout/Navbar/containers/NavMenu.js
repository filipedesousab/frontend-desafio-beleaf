import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login, logout } from '../actions';
import NavMenuComponent from '../components/NavMenu';

/**
 * Mapeando estado do redux para a props do NavMenuComponent,
 * @type {function}
 * @param  {object} state Estado do redux
 * @return {object}       Propriedades com os nomes alterados a serem mapeadas ao componente
 */
const mapStateToProps = state => ({
  user: state.global.user,
});


/**
 * Mapeando Action Creators para a props do NavMenuComponent
 * @param {function} dispatch Dispacha uma action. A única maneira de atualizar o estado do redux
 * @return  {object}          Único objeto com as Action Creators
 */
const mapDispatchToProps = dispatch => bindActionCreators({ login, logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavMenuComponent);
