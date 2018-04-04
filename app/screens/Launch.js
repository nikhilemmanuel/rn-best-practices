'use strict';
import React from 'react';
import {
  View,
} from 'react-native';
import AnatomyExample from './AnatomyExample';

export default class Launch extends React.Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <View style={{ flex: 1 }}>
        <AnatomyExample />
      </View>
    );
  }
}