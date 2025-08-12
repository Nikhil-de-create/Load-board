import * as React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import Depth5frame1 from "../assets/depth-5-frame-1.svg";
import Component1 from "../assets/";
import { Border, Color, Padding, FontFamily, FontSize } from "../GlobalStyles";

const Depth1Frame111 = () => {
  return (
    <View style={styles.depth1Frame1}>
      <View style={[styles.depth2Frame0, styles.frameFlexBox]}>
        <View style={styles.depth3Frame0}>
          <View style={styles.depth4Frame0}>
            <TextInput
              style={[styles.depth5Frame0, styles.frameLayout]}
              placeholder="Type  a message"
              placeholderTextColor="#9ca8ba"
            />
            <Depth5frame1 style={styles.depth5Frame1} width={40} />
          </View>
        </View>
      </View>
      <Component1 style={[styles.depth2Frame1, styles.frameLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout: {
    width: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  depth5Frame0: {
    borderTopLeftRadius: Border.br_8,
    borderBottomLeftRadius: Border.br_8,
    backgroundColor: Color.colorDarkslategray300,
    paddingLeft: Padding.p_16,
    paddingTop: Padding.p_8,
    paddingRight: Padding.p_8,
    paddingBottom: Padding.p_8,
    fontFamily: FontFamily.spaceGroteskRegular,
    fontSize: FontSize.size_16,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  depth5Frame1: {
    width: 40,
    borderTopRightRadius: Border.br_8,
    borderBottomRightRadius: Border.br_8,
    maxHeight: "100%",
    alignSelf: "stretch",
  },
  depth4Frame0: {
    borderRadius: Border.br_8,
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  depth3Frame0: {
    height: 48,
    minWidth: 160,
    flex: 1,
  },
  depth2Frame0: {
    paddingHorizontal: Padding.p_16,
    paddingVertical: Padding.p_12,
    alignSelf: "stretch",
  },
  depth2Frame1: {
    maxWidth: "100%",
    height: 320,
  },
  depth1Frame1: {
    alignSelf: "stretch",
  },
});

export default Depth1Frame111;
