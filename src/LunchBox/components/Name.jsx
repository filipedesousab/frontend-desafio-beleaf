/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Icon } from 'common/ui-elements';

import NameField from '../containers/NameField';

const NameComponent = (props) => {
  const {
    id,
    lunchBox,
    user,
  } = props;

  const [editName, setEditName] = useState(false);

  if (user.id) {
    return editName ? (
      <NameField
        value={lunchBox.name}
        onClose={() => setEditName(false)}
        id={id}
      />
    ) : (
      <div onClick={() => setEditName(true)}>
        <h1 className="name edit">{lunchBox.name}</h1>
        <Button color="primary" className="btn-pencil">
          <Icon name="fa fa-pencil" />
        </Button>
      </div>
    );
  }

  return <h1 className="name">{lunchBox.name}</h1>;
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
NameComponent.propTypes = {
  id: PropTypes.string.isRequired,
  lunchBox: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default NameComponent;
