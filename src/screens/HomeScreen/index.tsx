import { DataStore } from "@aws-amplify/datastore";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import ProductItem from "../../components/ProductItem";
import { Product } from "../../models";

const HomeScreen = ({ searchValue }: { searchValue: string }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    DataStore.query(Product).then(setProducts);
  }, []);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductItem item={item} />}
    />
  );
};

export default HomeScreen;
