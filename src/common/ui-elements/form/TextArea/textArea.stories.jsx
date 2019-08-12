import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import {
  Checkbox,
  Icon,
  Label,
  Radio,
} from 'common/ui-elements';
import TextArea from '.';

storiesOf('ui-elements/form/TextArea [TextArea, UIE011]', module)
  .add('textarea com id', () => (
    <TextArea id="um-id-teste" />
  ), {
    notes: 'Inspecionar id "um-id-teste" no HTML do textarea.',
  })

  .add('textarea sem id', () => (
    <TextArea />
  ), {
    notes: 'Inspecionar id com uma hash aleatória no HTML do textarea.',
  })

  .add('label', () => (
    <TextArea label={<Label icon="fa fa-smile-o">Um label com icon</Label>} />
  ), {
    notes: `O label deve ser o [Label, UIE002] e deve ser passado sem a props form.
            É possível usar string, mas o proptypes não está aceitando string para manter um padrão no projeto.`,
  })

  .add('label com form', () => (
    <TextArea label={<Label form icon="fa fa-smile-o">Um label com props form</Label>} />
  ), {
    notes: 'O label [Label, UIE002] com a props form gera uma margin desnecessária a mais.',
  })

  .add('placeholder', () => (
    <TextArea
      label={<Label>TextArea com placeholder</Label>}
      placeholder="Placeholder de um campo."
    />
  ), {
    notes: 'O placeholder mantém uma descrição dentro do campo.',
  })

  .add('helpBlock', () => (
    <TextArea
      label={<Label>TextArea com helpBlock</Label>}
      helpBlock="Esse é um helpBlock string."
    />
  ), {
    notes: 'O helpBlock é para passar alguma informação ao usuário.',
  })

  .add('helpBlock Label', () => (
    <TextArea
      label={<Label>TextArea com helpBlock Label</Label>}
      helpBlock={<Label>Esse é um helpBlock Label.</Label>}
    />
  ), {
    notes: 'O helpBlock é para passar alguma informação ao usuário.',
  })

  .add('state', () => ['success', 'warning', 'error'].map((state, index) => (
    <React.Fragment key={index.toString()}>
      <TextArea
        label={<Label>{`TextArea ${state}`}</Label>}
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
      <TextArea
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
            O size permite alterar o tamanho do textarea. Para o padrão deve passar size como null.
            O Placeholder acompanha o tamanho do size, já o Label ẽ Help Block se mantêm no mesmo tamanho`,
  })

  .add('addonLeft', () => [
    'string',
    <Icon name="fa fa-smile-o" />,
    <Checkbox label={<Label>OK</Label>} />,
    <Radio label={<Label>Sim</Label>} />,
  ].map((addon, index) => (
    <React.Fragment key={index.toString()}>
      <TextArea
        label={(
          <Label>
            TextArea com
            {` ${typeof addon === 'string' ? addon : addon.type.name} `}
            no lado esquerdo
          </Label>
        )}
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
      <TextArea
        label={(
          <Label>
            TextArea com
            {` ${typeof addon === 'string' ? addon : addon.type.name} `}
            no lado direito
          </Label>
        )}
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
      <TextArea
        label={(
          <Label>
            TextArea com
            {` ${typeof value.addon === 'string' ? value.addon : value.addon.type.name} `}
            no lado direito
          </Label>
        )}
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
      <TextArea
        label={<Label>{`TextArea com size ${value.size}`}</Label>}
        placeholder={`TextArea com size ${value.size}`}
        addonLeft={value.addon}
        addonRight={value.addon}
        size={value.size}
      />
      <br />
    </React.Fragment>
  )), {
    notes: 'A combinação do size com os addons funcionam perfeitamente.',
  })

  .add('addons, state e disabled', () => [
    { addon: 'string', state: 'success' },
    { addon: <Icon name="fa fa-smile-o" />, state: 'warning' },
    { addon: <Checkbox label={<Label>OK</Label>} />, state: 'error' },
    { addon: <Radio label={<Label>Sim</Label>} />, state: null },
  ].map((value, index) => (
    <React.Fragment key={index.toString()}>
      <TextArea
        label={<Label>TextArea com botão e addon nos dois lados</Label>}
        addonLeft={value.addon}
        addonRight={value.addon}
        state={value.state}
        disabled
      />
      <br />
    </React.Fragment>
  )), {
    notes: `O "disabled" permite desabilitar apenas o campo. Os addons devem ser desabilitados individualmente.
            Também é possível passar o parâmetro da forma disabled={true} ou disabled={false}.`,
  })

  .add('value com onChange', () => (
    <TextArea
      label={<Label>TextArea com value</Label>}
      value="Um valor"
      onChange={action('Função onChange para mudar o valor')}
    />
  ), {
    notes: `O value aplica um valor a um campo controlado.
            Um campo controlado é obrigatório um onChange para mudar o valor do campo alterando o estado.
            Para um campo não controlado deve-se usar defaultValue.`,
  })

  .add('defaultValue', () => (
    <TextArea
      label={<Label>TextArea com defaultValue</Label>}
      defaultValue="Um valor"
    />
  ), {
    notes: `O defaultValue aplica um valor a um campo não controlado.
            É possível fazer a alteração do campo sem a função onChange.
            Para um campo controlado deve-se usar o value com onChange.`,
  })

  .add('defaultValue e onChange', () => (
    <TextArea
      label={<Label>TextArea com defaultValue</Label>}
      defaultValue="Um valor"
      onChange={action('Função onChange reconhece a alteração no campo')}
    />
  ), {
    notes: 'É possível executar o onChange mesmo que o campo não seja controlado.',
  })

  .add('disabled', () => (
    <TextArea
      label={<Label>Campo disabled</Label>}
      placeholder="Placeholder"
      disabled
    />
  ), {
    notes: 'O "disabled" permite desabilitar o campo. Também é possível passar o parâmetro da forma disabled={true} ou disabled={false}.',
  })

  .add('blockInput', () => (
    <div style={{ width: '300px', backgroundColor: '#ddd' }}>
      <p>Área com width 300px</p>
      <br />
      <TextArea
        label={<Label>Campo com width 100%</Label>}
        placeholder="Placeholder"
        blockInput
      />
    </div>
  ), {
    notes: 'O "blockInput" permite habilitar o width 100% no campo. Também é possível passar o parâmetro da forma blockInput={true} ou blockInput={false}.',
  })

  .add('className', () => (
    <TextArea
      label={<Label>TextArea com class &quot;um-teste&quot;</Label>}
      className="um-teste"
    />
  ), {
    notes: `É possível passar livremente class pelo className.
            Verificar a class "um-teste" junto a "form-group".`,
  })

  .add('_ref', () => (
    <TextArea
      label={<Label>TextArea com referência</Label>}
      _ref={action('Referência do textarea')}
    />
  ), {
    notes: `Serve para obter a referência do campo com o _ref.
            Pode ser uma função que retorna a referência ou o React.createRef()`,
  });
