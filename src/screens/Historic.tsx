// LIBs
import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

// COMPONENTs
import { Header } from "../components/Header";

// CONTAINERs
import { HistoricAll } from "../containers/Historic/All";

// CORE
import { useStore } from "../core/store";

// THEMEs
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZES, SPACINGS } from "../themes/theme";

export function HistoricScreen({ navigation }: any) {
  const tabBarHeight = useBottomTabBarHeight();

  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
  const clearToOrderHistoryList = useStore((state: any) => state.clearToOrderHistoryList);

  return (
    <View style={styles.ScreenContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewContainer}
      >
        <Header 
          iconName="bell"
          title="Historic"
        />
        <View 
          style={[
            styles.ScrollViewContent,
            {
              paddingBottom: tabBarHeight + 20,
            }
          ]}
        >
          <HistoricAll 
            data={OrderHistoryList} 
            goHomeHandler={() => {
              navigation.navigate("Home");
            }}
          />
          { OrderHistoryList.length > 0 &&
            <View style={styles.ScrollViewButtonArea}>
              <TouchableOpacity 
                onPress={clearToOrderHistoryList}
                style={styles.ScrollViewButton}
              >
                <Text style={styles.ScrollViewText}>Clear Historic</Text>
              </TouchableOpacity>
            </View>
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
  ScrollViewButtonArea: {
    padding: SPACINGS.space_30,
    paddingTop: 0,
  },
  ScrollViewButton: {
    height: SPACINGS.space_30 * 2,
    backgroundColor: COLORS.primaryRedHex,
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: "center",
    alignItems: "center",
  },
  ScrollViewText: {
    fontSize: FONTSIZES.size_16,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
});
