// LIBs
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// THEMEs
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZES, SPACINGS } from "../themes/theme";

interface IFooterPriceProps {
  title: string;
  price: any;
  label: string
  pressProductsHandler: any;
}

export function FooterPrice({ title, price, label, pressProductsHandler }: IFooterPriceProps) {
  return (
    <View style={styles.FooterPriceContainer}>
      <View style={styles.FooterPriceDetails}>
        <Text style={styles.FooterPriceTitle}>
          {title}
        </Text>
        <Text style={styles.FooterPriceCurrency}>
          {price.currency} <Text style={styles.FooterPrice}>{price.value.toFixed(2)}</Text>
        </Text>
      </View>

      <View style={styles.FooterPriceButtonArea}>
        <TouchableOpacity 
          onPress={pressProductsHandler}
          style={styles.FooterPriceButton}
        >
          <Text style={styles.FooterPriceButtonText}>{label}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FooterPriceContainer: {
    paddingHorizontal: SPACINGS.space_30,
    paddingVertical: SPACINGS.space_20,
    flexDirection: "row",
    gap: SPACINGS.space_10,
  },
  FooterPriceDetails: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  FooterPriceTitle: {
    fontFamily: FONTFAMILY.open_sans_semibold,
    fontSize: FONTSIZES.size_16,
    color: COLORS.primaryRedHex,
  },
  FooterPriceCurrency: {
    fontFamily: FONTFAMILY.open_sans_medium,
    fontSize: FONTSIZES.size_20,
    color: COLORS.primaryRedHex,
  },
  FooterPrice: {
    color: COLORS.primaryBlackHex,
  },
  FooterPriceButtonArea: {
    flex: 2,
  },
  FooterPriceButton: {
    height: SPACINGS.space_40 + 20,
    backgroundColor: COLORS.primaryRedHex,
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: "center",
    alignItems: "center",
  },
  FooterPriceButtonText: {
    fontFamily: FONTFAMILY.open_sans_semibold,
    fontSize: FONTSIZES.size_16,
    color: COLORS.primaryWhiteHex,
  },
});
