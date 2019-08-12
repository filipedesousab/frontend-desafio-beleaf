import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/**
 * [Tooltip, UIE030] Balão com dicas de um elemento.
 * @param {string} props.description Texto a ser exibido no Tooltip
 * @param {object} props.children    Elemento a receber o Tooltip
 */
class TooltipComponent extends React.Component {
  componentDidMount() {
    const element = ReactDOM.findDOMNode(this);

    element.setAttribute('title', this.props.description);
  }

  render() {
    return this.props.children;
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
TooltipComponent.defaultProps = {
  description: '',
  children: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
TooltipComponent.propTypes = {
  description: PropTypes.string,
  children: PropTypes.element,
};


export default TooltipComponent;
