import React from 'react';

import { Content } from '../common/ui-layout';
import { Label } from '../common/ui-elements';

/** @type {function} Página inicial da aplicação */
const LunchBoxesComponent = () => (
  <Content
    title={<Label>Marmitas</Label>}
    breadcrumb={[{ label: 'Marmitas', href: '#' }]}
  >
    Lista de marmitas
  </Content>
);

export default LunchBoxesComponent;
