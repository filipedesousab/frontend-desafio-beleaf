import { connect } from 'react-redux';

import NameComponent from '../components/Name';

/**
 * Mapeando estado do redux para a props do NameComponent,
 * @type {function}
 * @param  {object} state Estado do redux
 * @return {object}       Propriedades com os nomes alterados a serem mapeadas ao componente
 */
const mapStateToProps = state => ({
  user: state.global.user,
  lunchBox: state.lunchBox.selected,
});

export default connect(mapStateToProps)(NameComponent);
