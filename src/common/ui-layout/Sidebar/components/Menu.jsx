import React from 'react';
import PropTypes from 'prop-types';
import genHash from 'random-hash';

import MenuItem from './MenuItem';
import MenuTree from './MenuTree';

/**
 * Itens do menu esquerdo da aplicação.
 * @param {?array} props.items [{ label: '', icon: '', items: [{ label: '', icon: '', href: '' }] }]
 */
const MenuComponent = ({ items }) => (
  <ul className="sidebar-menu tree" data-widget="tree">
    {items.map((item) => {
      if (item.hasOwnProperty('items')) {
        return (
          <MenuTree label={item.label} icon={item.icon} key={genHash()}>
            {item.items.map(itemTree => (
              <MenuItem
                href={itemTree.href}
                label={itemTree.label}
                icon={itemTree.icon}
                key={genHash()}
              />
            ))}
          </MenuTree>
        );
      }
      return <MenuItem href={item.href} label={item.label} icon={item.icon} key={genHash()} />;
    })}
  </ul>
);

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
MenuComponent.defaultProps = {
  items: [],
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
MenuComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};


export default MenuComponent;
