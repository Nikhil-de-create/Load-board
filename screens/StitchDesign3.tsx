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
import Depth1Frame011 from "../components/Depth1Frame011";

import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const StitchDesign3 = () => {
  return (
    <SafeAreaView style={[styles.stitchDesign, styles.stitchDesignLayout]}>
      <KeyboardAvoidingView
        style={[styles.keyboardavoidingview, styles.stitchDesignLayout]}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={[styles.scrollview, styles.scrollviewLayout]}
          contentContainerStyle={styles.stitchDesignScrollViewContent}
        >
          <View style={[styles.depth0Frame0, styles.frameFlexBox1]}>
            <Depth1Frame011 />
            <View style={styles.depth1Frame1}>
              <View style={styles.depth2Frame0}>
                <Pressable style={[styles.depth3Frame0, styles.frameFlexBox]}>
                  <View style={styles.frameFlexBox}>
                    <Text style={[styles.signUp, styles.frameFlexBox1]}>
                      Sign Up
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View style={[styles.depth2Frame1, styles.frameFlexBox1]} />
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
  stitchDesignLayout: {
    width: "100%",
    flex: 1,
  },
  scrollviewLayout: {
    maxWidth: "100%",
    width: "100%",
  },
  frameFlexBox1: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  signUp: {
    fontSize: FontSize.size_16,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.spaceGroteskBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  depth3Frame0: {
    borderRadius: Border.br_12,
    backgroundColor: Color.colorRoyalblue200,
    height: 48,
    justifyContent: "center",
    paddingHorizontal: Padding.p_20,
    paddingVertical: 0,
    minWidth: 84,
    maxWidth: 480,
    flexDirection: "row",
    flex: 1,
  },
  depth2Frame0: {
    paddingHorizontal: Padding.p_16,
    paddingVertical: Padding.p_12,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  depth2Frame1: {
    height: 320,
    maxWidth: "100%",
    width: "100%",
  },
  depth1Frame1: {
    alignSelf: "stretch",
  },
  depth0Frame0: {
    backgroundColor: Color.colorGray400,
    justifyContent: "space-between",
    gap: 0,
    minHeight: 844,
  },
  scrollview: {
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  keyboardavoidingview: {
    flex: 1,
  },
  stitchDesign: {
    flex: 1,
  },
});

export default StitchDesign3;
