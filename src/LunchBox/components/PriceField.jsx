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

const PriceFieldComponent = ({ price, discount, onClose }) => {
  const [fieldPrice, setFieldPrice] = useState(price);
  const [fieldDiscount, setFieldDiscount] = useState(discount);

  return (
    <Grid.Row>
      <Grid.Col md={2} style={{ paddingRight: '0px' }}>
        <Input
          label={<Label>Preço</Label>}
          value={fieldPrice}
          onChange={e => setFieldPrice(e.target.value)}
        />
      </Grid.Col>
      <Grid.Col md={2} style={{ paddingRight: '0px' }}>
        <Input
          label={<Label>Desconto (%)</Label>}
          value={fieldDiscount}
          onChange={e => setFieldDiscount(e.target.value)}
        />
      </Grid.Col>
      <Grid.Col md={3}>
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
PriceFieldComponent.defaultProps = {
  price: '',
  discount: '',
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
PriceFieldComponent.propTypes = {
  price: PropTypes.string,
  discount: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default PriceFieldComponent;
