import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import { Label, Icon } from 'common/ui-elements';
import ButtonApp from './';

storiesOf('ui-elements/button/ButtonApp [ButtonApp, UIE008]', module)
  .add('label com icon', () => (
    <ButtonApp label={<Label icon="fa fa-home">ButtonApp</Label>} />
  ), {
    notes: `O label deve ser um Elemento React, o ideal é que seja um [Label, UIE002].
            No ButtonApp deve ser colocado o ícon no label para o correto funcionamento.`,
  })

  .add('label sem icon', () => (
    <ButtonApp label={<Label>ButtonApp</Label>} />
  ), {
    notes: `O label deve ser um Elemento React, o ideal é que seja um [Label, UIE002].
            No ButtonApp deve ser colocado o ícon no label para o correto funcionamento.`,
  })

  .add('badge', () => ['yellow', 'green', 'purple', 'teal', 'aqua', 'red'].map((color, index) => (
    <div key={index.toString()} style={{ margin: '5px', float: 'left' }}>
      <ButtonApp
        badge={color}
        badgeColor={color}
        label={<Label icon="fa fa-users">Usuários</Label>}
      />
      <br /><br />
      <ButtonApp
        badge={index}
        badgeColor={color}
        label={<Label icon="fa fa-users">Usuários</Label>}
      />
    </div>
  )), {
    notes: 'O badge tem que ser string ou int. Por padrão a cor do badge é aqua.',
  })

  .add('badge com outros dados', () => [false, undefined, null, '', 0, <Label>badge</Label>].map((value, index) => (
    <div key={index.toString()} style={{ margin: '5px', float: 'left' }}>
      <ButtonApp
        badge={value}
        label={<Label icon="fa fa-users">{`${value}`}</Label>}
      />
    </div>
  )), {
    notes: `É incorreto passar um false para o badge.
            É possível passar um undefined, null ou string vazia. Os três valores serão ignorados.
            O valor inteiro 0 é aceito e aparecerá no badge.
            É desencorajado o uso de um Elemento React, tipo o Label. O proptypes não está configurado apenas para string e int.`,
  })

  .add('href', () => (
    <ButtonApp
      label={<Label icon="fa fa-users">Usuários</Label>}
      href="https://google.com"
      target="_blank"
    />
  ), {
    notes: 'É possível passar link pelo href, o target não foi tratado no componente Button, mas é possível utilizálo pois os props são espalhados no component interno.',
  })

  .add('href com disabled', () => (
    <ButtonApp
      label={<Label icon="fa fa-users">Usuários</Label>}
      href="https://google.com"
      disabled
    />
  ), {
    notes: 'O "disabled" permite desabilitar o botão. Também é possível passar o parâmetro da forma disabled={true} ou disabled={false}.',
  })

  .add('onClick', () => (
    <ButtonApp
      label={<Label icon="fa fa-users">Usuários</Label>}
      onClick={action('Click deve funcionar')}
    />
  ), {
    notes: 'onClick recebe função a ser executada na ação do click',
  })

  .add('onClick com disabled', () => (
    <ButtonApp
      label={<Label icon="fa fa-users">Usuários</Label>}
      onClick={action('Click não deve funcionar')}
      disabled
    />
  ), {
    notes: 'O "disabled" permite desabilitar o botão. Também é possível passar o parâmetro da forma disabled={true} ou disabled={false}.',
  })

  .add('block', () => (
    <div style={{ width: '300px', padding: '10px', backgroundColor: '#E56A97' }}>
      <p>div com width: 300px e padding: 10px</p>
      <ButtonApp
        label={<Label icon="fa fa-users">Usuários</Label>}
        block
      />
    </div>
  ), {
    notes: `O "block" permite espandir o botão width: 100%. Também é possível passar o parâmetro da forma block={true} ou block={false}.
            Para o funcionamento correto, essa função depende do "width" do elemento HTML que está envolvendo o botão.`,
  })

  .add('className', () => (
    <ButtonApp
      label={<Label icon="fa fa-users">Usuários</Label>}
      className="um-teste"
    />
  ), {
    notes: 'É possível passar livremente class pelo className para o componente ButtonApp.',
  });
