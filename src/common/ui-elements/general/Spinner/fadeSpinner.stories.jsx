import React from 'react';
import { storiesOf } from '@storybook/react';

import 'common/scss/custom.scss';
import { FadeSpinner } from '.';

storiesOf('ui-elements/general/Spinner/FadeSpinner [FadeSpinner, UIE034]', module)
  .add('sem props', () => (
    <>
      <br />
      <br />
      <button type="button">TENTE CLICAR</button>
      <FadeSpinner />
    </>
  ), {
    notes: 'Deve ser utilizado para indicar carregamento ao usuário, escurece a tela e impede a manipulação do usuário.',
  });
