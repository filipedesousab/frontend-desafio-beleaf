import { connect } from 'react-redux';

import MenuComponent from '../components/Menu';

/**
 * Mapeando estado do redux para a props do MenuComponent
 * @type {function}
 * @param  {object} state Estado do redux
 * @return {object}       Propriedades com os nomes alterados a serem mapeadas ao componente
 */
const mapStateToProps = state => ({
  items: state.sidebar.menu,
});

export default connect(mapStateToProps, null)(MenuComponent);
