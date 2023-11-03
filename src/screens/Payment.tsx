// LIBs
import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

// COMPONENTs
import { Header } from "../components/Header";
import { FooterPrice } from "../components/Footer";
import { Animation } from "../components/Animation";

// CONTAINERs
import { PaymentMethods } from "../containers/Payment/Methods";

// DATA
import { Methods } from "../core/data/methods";

// CORE
import { useStore } from "../core/store";

// FORMs
import { FormPaymentCard } from "../forms/Payment/Card";

// THEMEs
import { BORDERRADIUS, COLORS, SPACINGS } from "../themes/theme";

export function PaymentScreen({ navigation }: any) {
  const CartPrice = useStore((state: any) => state.CartPrice);
  const addToOrderHistoryList = useStore((state: any) => state.addToOrderHistoryList);

  const [ selectedMethod, setSelectedMethod ] = useState<number>(1);
  const [ animation, setAnimation ] = useState<boolean>(false);

  return (
    <View style={styles.ScreenContainer}>
      { animation &&
        <Animation 
          src={require("../assets/lottie/pizza-loader.json")}
        />
      }
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewContainer}
      >
        <Header 
          title="Checkout"
        />
        <View style={styles.ScrollViewContent}>
          <FormPaymentCard 
            selectMethodHandler={() => {
              setSelectedMethod(1);
            }}
            selected={selectedMethod === 1} 
          />
          <PaymentMethods 
            data={Methods}
            selected={selectedMethod}
            selectMethodHandler={(id: number) => {
              setSelectedMethod(id);
            }}
          />
          <FooterPrice 
            title="Price"
            price={{
              currency: "$",
              value: CartPrice,
            }}
            label="Pay from Credit Card"
            pressProductsHandler={() => {
              setAnimation(true);
              setTimeout(() => {
                addToOrderHistoryList();
                navigation.navigate("Historic");
              }, 3000)
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
