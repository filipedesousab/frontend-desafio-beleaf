import React from 'react';
import { storiesOf } from '@storybook/react';

import 'common/dependencies';
import 'common/scss/dependencies.scss';
import 'common/scss/custom.scss';
import Footer from './';

storiesOf('ui-layout', module)
  .add('Footer [Footer, UIL005]', () => (
    <div style={{ marginLeft: '-150px', position: 'absolute', left: 0, width: '100%' }}>
      <Footer />
    </div>
  ));
