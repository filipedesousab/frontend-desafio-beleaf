import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Button } from 'react-bootstrap';

/**
 * [ButtonApp, UIE008] Botão de aplicativo (maior e com ícone)
 * @param   {string} props.label      Descrição do botão com ícone
 * @param   {string} props.badge      Texto do badge do botão
 * @param   {string} props.badgeColor Cor do badge
 * @param   {string} props.href       Endereço do link
 * @param  {boolean} props.disabled   Botão desabilitado
 * @param  {boolean} props.block      Botão com width 100%
 * @param   {string} props.className  Class html opcional no componente
 * @param {function} props.onClick    Ação de click do botão
 */
class ButtonAppComponent extends React.PureComponent {
  render() {
    const {
      label,
      badge,
      badgeColor,
      href,
      disabled,
      block,
      className,
      onClick,
    } = this.props;

    // Removendo props para não inteferir no ReacDOM e retirar o warning
    const newProps = _.omit(this.props, [
      'label',
      'badge',
      'badgeColor',
      'href',
      'disabled',
      'block',
      'className',
      'onClick',
    ]);

    const newClassName = `btn-app ${className}`;
    const newOnClick = disabled ? () => {} : onClick;

    /**
     * Clonar elemento [Label, UIE002] recebido pelo this.props.label passando noSpan como true.
     * O componente ButtonApp precisa da descrição e ícone sem a tag span.
     */
    const description = React.cloneElement(label, { noSpan: true });

    return (
      <Button
        {...newProps}
        bsStyle="default"
        href={href}
        disabled={disabled}
        block={block}
        className={newClassName}
        onClick={newOnClick}
        componentClass="a"
      >
        {badge || badge === 0 ? <span className={`badge bg-${badgeColor}`}>{badge}</span> : false}
        {description}
      </Button>
    );
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
ButtonAppComponent.defaultProps = {
  label: null,
  badge: null,
  badgeColor: 'aqua',
  href: null,
  disabled: false,
  block: false,
  className: '',
  onClick: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
ButtonAppComponent.propTypes = {
  label: PropTypes.element,
  badge: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  badgeColor: PropTypes.oneOf(['yellow', 'green', 'purple', 'teal', 'aqua', 'red']),
  href: PropTypes.string,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonAppComponent;
