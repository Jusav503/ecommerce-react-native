import React, { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
} from "react-native";

const ImageCarousel = ({ images }: { images: string[] }) => {
  const windowWidth = useWindowDimensions().width;
  const [activeIndex, setActiveIndex] = useState(0)

  // To update images dots
  const onFlatListUpdate = useCallback(({viewableItems}) => {
    if(viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, [])
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.images, { width: windowWidth - 40 }]}
            source={{ uri: item }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
        onViewableItemsChanged={onFlatListUpdate}
        />
        <View style={styles.dots}>
          {images.map((image, index) => (
            <View
              style={[
                styles.dot,
                { backgroundColor: index == activeIndex ? '#c9c9c9' : '#ededed' }
              ]}
            />
          ))}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}, 
  images: {
    margin: 10,
    height: 250,
    resizeMode: "contain",
  },
  dots:{
    flexDirection: "row",
    justifyContent: "center"
  },  
  dot:{
    width: 10,
    height: 10,
    margin: 5,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: "#ededed",
    borderColor:"#c9c9c9",
  },
});

export default ImageCarousel;
