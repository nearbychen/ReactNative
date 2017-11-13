import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
// import { Actions } from 'react-native-router-flux'; // New code

const GrayScreen = () => {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.welcome}>
    //   Gray Screen
    //   </Text>
    // </View>
    <View style={styles.container}>
    <Text
        style={styles.welcome}
        // onPress={() => Actions.getData()} // New Code
    >
    Scarlet Screen
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaa000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#cccccc',
  },
});

export default GrayScreen;