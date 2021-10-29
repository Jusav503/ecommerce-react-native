import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {padding: 10, backgroundColor: "white"},
    price:{ fontSize: 18, fontWeight: "bold"},
    oldPrice:{ fontSize: 12, textDecorationLine: "line-through", marginHorizontal: 5},
    description: {marginVertical: 10, lineHeight: 20}
})

export default styles;