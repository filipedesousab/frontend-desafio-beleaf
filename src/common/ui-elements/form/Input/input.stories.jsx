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
import Input from '.';

storiesOf('ui-elements/form/Input [Input, UIE010]', module)
  .add('input com id', () => (
    <Input id="um-id-teste" />
  ), {
    notes: 'Inspecionar id "um-id-teste" no HTML do input.',
  })

  .add('input sem id', () => (
    <Input />
  ), {
    notes: 'Inspecionar id com uma hash aleatória no HTML do input.',
  })

  .add('label', () => (
    <Input label={<Label icon="fa fa-smile-o">Um label com icon</Label>} />
  ), {
    notes: `O label deve ser o [Label, UIE002] e deve ser passado sem a props form.
            É possível usar string, mas o proptypes não está aceitando string para manter um padrão no projeto.`,
  })

  .add('label com form', () => (
    <Input label={<Label form icon="fa fa-smile-o">Um label com props form</Label>} />
  ), {
    notes: 'O label [Label, UIE002] com a props form gera uma margin desnecessária a mais.',
  })

  .add('placeholder', () => (
    <Input
      label={<Label>Input com placeholder</Label>}
      placeholder="Placeholder de um campo."
    />
  ), {
    notes: 'O placeholder mantém uma descrição dentro do campo.',
  })

  .add('helpBlock', () => (
    <Input
      label={<Label>Input com helpBlock</Label>}
      helpBlock="Esse é um helpBlock string."
    />
  ), {
    notes: 'O helpBlock é para passar alguma informação ao usuário.',
  })

  .add('helpBlock Label', () => (
    <Input
      label={<Label>Input com helpBlock Label</Label>}
      helpBlock={<Label>Esse é um helpBlock Label.</Label>}
    />
  ), {
    notes: 'O helpBlock é para passar alguma informação ao usuário.',
  })

  .add('state', () => ['success', 'warning', 'error'].map((state, index) => (
    <React.Fragment key={index.toString()}>
      <Input
        label={<Label>{`Input ${state}`}</Label>}
        placeholder={`Placeholder ${state}`}
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
      <Input
        label={<Label>Label mantém o mesmo tamanho</Label>}
        placeholder={`Placeholder ${size}`}
        helpBlock={<Label>Help Block mantém o mesmo tamanho.</Label>}
        state={state}
        size={size}
      />
      <br />
    </React.Fragment>
  ))), {
    notes: `O state permite alertar o usuário com as cores.
            O size permite alterar o tamanho do input. Para o padrão deve passar size como null.
            O Placeholder acompanha o tamanho do size, já o Label ẽ Help Block se mantêm no mesmo tamanho`,
  })

  .add('name', () => (
    <Input
      label={<Label>Input com name</Label>}
      name="name-teste"
    />
  ), {
    notes: `É possível definir o name do input.
            O name pode ser utilizado na submissão de formulário ou para utilizar bibliotecas como Formik.
            É possível inspecionar o código e objervar o "name" com "name-teste".`,
  })

  .add('type', () => ['text', 'email', 'password', 'number'].map((type, index) => (
    <React.Fragment key={index.toString()}>
      <Input
        label={<Label>{`Input type ${type}`}</Label>}
        type={type}
      />
      <br />
    </React.Fragment>
  )), {
    notes: `É possível definir o type do input. Quando null, o input se comporta como text.
            É possível inspecionar o código e objervar a inclusão do atributo "type" em cada botão.`,
  })

  .add('btnLeft', () => [
    <Button><Label>Button</Label></Button>,
    <ButtonIcon icon={<Icon name="fa fa-smile-o" />}><Label>ButtonIcon</Label></ButtonIcon>,
    <ButtonDropdown label={<Label>Dropdown</Label>} />,
  ].map((button, index) => (
    <React.Fragment key={index.toString()}>
      <Input
        label={<Label>{`Input com ${button.type.name} no lado esquerdo`}</Label>}
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
      <Input
        label={<Label>{`Input com ${button.type.name} no lado direito`}</Label>}
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
      <Input
        label={<Label>Input com button nos dois lados e state</Label>}
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

  .add('btnLeft, btnRight, placeholder e size', () => [
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
      <Input
        label={<Label>{`Input com size ${value.size}`}</Label>}
        placeholder={`Input com size ${value.size}`}
        btnLeft={value.button}
        btnRight={value.button}
        size={value.size}
      />
      <br />
    </React.Fragment>
  )), {
    notes: 'A combinação do size com os botões funciona melhor quando também é passado o size para os botões.',
  })

  .add('addonLeft', () => [
    'string',
    <Icon name="fa fa-smile-o" />,
    <Checkbox label={<Label>OK</Label>} />,
    <Radio label={<Label>Sim</Label>} />,
  ].map((addon, index) => (
    <React.Fragment key={index.toString()}>
      <Input
        label={<Label>{`Input com ${typeof addon === 'string' ? addon : addon.type.name} no lado esquerdo`}</Label>}
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
      <Input
        label={<Label>{`Input com ${typeof addon === 'string' ? addon : addon.type.name} no lado direito`}</Label>}
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
      <Input
        label={<Label>{`Input com ${typeof value.addon === 'string' ? value.addon : value.addon.type.name} no lado direito`}</Label>}
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

  .add('addonLeft, addonRight, placeholder e size', () => [
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
      <Input
        label={<Label>{`Input com size ${value.size}`}</Label>}
        placeholder={`Input com size ${value.size}`}
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
      <Input
        label={<Label>Input com botão e addon nos dois lados</Label>}
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
      <Input
        label={<Label>Input com botão e addon nos dois lados</Label>}
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
    <Input
      label={<Label>Input com value</Label>}
      value="Um valor"
      onChange={action('Função onChange para mudar o valor')}
    />
  ), {
    notes: `O value aplica um valor a um campo controlado.
            Um campo controlado é obrigatório um onChange para mudar o valor do campo alterando o estado.
            Para um campo não controlado deve-se usar defaultValue.`,
  })

  .add('defaultValue', () => (
    <Input
      label={<Label>Input com defaultValue</Label>}
      defaultValue="Um valor"
    />
  ), {
    notes: `O defaultValue aplica um valor a um campo não controlado.
            É possível fazer a alteração do campo sem a função onChange.
            Para um campo controlado deve-se usar o value com onChange.`,
  })

  .add('defaultValue e onChange', () => (
    <Input
      label={<Label>Input com defaultValue</Label>}
      defaultValue="Um valor"
      onChange={action('Função onChange reconhece a alteração no campo')}
    />
  ), {
    notes: 'É possível executar o onChange mesmo que o campo não seja controlado.',
  })

  .add('disabled', () => (
    <Input
      label={<Label>Campo disabled</Label>}
      placeholder="Placeholder"
      disabled
    />
  ), {
    notes: `O "disabled" permite desabilitar o campo. Também é possível passar o parâmetro da forma disabled={true} ou disabled={false}.
            O "disabled" desabilita o campo e não permite o submit do mesmo.`,
  })

  .add('readOnly', () => (
    <Input
      label={<Label>Campo readOnly</Label>}
      placeholder="Placeholder"
      readOnly
    />
  ), {
    notes: `O "readOnly" permite desabilitar o campo. Também é possível passar o parâmetro da forma readOnly={true} ou readOnly={false}.
            O "readOnly" desabilita a alteração do campo, mas permite o submit do mesmo.`,
  })

  .add('blockInput', () => (
    <div style={{ width: '300px', backgroundColor: '#ddd' }}>
      <p>Área com width 300px</p>
      <br />
      <Input
        label={<Label>Campo com width 100%</Label>}
        placeholder="Placeholder"
        blockInput
      />
    </div>
  ), {
    notes: 'O "blockInput" permite habilitar o width 100% no campo. Também é possível passar o parâmetro da forma blockInput={true} ou blockInput={false}.',
  })

  .add('className', () => (
    <Input
      label={<Label>Input com class &quot;um-teste&quot;</Label>}
      className="um-teste"
    />
  ), {
    notes: `É possível passar livremente class pelo className.
            Verificar a class "um-teste" junto a "form-group".`,
  })

  .add('_ref', () => (
    <Input
      label={<Label>Input com referência</Label>}
      _ref={action('Referência do input')}
    />
  ), {
    notes: `É obter a referência do input com o _ref.
            Pode ser uma função que retorna a referência ou o React.createRef()`,
  });
