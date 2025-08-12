import * as React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Depth3frame0 from "../assets/depth-3-frame-0.svg";
import {
  Padding,
  Color,
  FontFamily,
  FontSize,
  Border,
  Gap,
} from "../GlobalStyles";

const Depth1Frame0111 = () => {
  return (
    <View style={styles.depth1Frame0}>
      <View style={[styles.depth2Frame0, styles.depth2FrameFlexBox]}>
        <Depth3frame0 style={styles.depth3Frame0} width={48} height={48} />
        <View style={styles.depth3Frame1}>
          <Text style={[styles.enterOtp, styles.enterOtpFlexBox]}>
            Enter OTP
          </Text>
        </View>
      </View>
      <View style={[styles.depth2Frame1, styles.depth2FrameSpaceBlock]}>
        <Text style={[styles.enterThe6Digit, styles.enterTypo]}>
          Enter the 6-digit code sent to +91 9876543210
        </Text>
      </View>
      <View style={[styles.depth2Frame2, styles.depth2FrameFlexBox]}>
        <View style={styles.depth3Frame01}>
          <View style={styles.depth4Frame0} />
          <TextInput style={styles.depth4Frame0} />
          <TextInput style={styles.depth4Frame0} />
          <TextInput style={styles.depth4Frame0} />
          <TextInput style={styles.depth4Frame0} />
          <TextInput style={styles.depth4Frame0} />
        </View>
      </View>
      <View style={[styles.depth2Frame3, styles.depth2FrameSpaceBlock]}>
        <Text
          style={[styles.didntReceiveThe, styles.enterOtpFlexBox]}
        >{`Didn't receive the code? `}</Text>
      </View>
      <View style={[styles.depth2Frame3, styles.depth2FrameSpaceBlock]}>
        <Text style={[styles.didntReceiveThe, styles.enterOtpFlexBox]}>
          Resend OTP
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth2FrameFlexBox: {
    paddingHorizontal: Padding.p_16,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  enterOtpFlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  depth2FrameSpaceBlock: {
    paddingBottom: Padding.p_12,
    paddingHorizontal: Padding.p_16,
    alignSelf: "stretch",
  },
  enterTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
  },
  depth3Frame0: {
    height: 48,
    width: 48,
  },
  enterOtp: {
    fontSize: FontSize.size_18,
    lineHeight: 23,
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
  },
  depth3Frame1: {
    flex: 1,
    height: 23,
    paddingRight: Padding.p_48,
    alignItems: "center",
  },
  depth2Frame0: {
    backgroundColor: Color.colorGray300,
    justifyContent: "space-between",
    paddingTop: Padding.p_16,
    paddingBottom: Padding.p_8,
    gap: 0,
    alignItems: "center",
  },
  enterThe6Digit: {
    fontSize: FontSize.size_22,
    lineHeight: 28,
    textAlign: "left",
    alignSelf: "stretch",
  },
  depth2Frame1: {
    height: 87,
    paddingTop: Padding.p_20,
  },
  depth4Frame0: {
    borderRadius: Border.br_8,
    backgroundColor: Color.colorDarkslategray300,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    height: 56,
    width: 48,
  },
  depth3Frame01: {
    gap: Gap.gap_16,
    flexDirection: "row",
  },
  depth2Frame2: {
    justifyContent: "center",
    paddingVertical: Padding.p_12,
  },
  didntReceiveThe: {
    fontSize: FontSize.size_14,
    lineHeight: 21,
    fontFamily: FontFamily.spaceGroteskRegular,
    color: Color.colorDarkgray,
  },
  depth2Frame3: {
    paddingTop: Padding.p_4,
    alignItems: "center",
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
});

export default Depth1Frame0111;
