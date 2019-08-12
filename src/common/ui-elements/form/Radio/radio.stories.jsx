import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import { Label } from 'common/ui-elements';
import Radio from './';

storiesOf('ui-elements/form/Radio [Radio, UIE015]', module)
  .add('default', () => (
    <Radio />
  ), {
    notes: 'Sem label.',
  })

  .add('label', () => (
    <Radio label={<Label>Radio</Label>} />
  ), {
    notes: `O "label" deve ser o [Label, UIE002] e deve ser passado sem a props form.
            É possível usar string, mas o proptypes não está aceitando string para manter um padrão no projeto.`,
  })

  .add('value', () => (
    <React.Fragment>
      <Radio
        label={<Label>Radio 1</Label>}
        name="grupo-1"
        value="valor-1"
        onChange={e => console.log(e.target.value)}
      />
      <Radio
        label={<Label>Radio 2</Label>}
        name="grupo-1"
        value="valor-2"
        onChange={e => console.log(e.target.value)}
      />
    </React.Fragment>
  ), {
    notes: `É possível obter o value com a função "onChange".
            Verificar no HTML do radio o value="valor-de-teste".`,
  })

  .add('name', () => (
    <React.Fragment>
      <div style={{ width: '100px', float: 'left' }}>
        <p><b>grupo-1</b></p>
        <Radio label={<Label>Radio 1</Label>} name="grupo-1" />
        <Radio label={<Label>Radio 2</Label>} name="grupo-1" />
      </div>
      <div style={{ width: '100px', float: 'left' }}>
        <p><b>grupo-2</b></p>
        <Radio label={<Label>Radio 1</Label>} name="grupo-2" />
        <Radio label={<Label>Radio 2</Label>} name="grupo-2" />
      </div>
      <div style={{ width: '100px', float: 'left' }}>
        <p><b>Sem grupo</b></p>
        <Radio label={<Label>Radio 1</Label>} />
        <Radio label={<Label>Radio 2</Label>} />
      </div>
    </React.Fragment>
  ), {
    notes: `O "name" define o nome do grupo em que o radio pertence.
            As mudanças entre os radios só funcionam em seu grupo.
            Observe que os radios sem "name" são independentes porque não pertence a nenhum grupo.`,
  })

  .add('disabled', () => (
    <Radio disabled label={<Label>Radio disabled</Label>} />
  ), {
    notes: 'O "disabled" permite desabilitar o campo. Tem o mesmo funcionamento do "readOnly".',
  })

  .add('readOnly', () => (
    <Radio readOnly label={<Label>Radio readOnly</Label>} />
  ), {
    notes: 'O "readOnly" permite desabilitar o campo. Tem o mesmo funcionamento do "disabled"',
  })

  .add('checked com onChange', () => (
    <React.Fragment>
      <Radio
        label={<Label>Radio 1</Label>}
        checked
        name="grupo"
        onChange={action('Função onChange para mudar o estado do check')}
      />
      <Radio
        label={<Label>Radio 2</Label>}
        name="grupo"
        onChange={action('Função onChange para mudar o estado do check')}
      />
    </React.Fragment>
  ), {
    notes: `O "checked" inicia o campo controlado "checado".
            Um campo controlado é obrigatório um "onChange" para mudar o valor do campo alterando o estado.
            É possível passar checked={true} ou checked={false}.
            Para um campo não controlado deve-se usar "defaultChecked".
            ATENÇÃO: essa simulação não identifica corretamente a mudança no onChange pois não altera o estado do vale no react.`,
  })

  .add('defaultChecked', () => (
    <React.Fragment>
      <Radio
        label={<Label>Radio</Label>}
        defaultChecked
        name="grupo"
      />
      <Radio
        label={<Label>Radio</Label>}
        name="grupo"
      />
    </React.Fragment>
  ), {
    notes: `O 'defaultChecked' inicia o campo não controlado "checado".
            É possível passar defaultChecked={true} ou defaultChecked={false}.
            É possível fazer a alteração do campo sem a função "onChange".
            Para um campo controlado deve-se usar o "checked" com "onChange".`,
  })

  .add('defaultChecked e onChange', () => (
    <React.Fragment>
      <Radio
        label={<Label>Radio</Label>}
        defaultChecked
        name="grupo"
        onChange={action('Função onChange reconhece a alteração no campo')}
      />
      <Radio
        label={<Label>Radio</Label>}
        name="grupo"
        onChange={action('Função onChange reconhece a alteração no campo')}
      />
    </React.Fragment>
  ), {
    notes: 'É possível executar o onChange mesmo que o campo não seja controlado.',
  })

  .add('className', () => (
    <Radio
      label={<Label>Radio com class &quot;um-teste&quot;</Label>}
      className="um-teste"
    />
  ), {
    notes: `É possível passar livremente class pelo "className".
            Verificar a class "um-teste" junto a class "radio" na div superior.`,
  });
