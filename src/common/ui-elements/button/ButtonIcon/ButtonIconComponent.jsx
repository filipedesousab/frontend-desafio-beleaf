import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Button } from 'react-bootstrap';

import { Icon, Label } from 'common/ui-elements';

/**
 * [ButtonIcon, UIE005] Botão com ícone ao lado esquerdo.
 * @param   {string} props.color     Cor em rgb ou exadecimal
 * @param   {string} props.size      Tamanho do botão large, small ou xsmall
 * @param   {string} props.href      Endereço do link
 * @param   {string} props.type      Tipo do botão button(default), reset ou submit
 * @param  {boolean} props.disabled  Botão desabilitado
 * @param  {boolean} props.block     Botão com width 100%
 * @param   {string} props.className Class html opcional no componente
 * @param {function} props.onClick   Ação de click do botão
 * @param   {object} props.icon      Ícone do botão
 * @param   {object} props.children  Corpo do componente
 */
class ButtonIconComponent extends React.PureComponent {
  render() {
    const {
      color,
      size,
      href,
      type,
      disabled,
      block,
      className,
      onClick,
      icon,
      children,
    } = this.props;

    // Removendo props para não inteferir no ReacDOM e retirar o warning
    const newProps = _.omit(this.props, [
      'color',
      'size',
      'href',
      'type',
      'disabled',
      'block',
      'className',
      'onClick',
      'icon',
      'children',
    ]);

    let newClassName = `btn-social ${className}`;
    let description = children;

    if (children) {
      if (!Array.isArray(children) && children.type.name === Label.name) {
        description = React.cloneElement(children, { noSpan: true });
      }
    } else {
      newClassName = newClassName.replace(/btn-social/g, 'btn-social-icon');
    }

    let newIcon = <i />;
    if (icon) {
      if (typeof icon === 'object' && icon.type.name === Icon.name) {
        newIcon = icon;
      }
    }

    return (
      <Button
        {...newProps}
        bsStyle={color}
        bsSize={size}
        href={href}
        type={type}
        disabled={disabled}
        block={block}
        className={newClassName}
        onClick={onClick}
      >
        {newIcon}
        {description}
      </Button>
    );
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
ButtonIconComponent.defaultProps = {
  color: 'default',
  size: null,
  href: null,
  type: null,
  disabled: false,
  block: false,
  className: '',
  onClick: null,
  icon: null,
  children: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
ButtonIconComponent.propTypes = {
  color: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
  size: PropTypes.oneOf(['large', 'small', 'xsmall']),
  href: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  children: PropTypes.element,
};

export default ButtonIconComponent;
