import React from 'react';
import PropTypes from 'prop-types';

import { Alerts } from 'common/ui-layout';
import Breadcrumb from './components/Breadcrumb';

/**
 * [Content, UIL003] Recebe o conteúdo da página
 * @param {?object} props.title      Título da página [Label, UIE002]
 * @param {?object} props.subtitle   Subtitulo da página [Label, UIE002]
 * @param  {?array} props.breadcrumb Breadcrumb da página [{ label: ‘’, path: ‘’ }]
 * @param {?object} props.children   Conteúdo da página
 * @param {?object} props.footer     Rodapé da página
 * @param {?string} props.className  Class HTML opcional no componente
 */
const ContentComponent = (props) => {
  const {
    title,
    subtitle,
    breadcrumb,
    children,
    footer,
    className,
  } = props;

  return (
    <>
      <Alerts />
      <div className={`content-header ${className}`}>
        <h1>
          {title}
          &nbsp;
          {subtitle ? <small>{subtitle}</small> : false}
        </h1>
        <Breadcrumb breadcrumb={breadcrumb} />
      </div>
      <div className={`content ${className}`}>
        {children}
      </div>
      <div className={`content-footer ${className}`}>
        {footer}
      </div>
    </>
  );
};

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
ContentComponent.defaultProps = {
  title: null,
  subtitle: null,
  breadcrumb: [],
  children: null,
  footer: null,
  className: '',
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
ContentComponent.propTypes = {
  title: PropTypes.element,
  subtitle: PropTypes.element,
  breadcrumb: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node,
  footer: PropTypes.node,
  className: PropTypes.string,
};


export default ContentComponent;
