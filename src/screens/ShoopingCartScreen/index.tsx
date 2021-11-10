import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, View } from "react-native";
import Buttons from "../../components/Buttons";

import CartProductItem from "../../components/CartProductItem";
import products from "../../data/cart";

const ShoopingCartScreen = () => {
  const navigation = useNavigation();
  
  const totalPrice = products.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );

  const onCheckout = () => {
    navigation.navigate("ProductDetails")
  }

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <CartProductItem cartItem={item} />}
        ListHeaderComponent={() => (
          <View style={{ backgroundColor: "white", padding: 15 }}>
            <Text style={{ fontSize: 18 }}>
              Subtotal ({products.length} items):
              <Text style={{ color: "#e47911", fontWeight: "bold" }}>
                € {totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Buttons
              text="Proceed to checkout"
              onPress={onCheckout}
              containerStyles={{
                backgroundColor: "#f7e300",
                borderColor: "#c7b702",
                marginVertical: 10,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ShoopingCartScreen;
