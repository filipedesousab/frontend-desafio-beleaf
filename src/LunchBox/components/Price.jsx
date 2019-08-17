/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Icon } from 'common/ui-elements';

import PriceField from '../containers/PriceField';

const PriceComponent = (props) => {
  const {
    id,
    lunchBox,
    user,
  } = props;
  const price = Number(lunchBox.price);
  const discount = Number(lunchBox.discount);

  const [editPrice, setEditPrice] = useState(false);

  if (user.id) {
    return editPrice ? (
      <PriceField
        price={lunchBox.price.replace('.', ',')}
        discount={lunchBox.discount}
        onClose={() => setEditPrice(false)}
        id={id}
      />
    ) : (
      <div onClick={() => setEditPrice(true)}>
        <div className={`${discount > 0 ? 'previous-' : ''}price edit`}>
          {`R$ ${lunchBox.price.replace('.', ',')}`}
        </div>
        <Button color="primary" className="btn-pencil">
          <Icon name="fa fa-pencil" />
        </Button>
        {discount > 0 && (
          <div className="price">
            {`R$ ${(price - (price * discount / 100)).toFixed(2).replace('.', ',')}`}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <div className={`${discount > 0 ? 'previous-' : ''}price`}>
        {`R$ ${lunchBox.price.replace('.', ',')}`}
      </div>
      {discount > 0 && (
        <div className="price">
          {`R$ ${(price - (price * discount / 100)).toFixed(2).replace('.', ',')}`}
        </div>
      )}
    </>
  );
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
PriceComponent.propTypes = {
  id: PropTypes.string.isRequired,
  lunchBox: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default PriceComponent;
