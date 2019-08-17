import React from 'react';

import NavMenu from './containers/NavMenu';

/** [Navbar, UIL001] Navbar da aplicação */
const NavbarComponent = () => (
  <header className="main-header">
    <a href="/#/" className="logo">
      <span
        className="logo-mini"
        style={{ lineHeight: '10px', marginTop: 12 }}
      >
        <img src="https://www.beleaf.com.br/arquivos/logo-topo.png?v=636546311106170000" alt="beleaf" height="30" />
      </span>
      <span className="logo-lg">
        <img src="https://veganja.vteximg.com.br/arquivos/logo-rodape.png?v=636546311106170000" alt="beleaf" height="30" />
      </span>
    </a>
    <nav className="navbar navbar-static-top">
      <a href="#" className="sidebar-toggle" data-toggle="push-menu" />
      <NavMenu />
    </nav>
  </header>
);

export default NavbarComponent;
