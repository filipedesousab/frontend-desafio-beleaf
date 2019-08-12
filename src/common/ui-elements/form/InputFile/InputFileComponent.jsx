import React from 'react';
import PropTypes from 'prop-types';
import genHash from 'random-hash';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
} from 'react-bootstrap';

import { ButtonGroup, Button, Label } from 'common/ui-elements';

/**
 * [InputFile, UIE016] Entrada de arquivos
 * @param   {string} props.id                Id do campo. Se não for passado, recebe uma hash aleatória
 * @param   {object} props.label             Descrição do campo
 * @param   {object} props.component         Permite inserir um componente personalizado para selecionar um arquivo
 * @param   {object} props.componentSelected Permite inserir um componente personalizado quando um arquivo for selecionado
 * @param   {string} props.state             Estado(cor) [success, warning, error], nulo para default
 * @param  {boolean} props.disabled          Desabilitar campo
 * @param   {object} props.helpBlock         Descrição abaixo do campo
 * @param {function} props.onChange          Primeiro parâmetro é o target e segundo é nome do arquivo
 * @param   {string} props.className         Class html opcional no componente
 */
class InputFileComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fileName: props.description || <Label icon="fa fa-file">Selecionar</Label>,
      clean: false,
    };

    /** Executado quando é selecionado um arquivo */
    this.handleChange = this.handleChange.bind(this);
    /** Executado quando deseja limpar o campo */
    this.clean = this.clean.bind(this);

    /** Elemento do DOM */
    this.inputFileField = null;
  }

  handleChange(e) {
    const { onChange } = this.props;
    /**
     * Pega o caminho completo do arquivo
     * Divide a string do caminho completo em array pelo \ ou /
     * Pega o valor da última posição do array
     */
    const fileName = e.target.value
      .split(/(\\|\/)/g)
      .pop();

    onChange(e, fileName);

    this.setState({
      fileName: <Label icon="fa fa-check">{fileName}</Label>,
      clean: true,
    });
  }

  clean() {
    const { description, onClean } = this.props;

    this.setState({
      fileName: description || <Label icon="fa fa-file">Selecionar</Label>,
      clean: false,
    });

    this.inputFileField.value = null;

    onClean();
  }

  renderButton() {
    const {
      component,
      color,
      disabled,
      size,
    } = this.props;
    const { fileName } = this.state;

    if (component) {
      return React.cloneElement(
        component,
        {
          onClick: () => this.inputFileField.click(),
          disabled,
        },
      );
    }

    return (
      <Button
        color={color}
        onClick={() => this.inputFileField.click()}
        disabled={disabled}
        size={size}
      >
        {fileName}
      </Button>
    );
  }

  renderButtonSelected() {
    const {
      componentSelected,
      color,
      disabled,
      size,
    } = this.props;
    const { fileName } = this.state;

    if (componentSelected) {
      return React.cloneElement(
        componentSelected,
        {
          onClick: () => this.inputFileField.click(),
          disabled,
        },
      );
    }

    return (
      <Button
        color={color}
        onClick={() => this.inputFileField.click()}
        disabled={disabled}
        size={size}
      >
        {fileName}
      </Button>
    );
  }

  render() {
    const {
      id,
      label,
      component,
      componentSelected,
      description,
      color,
      state,
      size,
      helpBlock,
      disabled,
      onChange,
      onClean,
      className,
      accept,
      ...newProps
    } = this.props;
    const { clean } = this.state;
    const newId = id || genHash();

    return (
      <FormGroup
        {...newProps}
        controlId={newId}
        validationState={state}
        className={className}
      >
        <ControlLabel>{label}</ControlLabel>
        <br />
        <ButtonGroup style={{ width: '100%' }}>
          {clean ? this.renderButtonSelected() : this.renderButton()}
          {clean ? (
            <Button onClick={this.clean} color="danger">
              <Label icon="fa fa-times" />
            </Button>
          ) : null}
        </ButtonGroup>
        <FormControl
          type="file"
          disabled={disabled}
          onChange={this.handleChange}
          inputRef={(e) => { this.inputFileField = e; }}
          style={{ display: 'none' }}
          accept={accept}
        />
        {/** Se houver helpBlock, inclui */}
        {helpBlock && <HelpBlock>{helpBlock}</HelpBlock>}
      </FormGroup>
    );
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
InputFileComponent.defaultProps = {
  id: null,
  label: null,
  component: null,
  componentSelected: null,
  description: null,
  color: 'default',
  state: null,
  size: null,
  helpBlock: null,
  disabled: false,
  onChange: () => {},
  onClean: () => {},
  className: '',
  accept: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
InputFileComponent.propTypes = {
  id: PropTypes.string,
  label: PropTypes.element,
  component: PropTypes.element,
  componentSelected: PropTypes.element,
  description: PropTypes.element,
  color: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
  state: PropTypes.oneOf(['success', 'warning', 'error']),
  size: PropTypes.oneOf(['large', 'small']),
  helpBlock: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onClean: PropTypes.func,
  className: PropTypes.string,
  accept: PropTypes.string,
};

export default InputFileComponent;
