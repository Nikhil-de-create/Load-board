import * as React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import Depth3frame0 from "../assets/depth-3-frame-0.svg";
import Depth3frame01 from "../assets/depth-3-frame-01.svg";
import {
  Color,
  Padding,
  FontFamily,
  FontSize,
  Border,
  Gap,
} from "../GlobalStyles";

const SelectLanguage = () => {
  return (
    <ScrollView
      style={styles.selectLanguage}
      contentContainerStyle={styles.selectLanguageScrollViewContent}
    >
      <View style={[styles.depth0Frame0, styles.frameFlexBox1]}>
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame0, styles.depth2FrameSpaceBlock]}>
            <Depth3frame0 style={styles.depth3Frame0} width={48} height={48} />
            <View style={styles.depth3Frame1}>
              <Text style={[styles.selectLanguage1, styles.continueTypo]}>
                Select Language
              </Text>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.frameFlexBox]}>
            <Depth3frame01
              style={styles.depth3Frame01}
              width={40}
              height={40}
            />
            <View style={styles.depth3Frame11}>
              <Text style={[styles.text, styles.textLayout]}>हिंदी</Text>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.frameFlexBox]}>
            <Depth3frame01
              style={styles.depth3Frame01}
              width={40}
              height={40}
            />
            <View style={styles.depth3Frame11}>
              <Text style={[styles.text, styles.textLayout]}>मराठी</Text>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.frameFlexBox]}>
            <Depth3frame01
              style={styles.depth3Frame01}
              width={40}
              height={40}
            />
            <View style={styles.depth3Frame11}>
              <Text style={[styles.text, styles.textLayout]}>తెలుగు</Text>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.frameFlexBox]}>
            <Depth3frame01
              style={styles.depth3Frame01}
              width={40}
              height={40}
            />
            <View style={styles.depth3Frame11}>
              <Text style={[styles.text, styles.textLayout]}>தமிழ்</Text>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.frameFlexBox]}>
            <Depth3frame01
              style={styles.depth3Frame01}
              width={40}
              height={40}
            />
            <View style={styles.depth3Frame11}>
              <Text style={[styles.text, styles.textLayout]}>ಕನ್ನಡ</Text>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.frameFlexBox]}>
            <Depth3frame01
              style={styles.depth3Frame01}
              width={40}
              height={40}
            />
            <View style={styles.depth3Frame11}>
              <Text style={[styles.text, styles.textLayout]}>ગુજરાતી</Text>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.frameFlexBox]}>
            <Depth3frame01
              style={styles.depth3Frame01}
              width={40}
              height={40}
            />
            <View style={styles.depth3Frame11}>
              <Text style={[styles.text, styles.textLayout]}>ਪੰਜਾਬੀ</Text>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.frameFlexBox]}>
            <Depth3frame01
              style={styles.depth3Frame01}
              width={40}
              height={40}
            />
            <View style={styles.depth3Frame11}>
              <Text style={[styles.text, styles.textLayout]}>বাংলা</Text>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.frameFlexBox]}>
            <Depth3frame01
              style={styles.depth3Frame01}
              width={40}
              height={40}
            />
            <View style={styles.depth3Frame11}>
              <Text style={[styles.text, styles.textLayout]}>മലയാളം</Text>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame01, styles.depth2FrameSpaceBlock]}>
            <Pressable style={[styles.depth3Frame010, styles.frameFlexBox]}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.continue, styles.textLayout]}>
                  Continue
                </Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.depth2Frame11} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  selectLanguageScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 890,
  },
  frameFlexBox1: {
    gap: 0,
    justifyContent: "space-between",
    backgroundColor: Color.colorGray300,
  },
  depth2FrameSpaceBlock: {
    paddingHorizontal: Padding.p_16,
    alignSelf: "stretch",
  },
  continueTypo: {
    textAlign: "center",
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
  },
  frameFlexBox: {
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  textLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_16,
    color: Color.colorWhite,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  depth3Frame0: {
    width: 48,
    height: 48,
  },
  selectLanguage1: {
    fontSize: FontSize.size_18,
    lineHeight: 23,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  depth3Frame1: {
    height: 23,
    paddingRight: Padding.p_48,
    alignItems: "center",
    flex: 1,
  },
  depth2Frame0: {
    paddingTop: Padding.p_16,
    paddingBottom: Padding.p_8,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_16,
    gap: 0,
    justifyContent: "space-between",
    backgroundColor: Color.colorGray300,
  },
  depth3Frame01: {
    width: 40,
    height: 40,
    borderRadius: Border.br_8,
  },
  text: {
    fontFamily: FontFamily.spaceGroteskRegular,
    textAlign: "left",
  },
  depth3Frame11: {
    overflow: "hidden",
    flex: 1,
  },
  depth2Frame1: {
    height: 56,
    gap: Gap.gap_16,
    minHeight: 56,
    paddingHorizontal: Padding.p_16,
    alignSelf: "stretch",
    backgroundColor: Color.colorGray300,
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
  continue: {
    textAlign: "center",
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_16,
  },
  depth4Frame0: {
    alignItems: "center",
    overflow: "hidden",
  },
  depth3Frame010: {
    backgroundColor: Color.colorRoyalblue100,
    justifyContent: "center",
    paddingHorizontal: Padding.p_20,
    minWidth: 84,
    maxWidth: 480,
    borderRadius: Border.br_8,
    height: 48,
    overflow: "hidden",
    flex: 1,
  },
  depth2Frame01: {
    paddingVertical: Padding.p_12,
    flexDirection: "row",
    paddingHorizontal: Padding.p_16,
  },
  depth2Frame11: {
    height: 20,
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  depth0Frame0: {
    minHeight: 844,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  selectLanguage: {
    width: "100%",
    backgroundColor: Color.colorWhite,
    maxWidth: "100%",
    flex: 1,
  },
});

export default SelectLanguage;
