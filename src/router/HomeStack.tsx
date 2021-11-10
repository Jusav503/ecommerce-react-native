import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";

const Stack = createNativeStackNavigator();

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: () => void;
}
const HeaderInput = ({ searchValue, setSearchValue }: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#22e3dd" }}>
      <View style={styles.inputContainer}>
        <Feather name="search" size={20} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderInput
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}
    >
      <Stack.Screen name="HomeScreen">
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>

      <Stack.Screen
        component={ProductScreen}
        name="Details"
        options={{ title: "Hola" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 40,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  input: { marginLeft: 10 },
});

export default HomeStack;
