import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import {
  Button,
  ButtonIcon,
  ButtonDropdown,
  Checkbox,
  Icon,
  Label,
  Radio,
} from 'common/ui-elements';
import SelectMultiple from '.';

storiesOf('ui-elements/form/SelectMultiple [SelectMultiple, UIE013]', module)
  .add('select com id', () => (
    <SelectMultiple id="um-id-teste" />
  ), {
    notes: 'Inspecionar id "um-id-teste" no HTML do select.',
  })

  .add('select sem id', () => (
    <SelectMultiple />
  ), {
    notes: 'Inspecionar id com uma hash aleatória no HTML do select.',
  })

  .add('label', () => (
    <SelectMultiple label={<Label icon="fa fa-smile-o">Um label com icon</Label>} />
  ), {
    notes: `O label deve ser o [Label, UIE002] e deve ser passado sem a props form.
            É possível usar string, mas o proptypes não está aceitando string para manter um padrão no projeto.`,
  })

  .add('label com form', () => (
    <SelectMultiple label={<Label form icon="fa fa-smile-o">Um label com props form</Label>} />
  ), {
    notes: 'O label [Label, UIE002] com a props form gera uma margin desnecessária a mais.',
  })

  .add('helpBlock', () => (
    <SelectMultiple
      label={<Label>SelectMultiple com helpBlock</Label>}
      helpBlock="Esse é um helpBlock string."
    />
  ), {
    notes: 'O helpBlock é para passar alguma informação ao usuário.',
  })

  .add('helpBlock Label', () => (
    <SelectMultiple
      label={<Label>SelectMultiple com helpBlock Label</Label>}
      helpBlock={<Label>Esse é um helpBlock Label.</Label>}
    />
  ), {
    notes: 'O helpBlock é para passar alguma informação ao usuário.',
  })

  .add('options com id', () => (
    <SelectMultiple
      label={<Label>SelectMultiple opções com id</Label>}
      options={[
        { value: 'op1', label: 'Opção 1', id: '1' },
        { value: 'op2', label: 'Opção 2', id: '2' },
      ]}
    />
  ), {
    notes: `Se a opção tiver um id no banco de dados deve ser utilizado no "id", mas não é obrigatório ter para utilizar o componente.
            O id irá definir a key do componente, que é uma propriedade importante para o bom desempenho do react.
            Visivelmente não será possível observar e efeito de definir o id, é algo lógico da biblioteca react.
            O uso de index do array é desencorajado para evitar falhas quando houver alterações de estados, por esse motivo o id do banco é a melhor opção.`,
  })

  .add('options sem id', () => (
    <SelectMultiple
      label={<Label>SelectMultiple opções com id</Label>}
      options={[
        { value: 'op1', label: 'Opção 1' },
        { value: 'op2', label: 'Opção 2' },
      ]}
    />
  ), {
    notes: `Se a opção tiver um id no banco de dados deve ser utilizado no "id", mas não é obrigatório ter para utilizar o componente.
            O id irá definir a key do componente, que é uma propriedade importante para o bom desempenho do react.
            Visivelmente não será possível observar e efeito de definir o id, é algo lógico da biblioteca react.
            O uso de index do array é desencorajado para evitar falhas quando houver alterações de estados, por esse motivo o id do banco é a melhor opção.`,
  })

  .add('options e state', () => [null, 'success', 'warning', 'error'].map((state, index) => (
    <React.Fragment key={index.toString()}>
      <SelectMultiple
        label={<Label>{`SelectMultiple state ${state}`}</Label>}
        options={[
          { value: 'op1', label: 'Opção 1' },
          { value: 'op2', label: 'Opção 2' },
        ]}
        helpBlock={<Label>{`Help Block ${state}.`}</Label>}
        state={state}
      />
      <br />
    </React.Fragment>
  )), {
    notes: 'O state permite alertar o usuário com as cores.',
  })

  .add('state e size', () => [null, 'success', 'warning', 'error'].map((state, index) => ['large', null, 'small'].map((size, index2) => (
    <React.Fragment key={`${index.toString()}${index2.toString()}`}>
      <SelectMultiple
        label={<Label>Label mantém o mesmo tamanho</Label>}
        options={[
          { value: 'op1', label: 'Opção 1' },
          { value: 'op2', label: 'Opção 2' },
        ]}
        helpBlock={<Label>Help Block mantém o mesmo tamanho.</Label>}
        state={state}
        size={size}
      />
      <br />
    </React.Fragment>
  ))), {
    notes: `O state permite alertar o usuário com as cores.
            O size permite alterar o tamanho do select. Para o padrão deve passar size como null.
            O Placeholder acompanha o tamanho do size, já o Label ẽ Help Block se mantêm no mesmo tamanho`,
  })

  .add('btnLeft', () => [
    <Button><Label>Button</Label></Button>,
    <ButtonIcon icon={<Icon name="fa fa-smile-o" />}><Label>ButtonIcon</Label></ButtonIcon>,
    <ButtonDropdown label={<Label>Dropdown</Label>} />,
  ].map((button, index) => (
    <React.Fragment key={index.toString()}>
      <SelectMultiple
        label={<Label>{`SelectMultiple com ${button.type.name} no lado esquerdo`}</Label>}
        options={[
          { value: 'op1', label: 'Opção 1' },
          { value: 'op2', label: 'Opção 2' },
        ]}
        btnLeft={button}
      />
      <br />
    </React.Fragment>
  )), {
    notes: 'É possível inserir um botão no lado esquerdo do campo com o btnLeft.',
  })

  .add('btnRight', () => [
    <Button><Label>Button</Label></Button>,
    <ButtonIcon icon={<Icon name="fa fa-smile-o" />}><Label>ButtonIcon</Label></ButtonIcon>,
    <ButtonDropdown label={<Label>Dropdown</Label>} />,
  ].map((button, index) => (
    <React.Fragment key={index.toString()}>
      <SelectMultiple
        label={<Label>{`SelectMultiple com ${button.type.name} no lado direito`}</Label>}
        options={[
          { value: 'op1', label: 'Opção 1' },
          { value: 'op2', label: 'Opção 2' },
        ]}
        btnRight={button}
      />
      <br />
    </React.Fragment>
  )), {
    notes: 'É possível inserir um botão no lado direito do campo com o btnLeft.',
  })

  .add('btnLeft, btnRight e state', () => [
    { button: <Button><Label>Button</Label></Button>, state: null },
    { button: <Button><Label>Button</Label></Button>, state: 'success' },
    { button: <ButtonIcon icon={<Icon name="fa fa-smile-o" />}><Label>ButtonIcon</Label></ButtonIcon>, state: 'warning' },
    { button: <ButtonDropdown label={<Label>Dropdown</Label>} />, state: 'error' },
  ].map((value, index) => (
    <React.Fragment key={index.toString()}>
      <SelectMultiple
        label={<Label>SelectMultiple com button nos dois lados e state</Label>}
        options={[
          { value: 'op1', label: 'Opção 1' },
          { value: 'op2', label: 'Opção 2' },
        ]}
        btnLeft={value.button}
        btnRight={value.button}
        state={value.state}
      />
      <br />
    </React.Fragment>
  )), {
    notes: `É possível inserir um botão nos dois lados do campo.
            O btnRight sobrepõe o ícone do state quando utilizados em conjunto.`,
  })

  .add('btnLeft, btnRight e size', () => [
    { button: <Button><Label>Button size null</Label></Button>, size: 'large' },
    { button: <Button size="large"><Label>Button size large</Label></Button>, size: 'large' },
    { button: <Button><Label>Button size null</Label></Button>, size: null },
    { button: <Button><Label>Button size null</Label></Button>, size: 'small' },
    { button: <Button size="small"><Label>Button size small</Label></Button>, size: 'small' },
    { button: <ButtonIcon icon={<Icon name="fa fa-smile-o" />}><Label>ButtonIcon size null</Label></ButtonIcon>, size: 'large' },
    { button: <ButtonIcon size="large" icon={<Icon name="fa fa-smile-o" />}><Label>ButtonIcon size large</Label></ButtonIcon>, size: 'large' },
    { button: <ButtonIcon icon={<Icon name="fa fa-smile-o" />}><Label>ButtonIcon size null</Label></ButtonIcon>, size: null },
    { button: <ButtonIcon icon={<Icon name="fa fa-smile-o" />}><Label>ButtonIcon size null</Label></ButtonIcon>, size: 'small' },
    { button: <ButtonIcon size="small" icon={<Icon name="fa fa-smile-o" />}><Label>ButtonIcon size small</Label></ButtonIcon>, size: 'small' },
    { button: <ButtonDropdown size="large" label={<Label>Dropdown size large</Label>} />, size: 'large' },
    { button: <ButtonDropdown label={<Label>Dropdown size null</Label>} />, size: null },
    { button: <ButtonDropdown label={<Label>Dropdown size null</Label>} />, size: 'small' },
    { button: <ButtonDropdown size="small" label={<Label>Dropdown size small</Label>} />, size: 'small' },
  ].map((value, index) => (
    <React.Fragment key={index.toString()}>
      <SelectMultiple
        label={<Label>{`SelectMultiple com size ${value.size}`}</Label>}
        options={[
          { value: 'op1', label: 'Opção 1' },
          { value: 'op2', label: 'Opção 2' },
        ]}
        btnLeft={value.button}
        btnRight={value.button}
        size={value.size}
      />
      <br />
    </React.Fragment>
  )), {
    notes: 'Mesmo aplicando o size nos botões a estética do componente não fica ideal.',
  })

  .add('addonLeft', () => [
    'string',
    <Icon name="fa fa-smile-o" />,
    <Checkbox label={<Label>OK</Label>} />,
    <Radio label={<Label>Sim</Label>} />,
  ].map((addon, index) => (
    <React.Fragment key={index.toString()}>
      <SelectMultiple
        label={(
          <Label>
            SelectMultiple com
            {` ${typeof addon === 'string' ? addon : addon.type.name} `}
            no lado esquerdo
          </Label>
        )}
        options={[
          { value: 'op1', label: 'Opção 1' },
          { value: 'op2', label: 'Opção 2' },
        ]}
        addonLeft={addon}
      />
      <br />
    </React.Fragment>
  )), {
    notes: 'É possível inserir um addon no lado esquerdo do campo com addonLeft.',
  })

  .add('addonRight', () => [
    'string',
    <Icon name="fa fa-smile-o" />,
    <Checkbox label={<Label>OK</Label>} />,
    <Radio label={<Label>Sim</Label>} />,
  ].map((addon, index) => (
    <React.Fragment key={index.toString()}>
      <SelectMultiple
        label={(
          <Label>
            SelectMultiple com
            {` ${typeof addon === 'string' ? addon : addon.type.name} `}
            no lado direito
          </Label>
        )}
        options={[
          { value: 'op1', label: 'Opção 1' },
          { value: 'op2', label: 'Opção 2' },
        ]}
        addonRight={addon}
      />
      <br />
    </React.Fragment>
  )), {
    notes: 'É possível inserir um addon no lado direito do campo com addonRight.',
  })

  .add('addonLeft, addonRight e state', () => [
    { addon: 'string', state: null },
    { addon: <Icon name="fa fa-smile-o" />, state: 'success' },
    { addon: <Checkbox label={<Label>OK</Label>} />, state: 'warning' },
    { addon: <Radio label={<Label>Sim</Label>} />, state: 'error' },
  ].map((value, index) => (
    <React.Fragment key={index.toString()}>
      <SelectMultiple
        label={(
          <Label>
            SelectMultiple com
            {` ${typeof value.addon === 'string' ? value.addon : value.addon.type.name} `}
            no lado esquerdo e direito
          </Label>
        )}
        options={[
          { value: 'op1', label: 'Opção 1' },
          { value: 'op2', label: 'Opção 2' },
        ]}
        addonLeft={value.addon}
        addonRight={value.addon}
        state={value.state}
      />
      <br />
    </React.Fragment>
  )), {
    notes: `É possível inserir um addon nos dois lados do campo.
            O texto do addon recebe a cor do estado.
            O addonRight sobrepõe o ícone do state quando utilizados em conjunto.`,
  })

  .add('addonLeft, addonRight e size', () => [
    { addon: 'string', size: 'large' },
    { addon: 'string', size: null },
    { addon: 'string', size: 'small' },
    { addon: <Icon name="fa fa-smile-o" />, size: 'large' },
    { addon: <Icon name="fa fa-smile-o" />, size: null },
    { addon: <Icon name="fa fa-smile-o" />, size: 'small' },
    { addon: <Checkbox label={<Label>OK</Label>} />, size: 'large' },
    { addon: <Checkbox label={<Label>OK</Label>} />, size: null },
    { addon: <Checkbox label={<Label>OK</Label>} />, size: 'small' },
    { addon: <Radio label={<Label>Sim</Label>} />, size: 'large' },
    { addon: <Radio label={<Label>Sim</Label>} />, size: null },
    { addon: <Radio label={<Label>Sim</Label>} />, size: 'small' },
  ].map((value, index) => (
    <React.Fragment key={index.toString()}>
      <SelectMultiple
        label={<Label>{`SelectMultiple com size ${value.size}`}</Label>}
        options={[
          { value: 'op1', label: 'Opção 1' },
          { value: 'op2', label: 'Opção 2' },
        ]}
        addonLeft={value.addon}
        addonRight={value.addon}
        size={value.size}
      />
      <br />
    </React.Fragment>
  )), {
    notes: 'A combinação do size com os addons funcionam perfeitamente.',
  })

  .add('addons, buttons e state', () => [
    { addon: 'string', state: 'success', button: <Button><Label>Button</Label></Button> },
    { addon: <Icon name="fa fa-smile-o" />, state: 'warning', button: <ButtonIcon icon={<Icon name="fa fa-smile-o" />}><Label>ButtonIcon</Label></ButtonIcon> },
    { addon: <Checkbox label={<Label>OK</Label>} />, state: 'error', button: <ButtonDropdown label={<Label>Dropdown</Label>} /> },
    { addon: <Radio label={<Label>Sim</Label>} />, state: null, button: <Button><Label>Button</Label></Button> },
  ].map((value, index) => (
    <React.Fragment key={index.toString()}>
      <SelectMultiple
        label={<Label>SelectMultiple com botão e addon nos dois lados</Label>}
        options={[
          { value: 'op1', label: 'Opção 1' },
          { value: 'op2', label: 'Opção 2' },
        ]}
        btnLeft={value.button}
        btnRight={value.button}
        addonLeft={value.addon}
        addonRight={value.addon}
        state={value.state}
      />
      <br />
    </React.Fragment>
  )), {
    notes: 'É possível inserir um addon em conjunto com botões nos dois lados do campo.',
  })

  .add('addons, buttons, state e disabled', () => [
    { addon: 'string', state: 'success', button: <Button><Label>Button</Label></Button> },
    { addon: <Icon name="fa fa-smile-o" />, state: 'warning', button: <ButtonIcon icon={<Icon name="fa fa-smile-o" />}><Label>ButtonIcon</Label></ButtonIcon> },
    { addon: <Checkbox label={<Label>OK</Label>} />, state: 'error', button: <ButtonDropdown label={<Label>Dropdown</Label>} /> },
    { addon: <Radio label={<Label>Sim</Label>} />, state: null, button: <Button><Label>Button</Label></Button> },
  ].map((value, index) => (
    <React.Fragment key={index.toString()}>
      <SelectMultiple
        label={<Label>SelectMultiple com botão e addon nos dois lados</Label>}
        options={[
          { value: 'op1', label: 'Opção 1' },
          { value: 'op2', label: 'Opção 2' },
        ]}
        btnLeft={value.button}
        btnRight={value.button}
        addonLeft={value.addon}
        addonRight={value.addon}
        state={value.state}
        disabled
      />
      <br />
    </React.Fragment>
  )), {
    notes: `O "disabled" permite desabilitar apenas o campo. Os addons e buttons devem ser desabilitados individualmente.
            Também é possível passar o parâmetro da forma disabled={true} ou disabled={false}.`,
  })

  .add('value com onChange', () => (
    <SelectMultiple
      label={<Label>SelectMultiple com value</Label>}
      options={[
        { value: 'op1', label: 'Opção 1' },
        { value: 'op2', label: 'Opção 2' },
      ]}
      value={['op1', 'op2']}
      onChange={action('Função onChange para mudar o valor')}
    />
  ), {
    notes: `O value aplica um valor a um campo controlado.
            Um campo controlado é obrigatório um onChange para mudar o valor do campo alterando o estado.
            Para um campo não controlado deve-se usar defaultValue.`,
  })

  .add('defaultValue', () => (
    <SelectMultiple
      label={<Label>SelectMultiple com defaultValue</Label>}
      options={[
        { value: 'op1', label: 'Opção 1' },
        { value: 'op2', label: 'Opção 2' },
      ]}
      defaultValue={['op1', 'op2']}
    />
  ), {
    notes: `O defaultValue aplica um valor a um campo não controlado.
            É possível fazer a alteração do campo sem a função onChange.
            Para um campo controlado deve-se usar o value com onChange.`,
  })

  .add('defaultValue e onChange', () => (
    <SelectMultiple
      label={<Label>SelectMultiple com defaultValue</Label>}
      options={[
        { value: 'op1', label: 'Opção 1' },
        { value: 'op2', label: 'Opção 2' },
      ]}
      defaultValue={['op1', 'op2']}
      onChange={action('Função onChange reconhece a alteração no campo')}
    />
  ), {
    notes: 'É possível executar o onChange mesmo que o campo não seja controlado.',
  })

  .add('disabled', () => (
    <SelectMultiple
      label={<Label>Campo disabled</Label>}
      options={[
        { value: 'op1', label: 'Opção 1' },
        { value: 'op2', label: 'Opção 2' },
      ]}
      disabled
    />
  ), {
    notes: 'O "disabled" permite desabilitar o campo. Também é possível passar o parâmetro da forma disabled={true} ou disabled={false}.',
  })

  .add('blockInput', () => (
    <div style={{ width: '300px', backgroundColor: '#ddd' }}>
      <p>Área com width 300px</p>
      <br />
      <SelectMultiple
        label={<Label>Campo com width 100%</Label>}
        options={[
          { value: 'op1', label: 'Opção 1' },
          { value: 'op2', label: 'Opção 2' },
        ]}
        blockInput
      />
    </div>
  ), {
    notes: 'O "blockInput" permite habilitar o width 100% no campo. Também é possível passar o parâmetro da forma blockInput={true} ou blockInput={false}.',
  })

  .add('className', () => (
    <SelectMultiple
      label={<Label>SelectMultiple com class &quot;um-teste&quot;</Label>}
      className="um-teste"
    />
  ), {
    notes: `É possível passar livremente class pelo className.
            Verificar a class "um-teste" junto a "form-group".`,
  })

  .add('_ref', () => (
    <SelectMultiple
      label={<Label>SelectMultiple com referência</Label>}
      _ref={action('Referência do select')}
    />
  ), {
    notes: `Serve para obter a referência do select com o _ref.
            Pode ser uma função que retorna a referência ou o React.createRef()`,
  });
