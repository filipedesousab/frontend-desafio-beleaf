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

const PriceFieldComponent = (props) => {
  const {
    changePrice,
    id,
    price,
    discount,
    onClose,
  } = props;
  const [fieldPrice, setFieldPrice] = useState(price);
  const [fieldDiscount, setFieldDiscount] = useState(discount);
  const [loading, setLoading] = useState(false);

  return (
    <Grid.Row>
      <Grid.Col sm={2} style={{ paddingRight: '0px' }}>
        <Input
          label={<Label>Preço</Label>}
          value={fieldPrice}
          onChange={e => setFieldPrice(e.target.value)}
        />
      </Grid.Col>
      <Grid.Col sm={2} style={{ paddingRight: '0px' }}>
        <Input
          label={<Label>Desconto (%)</Label>}
          value={fieldDiscount}
          onChange={e => setFieldDiscount(e.target.value)}
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
              changePrice(
                {
                  id,
                  price: fieldPrice.replace(',', '.'),
                  discount: fieldDiscount.replace(',', '.'),
                },
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
PriceFieldComponent.defaultProps = {
  price: '',
  discount: '',
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
PriceFieldComponent.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.string,
  discount: PropTypes.string,
  changePrice: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PriceFieldComponent;
