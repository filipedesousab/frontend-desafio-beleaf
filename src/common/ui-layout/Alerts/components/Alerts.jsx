import React from 'react';
import PropTypes from 'prop-types';

import { Alert } from 'common/ui-elements';

/**
 * [Alerts, UIL004] Grupo de Alerts que aparecem acima do título da página.
 * @param {?array} props.alerts Array com dados dos Alert [{ title: '', body: '', color: '' }]
 */
const AlertsComponent = ({ alerts }) => (
  alerts.length > 0 ? (
    <div className="alerts" style={{ padding: '15px 15px 0px 15px' }}>
      {alerts.map(({
        alertName,
        body,
        color,
        title,
      }) => (
        <Alert
          title={title}
          color={color}
          alertName={alertName}
          key={alertName}
          alert
        >
          {body}
        </Alert>
      ))}
    </div>
  ) : null
);

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
AlertsComponent.defaultProps = {
  alerts: [],
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
AlertsComponent.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.object),
};

export default AlertsComponent;
