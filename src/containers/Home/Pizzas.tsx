// LIBs
import React, { useRef, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";

// COMPONENTs
import { CardProduct } from "../../components/CardProduct";

// THEMEs
import { SPACINGS } from "../../themes/theme";

interface IHomePizzasProps {
  data: any[];
  goToProductScreenHandler: any;
}

export function HomePizzas({ data, goToProductScreenHandler }: IHomePizzasProps) {
  const flatListPizzas = useRef<any>();

  useEffect(() => {
    if (flatListPizzas.current) {      
      flatListPizzas.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
    }
  }, [data])

  return (
    <View style={styles.PizzasContainer}>
      <FlatList 
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => {
              goToProductScreenHandler(item.id, item.type);
            }}
          >
            <CardProduct 
              image={item.image}
              rating={item.rating}
              name={item.name}
              price={item.prices[0]}
            />
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.FlatListContainer}
        keyExtractor={(pizza) => pizza.id}
        ref={flatListPizzas}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  PizzasContainer: {
    paddingVertical: SPACINGS.space_10,
  },
  FlatListContainer: {
    paddingHorizontal: SPACINGS.space_30,
    gap: SPACINGS.space_20,
  },
});
