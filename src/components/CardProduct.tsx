// LIBs
import React from "react";
import { StyleSheet, View, Text, ImageBackground, ImageProps } from "react-native";

// THEMEs
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZES, SPACINGS } from "../themes/theme";

// ICONs
import { Feather } from "@expo/vector-icons";

export interface ICardProductProps {
  image: ImageProps;
  rating: number;
  name: string;
  price: any;
}

export function CardProduct({ image, rating, name, price }: ICardProductProps) {
  return  (
    <View style={styles.CardProductContainer}>
      <View style={styles.CardProductImageBGArea}>
        <ImageBackground 
          source={image}
          style={styles.CardProductImageBG}
        >
          <View style={styles.CardProductRatingArea}>
            <Feather 
              name="star" 
              color={COLORS.primaryYellowHex}
              size={FONTSIZES.size_10}
            />
            <Text style={styles.CardProductRating}>
              {rating.toFixed(1).toString()}
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.CardProductDetailsArea}>
        <Text style={styles.CardProductTitle}>{name}</Text>
        <Text style={styles.CardProductSubTitle}>
          {price.currency}
          <Text style={styles.CardProductPrice}>
            {` ${price.value}`}
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CardProductContainer: {
    width: SPACINGS.space_40 * 4,
    // backgroundColor: COLORS.primaryRedHex,
  },
  CardProductImageBGArea: {
    width: "100%",
    height: SPACINGS.space_40 * 3,
    borderRadius: BORDERRADIUS.radius_10,
    overflow: "hidden"
  },
  CardProductImageBG: {
    width: "100%",
    height: "100%",
  },
  CardProductRatingArea: {
    flexDirection: "row",
    gap: 5,
    alignSelf: "flex-end",
    alignItems: "center",
    paddingVertical: SPACINGS.space_2,
    paddingHorizontal: SPACINGS.space_18,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderBottomLeftRadius: BORDERRADIUS.radius_25,
  },
  CardProductRating: {
    fontFamily: FONTFAMILY.open_sans_light,
    fontSize: FONTSIZES.size_10,
    color: COLORS.primaryWhiteHex,
  },
  CardProductDetailsArea: {
    padding: SPACINGS.space_10,
    alignItems: "center",
    gap: SPACINGS.space_10,
  },
  CardProductTitle: {
    fontFamily: FONTFAMILY.open_sans_medium,
    fontSize: FONTSIZES.size_16,
    textAlign: "center",
  },
  CardProductSubTitle: {
    fontFamily: FONTFAMILY.open_sans_medium,
    color: COLORS.primaryRedHex,
  },
  CardProductPrice: {
    color: COLORS.primaryBlackHex,
  }
});
