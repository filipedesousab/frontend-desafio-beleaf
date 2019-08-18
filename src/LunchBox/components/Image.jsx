/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import imageNoPhoto from 'images/no-photo.jpg';
import { Photograph } from 'common/ui-elements';

const ImageComponent = (props) => {
  const {
    id,
    lunchBox,
    changeImage,
    setLoadingImage,
    user,
  } = props;

  if (user.id) {
    return (
      <Photograph
        noWebcam
        key={lunchBox.id}
        defaultImage={lunchBox.image || imageNoPhoto}
        onCapture={(img) => {
          setLoadingImage(true);
          changeImage({ id, img }, () => setLoadingImage(false));
        }}
      />
    );
  }

  return <img src={lunchBox.image || imageNoPhoto} alt="" />;
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
ImageComponent.propTypes = {
  id: PropTypes.string.isRequired,
  lunchBox: PropTypes.object.isRequired,
  changeImage: PropTypes.func.isRequired,
  setLoadingImage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default ImageComponent;
