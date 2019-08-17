import React, { Component } from 'react';
import PropTypes from 'prop-types';

import imageNoPhoto from 'images/no-photo.jpg';
import { Box, Content, Grid } from 'common/ui-layout';
import {
  Button,
  FadeSpinner,
  Icon,
  Photograph,
  Tabs,
  Tab,
} from 'common/ui-elements';

import NameField from './components/NameField';
import PriceField from './components/PriceField';
import DescriptionField from './components/DescriptionField';
import QuantityField from './components/QuantityField';

class LunchBoxComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lunchBox: {
        name: '',
        price: '',
        discount: '',
        quantity: '',
        image: '',
        description: '',
        ingredients: '',
      },
      selectedTab: 'details',
      editName: false,
      editPrice: false,
      editDescription: false,
      editIngredients: false,
      editQuantity: false,
      loading: false,
    };
  }

  componentDidMount() {
    const {
      match: { params: { id } },
      lunchBoxes,
      getLunchBox,
    } = this.props;

    if (lunchBoxes[id]) {
      this.setState({ lunchBox: { ...lunchBoxes[id] } });
    } else {
      this.setState({ loading: true });
      getLunchBox(
        id,
        lunchBox => this.setState({ lunchBox, loading: false }),
      );
    }
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const {
      lunchBox,
      selectedTab,
      editName,
      editPrice,
      editDescription,
      editIngredients,
      editQuantity,
      loading,
    } = this.state;

    const price = Number(lunchBox.price);
    const discount = Number(lunchBox.discount);

    return (
      <Content
        breadcrumb={[{ label: 'Marmitas', href: '#' }, { label: lunchBox.name, href: `#/lunchBox/${id}` }]}
        className="lunchbox"
      >
        <Box color="muted">
          <Grid.Row>
            <Grid.Col md={3}>
              <Photograph
                noWebcam
                defaultImage={lunchBox.image || imageNoPhoto}
                onCapture={(img) => {}}
              />
            </Grid.Col>
            <Grid.Col md={8}>
              <div className="lunchbox">
                {editName
                  ? <NameField value={lunchBox.name} onClose={() => this.setState({ editName: false })} />
                  : (
                    <div onClick={() => this.setState({ editName: true })}>
                      <h1 className="name edit">{lunchBox.name}</h1>
                      <Button color="primary" className="btn-pencil">
                        <Icon name="fa fa-pencil" />
                      </Button>
                    </div>
                  )
                }
                <br />
                {editPrice
                  ? (
                    <PriceField
                      price={lunchBox.price.replace('.', ',')}
                      discount={lunchBox.discount}
                      onClose={() => this.setState({ editPrice: false })}
                    />
                  ) : (
                    <div onClick={() => this.setState({ editPrice: true })}>
                      <div className={`${discount > 0 ? 'previous-' : ''}price edit`}>
                        {`R$ ${lunchBox.price.replace('.', ',')}`}
                      </div>
                      <Button color="primary" className="btn-pencil">
                        <Icon name="fa fa-pencil" />
                      </Button>
                      {discount > 0 && (
                        <div className="price">
                          {`R$ ${(price - (price * discount / 100)).toFixed(2).replace('.', ',')}`}
                        </div>
                      )}
                    </div>
                  )
                }
                <br />
                {editQuantity
                  ? (
                    <QuantityField
                      value={lunchBox.quantity}
                      onClose={() => this.setState({ editQuantity: false })}
                    />
                  ) : (
                    <div onClick={() => this.setState({ editQuantity: true })}>
                      <div className="edit">{`Quantidade: ${lunchBox.quantity}`}</div>
                      <Button color="primary" className="btn-pencil">
                        <Icon name="fa fa-pencil" />
                      </Button>
                    </div>
                  )
                }
              </div>
            </Grid.Col>
          </Grid.Row>
          <br />
          <br />
          <Tabs activeKey={selectedTab} onSelect={key => this.setState({ selectedTab: key })}>
            <Tab eventKey="details" title="Detalhes">
              {editDescription
                ? (
                  <DescriptionField
                    value={lunchBox.description}
                    onClose={() => this.setState({ editDescription: false })}
                  />
                ) : (
                  <div onClick={() => this.setState({ editDescription: true })}>
                    <p className="edit">{lunchBox.description}</p>
                    <Button color="primary" className="btn-pencil">
                      <Icon name="fa fa-pencil" />
                    </Button>
                  </div>
                )
              }
            </Tab>
            <Tab eventKey="ingredients" title="Ingredientes">
              {editIngredients
                ? (
                  <DescriptionField
                    value={lunchBox.ingredients}
                    onClose={() => this.setState({ editIngredients: false })}
                  />
                ) : (
                  <div onClick={() => this.setState({ editIngredients: true })}>
                    <p className="edit">{lunchBox.ingredients}</p>
                    <Button color="primary" className="btn-pencil">
                      <Icon name="fa fa-pencil" />
                    </Button>
                  </div>
                )
              }
            </Tab>
          </Tabs>
        </Box>
        {loading && <FadeSpinner />}
      </Content>
    );
  }
}

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
LunchBoxComponent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  lunchBoxes: PropTypes.object.isRequired,
  getLunchBox: PropTypes.func.isRequired,

};

export default LunchBoxComponent;
