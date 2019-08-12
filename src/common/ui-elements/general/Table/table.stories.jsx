import React from 'react';
import { storiesOf } from '@storybook/react';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import Table from '.';

storiesOf('ui-elements/general/Table [Table, UIE028]', module)
  .add('children thead', () => (
    <Table>
      <thead>
        <tr>
          <th>Título 1</th>
          <th>Título 2</th>
          <th>Título 3</th>
        </tr>
      </thead>
    </Table>
  ), {
    notes: 'No "thead > tr > th" o título fica negrito',
  })

  .add('children tbody', () => (
    <Table>
      <tbody>
        <tr>
          <td>Coluna 1</td>
          <td>Coluna 2</td>
          <td>Coluna 3</td>
        </tr>
      </tbody>
    </Table>
  ), {
    notes: `tbody - corpo da tabela
            tr - cada linha da tabela
            td - conteúdo de cada célula`,
  })

  .add('children com thead e tbody', () => (
    <Table>
      <thead>
        <tr>
          <th>Título 1</th>
          <th>Título 2</th>
          <th>Título 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Linha 1 - Coluna 1</td>
          <td>Linha 1 - Coluna 2</td>
          <td>Linha 1 - Coluna 3</td>
        </tr>
        <tr>
          <td>Linha 2 - Coluna 1</td>
          <td>Linha 2 - Coluna 2</td>
          <td>Linha 2 - Coluna 3</td>
        </tr>
        <tr>
          <td>Linha 3 - Coluna 1</td>
          <td>Linha 3 - Coluna 2</td>
          <td>Linha 3 - Coluna 3</td>
        </tr>
      </tbody>
    </Table>
  ), {
    notes: `Tabela exemplo.
            Observar as diferenças das cores entre as linhas.
            Observar ação do cursor em cima das linhas.`,
  })

  .add('outras props', () => (
    <>
      Tabela com className text-danger
      <Table className="text-danger">
        <tbody>
          <tr>
            <td>Coluna 1</td>
            <td>Coluna 2</td>
            <td>Coluna 3</td>
          </tr>
        </tbody>
      </Table>
    </>
  ), {
    notes: 'É possível passar outras props do react-bootstrap como o "condensed" ou "className".',
  });
