// LIBs
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";

// COMPONENTs
import { CardHistoric } from "../../components/CardHistoric";

// THEMEs
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZES, SPACINGS } from "../../themes/theme";

interface IHistoricAllProps {
  data: any[];
  goHomeHandler: any;
}

export function HistoricAll({ data, goHomeHandler }: IHistoricAllProps) {
  return (
    <View 
      style={[
        styles.HistoricAllContainer,
        {
          gap: 
            data.length > 0
              ? SPACINGS.space_20
              : 0
        }
      ]}
    >
      { data.length === 0 ? (
          <>
            <Text style={styles.HistoricAllTitle}>No products in the historic!</Text>
            <LottieView 
              source={require("../../assets/lottie/pizza-found.json")}
              autoPlay
              loop
              style={styles.HistoricAllLottie}
            />
            <TouchableOpacity 
              onPress={goHomeHandler}
              style={styles.HistoricAllButton}
            >
              <Text style={styles.HistoricAllButtonText}>View products</Text>
            </TouchableOpacity>
          </>
        ) : (
          data.map((products: any, index: number) => (
            <CardHistoric 
              data={products}
              key={index.toString()}
            />
          ))
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  HistoricAllContainer: {
    padding: SPACINGS.space_30,
  },
  HistoricAllTitle: {
    textAlign: "center",
    marginBottom: SPACINGS.space_20,
    fontSize: FONTSIZES.size_16,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
  HistoricAllLottie: {
    marginTop: -SPACINGS.space_20,
    height: SPACINGS.space_40 * 5,
    alignSelf: "center",
    marginBottom: SPACINGS.space_20,
  },
  HistoricAllButton: {
    width: "100%",
    height: SPACINGS.space_30 * 2,
    backgroundColor: COLORS.primaryRedHex,
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: "center",
    alignItems: "center",
  },
  HistoricAllButtonText: {
    fontSize: FONTSIZES.size_16,
    fontFamily: FONTFAMILY.open_sans_medium,
    color: COLORS.primaryWhiteHex,
  },
});
