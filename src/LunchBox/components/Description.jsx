/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Icon } from 'common/ui-elements';

import DescriptionField from '../containers/DescriptionField';

const DescriptionComponent = (props) => {
  const {
    id,
    isDescription,
    lunchBox,
    user,
  } = props;

  const [editDescription, setEditDescription] = useState(false);

  if (user.id) {
    return editDescription ? (
      <DescriptionField
        value={isDescription ? lunchBox.description : lunchBox.ingredients}
        onClose={() => setEditDescription(false)}
        id={id}
        isDescription={isDescription}
      />
    ) : (
      <div onClick={() => setEditDescription(true)}>
        <p className="edit">{isDescription ? lunchBox.description : lunchBox.ingredients}</p>
        <Button color="primary" className="btn-pencil">
          <Icon name="fa fa-pencil" />
        </Button>
      </div>
    );
  }

  return <p>{isDescription ? lunchBox.description : lunchBox.ingredients}</p>;
};

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
DescriptionComponent.defaultProps = {
  isDescription: false,
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
DescriptionComponent.propTypes = {
  id: PropTypes.string.isRequired,
  isDescription: PropTypes.bool,
  lunchBox: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default DescriptionComponent;
