// LIBs
import React from "react";
import { StyleSheet, View, Text, ImageBackground, ImageProps, Dimensions } from "react-native";

// COMPONENTs
import { Header } from "../../components/Header";

// THEMEs
import { BORDERRADIUS, SPACINGS } from "../../themes/theme";

interface IProductHeaderBG {
  image: ImageProps;
  name: string;
  goBackHandler: any;
  buttonFavorite: any;
}

export function ProductHeaderBG({ 
  image, 
  name, 
  goBackHandler, 
  buttonFavorite 
}: IProductHeaderBG) {
  return (
    <View style={styles.HeaderBackgroundArea}>
      <ImageBackground 
        source={image}
        style={styles.HeaderBackground}
      >
        <Header 
          title={name}
          shadowText
          goBackHandler={goBackHandler}
          buttonFavorite={buttonFavorite}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderBackgroundArea: {
    // borderBottomLeftRadius: BORDERRADIUS.radius_25 * 10,
    // borderBottomRightRadius: BORDERRADIUS.radius_25 * 10,
    overflow: "hidden",
  },
  HeaderBackground: {
    width: "100%",
    height: (Dimensions.get("window").height / 4) * 2,
    paddingTop: SPACINGS.space_30 * 2,
  },
});
