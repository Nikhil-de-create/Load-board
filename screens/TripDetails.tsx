import * as React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import Depth3frame0 from "../assets/depth-3-frame-0.svg";
import Depth2Frame1111 from "../components/Depth2Frame1111";
import Depth3frame041 from "../assets/depth-3-frame-041.svg";
import {
  Color,
  FontFamily,
  FontSize,
  Gap,
  Padding,
  Border,
} from "../GlobalStyles";

const TripDetails = () => {
  return (
    <ScrollView
      style={styles.tripDetails}
      contentContainerStyle={styles.tripDetailsScrollViewContent}
    >
      <View style={[styles.depth0Frame0, styles.frameBg]}>
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame0, styles.depth2FrameFlexBox1]}>
            <Depth3frame0 style={styles.depth3Frame0} width={48} height={48} />
            <View style={styles.depth3Frame1}>
              <Text style={[styles.tripDetails1, styles.navigateTypo]}>
                Trip Details
              </Text>
            </View>
          </View>
          <Depth2Frame1111 />
          <View style={styles.depth2Frame2}>
            <Text style={[styles.shipperInformation, styles.tripDetails1Clr]}>
              Shipper Information
            </Text>
          </View>
          <View style={styles.depth2FrameFlexBox}>
            <View style={styles.depth3Frame01} />
            <View style={styles.depth3Frame11}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.rohanSharma, styles.navigateLayout]}>
                  Rohan Sharma
                </Text>
              </View>
              <View style={styles.depth4Frame1}>
                <Text style={styles.logisticsCo}>Logistics Co.</Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame4, styles.depth2FrameFlexBox]}>
            <Depth3frame041
              style={styles.depth3Frame02}
              width={48}
              height={48}
            />
            <View style={styles.depth3Frame11}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.rohanSharma, styles.navigateLayout]}>
                  Pickup Location
                </Text>
              </View>
              <View style={styles.depth4Frame11}>
                <Text style={styles.logisticsCo}>Mumbai, India</Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame4, styles.depth2FrameFlexBox]}>
            <Depth3frame041
              style={styles.depth3Frame02}
              width={48}
              height={48}
            />
            <View style={styles.depth3Frame11}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.rohanSharma, styles.navigateLayout]}>
                  Delivery Location
                </Text>
              </View>
              <View style={styles.depth4Frame12}>
                <Text style={styles.logisticsCo}>Delhi, India</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame01, styles.depth2FrameFlexBox1]}>
            <View style={[styles.depth3Frame04, styles.depth2FrameFlexBox1]}>
              <Pressable
                style={[styles.depth4Frame03, styles.depth4FrameLayout]}
              >
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.navigate, styles.navigateLayout]}>
                    Navigate
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={[styles.depth4Frame13, styles.depth4FrameLayout]}
              >
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.navigate, styles.navigateLayout]}>
                    Trip Status
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
          <View style={styles.depth2Frame1} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tripDetailsScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 890,
  },
  frameBg: {
    gap: 0,
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  depth2FrameFlexBox1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navigateTypo: {
    textAlign: "center",
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
  },
  tripDetails1Clr: {
    color: Color.colorWhite,
    alignSelf: "stretch",
  },
  navigateLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_16,
    color: Color.colorWhite,
    alignSelf: "stretch",
  },
  depth2FrameFlexBox: {
    minHeight: 72,
    gap: Gap.gap_16,
    paddingVertical: Padding.p_8,
    paddingHorizontal: Padding.p_16,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  depth4FrameLayout: {
    maxWidth: 480,
    minWidth: 84,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_20,
    borderRadius: Border.br_8,
    justifyContent: "center",
    height: 48,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  depth3Frame0: {
    height: 48,
    width: 48,
  },
  tripDetails1: {
    fontSize: FontSize.size_18,
    lineHeight: 23,
    color: Color.colorWhite,
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
    paddingHorizontal: Padding.p_16,
    alignItems: "center",
    gap: 0,
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  shipperInformation: {
    fontSize: FontSize.size_22,
    lineHeight: 28,
    textAlign: "left",
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  depth2Frame2: {
    height: 60,
    paddingTop: Padding.p_20,
    paddingBottom: Padding.p_12,
    paddingHorizontal: Padding.p_16,
    alignSelf: "stretch",
  },
  depth3Frame01: {
    width: 56,
    borderRadius: 28,
    height: 56,
  },
  rohanSharma: {
    fontWeight: "500",
    fontFamily: FontFamily.spaceGroteskMedium,
    textAlign: "left",
  },
  depth4Frame0: {
    overflow: "hidden",
  },
  logisticsCo: {
    fontSize: FontSize.size_14,
    lineHeight: 21,
    fontFamily: FontFamily.spaceGroteskRegular,
    color: Color.colorDarkgray,
    textAlign: "left",
    alignSelf: "stretch",
  },
  depth4Frame1: {
    width: 111,
    overflow: "hidden",
  },
  depth3Frame11: {
    justifyContent: "center",
  },
  depth3Frame02: {
    borderRadius: Border.br_8,
    height: 48,
    width: 48,
  },
  depth4Frame11: {
    width: 124,
    overflow: "hidden",
  },
  depth2Frame4: {
    height: 72,
  },
  depth4Frame12: {
    width: 134,
    overflow: "hidden",
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
  navigate: {
    textAlign: "center",
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    overflow: "hidden",
  },
  depth5Frame0: {
    alignItems: "center",
    overflow: "hidden",
  },
  depth4Frame03: {
    backgroundColor: Color.colorRoyalblue100,
  },
  depth4Frame13: {
    backgroundColor: Color.colorDarkslategray300,
  },
  depth3Frame04: {
    flexWrap: "wrap",
    alignContent: "flex-start",
    paddingVertical: Padding.p_12,
    rowGap: Gap.gap_12,
    columnGap: 0,
    paddingHorizontal: Padding.p_16,
    flex: 1,
  },
  depth2Frame01: {
    alignSelf: "stretch",
  },
  depth2Frame1: {
    height: 20,
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  depth0Frame0: {
    minHeight: 844,
    justifyContent: "space-between",
    gap: 0,
    overflow: "hidden",
  },
  tripDetails: {
    width: "100%",
    backgroundColor: Color.colorWhite,
    maxWidth: "100%",
    flex: 1,
  },
});

export default TripDetails;
