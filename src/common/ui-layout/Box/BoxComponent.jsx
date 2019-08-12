import React from 'react';
import PropTypes from 'prop-types';

/**
 * [Box, UIL006] Componente para separar conteúdos na página.
 * @param {?object} props.title       Título do box [Label, UIE002]
 * @param {?object} props.titleAddon  Inserir componente ao lado do título
 * @param {?string} props.color       Cor do box primary, info, success, warning, danger ou muted
 * @param {?object} props.children    Corpo do box
 * @param {?object} props.footer      Rodapé do box
 * @param {?string} props.className   Class HTML opcional no componente
 * @param {?string} props.classHeader Class HTML opcional no Header do Box
 * @param {?object} props.styleHeader Style opcional no Header do Box
 * @param {?string} props.classBody   Class HTML opcional no Body do Box
 * @param {?object} props.styleBody   Style opcional no Body do Box
 * @param {?string} props.classFooter Class HTML opcional no Footer do Box
 * @param {?object} props.styleFooter Style opcional no Footer do Box
 */
const BoxComponent = (props) => {
  const {
    color,
    title,
    titleAddon,
    children,
    footer,
    className,
    classHeader,
    styleHeader,
    classBody,
    styleBody,
    classFooter,
    styleFooter,
    ...otherProps
  } = props;

  let newColor = 'box-primary';

  if (color) {
    newColor = `box-${color}`;

    if (color === 'muted') {
      newColor = '';
    }
  }

  const renderTitle = () => {
    if (title || titleAddon) {
      return (
        <div className={`box-header with-border ${classHeader}`} style={styleHeader}>
          { title ? <h3 className="box-title">{title}</h3> : null}
          { titleAddon ? <div className="box-title-addon">{titleAddon}</div> : null}
        </div>
      );
    }

    return null;
  };

  const renderFooter = () => {
    if (footer) {
      return (
        <div className={`box-footer ${classFooter}`} style={styleFooter}>
          {footer}
        </div>
      );
    }

    return null;
  };

  return (
    <div className={`box ${newColor} ${className}`} {...otherProps}>
      {renderTitle()}
      <div className={`box-body ${classBody}`} style={styleBody}>
        {children}
      </div>
      {renderFooter()}
    </div>
  );
};

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
BoxComponent.defaultProps = {
  color: null,
  title: null,
  titleAddon: null,
  children: null,
  footer: null,
  className: '',
  classHeader: '',
  styleHeader: {},
  classBody: '',
  styleBody: {},
  classFooter: '',
  styleFooter: {},
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
BoxComponent.propTypes = {
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger', 'muted']),
  title: PropTypes.element,
  titleAddon: PropTypes.element,
  children: PropTypes.node,
  footer: PropTypes.node,
  className: PropTypes.string,
  classHeader: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  styleHeader: PropTypes.object,
  classBody: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  styleBody: PropTypes.object,
  classFooter: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  styleFooter: PropTypes.object,
};

export default BoxComponent;
