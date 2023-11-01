// LIBs
import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

// COMPONENTs
import { Header } from "../components/Header";

// CONTAINERs
import { FavoritesAll } from "../containers/Favorites/All";

// CORE
import { useStore } from "../core/store";

// THEMEs
import { BORDERRADIUS, COLORS, SPACINGS } from "../themes/theme";

interface IFavoritesScreenProps {

}

export function FavoritesScreen({ navigation }: any) {
  const tabBarHeight = useBottomTabBarHeight();

  const FavoriteList = useStore((state: any) => state.FavoriteList);
  const toggleToFavorites = useStore((state: any) => state.toggleToFavorites);

  return (
    <View style={styles.ScreenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewContainer}
      >
        <Header 
          iconName="heart"
          title="Favorites"
        />
        <View 
          style={[
            styles.ScrollViewContent,
            {
              paddingBottom: tabBarHeight + 20,
            }
          ]}
        >
          <FavoritesAll 
            data={FavoriteList} 
            goHomeHandler={() => {
              navigation.navigate("Home");
            }}
            goProductHandler={(id: number, type: string) => {
              navigation.navigate("Product", {
                id,
                type,
              });
            }}
            removeToFavoriteHandler={(product: any) => {
              toggleToFavorites(product);
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
  },
});
