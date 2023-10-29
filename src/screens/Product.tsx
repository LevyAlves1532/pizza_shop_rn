// LIBs
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";

// COMPOENENTs
import { FooterPrice } from "../components/Footer";

// CONTAINERs
import { ProductHeaderBG } from "../containers/Product/HeaderBG";
import { ProductInfo } from "../containers/Product/Info";

// CORE
import { useStore } from "../core/store";

// FORMs
import { FormProductAdd } from "../forms/Product/Add";

// THEMEs
import { COLORS } from "../themes/theme";

export function ProductScreen({ navigation, route }: any) {
  const ProductOfId = useStore(
    (state: any) => route.params.type === "Pizza"
      ? state.PizzasList
      : state.DrinksList
  ).find((product: any) => product.id === route.params.id);
  const addToCart = useStore((state: any) => state.addToCart);

  const [ price, setPrice ] = useState<any>(ProductOfId.prices[0]);
  const [ count, setCount ] = useState<number>(1);
  const [ isMore, setIsMore ] = useState<boolean>(false);

  return (
    <View style={styles.ProductContainer}>
      <StatusBar style="dark" />
      <ScrollView style={styles.ScrollViewProduct}>
        <ProductHeaderBG 
          image={ProductOfId.image}
          name={ProductOfId.name}
        />
        <FormProductAdd 
          type={route.params.type}
          prices={ProductOfId.prices} 
          price={price}
          count={count}
          priceSelectHandler={(price: any) => {
            setPrice({ ...price });
          }}
          countMinusHandler={() => {
            setCount(count => count > 1 ? count - 1 : 1);
          }}
          countPlusHandler={() => {
            setCount(count => count + 1);
          }}
        />
        <ProductInfo 
          description={ProductOfId.description}
          rating={ProductOfId.rating}
          ratings_count={ProductOfId.ratings_count}
          isMore={isMore}
          toggleIsMoreHandler={() => {
            setIsMore(!isMore);
          }}
        />
        <FooterPrice 
          title="Price"
          price={{ 
            ...price, 
            value: price.value * count 
          }}
          label="Add To Cart"
          pressProductsHandler={() => {
            addToCart(ProductOfId, price, count);
            navigation.navigate("Cart");
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ProductContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryWhiteHex,
  },
  ScrollViewProduct: {
    flexGrow: 1,
  },
});
