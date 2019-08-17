import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changePrice } from '../actions';
import PriceFieldComponent from '../components/PriceField';

/**
 * Mapeando Action Creators para a props do PriceFieldComponent
 * @param {function} dispatch Dispacha uma action. A única maneira de atualizar o estado do redux
 * @return  {object}          Único objeto com as Action Creators
 */
const mapDispatchToProps = dispatch => bindActionCreators({ changePrice }, dispatch);

export default connect(null, mapDispatchToProps)(PriceFieldComponent);
