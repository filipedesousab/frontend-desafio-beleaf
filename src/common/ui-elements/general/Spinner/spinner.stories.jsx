import React from 'react';
import { storiesOf } from '@storybook/react';

import { Spinner } from '.';

storiesOf('ui-elements/general/Spinner/Spinner [Spinner, UIE033]', module)
  .add('sem props', () => (
    <Spinner />
  ), {
    notes: 'Com valores default.',
  })

  .add('margin', () => (
    <Spinner margin={10} />
  ), {
    notes: 'Margem entre as circunferências do sipinner.',
  })

  .add('size', () => (
    <Spinner size={25} />
  ), {
    notes: 'Tamanho das circunferências do spinner.',
  })

  .add('color', () => (
    <Spinner color="#f00" />
  ), {
    notes: 'Cor do spinner.',
  });
