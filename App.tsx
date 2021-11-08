import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";

import Router from "./src/router";
import config from "./src/aws-exports";
Amplify.configure(config);

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor="cyan" />
      <Router />
    </SafeAreaProvider>
  );
};

export default withAuthenticator(App);
