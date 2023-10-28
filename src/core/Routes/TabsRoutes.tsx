// LIBs
import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// SCREENs
import { HomeScreen } from "../../screens/Home";
import { CartScreen } from "../../screens/Cart";
import { FavoritesScreen } from "../../screens/Favorites";
import { HistoricScreen } from "../../screens/Historic";

// THEMEs
import { COLORS, FONTSIZES, SPACINGS } from "../../themes/theme";

// ICONs
import { Feather } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabsRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.TabBar,
      }}
    >
      <Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather 
              name="home" 
              color={
                focused 
                  ? COLORS.primaryWhiteHex 
                  : COLORS.secondaryWhiteHex
              } 
              size={FONTSIZES.size_24} 
            />
          ),
        }}
      />
      <Screen 
        name="Cart" 
        component={CartScreen} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather 
              name="shopping-cart" 
              color={
                focused 
                  ? COLORS.primaryWhiteHex 
                  : COLORS.secondaryWhiteHex
              } 
              size={FONTSIZES.size_24} 
            />
          ),
        }}
      />
      <Screen 
        name="Favorites" 
        component={FavoritesScreen} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather 
              name="heart" 
              color={
                focused 
                  ? COLORS.primaryWhiteHex 
                  : COLORS.secondaryWhiteHex
              } 
              size={FONTSIZES.size_24} 
            />
          ),
        }}
      />
      <Screen 
        name="Historic" 
        component={HistoricScreen} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather 
              name="bell" 
              color={
                focused 
                  ? COLORS.primaryWhiteHex 
                  : COLORS.secondaryWhiteHex
              } 
              size={FONTSIZES.size_24} 
            />
          ),
        }}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  TabBar: {
    height: SPACINGS.space_10 * 7,
    width: Dimensions.get("window").width - 40,
    borderRadius: 10,
    backgroundColor: COLORS.primaryRedHex,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent",
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 20,
  },
});
