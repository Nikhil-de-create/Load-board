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
import Depth1Frame0111111 from "../components/Depth1Frame0111111";
import {
  Border,
  Padding,
  FontSize,
  FontFamily,
  Color,
  Gap,
} from "../GlobalStyles";

const LiveTracking = () => {
  return (
    <SafeAreaView style={styles.scrollviewFlexBox}>
      <KeyboardAvoidingView
        style={styles.scrollviewFlexBox}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={[styles.scrollview, styles.scrollviewFlexBox]}
          contentContainerStyle={styles.liveTrackingScrollViewContent}
        >
          <View style={styles.depth0Frame0}>
            <Depth1Frame0111111 />
            <View style={styles.depth1Frame1}>
              <View style={styles.depth2Frame0}>
                <View style={styles.depth3Frame0}>
                  <Pressable
                    style={[styles.depth4Frame0, styles.depth4FrameLayout]}
                  >
                    <View style={styles.depth5Frame0}>
                      <Text style={styles.callShipper}>Call Shipper</Text>
                    </View>
                  </Pressable>
                  <Pressable
                    style={[styles.depth4Frame1, styles.depth4FrameLayout]}
                  >
                    <View style={styles.depth5Frame0}>
                      <Text style={styles.callShipper}>Message</Text>
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
  liveTrackingScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 890,
  },
  scrollviewFlexBox: {
    flex: 1,
    width: "100%",
  },
  depth4FrameLayout: {
    maxWidth: 480,
    minWidth: 84,
    paddingVertical: 0,
    justifyContent: "center",
    height: 40,
    borderRadius: Border.br_8,
    alignItems: "center",
    paddingHorizontal: Padding.p_16,
    flexDirection: "row",
    overflow: "hidden",
  },
  callShipper: {
    fontSize: FontSize.size_14,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: FontFamily.spaceGroteskBold,
    color: Color.colorWhite,
    textAlign: "center",
    overflow: "hidden",
    alignSelf: "stretch",
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
    flexWrap: "wrap",
    alignContent: "flex-start",
    paddingVertical: Padding.p_12,
    rowGap: Gap.gap_12,
    columnGap: 0,
    paddingHorizontal: Padding.p_16,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  depth2Frame0: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    gap: 0,
    minHeight: 844,
    justifyContent: "space-between",
    overflow: "hidden",
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  scrollview: {
    backgroundColor: Color.colorWhite,
    maxWidth: "100%",
  },
});

export default LiveTracking;
