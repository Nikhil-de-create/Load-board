import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Depth1Frame0 = () => {
  return (
    <View style={styles.depth1Frame0}>
      <View style={styles.depth1Frame0}>
        <Image
          style={styles.depth3Frame0}
          resizeMode="cover"
          source={require("../assets/depth-3-frame-01.png")}
        />
      </View>
      <View style={[styles.depth2Frame1, styles.depth2FrameSpaceBlock]}>
        <Text style={styles.findYourNext}>Find your next load</Text>
      </View>
      <View style={[styles.depth2Frame2, styles.depth2FrameSpaceBlock]}>
        <Text style={[styles.browseBidAnd, styles.getStartedTypo]}>
          Browse, bid, and book loads with ease
        </Text>
      </View>
      <View style={[styles.depth2Frame3, styles.frameFlexBox]}>
        <Pressable style={[styles.depth3Frame01, styles.frameFlexBox]}>
          <View style={styles.frameFlexBox1}>
            <Text style={[styles.getStarted, styles.getStartedTypo]}>
              Get Started
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth2FrameSpaceBlock: {
    paddingBottom: Padding.p_12,
    paddingHorizontal: Padding.p_16,
    alignItems: "center",
    alignSelf: "stretch",
  },
  getStartedTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_16,
    textAlign: "center",
    color: Color.colorWhite,
    alignSelf: "stretch",
  },
  frameFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  depth3Frame0: {
    flex: 1,
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
  findYourNext: {
    fontSize: FontSize.size_32,
    lineHeight: 40,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  depth2Frame1: {
    paddingTop: Padding.p_24,
  },
  browseBidAnd: {
    fontFamily: FontFamily.spaceGroteskRegular,
  },
  depth2Frame2: {
    paddingTop: Padding.p_4,
  },
  getStarted: {
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    fontSize: FontSize.size_16,
    overflow: "hidden",
  },
  frameFlexBox1: {
    alignItems: "center",
    overflow: "hidden",
  },
  depth3Frame01: {
    borderRadius: Border.br_8,
    backgroundColor: Color.colorRoyalblue100,
    height: 48,
    paddingHorizontal: Padding.p_20,
    paddingVertical: 0,
    minWidth: 84,
    maxWidth: 480,
    alignItems: "center",
    overflow: "hidden",
  },
  depth2Frame3: {
    paddingVertical: Padding.p_12,
    paddingHorizontal: Padding.p_16,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
});

export default Depth1Frame0;
