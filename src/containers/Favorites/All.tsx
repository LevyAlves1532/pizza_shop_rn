// LIBs
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";

// COMPONENTs
import { CardFavorite } from "../../components/CardFavorite";

// THEMEs
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZES, SPACINGS } from "../../themes/theme";

interface IFavoritesAllProps {
  data: any[];
  goHomeHandler: any;
  goProductHandler: any;
  removeToFavoriteHandler: any;
}

export function FavoritesAll({ 
  data, 
  goHomeHandler, 
  goProductHandler,
  removeToFavoriteHandler,
}: IFavoritesAllProps) {
  return (
    <View
      style={[
        styles.FavoritesAllContainer,
        {
          gap: 
            data.length > 0
              ? SPACINGS.space_40
              : SPACINGS.space_20,
        }
      ]}
    >
      { data.length === 0 ? (
          <>
            <Text style={styles.FavoritesAllTitle}>No products in the favorites!</Text>
            <LottieView 
              source={require("../../assets/lottie/pizza-found.json")}
              autoPlay
              loop
              style={styles.FavoritesAllLottie}
            />
            <TouchableOpacity 
              onPress={goHomeHandler}
              style={styles.FavoritesAllButton}
            >
              <Text style={styles.FavoritesAllButtonText}>View products</Text>
            </TouchableOpacity>
          </>
        ) : (
          data.map((product: any, index: number) => (
            <CardFavorite 
              data={product}
              goProductHandler={() => {
                goProductHandler(product.id, product.type);
              }}
              removeToFavoriteHandler={() => {
                removeToFavoriteHandler(product);
              }}
              key={index.toString()}
            />
          ))
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  FavoritesAllContainer: {
    padding: SPACINGS.space_30,
  },
  FavoritesAllTitle: {
    textAlign: "center",
    marginBottom: SPACINGS.space_20,
    fontSize: FONTSIZES.size_16,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
  FavoritesAllLottie: {
    marginTop: -SPACINGS.space_20,
    height: SPACINGS.space_40 * 5,
    alignSelf: "center",
    marginBottom: SPACINGS.space_20,
  },
  FavoritesAllButton: {
    width: "100%",
    height: SPACINGS.space_30 * 2,
    backgroundColor: COLORS.primaryRedHex,
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: "center",
    alignItems: "center",
  },
  FavoritesAllButtonText: {
    fontSize: FONTSIZES.size_16,
    fontFamily: FONTFAMILY.open_sans_medium,
    color: COLORS.primaryWhiteHex,
  },
});
