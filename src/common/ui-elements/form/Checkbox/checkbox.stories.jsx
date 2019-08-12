import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import { Label } from 'common/ui-elements';
import Checkbox from './';

storiesOf('ui-elements/form/Checkbox [Checkbox, UIE014]', module)
  .add('default', () => (
    <Checkbox />
  ), {
    notes: 'Sem label.',
  })

  .add('label', () => (
    <Checkbox label={<Label>Checkbox</Label>} />
  ), {
    notes: `O "label" deve ser o [Label, UIE002] e deve ser passado sem a props form.
            É possível usar string, mas o proptypes não está aceitando string para manter um padrão no projeto.`,
  })

  .add('value', () => (
    <Checkbox
      label={<Label>Checkbox</Label>}
      value="valor-de-teste"
      onChange={e => console.log(e.target.value)}
    />
  ), {
    notes: `É possível obter o value com a função "onChange".
            Verificar no HTML do checkbox o value="valor-de-teste".`,
  })

  .add('disabled', () => (
    <Checkbox disabled label={<Label>Checkbox disabled</Label>} />
  ), {
    notes: 'O "disabled" permite desabilitar o campo. Tem o mesmo funcionamento do "readOnly".',
  })

  .add('readOnly', () => (
    <Checkbox readOnly label={<Label>Checkbox readOnly</Label>} />
  ), {
    notes: 'O "readOnly" permite desabilitar o campo. Tem o mesmo funcionamento do "disabled"',
  })

  .add('checked com onChange', () => (
    <Checkbox
      label={<Label>Checkbox</Label>}
      checked
      onChange={action('Função onChange para mudar o estado do check')}
    />
  ), {
    notes: `O "checked" inicia o campo controlado "checado".
            Um campo controlado é obrigatório um "onChange" para mudar o valor do campo alterando o estado.
            É possível passar checked={true} ou checked={false}.
            Para um campo não controlado deve-se usar "defaultChecked".`,
  })

  .add('defaultChecked', () => (
    <Checkbox
      label={<Label>Checkbox</Label>}
      defaultChecked
    />
  ), {
    notes: `O 'defaultChecked' inicia o campo não controlado "checado".
            É possível passar defaultChecked={true} ou defaultChecked={false}.
            É possível fazer a alteração do campo sem a função "onChange".
            Para um campo controlado deve-se usar o "checked" com "onChange".`,
  })

  .add('defaultChecked e onChange', () => (
    <Checkbox
      label={<Label>Checkbox</Label>}
      defaultChecked
      onChange={action('Função onChange reconhece a alteração no campo')}
    />
  ), {
    notes: 'É possível executar o onChange mesmo que o campo não seja controlado.',
  })

  .add('className', () => (
    <Checkbox
      label={<Label>Checkbox com class &quot;um-teste&quot;</Label>}
      className="um-teste"
    />
  ), {
    notes: `É possível passar livremente class pelo "className".
            Verificar a class "um-teste" junto a class "checkbox" na div superior.`,
  });
