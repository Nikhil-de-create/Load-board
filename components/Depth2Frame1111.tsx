import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Depth5frame0 from "../assets/depth-5-frame-0.svg";
import { Gap, Color, FontSize, Padding, FontFamily } from "../GlobalStyles";

const Depth2Frame1111 = () => {
  return (
    <View style={styles.depth2Frame1}>
      <View style={[styles.depth3Frame0, styles.frameFlexBox]}>
        <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
          <Depth5frame0 style={styles.depth5Frame0} width={24} height={24} />
          <View style={[styles.depth5Frame1, styles.depth5FrameBg]} />
        </View>
        <View style={[styles.depth4Frame1, styles.frameFlexBox]}>
          <View style={styles.depth5Frame01}>
            <Text style={[styles.loadPickedUp, styles.amFlexBox]}>
              Load Picked Up
            </Text>
          </View>
          <View style={styles.depth5Frame01}>
            <Text style={[styles.am, styles.amFlexBox]}>10:00 AM</Text>
          </View>
        </View>
      </View>
      <View style={[styles.depth3Frame0, styles.frameFlexBox]}>
        <View style={styles.depth4FrameFlexBox}>
          <View style={[styles.depth5Frame02, styles.depth5FrameBg]} />
          <Depth5frame0 style={styles.depth5Frame0} width={24} height={24} />
          <View style={[styles.depth5Frame1, styles.depth5FrameBg]} />
        </View>
        <View style={[styles.depth4Frame1, styles.frameFlexBox]}>
          <View style={styles.depth5Frame01}>
            <Text style={[styles.loadPickedUp, styles.amFlexBox]}>
              In Transit
            </Text>
          </View>
          <View style={styles.depth5Frame01}>
            <Text style={[styles.am, styles.amFlexBox]}>12:00 PM</Text>
          </View>
        </View>
      </View>
      <View style={[styles.depth3Frame0, styles.frameFlexBox]}>
        <View style={[styles.depth4Frame02, styles.depth4FrameFlexBox]}>
          <View style={[styles.depth5Frame02, styles.depth5FrameBg]} />
          <Depth5frame0 style={styles.depth5Frame0} width={24} height={24} />
        </View>
        <View style={[styles.depth4Frame1, styles.frameFlexBox]}>
          <View style={styles.depth5Frame01}>
            <Text style={[styles.loadPickedUp, styles.amFlexBox]}>
              Load Delivered
            </Text>
          </View>
          <View style={styles.depth5Frame01}>
            <Text style={[styles.am, styles.amFlexBox]}>2:00 PM</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  depth4FrameFlexBox: {
    gap: Gap.gap_4,
    alignItems: "center",
    width: 40,
    alignSelf: "stretch",
  },
  depth5FrameBg: {
    backgroundColor: Color.colorDarkslategray100,
    width: 2,
  },
  amFlexBox: {
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.size_16,
    alignSelf: "stretch",
  },
  depth5Frame0: {
    width: 24,
    height: 24,
  },
  depth5Frame1: {
    height: 32,
  },
  depth4Frame0: {
    paddingTop: Padding.p_12,
  },
  loadPickedUp: {
    fontWeight: "500",
    fontFamily: FontFamily.spaceGroteskMedium,
    color: Color.colorWhite,
  },
  depth5Frame01: {
    alignSelf: "stretch",
  },
  am: {
    fontFamily: FontFamily.spaceGroteskRegular,
    color: Color.colorDarkgray,
  },
  depth4Frame1: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_12,
  },
  depth3Frame0: {
    flexDirection: "row",
    gap: Gap.gap_8,
  },
  depth5Frame02: {
    height: 8,
  },
  depth4Frame02: {
    paddingBottom: Padding.p_12,
  },
  depth2Frame1: {
    paddingHorizontal: Padding.p_16,
    paddingVertical: 0,
    gap: Gap.gap_8,
    alignSelf: "stretch",
  },
});

export default Depth2Frame1111;
