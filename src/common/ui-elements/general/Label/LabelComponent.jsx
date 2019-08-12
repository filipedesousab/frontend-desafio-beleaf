import React from 'react';
import PropTypes from 'prop-types';
import genHash from 'random-hash';
import _ from 'lodash';

import { Icon } from 'common/ui-elements';

/**
 * [Label, UIE002] Label geral da aplicação.
 * @param  {string} props.color     Cor em rgb ou exadecimal
 * @param {boolean} props.noSpan    Quando o label não puder conter a tag <span>
 * @param {boolean} props.form      Quando for label de formulário (não obrigatório o uso)
 * @param  {string} props.htmlFor   Id do campo ligado ao label
 * @param  {string} props.icon      Nome do ícone a ser inserido ao lado esquerdo do texto
 * @param  {object} props.children  Corpo do componente
 * @param  {string} props.className Class html opcional no componente
 * @param  {object} props.style     Estilo CSS a ser aplicado no componente
 */
class LabelComponent extends React.PureComponent {
  render() {
    const {
      color,
      noSpan,
      form,
      htmlFor,
      icon,
      children,
      className,
      style,
    } = this.props;

    // Removendo props para não inteferir no ReacDOM e retirar o warning
    const newProps = _.omit(this.props, [
      'color',
      'noSpan',
      'form',
      'htmlFor',
      'icon',
      'children',
      'className',
      'style',
    ]);

    if (noSpan) {
      const elementos = [<Icon name={icon} key={genHash()} />, ' ', children];
      return elementos.map(item => item);
    } else if (form) {
      return (
        <label
          {...newProps}
          className={`control-label ${className}`}
          htmlFor={htmlFor}
          style={{ color, ...style }}
        >
          <Icon name={icon} /> {children}
        </label>
      );
    }

    return (
      <span
        {...newProps}
        className={className}
        style={{ color, ...style }}
      >
        <Icon name={icon} /> {children}
      </span>
    );
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
LabelComponent.defaultProps = {
  color: null,
  noSpan: false,
  form: false,
  htmlFor: null,
  icon: null,
  children: null,
  className: '',
  style: {},
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
LabelComponent.propTypes = {
  color: PropTypes.string,
  noSpan: PropTypes.bool,
  form: PropTypes.bool,
  htmlFor: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default LabelComponent;
