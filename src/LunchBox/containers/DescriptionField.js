import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeDescription, changeIngredients } from '../actions';
import DescriptionFieldComponent from '../components/DescriptionField';

/**
 * Mapeando Action Creators para a props do DescriptionFieldComponent
 * @param {function} dispatch Dispacha uma action. A única maneira de atualizar o estado do redux
 * @return  {object}          Único objeto com as Action Creators
 */
const mapDispatchToProps = dispatch => bindActionCreators({
  changeDescription,
  changeIngredients,
}, dispatch);

export default connect(null, mapDispatchToProps)(DescriptionFieldComponent);
