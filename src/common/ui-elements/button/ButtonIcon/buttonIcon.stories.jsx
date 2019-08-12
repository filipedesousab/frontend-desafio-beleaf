import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import { Label, Icon } from 'common/ui-elements';
import ButtonIcon from './';

const colors = ['default', 'primary', 'success', 'info', 'warning', 'danger'];

storiesOf('ui-elements/button/ButtonIcon [ButtonIcon, UIE005]', module)
  .add('icon', () => (
    <ButtonIcon icon={<Icon name="fa fa-smile-o" />}><Label>Ícone &quot;fa fa-smile-o&quot;</Label></ButtonIcon>
  ), {
    notes: 'O icon deve receber um componente [Icon, UIE001].',
  })

  .add('color', () => colors.map((color, index) => (
    <div key={index.toString()} style={{ margin: '5px', float: 'left' }}>
      <ButtonIcon icon={<Icon name="fa fa-smile-o" />} color={color}><Label>Botão {color}</Label></ButtonIcon>
    </div>
  )), {
    notes: 'É possível passar o nome das cores pelo "color" relacionada ao contexto: default, primary, success, info, warning, danger.',
  })

  .add('size', () => ['large', null, 'small', 'xsmall'].map((size, index) => (
    <div key={index.toString()} style={{ margin: '5px', float: 'left' }}>
      <ButtonIcon icon={<Icon name="fa fa-smile-o" />} size={size}><Label>Botão {size}</Label></ButtonIcon>
    </div>
  )), {
    notes: 'É possível definir o tamanho do botão através do "size". Os tamanhos aceitos são large, small, xsmall. Para o botão padrão deve deixar o size null.',
  })

  .add('href', () => (
    <ButtonIcon icon={<Icon name="fa fa-google" />} href="https://google.com" target="_blank"><Label>Google</Label></ButtonIcon>
  ), {
    notes: 'É possível passar link pelo href, o target não foi tratado no componente ButtonIcon, mas é possível utilizálo pois os props são espalhados no component interno.',
  })

  .add('type', () => ['button', 'reset', 'submit'].map((type, index) => (
    <div key={index.toString()} style={{ margin: '5px', float: 'left' }}>
      <ButtonIcon icon={<Icon name="fa fa-smile-o" />} type={type}><Label>Type {type}</Label></ButtonIcon>
    </div>
  )), {
    notes: 'É possível definir o type do botão. Esse type geralmente é utilizado em um formulário. É possível inspecionar o código e objervar a inclusão do atributo "type" em cada botão.',
  })

  .add('disabled', () => (
    <ButtonIcon icon={<Icon name="fa fa-smile-o" />} disabled><Label>Botão disabled</Label></ButtonIcon>
  ), {
    notes: 'O "disabled" permite desabilitar o botão. Também é possível passar o parâmetro da forma disabled={true} ou disabled={false}.',
  })

  .add('block', () => (
    <div style={{ width: '300px', padding: '10px', backgroundColor: '#E56A97' }}>
      <p>div com width: 300px e padding: 10px</p>
      <ButtonIcon icon={<Icon name="fa fa-smile-o" />} block><Label>Botão block</Label></ButtonIcon>
    </div>
  ), {
    notes: `O "block" permite espandir o botão width: 100%. Também é possível passar o parâmetro da forma block={true} ou block={false}.
            Para o funcionamento correto, essa função depende do "width" do elemento HTML que está envolvendo o botão.`,
  })

  .add('className', () => (
    <ButtonIcon icon={<Icon name="fa fa-smile-o" />} className="um-teste"><Label>Botão com a class &quot;um-teste&quot;</Label></ButtonIcon>
  ), {
    notes: 'É possível passar livremente class pelo className para o componente ButtonIcon.',
  })

  .add('onClick', () => (
    <ButtonIcon icon={<Icon name="fa fa-smile-o" />} onClick={action('clicked')}><Label>Botão com onClick</Label></ButtonIcon>
  ), {
    notes: 'onClick recebe função a ser executada na ação do click',
  })

  .add('children', () => (
    <ButtonIcon icon={<Icon name="fa fa-smile-o" />}><Label>Botão com Label</Label></ButtonIcon>
  ), {
    notes: 'O corpo do componente (children) deve ser um Elemento React',
  })

  .add('sem icon', () => (
    <React.Fragment>
      {colors.map((color, index) => (
        <div key={index.toString()} style={{ margin: '5px', float: 'left' }}>
          <ButtonIcon color={color}><Label icon="fa fa-frown-o">Botão {color}</Label></ButtonIcon>
        </div>
      ))}
      <br />
      {['large', null, 'small', 'xsmall'].map((size, index) => (
        <div key={index.toString()} style={{ margin: '5px', float: 'left' }}>
          <ButtonIcon size={size}><Label icon="fa fa-frown-o">Botão {size}</Label></ButtonIcon>
        </div>
      ))}
    </React.Fragment>
  ), {
    notes: 'Se não passar um icon.',
  })
