import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRoute } from "@react-navigation/native";

import styles from "./styles";
import product from "../../data/product";
import QuantitySelector from "../../components/QuantitySelector";
import Buttons from "../../components/Buttons";
import ImageCarousel from "../../components/ImageCarousel";

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null
  );
  const [quantity, setQuantity] = useState(1)
  const route = useRoute();
  console.log(route);
  
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Title */}
        <Text>{product.title}</Text>

        {/* Image carousel */}
        <ImageCarousel images={product.images} />

        {/* Color picker */}
        <Picker
          selectedValue={selectedOption}
          onValueChange={(itemValue) => setSelectedOption(itemValue)}
        >
          {product.options.map((option) => (
            <Picker.Item label={option} value={option} />
          ))}
        </Picker>

        {/* Prices */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.price}>from € {product.price}</Text>
          <Text style={styles.oldPrice}>€ {product.oldPrice}</Text>
        </View>

        {/* Description */}
        <Text style={styles.description}>{product.description}</Text>

        {/* Quantity selector */}
        <View style={{marginBottom: 40}}>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </View>

        {/* Button */}
        <Buttons text="Add To Cart" containerStyles={{backgroundColor: "#EE8C33"}} onPress={() => {console.warn("Add to cart")}} />
        <Buttons text="Buy now" onPress={() => {console.warn("Buy now")}} />
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
