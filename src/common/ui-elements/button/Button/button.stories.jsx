import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import { Label, Icon, Input } from 'common/ui-elements';
import { Grid } from 'common/ui-layout';
import Button from '.';

const colors = ['default', 'primary', 'success', 'info', 'warning', 'danger'];

storiesOf('ui-elements/button/Button [Button, UIE004]', module)
  .add('color', () => colors.map((color, index) => (
    <div key={index.toString()} style={{ margin: '5px', float: 'left' }}>
      <Button color={color}><Label>{`Botão ${color}`}</Label></Button>
    </div>
  )), {
    notes: 'É possível passar o nome das cores pelo "color" relacionada ao contexto: default, primary, success, info, warning, danger.',
  })

  .add('size', () => ['large', null, 'small', 'xsmall'].map((size, index) => (
    <div key={index.toString()} style={{ margin: '5px', float: 'left' }}>
      <Button size={size}><Label>{`Botão ${size}`}</Label></Button>
    </div>
  )), {
    notes: 'É possível definir o tamanho do botão através do "size". Os tamanhos aceitos são large, small, xsmall. Para o botão padrão deve deixar o size null.',
  })

  .add('href', () => (
    <Button href="https://google.com" target="_blank"><Label icon="fa fa-google"> - Google</Label></Button>
  ), {
    notes: 'É possível passar link pelo href, o target não foi tratado no componente Button, mas é possível utilizálo pois os props são espalhados no component interno.',
  })

  .add('type', () => ['button', 'reset', 'submit'].map((type, index) => (
    <div key={index.toString()} style={{ margin: '5px', float: 'left' }}>
      <Button type={type}><Label>{`Tyle ${type}`}</Label></Button>
    </div>
  )), {
    notes: 'É possível definir o type do botão. Esse type geralmente é utilizado em um formulário. É possível inspecionar o código e objervar a inclusão do atributo "type" em cada botão.',
  })

  .add('disabled', () => (
    <Button disabled><Label>Botão disabled</Label></Button>
  ), {
    notes: 'O "disabled" permite desabilitar o botão. Também é possível passar o parâmetro da forma disabled={true} ou disabled={false}.',
  })

  .add('block', () => (
    <div style={{ width: '300px', padding: '10px', backgroundColor: '#E56A97' }}>
      <p>div com width: 300px e padding: 10px</p>
      <Button block><Label>Botão block</Label></Button>
    </div>
  ), {
    notes: `O "block" permite espandir o botão width: 100%. Também é possível passar o parâmetro da forma block={true} ou block={false}.
            Para o funcionamento correto, essa função depende do "width" do elemento HTML que está envolvendo o botão.`,
  })

  .add('nextToField', () => ['large', null, 'small', 'xsmall'].map((size, index) => (
    <React.Fragment key={index.toString()}>
      <Grid.Row>
        <Grid.Col xs={6}>
          <Input label={<Label>Campo padrão</Label>} />
        </Grid.Col>
        <Grid.Col xs={6}>
          <Button nextToField size={size}><Label>{`Botão ${size}`}</Label></Button>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col xs={6}>
          <Input
            size={(size === 'xsmall' && 'small') || size}
            label={<Label>{`Campo ${(size === 'xsmall' && 'small') || size}`}</Label>}
          />
        </Grid.Col>
        <Grid.Col xs={6}>
          <Button nextToField size={size}><Label>{`Botão ${size}`}</Label></Button>
        </Grid.Col>
      </Grid.Row>
    </React.Fragment>
  )), {
    notes: `O "nextToField" permite posicionar corretamente o botão ao lado de campos com label.
            Também é possível passar o parâmetro da forma block={true} ou block={false}.`,
  })

  .add('className', () => (
    <Button className="um-teste"><Label>Botão com a class &quot;um-teste&quot;</Label></Button>
  ), {
    notes: 'É possível passar livremente class pelo className para o componente Button.',
  })

  .add('onClick', () => (
    <Button onClick={action('clicked')}><Label>Botão com onClick</Label></Button>
  ), {
    notes: 'onClick recebe função a ser executada na ação do click',
  })

  .add('children', () => (
    <Button><Label>Botão com Label</Label></Button>
  ), {
    notes: 'O corpo do componente (children) deve ser um Elemento React',
  })

  .add('children com Icon', () => (
    <Button><Icon name="fa fa-fa" /></Button>
  ), {
    notes: 'O corpo do componente (children) deve ser um Elemento React',
  })

  .add('children com string', () => (
    <Button>Botão com stringk</Button>
  ), {
    notes: `O corpo do componente (children) deve ser um Elemento React.
            Para visuarlizar o warning causado por passar uma string deve abrir o console do browser.`,
  });
