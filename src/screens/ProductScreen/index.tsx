import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";

import styles from "./styles";
import product from "../../data/product";
import QuantitySelector from "../../components/QuantitySelector";
import Buttons from "../../components/Buttons";

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null
  );
  const [quantity, setQuantity] = useState(1)
  console.log(selectedOption);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Title */}
        <Text>{product.title}</Text>

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
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

        {/* Button */}
        <Buttons text="Add To Cart" containerStyles={{backgroundColor: "#e3c905"}} onPress={() => {console.warn("Add to cart")}} />
        <Buttons text="Buy now" onPress={() => {console.warn("Buy now")}} />
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
