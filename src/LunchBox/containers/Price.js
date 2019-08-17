import { connect } from 'react-redux';

import PriceComponent from '../components/Price';

/**
 * Mapeando estado do redux para a props do PriceComponent,
 * @type {function}
 * @param  {object} state Estado do redux
 * @return {object}       Propriedades com os nomes alterados a serem mapeadas ao componente
 */
const mapStateToProps = state => ({
  user: state.global.user,
  lunchBox: state.lunchBox.selected,
});

export default connect(mapStateToProps)(PriceComponent);
