import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ShoopingCartScreen from "../screens/ShoopingCartScreen";
import AddressScreen from "../screens/AddressScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ShoopingCartScreen}
        name="cart"
        options={{ title: "Shopping Cart" }}
      />
      <Stack.Screen
        component={AddressScreen}
        name="ProductDetails"
        options={{ title: "Address" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
