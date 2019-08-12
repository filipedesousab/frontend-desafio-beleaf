import React from 'react';
import PropTypes from 'prop-types';
import genHash from 'random-hash';

import { Icon } from 'common/ui-elements';

/**
 * Breadcrumb aparece no lado direito da página, ajuda o usuário se localizar no sistema.
 * @param {?array} props.breadcrumb Array do breadcrumb da página [{ label: ‘’, path: ‘’ }]
 */
const BreadcrumbComponent = ({ breadcrumb }) => (
  <ol className="breadcrumb">
    <li><Icon name="fa fa-dashboard" /></li>
    {breadcrumb.map(({ href, label }) => (
      <li key={genHash()}>
        {href ? <a href={href}>{label}</a> : <span>{label}</span>}
      </li>
    ))}
  </ol>
);

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
BreadcrumbComponent.defaultProps = {
  breadcrumb: [],
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
BreadcrumbComponent.propTypes = {
  breadcrumb: PropTypes.arrayOf(PropTypes.object),
};

export default BreadcrumbComponent;
