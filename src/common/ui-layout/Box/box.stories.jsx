import React from 'react';
import { storiesOf } from '@storybook/react';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import { Button, Label } from 'common/ui-elements';
import Box from '.';

const colors = ['primary', 'info', 'success', 'warning', 'danger', 'muted'];

const stories = storiesOf('ui-layout/Box [Box, UIL006]', module)
  .add('title', () => (
    <div style={{ width: '250px' }}>
      <Box title={<Label icon="fa fa-smile-o">Título do box</Label>} />
    </div>
  ), {
    notes: 'O "title" deve ser um Elemento React, o ideal é que seja um [Label, UIE002].',
  })

  .add('titleAddon', () => (
    <div style={{ width: '250px' }}>
      <Box titleAddon={<Button><Label>Botão no título do box</Label></Button>} />
    </div>
  ), {
    notes: 'O "titleAddon" deve ser um Elemento React, servirá para inserir componentes ao lado do título.',
  })

  .add('title com titleAddon', () => (
    <div style={{ width: '250px' }}>
      <Box
        title={<Label icon="fa fa-smile-o">Título do box</Label>}
        titleAddon={<Button><Label>Botão</Label></Button>}
      />
    </div>
  ), {
    notes: 'É possível inserir o title com titleAddon.',
  })

  .add('children', () => (
    <div style={{ width: '250px' }}>
      <Box title={<Label>Título do box</Label>}>
        Corpo do Box
      </Box>
    </div>
  ), {
    notes: 'É possível adicionar qualquer coisa que renderize no "children".',
  })

  .add('footer', () => (
    <div style={{ width: '250px' }}>
      <Box
        title={<Label>Título do box</Label>}
        footer={<Button><Label>Footer Button</Label></Button>}
      >
        Corpo do Box
      </Box>
    </div>
  ), {
    notes: 'É possível adicionar qualquer coisa que renderize no "footer".',
  })

  .add('className', () => (
    <div style={{ width: '250px' }}>
      <Box
        className="text-uppercase"
        title={<Label>Título do box</Label>}
        footer="Footer do Box"
      >
        Box com class text-uppercase
      </Box>
    </div>
  ), {
    notes: 'É possível passar livremente class para o Box pelo "className".',
  })

  .add('classHeader', () => (
    <div style={{ width: '250px' }}>
      <Box
        classHeader="bg-green"
        title={<Label>Título do box</Label>}
        footer="Footer do Box"
      >
        Header com class bg-green
      </Box>
    </div>
  ), {
    notes: 'É possível passar livremente class para o header pelo "classHeader".',
  })

  .add('classBody', () => (
    <div style={{ width: '250px' }}>
      <Box
        classBody="bg-green"
        title={<Label>Título do box</Label>}
        footer="Footer do Box"
      >
        Body com class bg-green
      </Box>
    </div>
  ), {
    notes: 'É possível passar livremente class para o body pelo "classBody".',
  })

  .add('classFooter', () => (
    <div style={{ width: '250px' }}>
      <Box
        classFooter="bg-green"
        title={<Label>Título do box</Label>}
        footer="Footer do Box"
      >
        Footer com class bg-green
      </Box>
    </div>
  ), {
    notes: 'É possível passar livremente class para o footer pelo "classFooter".',
  })

  .add('styleHeader', () => (
    <div style={{ width: '250px' }}>
      <Box
        styleHeader={{ backgroundColor: '#ff00ff' }}
        title={<Label>Título do box</Label>}
        footer="Footer do Box"
      >
        Header com style background-color #ff00ff
      </Box>
    </div>
  ), {
    notes: 'É possível passar style para o header pelo "styleHeader".',
  })

  .add('styleBody', () => (
    <div style={{ width: '250px' }}>
      <Box
        styleBody={{ backgroundColor: '#ff00ff' }}
        title={<Label>Título do box</Label>}
        footer="Footer do Box"
      >
        Body com style background-color #ff00ff
      </Box>
    </div>
  ), {
    notes: 'É possível passar style para o body pelo "styleBody".',
  })

  .add('styleFooter', () => (
    <div style={{ width: '250px' }}>
      <Box
        styleFooter={{ backgroundColor: '#ff00ff' }}
        title={<Label>Título do box</Label>}
        footer="Footer do Box"
      >
        Footer com style background-color #ff00ff
      </Box>
    </div>
  ), {
    notes: 'É possível passar style para o footer pelo "styleFooter".',
  })

  .add('color null', () => (
    <div style={{ width: '250px' }}>
      <Box
        title={<Label>Box color null</Label>}
        footer={<Button><Label>Footer Button</Label></Button>}
        color={null}
      >
        Corpo do Box
      </Box>
    </div>
  ), {
    notes: `A cor do Box é aplicada numa borta superior.
            Quando passado null no "color" o Box aplica a cor primary como default.`,
  });

colors.every((color, index) => stories.add(`color ${color}`, () => (
  <div style={{ width: '250px' }} key={index.toString()}>
    <Box
      title={<Label>{`Box color ${color}`}</Label>}
      footer={<Button><Label>Footer Button</Label></Button>}
      color={color}
    >
      Corpo do Box
    </Box>
  </div>
), {
  notes: 'A cor do Box é aplicada numa borta superior.',
}));
