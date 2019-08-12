import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import { Label } from 'common/ui-elements';
import ButtonSplit from './';

const colors = ['default', 'primary', 'success', 'info', 'warning', 'danger'];

storiesOf('ui-elements/button/ButtonSplit [ButtonSplit, UIE007]', module)
  .add('label', () => (
    <ButtonSplit label={<Label>ButtonSplit</Label>} />
  ), {
    notes: 'O label deve ser um Elemento React, o ideal é que seja um [Label, UIE002].',
  })

  .add('options', () => (
    <ButtonSplit
      label={<Label>ButtonSplit com opções</Label>}
      options={[
        {
          label: <Label>Cabeçalho</Label>,
          header: true,
        }, {
          label: <Label>Opção com onClick</Label>,
          onClick: action('Opção com onClick'),
        }, {
          label: <Label>Opção com href</Label>,
          href: 'https://www.google.com',
          target: '_blank',
        }, {
          label: <Label>Não irá aparecer esse label</Label>,
          divider: true,
        }, {
          label: <Label>Opção Desabilitada</Label>,
          onClick: action('Click desabilitado'),
          href: 'https://www.google.com',
          disabled: true,
        },
      ]}
    />
  ), {
    notes: `O options recebe um array de objetos com detalhes das opções.
            [{
              label: [Label, UIE002],
              onClick: "Função para ação de click",
              href: "link referente ao item",
              target: "trabalha em conjunto com o href (_blank, _self, _parent, _top, framename)",
              divider: "boolean. Linha divisória, ignora os outros atributos",
              header: "boolean. Cabeçalho. Só aceita o label",
              disabled: "boolean. Desativa a opção"
            }]`,
  })

  .add('color', () => colors.map((color, index) => (
    <div key={index.toString()} style={{ margin: '5px', float: 'left' }}>
      <ButtonSplit color={color} label={<Label>ButtonSplit {color}</Label>} />
    </div>
  )), {
    notes: 'É possível passar o nome das cores pelo "color" relacionada ao contexto: default, primary, success, info, warning, danger.',
  })

  .add('size', () => ['large', null, 'small', 'xsmall'].map((size, index) => (
    <div key={index.toString()} style={{ margin: '5px', float: 'left' }}>
      <ButtonSplit
        size={size}
        label={<Label>ButtonSplit {size}</Label>}
        options={[{ label: <Label>Opção com o mesmo tamanho</Label> }]}
      />
    </div>
  )), {
    notes: `É possível definir o tamanho do botão através do "size". Os tamanhos aceitos são large, small, xsmall. Para o botão padrão deve deixar o size null.
            Observe que as opções se mantêm no mesmo tamanho independente do tamanho do botão`,
  })

  .add('dropup', () => (
    <ButtonSplit
      label={<Label>ButtonSplit com opções em cima</Label>}
      dropup
      options={[
        {
          label: <Label>Cabeçalho</Label>,
          header: true,
        }, {
          label: <Label>Opção com onClick</Label>,
          onClick: action('Opção com onClick'),
        },
      ]}
    />
  ), {
    notes: 'As opções podem ser abertas à cima passando o dropup como true.',
  })

  .add('pullRight', () => (
    <ButtonSplit
      label={<Label>ButtonSplit com opções à direita</Label>}
      pullRight
      options={[
        {
          label: <Label>Cabeçalho</Label>,
          header: true,
        }, {
          label: <Label>Opção com onClick</Label>,
          onClick: action('Opção com onClick'),
        },
      ]}
    />
  ), {
    notes: 'As opções podem ser abertas à direita passando o pullRight como true.',
  })

  .add('dropup com pullRight', () => (
    <ButtonSplit
      label={<Label>Opções à cima e à direita</Label>}
      dropup
      pullRight
      options={[
        {
          label: <Label>Cabeçalho</Label>,
          header: true,
        }, {
          label: <Label>Opção com onClick</Label>,
          onClick: action('Opção com onClick'),
        },
      ]}
    />
  ), {
    notes: 'As props dropup e pullRight podem ser usadas juntas.',
  })

  .add('className', () => (
    <ButtonSplit
      label={<Label>Botão com a class &quot;um-teste&quot;</Label>}
      className="um-teste"
    />
  ), {
    notes: 'É possível passar livremente class pelo className para o componente ButtonSplit.',
  })

  .add('disabled', () => (
    <ButtonSplit
      label={<Label>ButtonSplit disabled</Label>}
      disabled
    />
  ), {
    notes: 'O "disabled" permite desabilitar o ButtonSplit. Também é possível passar o parâmetro da forma disabled={true} ou disabled={false}.',
  })

  .add('block não funciona', () => (
    <div style={{ width: '300px', padding: '10px', backgroundColor: '#E56A97' }}>
      <p>div com width: 300px e padding: 10px</p>
      <ButtonSplit
        label={<Label>ButtonSplit block</Label>}
        block
      />
    </div>
  ), {
    notes: `O "block" não funciona no ButtonSplit.
            O motivo é que a dependência react-bootstrap não reconhece essa função.`,
  })

  .add('onClick', () => (
    <ButtonSplit
      label={<Label>ButtonSplit onClick</Label>}
      onClick={action('clicked')}
    />
  ), {
    notes: 'onClick recebe função a ser executada na ação do click',
  });
