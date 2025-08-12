import * as React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Depth3frame0 from "../assets/depth-3-frame-0.svg";

import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const Depth1Frame011111 = () => {
  return (
    <View style={styles.depth1Frame0}>
      <View style={[styles.depth2Frame0, styles.depth2FrameSpaceBlock]}>
        <Depth3frame0 style={styles.depth3Frame0} width={48} height={48} />
        <View style={styles.depth3Frame1}>
          <Text style={styles.placeBid}>Place Bid</Text>
        </View>
      </View>
      <View style={[styles.depth2Frame1, styles.depth2FrameSpaceBlock]}>
        <TextInput style={styles.depth3Frame01} />
      </View>
      <View style={styles.depth2Frame2} />
    </View>
  );
};

const styles = StyleSheet.create({
  depth2FrameSpaceBlock: {
    paddingHorizontal: Padding.p_16,
    flexDirection: "row",
  },
  depth3Frame0: {
    width: 48,
    height: 48,
  },
  placeBid: {
    fontSize: FontSize.size_18,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.spaceGroteskBold,
    color: Color.colorWhite,
    textAlign: "center",
    alignSelf: "stretch",
  },
  depth3Frame1: {
    height: 23,
    paddingRight: Padding.p_48,
    flex: 1,
    alignItems: "center",
  },
  depth2Frame0: {
    backgroundColor: Color.colorGray300,
    justifyContent: "space-between",
    paddingTop: Padding.p_16,
    paddingBottom: Padding.p_8,
    gap: 0,
    alignItems: "center",
    alignSelf: "stretch",
  },
  depth3Frame01: {
    minWidth: 160,
    width: "100%",
    flex: 1,
  },
  depth2Frame1: {
    alignItems: "flex-end",
    flexWrap: "wrap",
    alignContent: "flex-end",
    paddingVertical: Padding.p_12,
    maxWidth: 480,
    width: "100%",
  },
  depth2Frame2: {
    maxWidth: "100%",
    overflow: "hidden",
    height: 320,
    width: "100%",
    alignSelf: "stretch",
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
});

export default Depth1Frame011111;
