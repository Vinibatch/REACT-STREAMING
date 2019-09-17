import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from "./components/Search"

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to YOYOYO start working on your app!</Text>
    // </View>
    <Search/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
