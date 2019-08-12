import React from 'react';

import Menu from './containers/Menu';

/** [Sidebar, UIL002] Menu esquerdo da aplicação */
const SidebarComponent = () => (
  <aside className="main-sidebar">
    <section className="sidebar">
      <Menu />
    </section>
  </aside>
);

export default SidebarComponent;
