import * as React from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import {
  Padding,
  FontSize,
  Color,
  Border,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const StitchDesign = () => {
  return (
    <ScrollView
      style={styles.stitchDesign}
      contentContainerStyle={styles.stitchDesignScrollViewContent}
    >
      <View style={styles.depth0Frame0}>
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame0, styles.depth2FrameSpaceBlock]}>
            <Text style={styles.findLoadsDrive}>
              Find loads, drive, and get paid
            </Text>
          </View>
          <View style={[styles.depth2Frame1, styles.depth2FrameSpaceBlock]}>
            <Text style={[styles.connectWithShippers, styles.signUpTypo]}>
              Connect with shippers and get access to thousands of loads
            </Text>
          </View>
        </View>
        <View style={styles.depth1Frame0}>
          <View style={styles.depth2Frame01}>
            <View style={styles.depth3Frame0}>
              <Pressable
                style={[styles.depth4Frame0, styles.depth4FrameLayout]}
              >
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.signUp, styles.signUpTypo]}>
                    Sign Up
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={[styles.depth4Frame1, styles.depth4FrameLayout]}
              >
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.signUp, styles.signUpTypo]}>
                    Sign In
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
          <View style={styles.depth2Frame11} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  stitchDesignScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 890,
  },
  depth2FrameSpaceBlock: {
    paddingBottom: Padding.p_12,
    paddingHorizontal: Padding.p_16,
    alignItems: "center",
    alignSelf: "stretch",
  },
  signUpTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_16,
    textAlign: "center",
    color: Color.colorWhite,
    alignSelf: "stretch",
  },
  depth4FrameLayout: {
    minWidth: 84,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_20,
    height: 48,
    borderRadius: Border.br_12,
    maxWidth: 480,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
  findLoadsDrive: {
    fontSize: FontSize.size_32,
    lineHeight: 40,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  depth2Frame0: {
    paddingTop: Padding.p_24,
  },
  connectWithShippers: {
    fontFamily: FontFamily.spaceGroteskRegular,
  },
  depth2Frame1: {
    paddingTop: Padding.p_4,
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
  signUp: {
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    fontSize: FontSize.size_16,
    overflow: "hidden",
  },
  depth5Frame0: {
    alignItems: "center",
    overflow: "hidden",
  },
  depth4Frame0: {
    backgroundColor: Color.colorRoyalblue200,
  },
  depth4Frame1: {
    backgroundColor: Color.colorDarkslategray300,
  },
  depth3Frame0: {
    paddingVertical: Padding.p_12,
    gap: Gap.gap_12,
    maxWidth: 480,
    paddingHorizontal: Padding.p_16,
    flex: 1,
  },
  depth2Frame01: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  depth2Frame11: {
    height: 20,
    backgroundColor: Color.colorGray400,
    alignSelf: "stretch",
  },
  depth0Frame0: {
    justifyContent: "space-between",
    gap: 0,
    minHeight: 844,
    overflow: "hidden",
    backgroundColor: Color.colorGray400,
    alignSelf: "stretch",
  },
  stitchDesign: {
    backgroundColor: Color.colorWhite,
    maxWidth: "100%",
    flex: 1,
    width: "100%",
  },
});

export default StitchDesign;
