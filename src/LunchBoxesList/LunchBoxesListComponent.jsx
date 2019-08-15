import React from 'react';

import { Content, Grid } from '../common/ui-layout';
import { Label } from '../common/ui-elements';

/** @type {function} Página inicial da aplicação */
const LunchBoxesComponent = ({ lunchBoxes }) => (
  <Content
    title={<Label>Marmitas</Label>}
    breadcrumb={[{ label: 'Marmitas', href: '#' }]}
  >
    <Grid.Row>
      <Grid.Col sm={3}>
        <div className="lunchbox">
          <img src="https://veganja.vteximg.com.br/arquivos/ids/155806-1000-1000/Escalope.jpg?v=636967348146370000" alt="" />
          <p className="description">ESCALOPES DO FUTURO</p>
          <div className="previous-price">R$ 34,90</div>
          <div className="price">R$ 27,90</div>
        </div>
      </Grid.Col>
    </Grid.Row>
  </Content>
);

export default LunchBoxesComponent;
