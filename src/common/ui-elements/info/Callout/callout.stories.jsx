import React from 'react';
import { storiesOf } from '@storybook/react';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import { Label } from 'common/ui-elements';
import Callout from './CalloutComponent';

const colors = ['info', 'success', 'warning', 'danger'];

storiesOf('ui-elements/info/Callout [Callout, UIE027]', module)
  .add('title', () => (
    <Callout title="Título do Callout" />
  ), {
    notes: 'O "title" pode ser uma string.',
  })

  .add('title Label', () => (
    <Callout title={<Label icon="fa fa-info">Título do Callout</Label>} />
  ), {
    notes: 'O "title" pode ser um [Label, UIE002], caso queira colocar um ícone por exemplo.',
  })

  .add('children', () => (
    <Callout title="Título">Corpo do Callout</Callout>
  ), {
    notes: 'O children(Corpo do Callout) pode ser qualquer Elemento React.',
  })

  .add('color', () => colors.map((color, index) => (
    <Callout
      title="Título"
      color={color}
      key={index.toString()}
    >
      {`Callout color ${color}`}
    </Callout>
  )), {
    notes: `É possível passar o nome das cores pelo "color" relacionada ao contexto: info, success, warning, danger.
            O padrão é info.`,
  })

  .add('outras props', () => (
    <Callout
      title="Título"
      className="text-right"
    >
      Callout com className text-right
    </Callout>
  ), {
    notes: 'É possível passar outras props como o "className" e "style.',
  });
