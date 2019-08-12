import { connect } from 'react-redux';

import AlertsPopupComponent from '../components/AlertsPopup';

/**
 * Mapeando estado do redux para a props do AlertsPopupComponent
 * @type {function}
 * @param  {object} state Estado do redux
 * @return {object}       Propriedades com os nomes alterados a serem mapeadas ao componente
 */
const mapStateToProps = state => ({
  alertsPopup: state.alerts.alertsPopup,
});

export default connect(mapStateToProps)(AlertsPopupComponent);
