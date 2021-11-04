import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import ShoopingCartScreen from './src/screens/ShoopingCartScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ShoopingCartScreen/>
      <StatusBar style="dark" backgroundColor= "cyan" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d1d1',
    alignItems: 'center',
  },
});
