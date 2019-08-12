import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { delAlert, delAlertPopup } from '../../../ui-layout/Alerts';
import AlertComponent from './AlertComponent';

/**
 * Mapeando Action Creators para a props do AlertComponent
 * @param {function} dispatch Dispacha uma action. A única maneira de atualizar o estado do redux
 * @return  {object}          Único objeto com as Action Creators
 */
const mapDispatchToProps = dispatch => bindActionCreators({ delAlert, delAlertPopup }, dispatch);

export default connect(null, mapDispatchToProps)(AlertComponent);
