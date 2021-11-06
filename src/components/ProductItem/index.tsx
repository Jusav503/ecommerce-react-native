import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = (props: ProductItemProps) => {
  const { item } = props;

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Details", {id: item.id});
  };
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.rightContainer}>
        <Text style={styles.price}>.</Text>
        <Text style={styles.title} numberOfLines={3}>
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
    </Pressable>
  );
};

export default ProductItem;
