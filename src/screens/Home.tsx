// LIBs
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

// COMPONENTs
import { Header } from "../components/Header";

// CONTAINERs
import { HomeCategories } from "../containers/Home/Categories";
import { HomePizzas } from "../containers/Home/Pizzas";
import { HomeDrinks } from "../containers/Home/Drinks";

// CORE
import { useStore } from "../core/store";

// UTILs
import { getAllCategories } from "../core/utils/Helpers";

// FORMs
import { FormHomeSearch } from "../forms/Home/Search";

// THEMEs
import { BORDERRADIUS, COLORS, SPACINGS } from "../themes/theme";

export function HomeScreen({ navigation }: any) {
  const tabBarHeight = useBottomTabBarHeight();

  const PizzasList = useStore((state: any) => state.PizzasList);
  const DrinksList = useStore((state: any) => state.DrinksList);

  const [ search, setSearch ] = useState<string>("");
  const [ selected, setSelected ] = useState<string>("All");
  const [ sortedPizzas, setSortedPizzas ] = useState<any[]>([]);

  const categories = getAllCategories(PizzasList);

  const searchHandler = (text: string) => {
    setSearch(text);
    let pizzas = [ ...PizzasList ];
    pizzas = pizzas.filter((pizza: any) => 
      pizza.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
    setSelected("All");
    setSortedPizzas(pizzas);
  }

  const selectHandler = (text: string) => {
    setSelected(text);
    if (text !== "All") {
      setSortedPizzas(
        [ ...PizzasList ].filter(
          (pizza: any) => pizza.category === text
        )
      );
    } else {
      setSortedPizzas([]);
    }
  }

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar style="light" />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewContainer}
      >
        <Header 
          iconName="map-pin"
          title="Brusque - SC" 
        />
        <FormHomeSearch 
          search={search}
          searchHandler={searchHandler}
          clearSearchHandler={() => {
            setSearch("");
            if (selected === "All") setSortedPizzas([]);
          }}
        />
        <View 
          style={[
            styles.ScrollViewContent,
            {
              paddingBottom: tabBarHeight + 20,
            }
          ]}
        >
          <HomeCategories 
            data={categories} 
            selected={selected}
            selectHandler={selectHandler}
          />
          <HomePizzas 
            data={sortedPizzas.length === 0 ? PizzasList : sortedPizzas}
            goToProductScreenHandler={(id: string, type: string) => {
              navigation.push("Product", {
                id,
                type,
              });
            }}
          />
          <HomeDrinks 
            data={DrinksList}
            goToProductScreenHandler={(id: string, type: string) => {
              navigation.push("Product", {
                id,
                type,
              });
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
  },
  ScrollViewContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.primaryRedHex,
    paddingTop: SPACINGS.space_30 * 2,
  },
  ScrollViewContent: {
    flexGrow: 1,
    backgroundColor: COLORS.primaryWhiteHex,
    borderTopLeftRadius: BORDERRADIUS.radius_25,
    borderTopRightRadius: BORDERRADIUS.radius_25,
  }
});
