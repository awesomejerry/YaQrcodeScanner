import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Camera from './Camera';
import styles from './styles';

export default class YaQrcodeScanner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera />
      </View>
    );
  }
}

AppRegistry.registerComponent('YaQrcodeScanner', () => YaQrcodeScanner);
