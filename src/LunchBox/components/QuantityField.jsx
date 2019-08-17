import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  ButtonGroup,
  Icon,
  Input,
  Label,
} from 'common/ui-elements';
import { Grid } from 'common/ui-layout';

const QuantityFieldComponent = ({ value, onClose }) => {
  const [fieldValue, setFieldValue] = useState(value);

  return (
    <Grid.Row>
      <Grid.Col sm={3} style={{ paddingRight: '0px' }}>
        <Input
          label={<Label>Quantidade</Label>}
          value={fieldValue}
          onChange={e => setFieldValue(e.target.value)}
        />
      </Grid.Col>
      <Grid.Col sm={3}>
        <ButtonGroup style={{ marginTop: '25px' }}>
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
QuantityFieldComponent.defaultProps = {
  value: '',
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
QuantityFieldComponent.propTypes = {
  value: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default QuantityFieldComponent;
