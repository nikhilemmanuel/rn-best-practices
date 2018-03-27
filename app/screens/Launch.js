'use strict';
import React from 'react';
import AnatomyExample from './AnatomyExample';

export default class Launch extends React.Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    <View style={{flex: 1}}>
      <AnatomyExample />
    </View>
  }

}