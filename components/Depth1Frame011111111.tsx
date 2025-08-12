import * as React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Depth3frame042 from "../assets/depth-3-frame-04.svg";
import Depth5frame01 from "../assets/depth-5-frame-01.svg";
import Depth5frame4 from "../assets/depth-5-frame-4.svg";
import {
  Color,
  Padding,
  FontFamily,
  FontSize,
  Border,
  Gap,
} from "../GlobalStyles";

const Depth1Frame011111111 = () => {
  return (
    <View style={styles.depth1Frame0}>
      <View style={styles.depth2Frame0}>
        <Depth3frame042 style={styles.depth3Frame0} width={48} height={48} />
        <View style={[styles.depth3Frame1, styles.frameFlexBox]}>
          <Text style={[styles.rateYourExperience, styles.yourFlexBox]}>
            Rate your experience
          </Text>
        </View>
      </View>
      <View style={[styles.depth2Frame1, styles.depth2FrameSpaceBlock]}>
        <TextInput
          style={[styles.thankYouFor, styles.thankYouForTypo]}
          placeholder="Thank you for your feedback!"
          placeholderTextColor="#fff"
        />
      </View>
      <View style={[styles.depth2Frame2, styles.depth2FrameSpaceBlock]}>
        <Text style={[styles.yourFeedbackHelps, styles.depth4Frame2Typo]}>
          Your feedback helps us improve our service for all drivers.
        </Text>
      </View>
      <View style={styles.depth2Frame3}>
        <View style={styles.depth3Frame01}>
          <TextInput
            style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}
            placeholder="4.5"
            placeholderTextColor="#fff"
          />
          <View style={styles.depth4Frame1}>
            <Depth5frame01 style={styles.depth5Frame0} width={18} height={18} />
            <Depth5frame01 style={styles.depth5Frame0} width={18} height={18} />
            <Depth5frame01 style={styles.depth5Frame0} width={18} height={18} />
            <Depth5frame01 style={styles.depth5Frame0} width={18} height={18} />
            <Depth5frame4 style={styles.depth5Frame0} width={18} height={18} />
          </View>
          <TextInput
            style={[styles.depth4Frame2, styles.depth4FrameFlexBox]}
            placeholder="120 reviews"
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.depth3Frame11}>
          <View style={[styles.depth4Frame01, styles.frameFlexBox]}>
            <TextInput
              style={[styles.depth5Frame01, styles.depth5FrameTypo]}
              placeholder="5"
              placeholderTextColor="#fff"
            />
            <View style={styles.depth5Frame11}>
              <View style={[styles.depth6Frame0, styles.depth6FrameBg]} />
            </View>
            <TextInput
              style={[styles.depth5Frame21, styles.depth5FrameTypo]}
              placeholder="40%"
              placeholderTextColor="#9ca8ba"
            />
          </View>
          <View style={[styles.depth4Frame01, styles.frameFlexBox]}>
            <TextInput
              style={[styles.depth5Frame01, styles.depth5FrameTypo]}
              placeholder="4"
              placeholderTextColor="#fff"
            />
            <View style={styles.depth5Frame11}>
              <View style={[styles.depth6Frame01, styles.depth6FrameBg]} />
            </View>
            <TextInput
              style={[styles.depth5Frame21, styles.depth5FrameTypo]}
              placeholder="30%"
              placeholderTextColor="#9ca8ba"
            />
          </View>
          <View style={[styles.depth4Frame01, styles.frameFlexBox]}>
            <TextInput
              style={[styles.depth5Frame01, styles.depth5FrameTypo]}
              placeholder="3"
              placeholderTextColor="#fff"
            />
            <View style={styles.depth5Frame11}>
              <View style={[styles.depth6Frame02, styles.depth6FrameBg]} />
            </View>
            <TextInput
              style={[styles.depth5Frame21, styles.depth5FrameTypo]}
              placeholder="15%"
              placeholderTextColor="#9ca8ba"
            />
          </View>
          <View style={[styles.depth4Frame01, styles.frameFlexBox]}>
            <TextInput
              style={[styles.depth5Frame01, styles.depth5FrameTypo]}
              placeholder="2"
              placeholderTextColor="#fff"
            />
            <View style={styles.depth5Frame11}>
              <View style={[styles.depth6Frame03, styles.depth6FrameBg]} />
            </View>
            <TextInput
              style={[styles.depth5Frame21, styles.depth5FrameTypo]}
              placeholder="10%"
              placeholderTextColor="#9ca8ba"
            />
          </View>
          <View style={[styles.depth4Frame01, styles.frameFlexBox]}>
            <TextInput
              style={[styles.depth5Frame01, styles.depth5FrameTypo]}
              placeholder="1"
              placeholderTextColor="#fff"
            />
            <View style={styles.depth5Frame11}>
              <View style={[styles.depth6Frame04, styles.depth6FrameBg]} />
            </View>
            <TextInput
              style={[styles.depth5Frame21, styles.depth5FrameTypo]}
              placeholder="5%"
              placeholderTextColor="#9ca8ba"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    flex: 1,
  },
  yourFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
    alignSelf: "stretch",
  },
  depth2FrameSpaceBlock: {
    paddingBottom: Padding.p_12,
    paddingHorizontal: Padding.p_16,
    alignItems: "center",
    alignSelf: "stretch",
  },
  thankYouForTypo: {
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
  },
  depth4Frame2Typo: {
    fontFamily: FontFamily.spaceGroteskRegular,
    fontSize: FontSize.size_16,
  },
  depth4FrameFlexBox: {
    width: 98,
  },
  depth5FrameTypo: {
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.spaceGroteskRegular,
    alignSelf: "stretch",
  },
  depth6FrameBg: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_4,
    alignSelf: "stretch",
  },
  depth3Frame0: {
    width: 48,
    height: 48,
  },
  rateYourExperience: {
    fontSize: FontSize.size_18,
    lineHeight: 23,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
  },
  depth3Frame1: {
    height: 23,
    paddingRight: Padding.p_48,
    flex: 1,
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
  thankYouFor: {
    width: "100%",
    fontSize: FontSize.size_28,
    textAlign: "center",
    alignSelf: "stretch",
  },
  depth2Frame1: {
    height: 102,
    paddingTop: Padding.p_20,
  },
  yourFeedbackHelps: {
    lineHeight: 24,
    textAlign: "center",
    color: Color.colorWhite,
    alignSelf: "stretch",
  },
  depth2Frame2: {
    paddingTop: Padding.p_4,
  },
  depth4Frame0: {
    fontSize: FontSize.size_36,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
  },
  depth5Frame0: {
    width: 18,
    height: 18,
  },
  depth4Frame1: {
    gap: Gap.gap_2,
    flexDirection: "row",
  },
  depth4Frame2: {
    fontFamily: FontFamily.spaceGroteskRegular,
    fontSize: FontSize.size_16,
  },
  depth3Frame01: {
    height: 153,
    gap: Gap.gap_8,
  },
  depth5Frame01: {
    width: 20,
  },
  depth6Frame0: {
    width: 67,
  },
  depth5Frame11: {
    backgroundColor: Color.colorDarkslategray100,
    height: 8,
    overflow: "hidden",
    borderRadius: Border.br_4,
    flex: 1,
    flexDirection: "row",
  },
  depth5Frame21: {
    width: 40,
  },
  depth4Frame01: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  depth6Frame01: {
    width: 50,
  },
  depth6Frame02: {
    width: 25,
  },
  depth6Frame03: {
    width: 17,
  },
  depth6Frame04: {
    width: 8,
  },
  depth3Frame11: {
    gap: Gap.gap_12,
    minWidth: 200,
    maxWidth: 400,
    flex: 1,
  },
  depth2Frame3: {
    flexWrap: "wrap",
    alignContent: "flex-start",
    padding: Padding.p_16,
    rowGap: Gap.gap_24,
    columnGap: Gap.gap_32,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
});

export default Depth1Frame011111111;
