import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  SimpleLineIcons,
  FontAwesome,
  AntDesign,
  Feather,
} from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ShoppingCartStack from "../router/ShoppingCartStack";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "#2980B9",
      }}
    >
      <Tab.Screen
        component={HomeStack}
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="home" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeScreen}
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        component={ShoppingCartStack}
        name="shoppingCart"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="shoppingcart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeScreen}
        name="menu"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="menu" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
