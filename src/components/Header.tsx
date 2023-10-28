// LIBs
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

// THEMEs
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZES, SPACINGS } from "../themes/theme";

// ICONs
import { Feather } from "@expo/vector-icons";

interface IHeaderProps {
  iconName?: any;
  title?: string;
  shadowText?: boolean;
}

export function Header({ iconName, title, shadowText }: IHeaderProps) {
  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.HeaderIconArea}>
        <Feather 
          name="menu" 
          color={COLORS.primaryBlackHex} 
          size={FONTSIZES.size_14} 
        />
      </View>
      { title && 
        <View style={styles.HeaderTitleArea}>
          { iconName &&
            <Feather 
              name={iconName} 
              color={COLORS.primaryWhiteHex} 
              size={FONTSIZES.size_24}
            />
          }
          <Text 
            style={[
              styles.HeaderTitle,
              shadowText
                ? {
                    textShadowColor: "rgba(0, 0, 0, 0.5)",
                    textShadowOffset: {
                      width: -1,
                      height: -1,
                    },
                    textShadowRadius: SPACINGS.space_10,
                  }
                : {}
            ]}
          >
            {title}
          </Text>
        </View>
      }
      <View style={styles.HeaderProfileArea}>
        <Image 
          source={{ 
            uri: "https://media.licdn.com/dms/image/D4D03AQF8kxY_rBl9VQ/profile-displayphoto-shrink_200_200/0/1665876524542?e=1703721600&v=beta&t=W38S3uym17tMKGlIASrrSWDJY-nRMJYXMJBNtUBp1HQ" 
          }} 
          style={styles.HeaderProfile}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    paddingVertical: SPACINGS.space_20,
    paddingHorizontal: SPACINGS.space_30,
    flexDirection: "row",
    gap: SPACINGS.space_10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  HeaderIconArea: {
    padding: SPACINGS.space_4 * 2,
    backgroundColor: COLORS.primaryWhiteHex,
    borderRadius: BORDERRADIUS.radius_5,
    borderWidth: 2,
    borderColor: COLORS.secondaryWhiteHex,
  },
  HeaderTitleArea: {
    flexDirection: "row",
    gap: SPACINGS.space_10,
    alignItems: "center",
  },
  HeaderTitle: {
    fontFamily: FONTFAMILY.open_sans_semibold,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZES.size_18
  },
  HeaderProfileArea: {
    width: SPACINGS.space_20 * 2,
    height: SPACINGS.space_20 * 2,
  },
  HeaderProfile: {
    width: "100%",
    height: "100%",
    borderRadius: BORDERRADIUS.radius_25,
  },
});
