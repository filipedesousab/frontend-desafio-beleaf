import React from 'react';
import { storiesOf } from '@storybook/react';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import Navbar from './';

const styles = ['skin-blue-light', 'skin-yellow', 'skin-yellow-light', 'skin-green', 'skin-green-light', 'skin-purple', 'skin-purple-light', 'skin-red', 'skin-red-light', 'skin-black', 'skin-black-light']

const stories = storiesOf('ui-layout/Navbar [Navbar, UIL001]', module)
  .add('skin-blue', () => (
    <body className="fixed sidebar-mini">
      <div className="skin-blue">
        <Navbar />
      </div>
    </body>
  ), {
    notes: `Às class que interferem nesse componente pertence ao AdminLTE que trabalha com jQuery.
            Para as coisas funcionarem corretamente o body deve conter as class:
            => fixed - Mantem o navbar fixado no top e expandido
            => sidebar-mini - Possibilita o funcionamento correto de fechar e expandir sidebar

            A class skin-blue deve ficar em algum nível superior em relação ao reto da aplicação para aplica os estilos da aplicação.

            ATENÇÃO: A Navbar estará sendo desenvolvida ao longo do desenvolvimento da aplicação`,
  });

styles.every((style, index) => stories.add(style, () => (
  <body className="fixed sidebar-mini" key={index.toString()}>
    <div className={style}>
      <Navbar />
    </div>
  </body>
), {
  notes: `Às class que interferem nesse componente pertence ao AdminLTE que trabalha com jQuery.
          Para as coisas funcionarem corretamente o body deve conter as class:
            => fixed - Mantem o navbar fixado no top e expandido
            => sidebar-mini - Possibilita o funcionamento correto de fechar e expandir sidebar

          A class ${style} deve ficar em algum nível superior em relação ao resto da aplicação para aplica os estilos na aplicação.
          Os estilos existentes são skin-blue, skin-blue-light, skin-yellow, skin-yellow-light, skin-green, skin-green-light, skin-purple, skin-purple-light, skin-red, skin-red-light, skin-black e skin-black-light.

          ATENÇÃO: A Navbar estará sendo desenvolvida ao longo do desenvolvimento da aplicação`,
}));
