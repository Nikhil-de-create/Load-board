import * as React from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import Depth3frame0 from "../assets/depth-3-frame-0.svg";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";

const Depth1Frame01111 = () => {
  return (
    <View style={styles.depth1Frame0}>
      <View style={styles.depth2Frame0}>
        <Depth3frame0 style={styles.depth3Frame0} width={48} height={48} />
        <View style={styles.depth3Frame1}>
          <Text style={[styles.signIn, styles.signTypo]}>Sign In</Text>
        </View>
      </View>
      <View style={[styles.depth2Frame1, styles.frameLayout]}>
        <TextInput
          style={styles.depth3Frame01}
          placeholder="Enter  your phone number"
          placeholderTextColor="#9ca6ba"
        />
      </View>
      <View style={[styles.depth2Frame2, styles.depth2FrameSpaceBlock]}>
        <Pressable style={[styles.depth3Frame02, styles.frameLayout]}>
          <View style={styles.depth4Frame0}>
            <Text style={[styles.signIn1, styles.signTypo]}>Sign In</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  frameLayout: {
    maxWidth: 480,
    flexDirection: "row",
  },
  depth2FrameSpaceBlock: {
    paddingVertical: Padding.p_12,
    paddingHorizontal: Padding.p_16,
  },
  depth3Frame0: {
    width: 48,
    height: 48,
  },
  signIn: {
    fontSize: FontSize.size_18,
    lineHeight: 23,
  },
  depth3Frame1: {
    height: 23,
    paddingRight: Padding.p_48,
    flex: 1,
    alignItems: "center",
  },
  depth2Frame0: {
    backgroundColor: Color.colorGray400,
    justifyContent: "space-between",
    paddingTop: Padding.p_16,
    paddingBottom: Padding.p_8,
    gap: 0,
    paddingHorizontal: Padding.p_16,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  depth3Frame01: {
    fontFamily: FontFamily.spaceGroteskRegular,
    minWidth: 160,
    fontSize: FontSize.size_16,
    width: "100%",
    flex: 1,
  },
  depth2Frame1: {
    alignItems: "flex-end",
    flexWrap: "wrap",
    alignContent: "flex-end",
    paddingVertical: Padding.p_12,
    paddingHorizontal: Padding.p_16,
    width: "100%",
  },
  signIn1: {
    lineHeight: 24,
    overflow: "hidden",
    fontSize: FontSize.size_16,
  },
  depth4Frame0: {
    overflow: "hidden",
    alignItems: "center",
  },
  depth3Frame02: {
    borderRadius: Border.br_12,
    backgroundColor: Color.colorRoyalblue200,
    justifyContent: "center",
    paddingHorizontal: Padding.p_20,
    paddingVertical: 0,
    minWidth: 84,
    overflow: "hidden",
    flex: 1,
    height: 48,
    alignItems: "center",
  },
  depth2Frame2: {
    flexDirection: "row",
    paddingVertical: Padding.p_12,
    alignSelf: "stretch",
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
});

export default Depth1Frame01111;
