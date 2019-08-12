import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCrop from 'react-image-crop';

/**
 * Componente de corte da imagem de fotografia
 * @param   {string} image      Data URL da imagem a ser cortada
 * @param   {number} width      Largura da imagem
 * @param {function} onComplete Função executada após concluir a seleção da imagem
 */
class CropComponent extends Component {
  constructor(props) {
    super(props);

    /** Estado inicial da seleção tracejada do corte */
    this.state = { crop: { width: props.width, aspect: 4 / 3 } };

    this.imageRef = null; // Referencia da tag <img> criado pelo react-image-crop
  }

  /**
   * Retorna uma imagem cortada para o componente pai após soltar a seleção
   * @param {object} crop Dados da eleção
   */
  onComplete(crop) {
    const { onComplete } = this.props;

    /** Chama função pra cortar imagem utilizando canvas */
    this.getCroppedImg(crop)
      .then((image) => {
        onComplete(image);
      });
  }

  /**
   * Retorna uma imagem cortada
   * @param {object} crop Dados da eleção tracejada do corte
   */
  getCroppedImg(crop) {
    const image = this.imageRef; // Tag <img> gerada pelo react-image-crop
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image, // Imagem a ser cortada
      crop.x * scaleX, // Eixo X do canto superior esquerdo
      crop.y * scaleY, // Eixo Y do canto superior esquerdo
      crop.width * scaleX, // Altura da seleção
      crop.height * scaleY, // Largura da seleção
      0, // Posição de destino da imagem no eixo X
      0, // Posição de destino da imagem no eixo Y
      crop.width, // Largura de destino da imagem
      crop.height, // Altura de destino da imagem
    );

    /** Converte em objeto Blob e retorna o objeto */
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('canvas is empty'));
        }

        /** Gera URL para acessar o objeto blob */
        const imageBlobObject = window.URL.createObjectURL(blob);
        resolve(imageBlobObject);
      }, 'image/jpeg');
    });
  }

  render() {
    const { image } = this.props; // Imagem em Data URL
    const { crop } = this.state; // Estado da seleção tracejada do corte

    return (
      <ReactCrop
        src={image}
        crop={crop}
        onImageLoaded={(e) => {
          /** Seta a referência da tag <img> gerada pelo react-image-crop */
          this.imageRef = e;
        }}
        onChange={(newCrop) => {
          /** Atualiza seleção tracejada do corte */
          this.setState({ crop: newCrop });
        }}
        onComplete={(e) => {
          /** Chama quando solta a seleção do corte */
          this.onComplete(e);
        }}
      />
    );
  }
}

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
CropComponent.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default CropComponent;
