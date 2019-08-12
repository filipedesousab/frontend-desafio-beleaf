import React from 'react';

import './common/dependencies';
import Routes from './routes';
import { Navbar, Sidebar, Footer, AlertsPopup } from './common/ui-layout';

/** @type {function} Inicia os componentes visuais da aplicação */
const App = () => (
  <div className="wrapper">
    <Navbar />
    <Sidebar />
    <div className="content-wrapper">
      {/* Instancia as páginas da aplicação a partir de rotas */}
      <Routes />
    </div>
    <Footer />
    <AlertsPopup />
  </div>
);

export default App;
