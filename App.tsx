import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AdressScreen from './src/screens/AdressScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AdressScreen />
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
