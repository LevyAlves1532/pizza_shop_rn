// LIBs
import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

// COMPONENTs
import { Header } from "../components/Header";
import { FooterPrice } from "../components/Footer";

// CONTAINERs
import { CartAll } from "../containers/Cart/All";

// CORE
import { useStore } from "../core/store";

// THEMEs
import { BORDERRADIUS, COLORS, SPACINGS } from "../themes/theme";

export function CartScreen({ navigation }: any) {
  const tabBarHeight = useBottomTabBarHeight();

  const scrollView = useRef<any>(null);

  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);
  const decrementSizeQuantity = useStore((state: any) => state.decrementSizeQuantity);
  const incrementSizeQuantity = useStore((state: any) => state.incrementSizeQuantity);
  const calculateTotalPrice = useStore((state: any) => state.calculateTotalPrice);

  useEffect(() => {
    if (CartList.length === 0) {
      scrollView.current?.scrollTo({
        y: 0,
        animated: true,
      });
    }
  }, [CartList])

  return (
    <View style={styles.ScreenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewContainer}
        ref={scrollView}
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
            goToProductHandler={(id: number, type: string) => {
              navigation.push("Product", {
                id,
                type,
              });
            }}
            decrementSizeQuantityHandler={(id: number, type: string, size: string) => {
              decrementSizeQuantity(id, type, size);
              calculateTotalPrice();
            }}
            incrementSizeQuantityHandler={(id: number, type: string, size: string) => {
              incrementSizeQuantity(id, type, size);
              calculateTotalPrice();
            }}
          />
          { CartList.length > 0 &&
            <FooterPrice 
              title="Total Price"
              label="Checkout"
              price={{ 
                value: CartPrice, 
                quantity: 1 
              }}
              pressProductsHandler={() => {
                navigation.navigate("Payment");
              }}
            />
          }
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
