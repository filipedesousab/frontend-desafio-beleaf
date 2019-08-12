import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Radio } from 'react-bootstrap';

/**
 * [Radio, UIE015] Caixa de única seleção em um grupo de Radios
 * @param   {string} props.value          Valor do campo
 * @param   {string} props.name           Nome do grupo de radios
 * @param   {object} props.label          Descrição do campo
 * @param  {boolean} props.checked        Identifica se o campo controlado está “checkado”
 * @param  {boolean} props.defaultChecked Identifica se o campo não controlado está “checkado”
 * @param  {boolean} props.disabled       Desabilitar campo
 * @param  {boolean} props.readOnly       Desabilitar campo
 * @param {function} props.onChange       Função a ser executada na ação de escrever do usuário
 * @param   {string} props.className      Class html opcional no componente
 */
class RadioComponent extends React.PureComponent {
  render() {
    const {
      value,
      name,
      label,
      checked,
      defaultChecked,
      disabled,
      readOnly,
      onChange,
      className,
    } = this.props;

    // Removendo props para não inteferir no ReacDOM e retirar o warning
    const newProps = _.omit(this.props, [
      'value',
      'name',
      'label',
      'checked',
      'defaultChecked',
      'disabled',
      'readOnly',
      'onChange',
      'className',
    ]);

    return (
      <div {...newProps}>
        <Radio
          value={value}
          name={name}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled || readOnly}
          onChange={onChange}
          className={className}
          style={{ marginTop: '0px' }}
        >
          {label}
        </Radio>
      </div>
    );
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
RadioComponent.defaultProps = {
  value: undefined,
  name: null,
  label: null,
  checked: undefined,
  defaultChecked: undefined,
  disabled: false,
  readOnly: false,
  onChange: null,
  className: '',
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
RadioComponent.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.element,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default RadioComponent;
