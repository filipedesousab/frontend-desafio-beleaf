import React, { useState } from 'react';
import PropTypes from 'prop-types';

import imageNoPhoto from 'images/no-photo.jpg';
import { Box, Content, Grid } from '../common/ui-layout';
import { Label, Tabs, Tab } from '../common/ui-elements';

const LunchBoxComponent = ({ match: { params: { id } } }) => {
  const [selectedTab, setSelectedTab] = useState('details');

  return (
    <Content
      breadcrumb={[{ label: 'Marmitas', href: '#' }, { label: 'Escalopes do Futuro', href: '#' }]}
      className="lunchbox"
    >
      <Box color="muted">
        <Grid.Row>
          <Grid.Col sm={3}>
            <img src={imageNoPhoto} alt="" style={{ width: '100%' }} />
          </Grid.Col>
          <Grid.Col sm={8}>
            <div className="lunchbox">
              <h1 className="name">Escalopes do Futuro</h1>
              <div className="previous-price">
                R$ 32,00
              </div>
              <div className="price">
                R$ 30,00
              </div>
            </div>
          </Grid.Col>
        </Grid.Row>
        <Tabs activeKey={selectedTab} onSelect={key => setSelectedTab(key)}>
          <Tab eventKey="details" title="Detalhes">
            Detalhes do prato
          </Tab>
          <Tab eventKey="ingredients" title="Ingredientes">
            Lista de Ingredientes
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
