import React, { Component } from "react";
import { StyleSheet, Text,TouchableWithoutFeedback, Alert,View, FlatList, Dimensions } from 'react-native';





class DayOff extends Component {

    
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>qq  q qqDayOff</Text>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default DayOff;