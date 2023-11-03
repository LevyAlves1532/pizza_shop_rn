// LIBs
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";

// THEMEs
import { COLORS } from "../themes/theme";

export interface IAnimationProps {
  src: string;
}

export function Animation({ src }: IAnimationProps) {
  return (
    <View style={styles.AnimationContainer}>
      <LottieView 
        source={src}
        duration={3000}
        autoPlay
      />
    </View>
  );
}

const styles = StyleSheet.create({
  AnimationContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.primaryBlackRGBA,
    zIndex: 9999,
    justifyContent: "center",
    alignItems: "center",
  }
});
