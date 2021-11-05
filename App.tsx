import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Router from './src/router';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor= "cyan" />
      <Router />
    </SafeAreaProvider>
  );
}