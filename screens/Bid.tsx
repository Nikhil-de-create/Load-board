import * as React from "react";
import {
  ScrollView,
  Pressable,
  Text,
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Depth1Frame011111 from "../components/Depth1Frame011111";
import {
  Padding,
  Border,
  FontSize,
  FontFamily,
  Color,
  Gap,
} from "../GlobalStyles";

const Bid = () => {
  return (
    <SafeAreaView style={styles.bidFlexBox}>
      <KeyboardAvoidingView
        style={styles.bidFlexBox}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={[styles.scrollview, styles.bidFlexBox]}
          contentContainerStyle={styles.bidScrollViewContent}
        >
          <View style={[styles.depth0Frame0, styles.placeBidFlexBox]}>
            <Depth1Frame011111 />
            <View style={styles.depth1Frame1}>
              <View style={styles.depth2Frame0}>
                <View style={styles.depth3Frame0}>
                  <Pressable
                    style={[styles.depth4Frame0, styles.depth4FrameLayout]}
                  >
                    <View style={styles.depth5Frame0}>
                      <Text style={[styles.placeBid, styles.placeBidFlexBox]}>
                        Place Bid
                      </Text>
                    </View>
                  </Pressable>
                  <Pressable
                    style={[styles.depth4Frame1, styles.depth4FrameLayout]}
                  >
                    <View style={styles.depth5Frame0}>
                      <Text style={[styles.placeBid, styles.placeBidFlexBox]}>
                        Cancel
                      </Text>
                    </View>
                  </Pressable>
                </View>
              </View>
              <View style={styles.depth2Frame1} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bidScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 890,
  },
  bidFlexBox: {
    flex: 1,
    width: "100%",
  },
  placeBidFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  depth4FrameLayout: {
    minWidth: 84,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_20,
    height: 48,
    borderRadius: Border.br_8,
    alignItems: "center",
    maxWidth: 480,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    width: "100%",
  },
  placeBid: {
    fontSize: FontSize.size_16,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.spaceGroteskBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  depth5Frame0: {
    alignItems: "center",
    overflow: "hidden",
  },
  depth4Frame0: {
    backgroundColor: Color.colorRoyalblue100,
  },
  depth4Frame1: {
    backgroundColor: Color.colorDarkslategray300,
  },
  depth3Frame0: {
    paddingHorizontal: Padding.p_16,
    paddingVertical: Padding.p_12,
    gap: Gap.gap_12,
    maxWidth: 480,
    flex: 1,
  },
  depth2Frame0: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  depth2Frame1: {
    height: 20,
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  depth1Frame1: {
    alignSelf: "stretch",
  },
  depth0Frame0: {
    justifyContent: "space-between",
    gap: 0,
    minHeight: 844,
    backgroundColor: Color.colorGray300,
  },
  scrollview: {
    backgroundColor: Color.colorWhite,
    maxWidth: "100%",
  },
});

export default Bid;
