import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'react-bootstrap';

/**
 * [Tab, UIE031] Aba a ser exibido no Grupo de Abas
 * @param   {?string} props.eventKey Identificação da Tab
 * @param   {?string} props.title    Título da Tab
 * @param   {?object} props.children Conteúdo da Tab
 * @param  {?boolean} props.fixed    Indica se a Tab está fixada ou não
 * @param {?function} props.onClose  Função executada ao clicar no botão de fechar Tab
 * @param {?function} props.onFix    Função executada ao clicar no botão de fixar Tab
 */
const TabComponent = ({
  children,
  eventKey,
  title,
  ...props
}) => (
  <Tab
    eventKey={eventKey}
    title={title}
    style={{ backgroundColor: '#fff' }}
    {...props}
    fixed={null}
    onClose={null}
    onFix={null}
  >
    {children}
  </Tab>
);

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
TabComponent.defaultProps = {
  eventKey: '',
  title: '',
  children: null,
  fixed: null,
  onClose: null,
  onFix: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
TabComponent.propTypes = {
  eventKey: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  children: PropTypes.node,
  fixed: PropTypes.bool,
  onClose: PropTypes.func,
  onFix: PropTypes.func,
};

export default TabComponent;
