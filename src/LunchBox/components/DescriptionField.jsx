import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  ButtonGroup,
  FadeSpinner,
  Icon,
  TextArea,
} from 'common/ui-elements';
import { Grid } from 'common/ui-layout';

const DescriptionFieldComponent = (props) => {
  const {
    changeDescription,
    changeIngredients,
    id,
    isDescription,
    value,
    onClose,
  } = props;
  const [fieldValue, setFieldValue] = useState(value);
  const [fieldError, setFieldError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Grid.Row>
      <Grid.Col sm={9} style={{ paddingRight: '0px' }}>
        <TextArea
          value={fieldValue}
          onChange={e => setFieldValue(e.target.value)}
          className="description"
          blockInput
          state={fieldError ? 'error' : null}
          helpBlock={fieldError ? 'O campo é obrigatório' : null}
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
              } else if (isDescription) {
                changeDescription(
                  { id, description: fieldValue },
                  onClose,
                );
              } else {
                changeIngredients(
                  { id, ingredients: fieldValue },
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
DescriptionFieldComponent.defaultProps = {
  isDescription: false,
  value: '',
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
DescriptionFieldComponent.propTypes = {
  id: PropTypes.string.isRequired,
  isDescription: PropTypes.bool,
  value: PropTypes.string,
  changeDescription: PropTypes.func.isRequired,
  changeIngredients: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DescriptionFieldComponent;
