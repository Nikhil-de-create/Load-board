import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Depth3frame0 from "../assets/depth-3-frame-0.svg";
import Depth3frame2 from "../assets/depth-3-frame-2.svg";
import {
  FontFamily,
  Padding,
  Border,
  Gap,
  Color,
  FontSize,
} from "../GlobalStyles";

const Depth1Frame01111111 = () => {
  return (
    <View style={styles.depth1Frame0}>
      <View style={styles.depth2Frame0}>
        <Depth3frame0 style={styles.depth3Frame0} width={48} height={48} />
        <View style={styles.depth3Frame1}>
          <Text style={styles.rameshKumar}>Ramesh Kumar</Text>
        </View>
        <Depth3frame2 style={styles.depth3Frame0} width={48} height={48} />
      </View>
      <View style={styles.depth2FrameFlexBox}>
        <Image
          style={styles.depth3Frame01}
          resizeMode="cover"
          source={require("../assets/depth-3-frame-011.png")}
        />
        <View style={styles.depth3FrameFlexBox}>
          <View style={styles.depth4Frame0}>
            <Text style={[styles.rameshKumar1, styles.helloImTypo]}>
              Ramesh Kumar
            </Text>
          </View>
          <View style={[styles.depth4Frame1, styles.depth4FrameLayout]}>
            <Text style={[styles.helloIm, styles.helloImTypo]}>
              Hello, I'm interested in the load from Mumbai to Delhi. Can you
              provide more details about the cargo and the expected delivery
              timeframe?
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.depth2Frame2, styles.depth2FrameFlexBox]}>
        <View style={[styles.depth3Frame02, styles.depth3FrameFlexBox]}>
          <View style={styles.depth4Frame0}>
            <Text style={[styles.you, styles.youClr]}>You</Text>
          </View>
          <View style={[styles.depth4Frame11, styles.depth4FrameLayout]}>
            <Text style={[styles.helloIm, styles.helloImTypo]}>
              Hi Ramesh, the cargo is textiles, approximately 15 tons. We're
              looking at a 3-day delivery window. Any questions?
            </Text>
          </View>
        </View>
        <Image
          style={styles.depth3Frame01}
          resizeMode="cover"
          source={require("../assets/depth-3-frame-11.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloImTypo: {
    textAlign: "left",
    fontFamily: FontFamily.spaceGroteskRegular,
  },
  depth4FrameLayout: {
    paddingVertical: Padding.p_12,
    borderRadius: Border.br_8,
    width: "100%",
    maxWidth: 360,
    paddingHorizontal: Padding.p_16,
    flexDirection: "row",
  },
  depth2FrameFlexBox: {
    gap: Gap.gap_12,
    padding: Padding.p_16,
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  depth3FrameFlexBox: {
    gap: Gap.gap_4,
    flex: 1,
  },
  youClr: {
    color: Color.colorDarkgray,
    lineHeight: 20,
    fontSize: 13,
    alignSelf: "stretch",
  },
  depth3Frame0: {
    width: 48,
    height: 48,
  },
  rameshKumar: {
    fontSize: FontSize.size_18,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.spaceGroteskBold,
    textAlign: "center",
    color: Color.colorWhite,
    alignSelf: "stretch",
  },
  depth3Frame1: {
    height: 23,
    flex: 1,
    alignItems: "center",
  },
  depth2Frame0: {
    backgroundColor: Color.colorGray300,
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
    width: 40,
    borderRadius: Border.br_20,
    height: 40,
    overflow: "hidden",
  },
  rameshKumar1: {
    color: Color.colorDarkgray,
    lineHeight: 20,
    fontSize: 13,
    alignSelf: "stretch",
    textAlign: "left",
  },
  depth4Frame0: {
    maxWidth: 360,
  },
  helloIm: {
    fontSize: FontSize.size_16,
    lineHeight: 24,
    color: Color.colorWhite,
  },
  depth4Frame1: {
    backgroundColor: Color.colorDarkslategray300,
  },
  you: {
    textAlign: "right",
    fontFamily: FontFamily.spaceGroteskRegular,
    color: Color.colorDarkgray,
    lineHeight: 20,
    fontSize: 13,
  },
  depth4Frame11: {
    backgroundColor: Color.colorRoyalblue100,
  },
  depth3Frame02: {
    alignItems: "flex-end",
    gap: Gap.gap_4,
  },
  depth2Frame2: {
    justifyContent: "flex-end",
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
});

export default Depth1Frame01111111;
