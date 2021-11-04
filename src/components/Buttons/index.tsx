import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface ButtonProps {
  text: string;
  containerStyles?: string;
  onPress: () => void;
}

const Buttons = ({ text, onPress, containerStyles }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#e47911",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#a15e1b",
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: "black"
  },
});

export default Buttons;
