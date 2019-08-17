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

const NameFieldComponent = (props) => {
  const {
    changeName,
    id,
    onClose,
    value,
  } = props;
  const [fieldValue, setFieldValue] = useState(value);
  const [loading, setLoading] = useState(false);

  return (
    <Grid.Row>
      <Grid.Col sm={3} style={{ paddingRight: '0px' }}>
        <Input
          label={<Label>Nome</Label>}
          value={fieldValue}
          onChange={e => setFieldValue(e.target.value)}
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
              changeName(
                { id, name: fieldValue },
                onClose,
              );
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
NameFieldComponent.defaultProps = {
  value: '',
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
NameFieldComponent.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  changeName: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NameFieldComponent;
