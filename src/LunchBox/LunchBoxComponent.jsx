import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Box, Content, Grid } from 'common/ui-layout';
import {
  FadeSpinner,
  Tabs,
  Tab,
} from 'common/ui-elements';

import Image from './containers/Image';
import Name from './containers/Name';
import Price from './containers/Price';
import Quantity from './containers/Quantity';
import Description from './containers/Description';

class LunchBoxComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'description',
      loading: false,
      loadingImage: false,
    };
  }

  componentDidMount() {
    const {
      match: { params: { id } },
      lunchBox,
      getLunchBox,
    } = this.props;

    if (!lunchBox.id) {
      this.setState({ loading: true });
      getLunchBox(
        id,
        () => this.setState({ loading: false }),
      );
    }
  }

  render() {
    const { match: { params: { id } }, lunchBox } = this.props;
    const {
      selectedTab,
      loading,
      loadingImage,
    } = this.state;

    return (
      <Content
        breadcrumb={[{ label: 'Marmitas', href: '#' }, { label: lunchBox.name, href: `#/lunchBox/${id}` }]}
        className="lunchbox"
      >
        {loading ? <FadeSpinner /> : (
          <Box color="muted">
            <Grid.Row>
              <Grid.Col md={3}>
                <Image
                  id={id}
                  setLoadingImage={val => this.setState({ loadingImage: val })}
                />
                {loadingImage && <FadeSpinner />}
              </Grid.Col>
              <Grid.Col md={8}>
                <div className="lunchbox">
                  <Name id={id} />
                  <br />
                  <Price id={id} />
                  <br />
                  <Quantity id={id} />
                </div>
              </Grid.Col>
            </Grid.Row>
            <br />
            <br />
            <Tabs activeKey={selectedTab} onSelect={key => this.setState({ selectedTab: key })}>
              <Tab eventKey="description" title="Detalhes">
                <Description id={id} isDescription />
              </Tab>
              <Tab eventKey="ingredients" title="Ingredientes">
                <Description id={id} />
              </Tab>
            </Tabs>
          </Box>
        )}
      </Content>
    );
  }
}

/** @type {Object} Tipos das props, ajuda no controle das entradas de dados */
LunchBoxComponent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  lunchBox: PropTypes.object.isRequired,
  getLunchBox: PropTypes.func.isRequired,
};

export default LunchBoxComponent;
