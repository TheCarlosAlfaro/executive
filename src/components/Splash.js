import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.brandContainer}>
          <Text style={styles.blackText}>Welcome</Text>
          <Text>to</Text>
          <Text style={styles.brand}>EXECUTIVE</Text>
          <Text style={styles.whiteText}>Mobile Wash</Text>
        </View>
        <View style={styles.creditsContainer}>
          <Text>Dev by Carlos Alfaro</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#85c7f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blackText: {
    fontSize: 24
  },
  brand: {
    fontSize: 45,
    color: 'white',
    fontWeight: 'bold'
  },
  whiteText: {
    fontSize: 18,
    color: 'white'
  },
  brandContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  creditsContainer: {
    marginBottom: 20
  }
});

export default Splash;
