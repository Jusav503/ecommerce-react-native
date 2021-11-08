import Auth from "@aws-amplify/auth";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { Text, TouchableOpacity, View } from "react-native";

const MenuScreen = () => {
  const onLogout = () => {
    Auth.signOut();
  };

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "white",
          padding: 15,
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={onLogout}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons name="exit-outline" size={24} color="black" />
          <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: "bold" }}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
