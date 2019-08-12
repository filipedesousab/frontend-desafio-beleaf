import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './SpinnerComponent';

/**
 * [FadeSpinner, UIE034] Indicar carregamento, escurece a tela e impede a manipulação do usuário.
 */
const FadeSpinnerComponent = () => {
  const sizeSpinner = 14;
  const marginSpinner = 2;
  const style = {
    width: (sizeSpinner + marginSpinner * 2) * 3,
    height: sizeSpinner + marginSpinner * 2,
  };

  return ReactDOM.createPortal((
    <div className="fade-spinner">
      <div className="fade" />
      <div className="spinner" style={style}>
        <Spinner size={sizeSpinner} margin={marginSpinner} />
      </div>
    </div>
  ), document.body);
};

export default FadeSpinnerComponent;
