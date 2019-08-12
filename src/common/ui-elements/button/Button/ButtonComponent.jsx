import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

/**
 * [Button, UIE004] Botão padrão da aplicação.
 * @param   {string} props.color       Cor em rgb ou exadecimal
 * @param   {string} props.size        Tamanho do botão large, small ou xsmall
 * @param   {string} props.href        Endereço do link
 * @param   {string} props.type        Tipo do botão button(default), reset ou submit
 * @param  {boolean} props.disabled    Botão desabilitado
 * @param  {boolean} props.block       Botão com width 100%
 * @param  {boolean} props.nextToField Posicionar botão corretamente com os campos com label
 * @param   {string} props.className   Class html opcional no componente
 * @param   {object} props.children    Corpo do componente
 * @param {function} props.onClick     Ação de click do botão
 */
class ButtonComponent extends React.PureComponent {
  render() {
    const {
      color,
      size,
      href,
      type,
      disabled,
      block,
      nextToField,
      className,
      onClick,
      children,
      ...props
    } = this.props;

    const newClassName = [
      (nextToField && 'btn-nexttofield') || '',
      className,
    ].join(' ');

    return (
      <Button
        bsStyle={color}
        bsSize={size}
        href={href}
        type={type}
        disabled={disabled}
        block={block}
        className={newClassName}
        onClick={onClick}
        {...props}
      >
        {children}
      </Button>
    );
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
ButtonComponent.defaultProps = {
  color: 'default',
  size: null,
  href: null,
  type: null,
  disabled: false,
  block: false,
  nextToField: false,
  className: '',
  onClick: null,
  children: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
ButtonComponent.propTypes = {
  color: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
  size: PropTypes.oneOf(['large', 'small', 'xsmall']),
  href: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  nextToField: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element,
};

export default ButtonComponent;
