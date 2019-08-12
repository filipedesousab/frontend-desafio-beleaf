import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import { Button, Label } from 'common/ui-elements';
import Tooltip from './';

storiesOf('ui-elements/general/Tooltip [Tooltip, UIE030]', module)
  .add('description e children', () => (
    <Tooltip description="Descrição do Tooltip">
      <Button><Label>Botão</Label></Button>
    </Tooltip>
  ), {
    notes: `Texto a ser exibido no Tooltip. Deve ser string.
            O children é o elemento a receber o Tooltip.`,
  });

