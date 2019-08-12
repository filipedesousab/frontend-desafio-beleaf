import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import MobileDetect from 'mobile-detect';

import {
  ButtonIcon,
  Label,
  Icon,
  InputFile,
} from 'common/ui-elements';
import imageNoPhoto from 'images/no-photo.jpg';

import Crop from './components/Crop';

/**
* [Photograph, UIE035] Abre Webcam ou câmera mobile para capturar imagem
* @param   {string} defaultImage Imagem inicial já cortada. URL, Data URL ou Blob.
* @param   {number} width        Largura da imagem
* @param   {number} height       Altura da imagem
* @param  {boolean} noWebcam     Identifica se é para não utilizar webcam
* @param {function} onCapture    Executa depois de capturar
* @param {function} onError      Executa se houver erro
*/
class PhotographComponent extends Component {
  constructor(props) {
    super(props);

    /** Calcula largura automáticamente caso seja passado apenas altura */
    const width = props.width || (props.height ? props.height * (4 / 3) : 240);
    /** Calcula altura automáticamente a partir da largura caso tenha passado a largura */
    const height = !props.width && props.height ? props.height : width / (4 / 3);

    this.state = {
      image: props.defaultImage || null, // Data URL ou Blob da imagem
      crop: props.defaultImage && true, // Identifica se já chamou o corte de imagem
      invalidType: false, // Identifica se o tipo de arquivo for diferente de jpeg e jpg
      width,
      height,
    };

    /** Executado quando clicado no botão de fotografar no desktop */
    this.capturePhotoDesktop = this.capturePhotoDesktop.bind(this);
    /** Executado quando é selecionado uma imagem no mobile */
    this.capturePhotoMobile = this.capturePhotoMobile.bind(this);

    this.webcamRef = null; // Referencia do componente do react-webcam
    this.inputRef = null; // Referencia do input para o mobile
    this.croppedImage = null; // Imagem cortada pelo Crop
  }

  capturePhotoMobile(event) {
    const { onError } = this.props;
    const reader = new FileReader(); // Da API do browser

    /** Executado após ter concluído o carregamento da imagem */
    reader.onload = () => {
      if (reader.result.match(/^data:image\/(jpeg|jpg)/)) { // Se for jpeg ou jpg
        this.setState({ image: reader.result }); // Salva imagem no state
      } else { // Se não for jpeg ou jpg
        this.inputRef.clean(); // Limpa o input que captura a imagem no mobile
        this.setState({ invalidType: true });
        onError(new Error('unsupported file type'));
      }
    };

    /** Inicia o processo de leitura da imagem */
    reader.readAsDataURL(event.target.files[0]);
  }

  capturePhotoDesktop() {
    /** Verifica se ha imagem da webcam para tentar capturar */
    if (this.webcamRef.state.hasUserMedia) {
      const image = this.webcamRef.getScreenshot(); // Captura imagem
      this.setState({ image }); // Atualiza imagem no state
    }
  }

  /** Renderiza a imagem capturada */
  renderImage() {
    const { onCapture } = this.props;
    const { image, width, height } = this.state;

    return (
      <div className="photograph" style={{ width: `${width + 10}px` }}>
        <img
          src={image}
          className="image photo"
          alt="Fotografia capturada"
          style={{ width: `${width}px`, height: `${height}px` }}
        />
        <ButtonIcon
          color="danger"
          block
          onClick={() => {
            this.setState({ image: null, crop: false });
            onCapture(null);
          }}
          icon={<Icon name="fa fa-times" />}
        >
          <Label>Remover fotografia</Label>
        </ButtonIcon>
      </div>
    );
  }

  /** Renderiza o corte da imagem capturada */
  renderCrop() {
    const { onCapture } = this.props;
    const { image, width } = this.state;

    return (
      <div className="photograph" style={{ width: `${width + 10}px` }}>
        <Crop
          image={image}
          width={width}
          onComplete={(img) => {
            this.croppedImage = img;
            onCapture(img); // Passa a imagem para o componente pai
          }}
        />
        <ButtonIcon
          color="primary"
          block
          onClick={() => { this.setState({ image: this.croppedImage, crop: true }); }}
          icon={<Icon name="ion-md-expand" />}
        >
          <Label>Recortar imagem</Label>
        </ButtonIcon>
      </div>
    );
  }

  /** Renderiza os componentes quando for dispositivo mobile */
  renderInputFile(props = {}) {
    let block = false;
    let newProps = { ...props };

    if (props.block || props.block === false) {
      ({ block, ...newProps } = props);
    }

    const { image, crop, invalidType } = this.state;

    /** Se houver imagem capturada e não cortada, renderiza o corte */
    if (image && !crop) return this.renderCrop();

    /** Se houver imagem capturada e cortada, renderiza a imagem */
    if (image && crop) return this.renderImage();

    /** Se não houver imagem capturada, renderiza o InputFile */
    return (
      <InputFile
        component={(
          <ButtonIcon
            icon={<Icon name="fa fa-camera" />}
            color="primary"
            block={block}
          >
            <Label>Inserir Imagem</Label>
          </ButtonIcon>
        )}
        accept="image/jpeg"
        helpBlock={invalidType ? 'Apenas imagen jpeg ou jpg' : null}
        state={invalidType ? 'error' : null}
        onChange={this.capturePhotoMobile}
        ref={(e) => { this.inputRef = e; }}
        {...newProps}
      />
    );
  }

  /** Renderiza os componentes quando for dispositivo desktop */
  renderDesktop() {
    const { noWebcam } = this.props;
    const {
      image,
      crop,
      width,
      height,
    } = this.state;

    /** Se houver imagem capturada e não cortada, renderiza o corte */
    if (image && !crop) return this.renderCrop();

    /** Se houver imagem capturada e cortada, renderiza a imagem */
    if (image && crop) return this.renderImage();

    /** Se não houver imagem capturada, renderiza a webcam */
    return (
      <div className="photograph" style={{ width: `${width + 10}px` }}>
        {noWebcam ? (
          <>
            <img
              width={width}
              src={imageNoPhoto}
              alt="Sem imagem"
              className="image photo"
            />
            {this.renderInputFile({
              style: { marginBottom: '0px', marginTop: '-20px' },
              block: true,
            })}
          </>
        ) : (
          <>
            <Webcam
              width={width}
              height={height}
              ref={(e) => { this.webcamRef = e; }}
              audio={false}
              screenshotFormat="image/jpeg"
              className="image"
              style={{ width: `${width}px`, height: `${height}px` }}
            />
            <ButtonIcon
              color="primary"
              block
              onClick={this.capturePhotoDesktop}
              icon={<Icon name="fa fa-camera" />}
            >
              <Label>Fotografar</Label>
            </ButtonIcon>
          </>
        )}
      </div>
    );
  }

  render() {
    const mobileDetect = new MobileDetect(window.navigator.userAgent);

    return mobileDetect.mobile() ? this.renderInputFile() : this.renderDesktop();
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
PhotographComponent.defaultProps = {
  defaultImage: null,
  width: null,
  height: null,
  noWebcam: false,
  onCapture: () => {},
  onError: () => {},
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
PhotographComponent.propTypes = {
  defaultImage: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  noWebcam: PropTypes.bool,
  onCapture: PropTypes.func,
  onError: PropTypes.func,
};

export default PhotographComponent;
