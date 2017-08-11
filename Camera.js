import React, { Component } from "react";
import { Linking } from "react-native";
import Camera from "react-native-camera";
import Toast from "react-native-root-toast";
import styles from "./styles";

const TOAST_OPTION = { position: Toast.positions.CENTER };

export default class MyCamera extends Component {
  handleBarCodeRead = e => {
    const url = e.data;

    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          Toast.show(url, TOAST_OPTION);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => Toast.show("An error occurred...", TOAST_OPTION));
  };
  render() {
    return (
      <Camera
        ref={c => (this.camera = c)}
        style={styles.camera}
        aspect={Camera.constants.Aspect.fill}
        onBarCodeRead={this.handleBarCodeRead}
      />
    );
  }
}
