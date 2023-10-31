// LIBs
import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

// COMPONENTs
import { Header } from "../components/Header";

// CONTAINERs
import { CartAll } from "../containers/Cart/All";

// CORE
import { useStore } from "../core/store";

// THEMEs
import { BORDERRADIUS, COLORS, SPACINGS } from "../themes/theme";

export function CartScreen({ navigation }: any) {
  const tabBarHeight = useBottomTabBarHeight();

  const CartList = useStore((state: any) => state.CartList);

  console.log("Cart =", CartList.length);

  return (
    <View style={styles.ScreenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewContainer}
      >
        <Header 
          iconName="shopping-cart"
          title="Cart"
        />
        <View 
          style={[
            styles.ScrollViewContent,
            {
              paddingBottom: tabBarHeight + 20,
            }
          ]}
        >
          <CartAll 
            data={CartList} 
            goHomeHandler={() => {
              navigation.navigate("Home");
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
