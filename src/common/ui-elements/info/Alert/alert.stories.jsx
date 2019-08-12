import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import Alert from './AlertComponent';

const colors = ['info', 'success', 'warning', 'danger'];

storiesOf('ui-elements/info/Alert [Alert, UIE025]', module)
  .add('title', () => (
    <Alert title="Título do Alert" />
  ), {
    notes: 'O "title" é uma string.',
  })

  .add('children', () => (
    <Alert title="Título">Corpo do Alert</Alert>
  ), {
    notes: 'O children(Corpo do Alert) pode ser qualquer Elemento React.',
  })

  .add('color', () => colors.map((color, index) => (
    <Alert
      title="Título"
      color={color}
      key={index.toString()}
    >
      Alert color {color}
    </Alert>
  )), {
    notes: `É possível passar o nome das cores pelo "color" relacionada ao contexto: info, success, warning, danger.
            O padrão é info.`,
  })

  .add('alert', () => (
    <Alert alert title="Título">Corpo do Alert</Alert>
  ), {
    notes: `O "alert" não produz alteração visual apenas no AlertComponent
            O "alert" identifica o tipo de Alert para ser removido no estado do reducer correto.
            Quando não é passado o "alert" nem o "alertPopup" é possível fechar o Alert não controlado.`,
  })

  .add('alertPopup', () => (
    <Alert alertPopup title="Título">Corpo do Alert</Alert>
  ), {
    notes: `O "alertPopup" não produz alteração visual apenas no AlertComponent
            O "alertPopup" identifica o tipo de Alert para ser removido no estado do reducer correto.
            Quando não é passado o "alert" nem o "alertPopup" é possível fechar o Alert não controlado.`,
  })

  .add('alertName', () => (
    <Alert title="Título" alertName="uma-string">Corpo do Alert</Alert>
  ), {
    notes: `O "alertName" não produz alteração visual apenas no AlertComponent
            O "alertName" trabalha junto ao Alerts e AlertsPopup.
            O "alertName" é o nome do Alert na lista de Alerts no estado do reducer.`,
  });
