import React from 'react';
import _ from 'lodash';
import { storiesOf } from '@storybook/react';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import Label from './';

const designColors = ['#3C8DBC', '#00C0EF', '#00A65A', '#F39C12', '#F56954', '#D2D6DE', '#001F3F', '#39CCCC', '#605CA8', '#FF851B', '#D81B60', '#111111'];
const sanpleColors = ['rgb(57, 204, 204)', 'rgb(96, 92, 168)', 'rgb(216, 27, 96)', 'blue', 'green', 'yellow', 'red', 'gray', 'purple', 'orange', 'brown', 'black'];

storiesOf('ui-elements/general/Label [Label, UIE002]', module)
  .add('children', () => (
    <Label>Verificar esse label na tag <b>span</b></Label>
  ), {
    notes: 'O componente Label utiliza a tag <span></span> para envolver o conteúdo.',
  })

  .add('color', () => (
    <React.Fragment>
      <div style={{ float: 'left' }}>
        <table>
          <tbody>
            {designColors.map((color, index) => (
              <tr key={index.toString()}>
                <td style={{ minWidth: '200px' }}><Label color={color}>Label com a cor <b>{color}</b></Label></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ float: 'right' }}>
        <table>
          <tbody>
            {sanpleColors.map((color, index) => (
              <tr key={index.toString()}>
                <td style={{ minWidth: '200px' }}><Label color={color}>Label com cor <b>{color}</b></Label></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  ), {
    notes: 'No componente Label é possível aplicar as cores utilizadas no CSS.',
  })

  .add('noSpan', () => (
    <Label noSpan>Esse label não deve estar dentro da tag <b>span</b></Label>
  ), {
    notes: 'Alguns componentes que utilizam o Label precisa que o conteúdo esteja fora da tag <span></span>',
  })

  .add('noSpan with color and style', () => (
    <Label noSpan color="purple" style={{ color: 'blue', fontSize: '20px' }}>
      Esse label não recebe estilo por não estar estar dentro da tag <b>span</b>
    </Label>
  ), {
    notes: 'Quando é passado noSpan para o Label, não é possível aplicar estilo no conteúdo.',
  })

  .add('form', () => (
    <Label form>Esse label deve conter a class <b>&quot;control-label&quot;</b></Label>
  ), {
    notes: 'Utilizado para colocar label em campos de formulário. Até o momento não é obrigatório.',
  })

  .add('icon', () => (
    <Label icon="fa fa-smile-o">Label com ícone</Label>
  ), {
    notes: 'A props "icon" permite incluir um ícone ao lado esquerdo de forma mais prática. Deve ser passado no nome completo do ícone FontAwesome, Glyphicons ou Ionicons.',
  })

  .add('className', () => (
    <Label className="text-red">Esse label deve conter a class <b>&quot;text-red&quot;</b></Label>
  ), {
    notes: 'É possível passar livremente class pelo className para o componente Label.',
  })

  .add('style', () => (
    <Label style={{ color: 'blue', fontSize: '20px' }}>Esse label deve conter o <b>style=&quot;color: blue; font-size: 30px;&quot;</b></Label>
  ), {
    notes: 'É possível passar o style para o componente Label.',
  })

  .add('color with style', () => (
    <React.Fragment>
      <p>Esse label foi criado passando as props:</p>
      <p>
        <b>color=&quot;purple&quot;</b> e <b>style=&#123;&#123; color: &#39;blue&#39;, fontSize: &#39;20px&#39; &#125;&#125;</b>
      </p>
      <Label color="purple" style={{ color: 'blue', fontSize: '20px' }}>
        Porém esse label deve conter o <b>style=&quot;color: blue; font-size: 30px;&quot;</b>
      </Label>
    </React.Fragment>
  ), {
    notes: 'O style={{ color: \'cor\' }} tem prioridade sobre o color="outraCor". Inspecione o HTML para verificar que o style contém "color: blue;"',
  });
