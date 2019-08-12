import React from 'react';
import { storiesOf } from '@storybook/react';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import Grid from './';

const style = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#61dafb',
  backgroundColor: '#bbeffd',
  height: '40px',
  textAlign: 'center',
  paddingTop: '9px',
};

storiesOf('ui-layout/Grid [Grid, UIL008]', module)
  .add('Grid.Row com Grid.Col', () => (
    <div style={{ width: '500px' }}>
      <Grid.Row>
        <Grid.Col xs={12} md={8} style={style}>{'xs={12}'} {'md={8}'}</Grid.Col>
        <Grid.Col xs={6} md={4} style={style}>{'xs={6}'} {'md={4}'}</Grid.Col>
      </Grid.Row>
      <br />
      <Grid.Row>
        <Grid.Col md={4} style={style}>{'md={4}'}</Grid.Col>
        <Grid.Col md={5} mdOffset={3} style={style}>{'md={5}'} {'mdOffset={3}'}</Grid.Col>
      </Grid.Row>
      <br />
      <Grid.Row>
        <Grid.Col xs={6} style={style}>{'xs={6}'}</Grid.Col>
        <Grid.Col xs={6} style={style}>{'xs={6}'}</Grid.Col>
      </Grid.Row>
    </div>
  ));
