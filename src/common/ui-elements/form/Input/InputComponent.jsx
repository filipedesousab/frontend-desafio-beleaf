import React from 'react';
import PropTypes from 'prop-types';
import genHash from 'random-hash';
import {
  FormGroup,
  ControlLabel,
  InputGroup,
  FormControl,
  HelpBlock,
} from 'react-bootstrap';

/**
 * [Input, UIE010] Input de texto
 * @param   {?string} props.id          Id do campo. Se não for passado, recebe uma hash aleatória.
 * @param   {?string} props.state       Estado(cor) [success, warning, error], nulo para degault.
 * @param   {?string} props.size        Tamanho(altura) [large, small], nulo para default.
 * @param   {?string} props.className   Class html opcional no componente
 * @param   {?object} props.label       Descrição do campo
 * @param   {?object} props.btnLeft     Botão do lado esquerdo
 * @param   {?object} props.btnRight    Botão do lado direito
 * @param   {?object} props.addonLeft   Addon do lado esquerdo
 * @param   {?object} props.addonRight  Addon do lado direito
 * @param   {?string} props.name        Nome do campo, usado por exemplo para o Formk
 * @param   {?string} props.type        Tipo do campo [text, email, password, number]
 * @param   {?string} props.value       Conteúdo do campo
 * @param   {?string} props.placeholder Descrição dentro do campo
 * @param  {?boolean} props.disabled    Desabilitar campo
 * @param  {?boolean} props.blockInput  Input com width 100%
 * @param {?function} props.onChange    Função a ser executada na ação de escrever do usuário
 * @param   {?object} props.helpBlock   Descrição abaixo do campo
 * @param {?function} props._ref        Passar referência do input
 */
class InputComponent extends React.PureComponent {
  render() {
    const {
      id,
      state,
      size,
      className,
      label,
      btnLeft,
      btnRight,
      addonLeft,
      addonRight,
      name,
      type,
      value,
      defaultValue,
      placeholder,
      disabled,
      readOnly,
      blockInput,
      onChange,
      helpBlock,
      _ref,
      ...props
    } = this.props;

    return (
      <FormGroup
        controlId={id || genHash()}
        validationState={state}
        bsSize={size}
        className={className}
        {...props}
      >
        <ControlLabel>{label}</ControlLabel>
        <InputGroup style={blockInput ? { width: '100%' } : {}}>
          {btnLeft
            ? <InputGroup.Button>{btnLeft}</InputGroup.Button>
            : false}
          {addonLeft
            ? <InputGroup.Addon>{addonLeft}</InputGroup.Addon>
            : false}
          <FormControl
            name={name}
            type={type}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            onChange={onChange}
            inputRef={_ref}
          />
          {/* Feddback e Addon se sobrepõem. Feedback só apresenta quando não houver Addon */}
          {addonRight
            ? <InputGroup.Addon>{addonRight}</InputGroup.Addon>
            : <FormControl.Feedback />}
          {btnRight
            ? <InputGroup.Button>{btnRight}</InputGroup.Button>
            : false}
        </InputGroup>
        <HelpBlock>{helpBlock}</HelpBlock>
      </FormGroup>
    );
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
InputComponent.defaultProps = {
  id: null,
  state: null,
  size: null,
  className: '',
  label: null,
  btnLeft: null,
  btnRight: null,
  addonLeft: null,
  addonRight: null,
  name: null,
  type: 'text',
  value: undefined,
  defaultValue: undefined,
  placeholder: null,
  disabled: false,
  readOnly: false,
  blockInput: false,
  onChange: null,
  helpBlock: null,
  _ref: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
InputComponent.propTypes = {
  id: PropTypes.string,
  state: PropTypes.oneOf(['success', 'warning', 'error']),
  size: PropTypes.oneOf(['large', 'small']),
  className: PropTypes.string,
  label: PropTypes.element,
  btnLeft: PropTypes.element,
  btnRight: PropTypes.element,
  addonLeft: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  addonRight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'number']),
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  blockInput: PropTypes.bool,
  onChange: PropTypes.func,
  helpBlock: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  _ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default InputComponent;
