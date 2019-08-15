import React, { Component } from 'react';
import PropTypes from 'prop-types';

import imageNoPhoto from 'images/no-photo.jpg';
import { Content, Grid } from '../common/ui-layout';
import { Label, FadeSpinner } from '../common/ui-elements';

/** @type {function} Página inicial da aplicação */
class LunchBoxesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentDidMount() {
    const { getLunchBoxes } = this.props;

    getLunchBoxes(() => this.setState({ loading: false }));
  }

  renderList() {
    const { lunchBoxes } = this.props;

    return (
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
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <Content
        title={<Label>Marmitas</Label>}
        breadcrumb={[{ label: 'Marmitas', href: '#' }]}
      >
        {loading ? <FadeSpinner /> : this.renderList()}
      </Content>
    );
  }
}


/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
LunchBoxesComponent.propTypes = {
  getLunchBoxes: PropTypes.func.isRequired,
  lunchBoxes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LunchBoxesComponent;
