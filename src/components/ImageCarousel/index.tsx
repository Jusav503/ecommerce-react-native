import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
} from "react-native";

const ImageCarousel = ({ images }: { images: [string] }) => {
  const windowWidth = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.images, { width: windowWidth-40 }]}
            source={{ uri: item }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 40}
        snapToAlignment={"end"}
        decelerationRate={"fast"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}, 
  images: {
      width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default ImageCarousel;
