import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { ButtonGroup } from 'react-bootstrap';

/**
 * [ButtonGroup, UIE009] Botão padrão da aplicação.
 * @param   {array} props.children  Botões a serem agrupados. Array de [Button, UIE004]]
 * @param {boolean} props.vertical  Alinhamento vertical dos botões
 * @param  {string} props.className Class html opcional no componente
 */
class ButtonGroupComponent extends React.PureComponent {
  render() {
    const {
      vertical,
      className,
      children,
    } = this.props;

    // Removendo props para não inteferir no ReacDOM e retirar o warning
    const newProps = _.omit(this.props, [
      'vertical',
      'className',
      'children',
    ]);

    return (
      <ButtonGroup
        {...newProps}
        vertical={vertical}
        className={className}
      >
        {children}
      </ButtonGroup>
    );
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
ButtonGroupComponent.defaultProps = {
  vertical: null,
  children: null,
  className: '',
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
ButtonGroupComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  vertical: PropTypes.bool,
  className: PropTypes.string,
};

export default ButtonGroupComponent;
