import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  ButtonGroup,
  FadeSpinner,
  Icon,
  Input,
  Label,
} from 'common/ui-elements';
import { Grid } from 'common/ui-layout';

const QuantityFieldComponent = (props) => {
  const {
    changeQuantity,
    id,
    value,
    onClose,
  } = props;
  const [fieldValue, setFieldValue] = useState(value);
  const [fieldError, setFieldError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Grid.Row>
      <Grid.Col sm={3} style={{ paddingRight: '0px' }}>
        <Input
          label={<Label>Quantidade</Label>}
          value={fieldValue}
          onChange={e => setFieldValue(e.target.value)}
          type="number"
          state={fieldError ? 'error' : null}
          helpBlock={fieldError ? 'Quantidade é obrigatório' : null}
        />
      </Grid.Col>
      <Grid.Col sm={3}>
        <ButtonGroup style={{ marginTop: '25px' }}>
          <Button color="danger" onClick={onClose}>
            <Icon name="fa fa-times" />
          </Button>
          <Button
            color="success"
            onClick={() => {
              setLoading(true);
              if (fieldValue === '') {
                setFieldError(true);
                setLoading(false);
              } else {
                changeQuantity(
                  { id, quantity: fieldValue },
                  onClose,
                );
              }
            }}
          >
            <Icon name="fa fa-check" />
          </Button>
        </ButtonGroup>
      </Grid.Col>
      {loading && <FadeSpinner />}
    </Grid.Row>
  );
};

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
QuantityFieldComponent.defaultProps = {
  value: '',
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
QuantityFieldComponent.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  changeQuantity: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default QuantityFieldComponent;
