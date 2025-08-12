import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Depth3frame0 from "../assets/depth-3-frame-0.svg";
import Depth2Frame111 from "../components/Depth2Frame111";
import Depth2Frame4 from "../components/Depth2Frame4";
import {
  Color,
  Padding,
  FontFamily,
  FontSize,
  Border,
  Gap,
} from "../GlobalStyles";

const KYC = () => {
  return (
    <ScrollView
      style={styles.kyc}
      contentContainerStyle={styles.kYCScrollViewContent}
    >
      <View style={[styles.depth0Frame0, styles.frameFlexBox]}>
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame0, styles.depth2FrameSpaceBlock]}>
            <Depth3frame0 style={styles.depth3Frame0} width={48} height={48} />
            <View style={styles.depth3Frame1}>
              <Text style={[styles.kycVerification, styles.nextTypo]}>
                KYC Verification
              </Text>
            </View>
          </View>
          <Depth2Frame111 />
          <View style={[styles.depth2Frame2, styles.depth2FrameSpaceBlock]}>
            <Text style={[styles.uploadRc, styles.uploadRcFlexBox]}>
              Upload RC
            </Text>
          </View>
          <View style={[styles.depth2Frame3, styles.depth2FrameSpaceBlock1]}>
            <Text style={[styles.uploadTheFront, styles.textTypo]}>
              Upload the front and back of your RC
            </Text>
          </View>
          <Depth2Frame4
            uploadFrontOfRC="Upload Front of RC"
            uploadAClearImageOfTheFront="Upload a clear image of the front of your RC"
          />
          <Depth2Frame4
            uploadFrontOfRC="Upload Back of RC"
            uploadAClearImageOfTheFront="Upload a clear image of the back of your RC"
          />
          <View style={styles.depth2Frame6}>
            <View style={styles.depth3Frame01}>
              <View>
                <Text style={[styles.kycProgress, styles.nextLayout]}>
                  KYC Progress
                </Text>
              </View>
            </View>
            <View style={styles.depth3Frame11}>
              <View style={styles.depth4Frame01} />
            </View>
            <View style={styles.depth1Frame0}>
              <Text style={[styles.text, styles.textTypo]}>1/4</Text>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame01, styles.depth2FrameSpaceBlock1]}>
            <View style={styles.depth3Frame02}>
              <View style={styles.depth4Frame02}>
                <Text style={[styles.next, styles.nextLayout]}>Next</Text>
              </View>
            </View>
          </View>
          <View style={styles.depth2Frame1} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  kYCScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 890,
  },
  frameFlexBox: {
    gap: 0,
    justifyContent: "space-between",
    backgroundColor: Color.colorGray300,
  },
  depth2FrameSpaceBlock: {
    paddingBottom: Padding.p_8,
    paddingTop: Padding.p_16,
    paddingHorizontal: Padding.p_16,
    alignSelf: "stretch",
  },
  nextTypo: {
    textAlign: "center",
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  uploadRcFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  depth2FrameSpaceBlock1: {
    paddingHorizontal: Padding.p_16,
    alignSelf: "stretch",
  },
  textTypo: {
    fontFamily: FontFamily.spaceGroteskRegular,
    textAlign: "left",
    alignSelf: "stretch",
  },
  nextLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_16,
    color: Color.colorWhite,
  },
  depth3Frame0: {
    width: 48,
    height: 48,
  },
  kycVerification: {
    color: Color.colorWhite,
    lineHeight: 23,
    fontSize: FontSize.size_18,
    textAlign: "center",
  },
  depth3Frame1: {
    height: 23,
    paddingRight: Padding.p_48,
    alignItems: "center",
    flex: 1,
  },
  depth2Frame0: {
    alignItems: "center",
    flexDirection: "row",
    gap: 0,
    justifyContent: "space-between",
    backgroundColor: Color.colorGray300,
  },
  uploadRc: {
    color: Color.colorWhite,
    lineHeight: 23,
    fontSize: FontSize.size_18,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    textAlign: "left",
  },
  depth2Frame2: {
    height: 47,
  },
  uploadTheFront: {
    lineHeight: 24,
    fontSize: FontSize.size_16,
    color: Color.colorWhite,
  },
  depth2Frame3: {
    paddingTop: Padding.p_4,
    paddingBottom: Padding.p_12,
  },
  kycProgress: {
    fontWeight: "500",
    fontFamily: FontFamily.spaceGroteskMedium,
    textAlign: "left",
    alignSelf: "stretch",
  },
  depth3Frame01: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  depth4Frame01: {
    width: 90,
    height: 8,
    borderRadius: Border.br_4,
    backgroundColor: Color.colorWhite,
  },
  depth3Frame11: {
    backgroundColor: Color.colorDarkslategray100,
    borderRadius: Border.br_4,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.size_14,
    lineHeight: 21,
    color: Color.colorDarkgray,
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
  depth2Frame6: {
    padding: Padding.p_16,
    gap: Gap.gap_12,
    alignSelf: "stretch",
  },
  next: {
    textAlign: "center",
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  depth4Frame02: {
    alignItems: "center",
    overflow: "hidden",
  },
  depth3Frame02: {
    borderRadius: Border.br_8,
    backgroundColor: Color.colorRoyalblue100,
    justifyContent: "center",
    paddingHorizontal: Padding.p_20,
    paddingVertical: 0,
    minWidth: 84,
    maxWidth: 480,
    height: 48,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  depth2Frame01: {
    paddingVertical: Padding.p_12,
    flexDirection: "row",
  },
  depth2Frame1: {
    height: 20,
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  depth0Frame0: {
    minHeight: 844,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  kyc: {
    width: "100%",
    maxWidth: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default KYC;
