import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

/**
 * [Table, UIE028] Tabela
 * @param {object} props.children Elementos HTML thead, tbody, tfoot, tr, th e td
 */
const TableComponent = ({ children, ...props }) => (
  <Table striped bordered hover responsive size="sm" {...props}>
    {children}
  </Table>
);

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
TableComponent.defaultProps = {
  children: null,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
TableComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default TableComponent;
