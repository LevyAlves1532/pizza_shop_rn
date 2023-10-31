// LIBs
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";

// COMPONENTs
import { CardCart } from "../../components/CardCart";

// THEMEs
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZES, SPACINGS } from "../../themes/theme";

interface ICartAllProps {
  data: any[];
  goHomeHandler: any;
}

export function CartAll({ data, goHomeHandler }: ICartAllProps) {
  return (
    <View
      style={[
        styles.CartAllContainer,
        {
          gap: 
            data.length > 0
              ? SPACINGS.space_40
              : 0,
        }
      ]}
    >
      { data.length === 0 ? (
          <>
            <Text style={styles.CartAllTitle}>No products in the cart!</Text>
            <LottieView 
              source={require("../../assets/lottie/pizza-found.json")}
              autoPlay
              loop
              style={styles.CartAllLottie}
            />
            <TouchableOpacity 
              onPress={goHomeHandler}
              style={styles.CartAllButton}
            >
              <Text style={styles.CartAllButtonText}>View products</Text>
            </TouchableOpacity>
          </>
        ) : (
          data.map((el: any, key: number) => (
            <CardCart 
              data={el}
              key={key.toString()}
            />
          ))
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  CartAllContainer: {
    padding: SPACINGS.space_30,
  },
  CartAllTitle: {
    textAlign: "center",
    marginBottom: SPACINGS.space_20,
    fontSize: FONTSIZES.size_16,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
  CartAllLottie: {
    marginTop: -SPACINGS.space_20,
    height: SPACINGS.space_40 * 5,
    alignSelf: "center",
    marginBottom: SPACINGS.space_20,
  },
  CartAllButton: {
    width: "100%",
    height: SPACINGS.space_30 * 2,
    backgroundColor: COLORS.primaryRedHex,
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: "center",
    alignItems: "center",
  },
  CartAllButtonText: {
    fontSize: FONTSIZES.size_16,
    fontFamily: FONTFAMILY.open_sans_medium,
    color: COLORS.primaryWhiteHex,
  },
});
