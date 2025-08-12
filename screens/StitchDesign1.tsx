import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Depth1Frame01111 from "../components/Depth1Frame01111";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const StitchDesign1 = () => {
  return (
    <SafeAreaView style={styles.scrollviewFlexBox}>
      <KeyboardAvoidingView
        style={styles.scrollviewFlexBox}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={[styles.scrollview, styles.scrollviewFlexBox]}
          contentContainerStyle={styles.stitchDesignScrollViewContent}
        >
          <View style={[styles.depth0Frame0, styles.frameBg]}>
            <Depth1Frame01111 />
            <View style={styles.depth1Frame1}>
              <View style={styles.depth2Frame0}>
                <Text style={styles.byContinuingYou}>
                  By continuing, you agree to our Terms of Service and Privacy
                  Policy.
                </Text>
              </View>
              <View style={[styles.depth2Frame1, styles.frameBg]} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  stitchDesignScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 890,
  },
  scrollviewFlexBox: {
    flex: 1,
    width: "100%",
  },
  frameBg: {
    backgroundColor: Color.colorGray400,
    alignSelf: "stretch",
  },
  byContinuingYou: {
    fontSize: FontSize.size_14,
    lineHeight: 21,
    fontFamily: FontFamily.spaceGroteskRegular,
    color: Color.colorLightsteelblue,
    textAlign: "center",
    alignSelf: "stretch",
  },
  depth2Frame0: {
    alignItems: "center",
    paddingHorizontal: Padding.p_16,
    paddingTop: Padding.p_4,
    paddingBottom: Padding.p_12,
    alignSelf: "stretch",
  },
  depth2Frame1: {
    height: 20,
  },
  depth1Frame1: {
    alignSelf: "stretch",
  },
  depth0Frame0: {
    overflow: "hidden",
    justifyContent: "space-between",
    gap: 0,
    minHeight: 844,
  },
  scrollview: {
    backgroundColor: Color.colorWhite,
    maxWidth: "100%",
  },
});

export default StitchDesign1;
