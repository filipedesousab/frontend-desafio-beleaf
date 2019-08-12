import React from 'react';
import PropTypes from 'prop-types';
import PulseLoader from 'react-spinners/PulseLoader';

/**
 * [Spinner, UIE033] Spinner para indicar carregamento.
 * @param {number} props.margin Margem entre as circunferências do sipinner
 * @param {number} props.size   Tamanho das circunferências do spinner
 * @param {string} props.color  Cor do Spinner
 */
const SpinnerComponent = (props) => {
  const { margin, ...otherProps } = props;

  return (
    <PulseLoader
      sizeUnit="px"
      size={14}
      margin={`${margin}px`}
      color="#0ff"
      {...otherProps}
    />
  );
};

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
SpinnerComponent.defaultProps = {
  margin: 2,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
SpinnerComponent.propTypes = {
  margin: PropTypes.number,
};

export default SpinnerComponent;
