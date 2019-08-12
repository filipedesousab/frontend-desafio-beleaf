import { connect } from 'react-redux';

import AlertsComponent from '../components/Alerts';

/**
 * Mapeando estado do redux para a props do AlertsComponent
 * @type {function}
 * @param  {object} state Estado do redux
 * @return {object}       Propriedades com os nomes alterados a serem mapeadas ao componente
 */
const mapStateToProps = state => ({
  alerts: state.alerts.alerts,
});

export default connect(mapStateToProps)(AlertsComponent);
