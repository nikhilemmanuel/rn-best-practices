import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Launch from './app/screens/Launch';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Launch />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
