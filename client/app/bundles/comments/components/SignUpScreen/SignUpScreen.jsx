import React from 'react';
import request from 'axios';
import Immutable from 'immutable';
import _ from 'lodash';
import ReactOnRails from 'react-on-rails';
import BaseComponent from 'libs/components/BaseComponent';
import { Button } from 'react-toolbox/lib/button';

import css from './SignUpScreen.scss';

export default class SignUpScreen extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Button label="Hello World!" primary raised />
    );
  }
}
