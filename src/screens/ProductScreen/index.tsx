import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRoute, useNavigation } from "@react-navigation/native";
import { DataStore, Auth } from "aws-amplify";

import styles from "./styles";
import QuantitySelector from "../../components/QuantitySelector";
import Buttons from "../../components/Buttons";
import ImageCarousel from "../../components/ImageCarousel";
import { Product, CartProduct } from "../../models";

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (!route.params?.id) {
      return;
    }
    DataStore.query(Product, route.params.id).then(setProduct);
  }, [route.params?.id]);

  useEffect(() => {
    if (product?.options) {
      setSelectedOption(product.options[0]);
    }
  }, [product]);

  const onAddToCart = async () => {
    const userData = await Auth.currentAuthenticatedUser();

    if (!product || !userData) {
      return;
    }
    const newCartProduct = new CartProduct({
      userSub: userData.attributes.sub,
      quantity,
      option: selectedOption,
      productID: product.id,
    });
    
    await DataStore.save(newCartProduct);
    navigation.navigate('shoppingCart');
  };

  if (!product) {
    return <ActivityIndicator />;
  }
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
          <Text style={styles.price}>from € {product.price.toFixed(2)}</Text>
          <Text style={styles.oldPrice}>€ {product.oldPrice.toFixed(2)}</Text>
        </View>

        {/* Description */}
        <Text style={styles.description}>{product.description}</Text>

        {/* Quantity selector */}
        <View style={{ marginBottom: 40 }}>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </View>

        {/* Button */}
        <Buttons
          text="Add To Cart"
          containerStyles={{ backgroundColor: "#EE8C33" }}
          onPress={onAddToCart}
        />
        <Buttons
          text="Buy now"
          onPress={() => {
            console.warn("Buy now");
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
