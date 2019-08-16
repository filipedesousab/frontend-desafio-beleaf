import React, { useState } from 'react';
import PropTypes from 'prop-types';

import imageNoPhoto from 'images/no-photo.jpg';
import { Box, Content, Grid } from 'common/ui-layout';
import {
  Button,
  Icon,
  Photograph,
  Tabs,
  Tab,
} from 'common/ui-elements';

import NameField from './components/NameField';
import PriceField from './components/PriceField';
import DescriptionField from './components/DescriptionField';
import QuantityField from './components/QuantityField';

const LunchBoxComponent = ({ match: { params: { id } } }) => {
  const [selectedTab, setSelectedTab] = useState('details');
  const [editName, setEditName] = useState(false);
  const [editPrice, setEditPrice] = useState(false);
  const [editDescription, setEditDescription] = useState(false);
  const [editIngredients, setEditIngredients] = useState(false);
  const [editQuantity, setEditQuantity] = useState(false);

  return (
    <Content
      breadcrumb={[{ label: 'Marmitas', href: '#' }, { label: 'Escalopes do Futuro', href: '#' }]}
      className="lunchbox"
    >
      <Box color="muted">
        <Grid.Row>
          <Grid.Col sm={3}>
            {/* <img src={imageNoPhoto} alt="" style={{ width: '100%' }} /> */}
            <Photograph
              noWebcam
              defaultImage={imageNoPhoto}
              onCapture={(img) => {}}
            />
          </Grid.Col>
          <Grid.Col sm={8}>
            <div className="lunchbox">
              {editName
                ? <NameField value="Escalopes do Futuro" onClose={() => setEditName(false)} />
                : (
                  <div onClick={() => setEditName(true)}>
                    <h1 className="name edit">Escalopes do Futuro</h1>
                    <Button color="primary" className="btn-pencil">
                      <Icon name="fa fa-pencil" />
                    </Button>
                  </div>
                )
              }
              {editPrice
                ? (
                  <PriceField
                    price="32,00"
                    discount="10"
                    onClose={() => setEditPrice(false)}
                  />
                ) : (
                  <div onClick={() => setEditPrice(true)}>
                    <div className="previous-price edit">R$ 32,00</div>
                    <Button color="primary" className="btn-pencil">
                      <Icon name="fa fa-pencil" />
                    </Button>
                  </div>
                )
              }
              <div className="price">
                R$ 30,00
              </div>
              {editQuantity
                ? (
                  <QuantityField
                    value="10"
                    onClose={() => setEditQuantity(false)}
                  />
                ) : (
                  <div onClick={() => setEditQuantity(true)}>
                    <div className="edit">Quantidade: 10</div>
                    <Button color="primary" className="btn-pencil">
                      <Icon name="fa fa-pencil" />
                    </Button>
                  </div>
                )
              }
            </div>
          </Grid.Col>
        </Grid.Row>
        <Tabs activeKey={selectedTab} onSelect={key => setSelectedTab(key)}>
          <Tab eventKey="details" title="Detalhes">
            {editDescription
              ? (
                <DescriptionField
                  value="Detalhes do prato"
                  onClose={() => setEditDescription(false)}
                />
              ) : (
                <div onClick={() => setEditDescription(true)}>
                  <p className="edit">Detalhes do prato</p>
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
                  value="Lista de Ingredientes"
                  onClose={() => setEditIngredients(false)}
                />
              ) : (
                <div onClick={() => setEditIngredients(true)}>
                  <p className="edit">Lista de Ingredientes</p>
                  <Button color="primary" className="btn-pencil">
                    <Icon name="fa fa-pencil" />
                  </Button>
                </div>
              )
            }
          </Tab>
        </Tabs>
      </Box>
    </Content>
  );
}
/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
LunchBoxComponent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default LunchBoxComponent;
