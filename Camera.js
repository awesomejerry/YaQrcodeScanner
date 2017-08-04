import React, { Component } from 'react';
import Camera from 'react-native-camera';
import Toast from 'react-native-root-toast';
import styles from './styles';

export default class MyCamera extends Component {
  handleBarCodeRead = (e) => {
    Toast.show(e.data, {
      position: Toast.positions.CENTER
    });
  };
  render() {
    return (
      <Camera
        ref={(c) => (this.camera = c)}
        style={styles.camera}
        aspect={Camera.constants.Aspect.fill}
        onBarCodeRead={this.handleBarCodeRead}
      />
    );
  }
}
