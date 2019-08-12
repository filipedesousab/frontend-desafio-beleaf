import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import { ButtonIcon, Label, Icon } from 'common/ui-elements';
import InputFile from '.';

const colors = ['default', 'primary', 'success', 'info', 'warning', 'danger'];

storiesOf('ui-elements/form/InputFile [InputFile, UIE016]', module)
  .add('input com id', () => (
    <InputFile id="um-id-teste" />
  ), {
    notes: 'Inspecionar id "um-id-teste" no HTML do input.',
  })

  .add('input sem id', () => (
    <InputFile />
  ), {
    notes: 'Inspecionar id com uma hash aleatória no HTML do input.',
  })

  .add('label', () => (
    <InputFile label={<Label>InputFile</Label>} />
  ), {
    notes: `O "label" deve ser o [Label, UIE002] e deve ser passado sem a props form.
            É possível usar string, mas o proptypes não está aceitando string para manter um padrão no projeto.`,
  })

  .add('color', () => colors.map((color, index) => (
    <div key={index.toString()} style={{ margin: '5px', float: 'left' }}>
      <InputFile color={color} />
    </div>
  )), {
    notes: 'É possível passar o nome das cores pelo "color" relacionada ao contexto: default, primary, success, info, warning, danger.',
  })

  .add('description', () => (
    <InputFile description={<Label icon="fa fa-smile-o">Nova Descrição</Label>} />
  ), {
    notes: `O "description" deve ser o [Label, UIE002].
            É possível usar string, mas o proptypes não está aceitando string para manter um padrão no projeto.`,
  })

  .add('helpBlock', () => (
    <InputFile
      label={<Label>InputFile com helpBlock</Label>}
      helpBlock="Esse é um helpBlock string."
    />
  ), {
    notes: 'O "helpBlock" é para passar alguma informação ao usuário.',
  })

  .add('helpBlock Label', () => (
    <InputFile
      label={<Label>InputFile com helpBlock Label</Label>}
      helpBlock={<Label>Esse é um helpBlock Label.</Label>}
    />
  ), {
    notes: 'O "helpBlock" é para passar alguma informação ao usuário.',
  })

  .add('state', () => ['success', 'warning', 'error'].map((state, index) => (
    <React.Fragment key={index.toString()}>
      <InputFile
        label={<Label>{`InputFile ${state}`}</Label>}
        helpBlock={<Label>{`Help Block ${state}.`}</Label>}
        state={state}
      />
      <br />
    </React.Fragment>
  )), {
    notes: 'O "state" permite alertar o usuário com as cores.',
  })

  .add('state e size', () => [null, 'success', 'warning', 'error'].map((state, index) => ['large', null, 'small'].map((size, index2) => (
    <React.Fragment key={`${index.toString()}${index2.toString()}`}>
      <InputFile
        label={<Label>{`size ${size} - Label mantém o mesmo tamanho`}</Label>}
        helpBlock={<Label>{`size ${size} - Help Block mantém o mesmo tamanho.`}</Label>}
        state={state}
        size={size}
      />
      <br />
    </React.Fragment>
  ))), {
    notes: `O "state" permite alertar o usuário com as cores.
            O "size" permite alterar o tamanho do input. Para o padrão deve passar "size" como null.`,
  })

  .add('disabled', () => (
    <InputFile disabled label={<Label>InputFile disabled</Label>} />
  ), {
    notes: 'O "disabled" permite desabilitar o campo. Tem o mesmo funcionamento do "readOnly".',
  })

  .add('onChange', () => (
    <InputFile
      label={<Label>InputFile com onChange</Label>}
      onChange={(e, f) => {
        console.log('target: ', e);
        console.log('Nome do arquio: ', f);
      }}
    />
  ), {
    notes: `Quando é selecionado um arquivo essa função é executada.
            É passado como primeiro parâmetro o target e segundo o nome do arquivo.`,
  })

  .add('onClean', () => (
    <InputFile
      label={<Label>InputFile com onClean</Label>}
      onClean={action('Limpou a entrada e chamou o onClean')}
    />
  ), {
    notes: 'Quando tem a ação de remover o arquivo essa função é executada.',
  })

  .add('component', () => (
    <InputFile
      component={(
        <ButtonIcon icon={<Icon name="fa fa-smile-o" />}>
          <Label>Componente personalizado</Label>
        </ButtonIcon>
      )}
    />
  ), {
    notes: `O "component" permite inserir um componente personalizado para selecionar um arquivo.
            O "component" deve ser um [Button, UIE004] ou [ButtonIcon, UIE005].`,
  })

  .add('componentSelected', () => (
    <InputFile
      componentSelected={(
        <ButtonIcon icon={<Icon name="fa fa-smile-o" />}>
          <Label>Componente Selecionado</Label>
        </ButtonIcon>
      )}
    />
  ), {
    notes: `O "componentSelected" permite inserir um componente personalizado quando um arquivo for selecionado.
            O "componentSelected" deve ser um [Button, UIE004] ou [ButtonIcon, UIE005].`,
  })

  .add('component e componentSelected', withState({ fileName: '' })(({ store }) => (
    <InputFile
      component={(
        <ButtonIcon icon={<Icon name="fa fa-smile-o" />}>
          <Label>Selecione um arquivo</Label>
        </ButtonIcon>
      )}
      componentSelected={(
        <ButtonIcon icon={<Icon name="fa fa-smile-ofa fa-thumbs-up" />}>
          <Label>{`${store.state.fileName} selecionado`}</Label>
        </ButtonIcon>
      )}
      onChange={(e, fileName) => store.set({ fileName })}
      onClean={() => store.set({ fileName: '' })}
    />
  )), {
    notes: `O "component" permite inserir um componente personalizado para selecionar um arquivo.
            O "componentSelected" permite inserir um componente personalizado quando um arquivo for selecionado.
            O "component" e "componentSelected" deve ser um [Button, UIE004] ou [ButtonIcon, UIE005].`,
  })

  .add('className', () => (
    <InputFile
      label={<Label>InputFile com class &quot;um-teste&quot;</Label>}
      className="um-teste"
    />
  ), {
    notes: `É possível passar livremente class pelo "className".
            Verificar a class "um-teste" junto a class "radio" na div superior.`,
  });
