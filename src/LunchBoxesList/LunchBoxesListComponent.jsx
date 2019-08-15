import React from 'react';
import PropTypes from 'prop-types';

import imageNoPhoto from 'images/no-photo.jpg';
import { Content, Grid } from '../common/ui-layout';
import { Label } from '../common/ui-elements';

/** @type {function} Página inicial da aplicação */
const LunchBoxesComponent = ({ lunchBoxes }) => (
  <Content
    title={<Label>Marmitas</Label>}
    breadcrumb={[{ label: 'Marmitas', href: '#' }]}
  >
    <Grid.Row>
      {lunchBoxes.map((item) => {
        const price = Number(item.price);
        const discount = Number(item.discount);

        const priceWithoutDiscount = () => (
          <div className="price">
            {`R$ ${price.toFixed(2).replace('.', ',')}`}
          </div>
        );

        const priceWithDiscount = () => (
          <>
            <div className="previous-price">
              {`R$ ${price.toFixed(2).replace('.', ',')}`}
            </div>
            <div className="price">
              {`R$ ${(price - (price * discount / 100)).toFixed(2).replace('.', ',')}`}
            </div>
          </>
        );

        return (
          <Grid.Col sm={3} key={item.id}>
            <a href={`#/lunchBox/:${item.id}`}>
              <div className="lunchbox">
                <img src={imageNoPhoto} alt="" />
                <p className="description">{item.name}</p>
                {discount > 0 ? priceWithDiscount() : priceWithoutDiscount()}
              </div>
            </a>
          </Grid.Col>
        );
      })}
    </Grid.Row>
  </Content>
);

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
LunchBoxesComponent.propTypes = {
  lunchBoxes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LunchBoxesComponent;
