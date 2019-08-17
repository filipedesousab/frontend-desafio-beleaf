import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeName } from '../actions';
import NameFieldComponent from '../components/NameField';

/**
 * Mapeando Action Creators para a props do NameFieldComponent
 * @param {function} dispatch Dispacha uma action. A única maneira de atualizar o estado do redux
 * @return  {object}          Único objeto com as Action Creators
 */
const mapDispatchToProps = dispatch => bindActionCreators({ changeName }, dispatch);

export default connect(null, mapDispatchToProps)(NameFieldComponent);
