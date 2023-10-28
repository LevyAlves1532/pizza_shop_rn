// LIBs
import React from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";

// COMPONENTs
import { CardProduct } from "../../components/CardProduct";

// THEMEs
import { FONTFAMILY, FONTSIZES, SPACINGS } from "../../themes/theme";

interface IHomeDrinksProps {
  data: any[];
  goToProductScreenHandler: any;
}

export function HomeDrinks({ data, goToProductScreenHandler }: IHomeDrinksProps) {
  return (
    <View style={styles.DrinksContainer}>
      <View style={styles.DrinksTitleArea}>
        <Text style={styles.DrinksTitle}>
          Drinks
        </Text>
      </View>

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
        contentContainerStyle={styles.DrinksFlatList}
        keyExtractor={(drink: any) => drink.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  DrinksContainer: {
    paddingVertical: SPACINGS.space_12,
  },
  DrinksTitleArea: {
    paddingHorizontal: SPACINGS.space_30,
    marginBottom: SPACINGS.space_20,
  },
  DrinksTitle: {
    fontFamily: FONTFAMILY.open_sans_semibold,
    fontSize: FONTSIZES.size_18,
  },
  DrinksFlatList: {
    paddingHorizontal: SPACINGS.space_30,
    gap: SPACINGS.space_20,
  },
});
