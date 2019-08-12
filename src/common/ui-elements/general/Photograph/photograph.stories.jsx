import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import Photograph from '.';

storiesOf('ui-elements/general/Photograph [Photograph, UIE035]', module)
  .add('sem props', () => (
    <Photograph />
  ), {
    notes: `O Photograph permite capturar imagem utilizando webcam ou câmera do smartphone ou tablet.
            Seu aspect ratio é fixado em 4/3.`,
  })

  .add('noWebcam', () => (
    <Photograph noWebcam />
  ), {
    notes: 'O noWebcam permite inserir imagem selecionando e não capturando pela webcam.',
  })

  .add('defaultImage', () => (
    <Photograph defaultImage="https://live.staticflickr.com/3354/3175235977_e392128a42_m.jpg" />
  ), {
    notes: `Quando há uma imagem salva que possa ser pré visualizada antes de capturar uma nova imagem,
            essa imagem pode ser passada pelo defaultImage.
            Essa propriedade recebe URL, Data URL ou Blob.`,
  })

  .add('width', () => (
    <>
      <span>Imagem com 320 de largura</span>
      <Photograph width={320} />
    </>
  ), {
    notes: `A largura calcula automáticamente a altura.
            Caso não tenha passado a largura nem altura, a largura recebe 240.`,
  })

  .add('height', () => (
    <>
      <span>Imagem com 240 de altura</span>
      <Photograph height={240} />
    </>
  ), {
    notes: `A altura calcula automáticamente a largura.
            Caso tenha passado a largura a altura é ignorada.`,
  })

  .add('onCapture', () => (
    <Photograph onCapture={action('Capturou o corte')} />
  ), {
    notes: 'O onCapture passa um objeto blob e precisa ser cancelado para liberar memória com o window.URL.revokeObjectURL().',
  });
