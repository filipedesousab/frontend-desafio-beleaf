import React from 'react';
import PropTypes from 'prop-types';

import { Alert } from 'common/ui-elements';

/**
 * [AlertsPopup, UIL007] Grupo de Alerts que aparecem no canto superior direito temporareamente.
 * @param {array} props.alertsPopup Array com dados dos Alert [{ title: '', body: '', color: '' }]
 */
const AlertsPopupComponent = ({ alertsPopup }) => (
  <div className="alertspopup">
    {alertsPopup.map(({
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
        alertPopup
      >
        {body}
      </Alert>
    ))}
  </div>
);

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
AlertsPopupComponent.defaultProps = {
  alertsPopup: [],
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
AlertsPopupComponent.propTypes = {
  alertsPopup: PropTypes.arrayOf(PropTypes.object),
};

export default AlertsPopupComponent;
