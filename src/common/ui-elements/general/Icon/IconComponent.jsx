import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

/**
 * [Icon, UIE001] Componente de ícones utilizado na aplicação.
 * @param {string} props.name      Nome completo dos ícones do FontAwesome, Ionicons ou Glyphicon
 * @param {string} props.color     Cor em rgb ou exadecimal
 * @param {string} props.className Class html opcional no componente
 * @param {object} props.style     Estilo CSS a ser aplicado no componente
 */
class IconComponent extends React.PureComponent {
  render() {
    const {
      color,
      name,
      className,
      style,
    } = this.props;

    // Removendo props para não inteferir no ReacDOM e retirar o warning
    const newProps = _.omit(this.props, [
      'color',
      'name',
      'className',
      'style',
    ]);

    if (name) {
      const tipo = name.split(' ')[0];

      let newClassName = name;
      newClassName += className ? ` ${className}` : '';

      if (tipo === 'glyphicon') {
        return <span {...newProps} className={newClassName} style={{ color, ...style }} />;
      }

      return <i {...newProps} className={newClassName} style={{ color, ...style }} />;
    }

    return false;
  }
}

/** @type {Object} Valores padrões das props, caso os itens não recebam um valor */
IconComponent.defaultProps = {
  color: null,
  name: null,
  className: '',
  style: {},
};

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
IconComponent.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default IconComponent;
