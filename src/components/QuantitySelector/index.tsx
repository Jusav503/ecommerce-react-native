import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const QuantitySelector = ({quantity, setQuantity}) => {
  const onMinus = () => {
      setQuantity(Math.max(0, quantity - 1));
  };
  const onPlus = () => {
      setQuantity(quantity + 1);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable onPress={onMinus} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.quantity}>{quantity}</Text>
        <Pressable onPress={onPlus} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 130,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e3e3e3",
    backgroundColor: "white"
  },
  button: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d1d1d1",
  },
  quantity: { color: "#007eb9" },
  buttonText: { fontSize: 18 },
});

export default QuantitySelector;
