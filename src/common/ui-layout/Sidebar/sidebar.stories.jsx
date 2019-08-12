import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import Menu from './components/Menu';

const items = [{
  href: '#',
  label: 'Home',
  icon: 'fa fa-home',
}, {
  href: '#',
  label: 'Item 2',
  icon: 'fa fa-smile-o',
}, {
  href: '#',
  label: 'Item 3',
  icon: 'fa fa-github-alt',
}];

const styles = ['skin-blue-light', 'skin-yellow', 'skin-yellow-light', 'skin-green', 'skin-green-light', 'skin-purple', 'skin-purple-light', 'skin-red', 'skin-red-light', 'skin-black', 'skin-black-light']

const stories = storiesOf('ui-layout/Sidebar [Sidebar, UIL002]', module)
  .add('skin-blue', () => (
    <div className="skin-blue">
      <aside className="main-sidebar">
        <section className="sidebar">
          <Menu
            items={items}
          />
        </section>
      </aside>
    </div>
  ), {
    notes: `Às class que interferem nesse componente pertence ao AdminLTE que trabalha com jQuery.
            Para as coisas funcionarem corretamente o aside deve conter as class:
            => main-sidebar - Mantem o sidebar posicionado corretamente e ajusa aplicar o estilo do skin-blue

            A class skin-blue deve ficar em algum nível superior em relação ao resto da aplicação para aplica os estilos na aplicação.
            Além do skin-blue existem os skin-blue-light, skin-yellow, skin-yellow-light, skin-green, skin-green-light, skin-purple, skin-purple-light, skin-red, skin-red-light, skin-black e skin-black-light.

            ATENÇÃO: A Sidebar não está completamente desenvolvida e provavelmente sofrerá alterações drásticas.`,
  });

styles.every((style, index) => stories.add(style, () => (
  <div className={style} key={index.toString()}>
    <aside className="main-sidebar">
      <section className="sidebar">
        <Menu
          items={items}
        />
      </section>
    </aside>
  </div>
), {
  notes: `Às class que interferem nesse componente pertence ao AdminLTE que trabalha com jQuery.
          Para as coisas funcionarem corretamente o aside deve conter as class:
          => main-sidebar - Mantem o sidebar posicionado corretamente e ajusa aplicar o estilo do skin-blue

          A class ${style} deve ficar em algum nível superior em relação ao resto da aplicação para aplica os estilos na aplicação.
          Os estilos existentes são skin-blue, skin-blue-light, skin-yellow, skin-yellow-light, skin-green, skin-green-light, skin-purple, skin-purple-light, skin-red, skin-red-light, skin-black e skin-black-light.

          ATENÇÃO: A Sidebar não está completamente desenvolvida e provavelmente sofrerá alterações drásticas.`,
}));
