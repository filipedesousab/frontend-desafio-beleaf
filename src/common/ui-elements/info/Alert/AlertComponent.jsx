import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

import { Label } from 'common/ui-elements';

/**
 * [Alert, UIE025] Alert a ser apresentado no componente [Alerts, UIL004] e [AlertsPopup, UIL007]
 * @param   {string} props.title         Título do Alert
 * @param   {object} props.children      Corpo do componente
 * @param   {string} props.color         Cor do Alert [info, success, warning, danger]
 * @param   {string} props.alertName     Nome do Alert
 * @param  {boolean} props.alert         Recebe true se for o Alert instanciado em [Alerts, UIL004]
 * @param  {boolean} props.alertPopup    Recebe true se for o Alert instanciado em [AlertsPopup, UIL007]
 * @param {function} props.delAlert      Remove o alert do store
 * @param {function} props.delAlertPopup Remove o alertPopup do store
 */
class AlertComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: true };

    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss() {
    if (this.props.alertPopup) {
      // Necessário pois o armazenamento do store do Alerts é separado do AlertsPopup
      this.props.delAlertPopup(this.props.alertName);
    } else if (this.props.alert) {
      // Necessário pois o armazenamento do store do Alerts é separado do AlertsPopup
      this.props.delAlert(this.props.alertName);
    } else {
      // Caso o componente seja instanciado em qualquer local sem que seja o Alerts ou AlertsPopup
      this.setState({ show: false });
    }
  }

  render() {
    if (this.state.show) {
      let icon = '';

      if (this.props.color === 'info') {
        icon = 'fa fa-info';
      } else if (this.props.color === 'warning') {
        icon = 'fa fa-warning';
      } else if (this.props.color === 'danger') {
        icon = 'fa fa-ban';
      } else if (this.props.color === 'success') {
        icon = 'fa fa-check';
      }

      return (
        /** onClick permite que o AlertPopup feche só em clicar no balão */
        <Alert
          bsStyle={this.props.color}
          onDismiss={this.handleDismiss}
          onClick={() => this.props.alertPopup && this.handleDismiss()}
        >
          <h4><Label icon={icon}>{this.props.title}</Label></h4>
          {this.props.children}
        </Alert>
      );
    }

    return false;
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
AlertComponent.defaultProps = {
  color: 'info',
  title: null,
  children: null,
  alertName: '',
  alert: false,
  alertPopup: false,
  delAlert: null,
  delAlertPopup: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
AlertComponent.propTypes = {
  color: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
  title: PropTypes.string,
  children: PropTypes.node,
  alertName: PropTypes.string,
  alert: PropTypes.bool,
  alertPopup: PropTypes.bool,
  delAlert: PropTypes.func,
  delAlertPopup: PropTypes.func,
};

export default AlertComponent;
