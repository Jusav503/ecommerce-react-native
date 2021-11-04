import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import QuantitySelector from "../QuantitySelector";
import styles from "./styles";

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const CartProductItem = ({ cartItem }: CartProductItemProps) => {
  const { quantity: quantityProp, item } = cartItem;

  const [quantity, setQuantity] = useState(quantityProp);
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.rightContainer}>
          <Text style={styles.price}>.</Text>
          <Text numberOfLines={3}>
            {item.title}
          </Text>
          <View style={styles.rating}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                key={`${item.id}-${i}`}
                name={i < Math.floor(item.avgRating) ? "star" : "star-o"}
                size={15}
                color="#e47911"
              />
            ))}
            <Text style={{ marginHorizontal: 5, color: "blue" }}>
              {item.ratings}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.price}>from € {item.price}</Text>
            <Text style={styles.oldPrice}>€ {item.oldPrice}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttons}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};

export default CartProductItem;
