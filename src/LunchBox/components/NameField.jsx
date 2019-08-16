import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  ButtonGroup,
  Icon,
  Input,
} from 'common/ui-elements';
import { Grid } from 'common/ui-layout';

const NameFieldComponent = ({ value, onClose }) => {
  const [fieldValue, setFieldValue] = useState(value);

  return (
    <Grid.Row>
      <Grid.Col md={3} style={{ paddingRight: '0px' }}>
        <Input
          value={fieldValue}
          onChange={e => setFieldValue(e.target.value)}
        />
      </Grid.Col>
      <Grid.Col md={3}>
        <ButtonGroup style={{ marginTop: '20px' }}>
          <Button color="danger" onClick={onClose}>
            <Icon name="fa fa-times" />
          </Button>
          <Button color="success" onClick={onClose}>
            <Icon name="fa fa-check" />
          </Button>
        </ButtonGroup>
      </Grid.Col>
    </Grid.Row>
  );
};

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
NameFieldComponent.defaultProps = {
  value: '',
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
NameFieldComponent.propTypes = {
  value: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default NameFieldComponent;
