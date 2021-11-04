import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderColor: "#d1d1d1",
    backgroundColor: "#fff",
    overflow: "hidden",
    width: WIDTH,
  },

  mainContainer: { flexDirection: "row",},
  rightContainer: { paddingLeft: 10, flex: 3, },
  image: { flex: 2, height: 145, resizeMode: "contain", },
  rating: { flexDirection: "row", marginVertical: 10, alignItems: "center" },
  price: { fontSize: 18,},
  oldPrice: { fontSize: 12, textDecorationLine: "line-through", marginHorizontal: 5 },

  buttons: { marginVertical: 10 },
});

export default styles;
