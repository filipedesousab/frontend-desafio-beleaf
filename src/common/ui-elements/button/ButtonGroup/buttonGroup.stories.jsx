import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import { Button, ButtonDropdown, Label } from 'common/ui-elements';
import ButtonGroup from './';

storiesOf('ui-elements/button/ButtonGroup [ButtonGroup, UIE009]', module)
  .add('children', () => (
    <ButtonGroup>
      <Button><Label>Botão 1</Label></Button>
      <Button><Label>Botão 2</Label></Button>
      <ButtonDropdown label={<Label>Dropdown</Label>} />
    </ButtonGroup>
  ), {
    notes: 'É possível passar livremente [Button, UIE004] e [ButtonDropdown, UIE006] no children.',
  })

  .add('vertical', () => (
    <ButtonGroup vertical>
      <Button><Label>Botão 1</Label></Button>
      <Button><Label>Botão 2</Label></Button>
      <ButtonDropdown label={<Label>Dropdown</Label>} />
    </ButtonGroup>
  ), {
    notes: 'A props "vertical" permite alinhar verticalmente os botões.',
  })

  .add('className', () => (
    <ButtonGroup className="um-teste">
      <Button><Label>Botão 1</Label></Button>
      <Button><Label>Botão 2</Label></Button>
      <ButtonDropdown label={<Label>Dropdown</Label>} />
    </ButtonGroup>
  ), {
    notes: `É possível passar livremente class pelo className para o componente ButtonGroup.
            Verificar se a class um-teste está junto a btn-group, inspecionando o HTML.`,
  });
