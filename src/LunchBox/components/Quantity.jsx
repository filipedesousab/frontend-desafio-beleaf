/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Icon } from 'common/ui-elements';

import QuantityField from '../containers/QuantityField';

const QuantityComponent = (props) => {
  const {
    id,
    lunchBox,
    user,
  } = props;

  const [editQuantity, setEditQuantity] = useState(false);

  if (user.id) {
    return editQuantity ? (
      <QuantityField
        value={lunchBox.quantity}
        onClose={() => setEditQuantity(false)}
        id={id}
      />
    ) : (
      <div onClick={() => setEditQuantity(true)}>
        <div className="edit">{`Quantidade: ${lunchBox.quantity}`}</div>
        <Button color="primary" className="btn-pencil">
          <Icon name="fa fa-pencil" />
        </Button>
      </div>
    );
  }

  return null;
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
QuantityComponent.propTypes = {
  id: PropTypes.string.isRequired,
  lunchBox: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default QuantityComponent;
