import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeQuantity } from '../actions';
import QuantityFieldComponent from '../components/QuantityField';

/**
 * Mapeando Action Creators para a props do QuantityFieldComponent
 * @param {function} dispatch Dispacha uma action. A única maneira de atualizar o estado do redux
 * @return  {object}          Único objeto com as Action Creators
 */
const mapDispatchToProps = dispatch => bindActionCreators({ changeQuantity }, dispatch);

export default connect(null, mapDispatchToProps)(QuantityFieldComponent);
