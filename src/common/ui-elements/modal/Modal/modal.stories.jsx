import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import {
  Button,
  ButtonIcon,
  ButtonDropdown,
  Icon,
  Label,
} from 'common/ui-elements';
import Modal from './';

const colors = ['default', 'info', 'success', 'warning', 'danger'];

const stories = storiesOf('ui-elements/modal/Modal [Modal, UIE023]', module)
  .add('show', () => (
    <Modal show />
  ), {
    notes: `O "show" deve ser passado para abrir o modal.
            Também é possível passar o parâmetro da forma show={true} ou show={false}.`,
  })

  .add('show false', () => (
    <Modal show={false} />
  ), {
    notes: `O "show" deve ser passado para abrir o modal.
            Também é possível passar o parâmetro da forma show={true} ou show={false}.`,
  })

  .add('title', () => (
    <Modal show title={<Label>Título do modal</Label>} />
  ), {
    notes: `O "title" deve ser o [Label, UIE002] e deve ser passado sem a props form.
            É possível usar string, mas o proptypes não está aceitando string para manter um padrão no projeto.`,
  })

  .add('children', () => (
    <Modal show title={<Label>Título do modal</Label>}>Corpo do Modal</Modal>
  ), {
    notes: 'O children(Corpo do Modal) pode ser qualquer Elemento React.',
  })

  .add('children grande', () => (
    <Modal show title={<Label>Título do modal</Label>}>
      {[...Array(30).keys()].map(value => <p key={value.toString()}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed posuere metus.</p>)}
    </Modal>
  ), {
    notes: 'O Modal não é ideal para um conteúdo muito extenso.',
  })

  .add('btnFooterLeft', () => (
    <Modal
      show
      title={<Label>Título do modal</Label>}
      btnFooterLeft={[
        <Button><Label>Button</Label></Button>,
        <ButtonDropdown label={<Label>Dropdown</Label>} />,
        <ButtonIcon icon={<Icon name="fa fa-smile-o" />}><Label>ButtonIcon</Label></ButtonIcon>,
      ]}
    >
      Corpo do Modal
    </Modal>
  ), {
    notes: 'Botões no footer esquerdo do modal.',
  })

  .add('btnFooterRight', () => (
    <Modal
      show
      title={<Label>Título do modal</Label>}
      btnFooterRight={[
        <Button><Label>Button</Label></Button>,
        <ButtonDropdown label={<Label>Dropdown</Label>} />,
        <ButtonIcon icon={<Icon name="fa fa-smile-o" />}><Label>ButtonIcon</Label></ButtonIcon>,
      ]}
    >
      Corpo do Modal
    </Modal>
  ), {
    notes: 'Botões no footer direito do modal.',
  })

  .add('onHide', () => (
    <Modal
      show
      title={<Label>Título do modal</Label>}
      onHide={action('Fechar Modal')}
    >
      Corpo do Modal
    </Modal>
  ), {
    notes: `Função executada na ação de fechar modal.
            O Modal executa essa função ao clicar no botão "X" ou fora do Modal.`,
  })

colors.every(color => (
  stories.add(`color ${color}`, () => (
    <Modal
      show
      title={<Label>Modal color {color}</Label>}
      color={color}
      btnFooterRight={[
        <Button><Label>Button</Label></Button>,
        <ButtonDropdown label={<Label>Dropdown</Label>} />,
        <ButtonIcon icon={<Icon name="fa fa-smile-o" />}><Label>ButtonIcon</Label></ButtonIcon>,
      ]}
    >
      Corpo do Modal
    </Modal>
  ), {
    notes: 'É possível passar o nome das cores pelo "color" relacionada ao contexto: default, info, success, warning, danger.',
  })
));
