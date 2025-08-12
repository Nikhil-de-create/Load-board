import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import Depth3frame0 from "../assets/depth-3-frame-0.svg";
import Depth3frame04 from "../assets/depth-3-frame-04.svg";
import Depth3frame06 from "../assets/depth-3-frame-06.svg";
import Depth3frame031 from "../assets/depth-3-frame-031.svg";
import Depth3frame05 from "../assets/depth-3-frame-05.svg";
import {
  Color,
  Padding,
  FontFamily,
  FontSize,
  Border,
  Gap,
} from "../GlobalStyles";

const LoadDetails = () => {
  return (
    <ScrollView
      style={[styles.loadDetails, styles.loadDetailsLayout]}
      contentContainerStyle={styles.loadDetailsScrollViewContent}
    >
      <View style={[styles.depth0Frame0, styles.frameBg]}>
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame0, styles.depth2FrameSpaceBlock]}>
            <Depth3frame0
              style={styles.depth3FrameLayout}
              width={48}
              height={48}
            />
            <View style={styles.depth3Frame1}>
              <Text style={[styles.loadDetails1, styles.loadDetails1Typo]}>
                Load Details
              </Text>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.frameSpaceBlock]}>
            <Image
              style={[styles.depth3Frame01, styles.loadDetailsLayout]}
              resizeMode="cover"
              source={require("../assets/depth-3-frame-07.png")}
            />
          </View>
          <View style={[styles.depth2Frame2, styles.depth2FrameSpaceBlock]}>
            <Text style={[styles.loadInformation, styles.loadClr]}>
              Load Information
            </Text>
          </View>
          <View style={styles.depth2Frame3}>
            <Depth3frame04
              style={[styles.depth3Frame02, styles.depth3FrameLayout]}
              width={48}
              height={48}
            />
            <View style={styles.depth3Frame11}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.materialType, styles.materialTypeLayout]}>
                  Material Type
                </Text>
              </View>
              <View style={styles.depth4Frame1}>
                <Text style={styles.steel}>Steel</Text>
              </View>
            </View>
          </View>
          <View style={styles.depth2Frame3}>
            <Depth3frame06
              style={[styles.depth3Frame02, styles.depth3FrameLayout]}
              width={48}
              height={48}
            />
            <View style={styles.depth3Frame11}>
              <View style={styles.depth4Frame0}>
                <Text style={[styles.materialType, styles.materialTypeLayout]}>
                  Weight
                </Text>
              </View>
              <View style={styles.depth4Frame11}>
                <Text style={styles.steel}>15 tons</Text>
              </View>
            </View>
          </View>
          <View style={styles.depth2Frame3}>
            <Depth3frame031
              style={[styles.depth3Frame02, styles.depth3FrameLayout]}
              width={48}
              height={48}
            />
            <View style={styles.depth3Frame11}>
              <View style={styles.depth4Frame02}>
                <Text style={[styles.materialType, styles.materialTypeLayout]}>
                  Price
                </Text>
              </View>
              <View style={styles.depth4Frame0}>
                <Text style={styles.steel}>₹ 25,000</Text>
              </View>
            </View>
          </View>
          <View style={styles.depth2Frame3}>
            <Depth3frame05
              style={[styles.depth3Frame02, styles.depth3FrameLayout]}
              width={48}
              height={48}
            />
            <View style={styles.depth3Frame11}>
              <View style={styles.depth4Frame03}>
                <Text style={[styles.materialType, styles.materialTypeLayout]}>
                  Pickup Time
                </Text>
              </View>
              <View style={styles.depth4Frame0}>
                <Text style={styles.steel}>Tomorrow, 9 AM</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame01, styles.depth2FrameFlexBox]}>
            <View style={[styles.depth3Frame06, styles.frameSpaceBlock]}>
              <Pressable
                style={[styles.depth4Frame04, styles.depth4FrameLayout]}
              >
                <View style={styles.depth5Frame0}>
                  <Text
                    style={[styles.contactShipper, styles.materialTypeLayout]}
                  >
                    Contact Shipper
                  </Text>
                </View>
              </Pressable>
              <View style={[styles.depth4Frame14, styles.depth4FrameLayout]}>
                <Pressable style={styles.depth5Frame0}>
                  <Text
                    style={[styles.contactShipper, styles.materialTypeLayout]}
                  >
                    Bid
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.depth2Frame11} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadDetailsScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 890,
  },
  loadDetailsLayout: {
    maxWidth: "100%",
    flex: 1,
  },
  frameBg: {
    gap: 0,
    backgroundColor: Color.colorGray300,
  },
  depth2FrameSpaceBlock: {
    paddingBottom: Padding.p_8,
    paddingTop: Padding.p_16,
    paddingHorizontal: Padding.p_16,
    alignSelf: "stretch",
  },
  loadDetails1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
  },
  frameSpaceBlock: {
    paddingVertical: Padding.p_12,
    paddingHorizontal: Padding.p_16,
    flexDirection: "row",
  },
  loadClr: {
    color: Color.colorWhite,
    lineHeight: 23,
    fontSize: FontSize.size_18,
    alignSelf: "stretch",
  },
  depth3FrameLayout: {
    height: 48,
    width: 48,
  },
  materialTypeLayout: {
    lineHeight: 24,
    fontSize: FontSize.size_16,
    color: Color.colorWhite,
    alignSelf: "stretch",
  },
  depth2FrameFlexBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  depth4FrameLayout: {
    maxWidth: 480,
    minWidth: 84,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_20,
    justifyContent: "center",
    borderRadius: Border.br_8,
    height: 48,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  loadDetails1: {
    color: Color.colorWhite,
    lineHeight: 23,
    fontSize: FontSize.size_18,
    alignSelf: "stretch",
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
    justifyContent: "space-between",
    gap: 0,
    backgroundColor: Color.colorGray300,
  },
  depth3Frame01: {
    height: 201,
    borderRadius: Border.br_8,
    overflow: "hidden",
  },
  depth2Frame1: {
    alignSelf: "stretch",
  },
  loadInformation: {
    textAlign: "left",
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    color: Color.colorWhite,
    lineHeight: 23,
    fontSize: FontSize.size_18,
  },
  depth2Frame2: {
    height: 47,
  },
  depth3Frame02: {
    borderRadius: Border.br_8,
  },
  materialType: {
    fontWeight: "500",
    fontFamily: FontFamily.spaceGroteskMedium,
    textAlign: "left",
  },
  depth4Frame0: {
    overflow: "hidden",
  },
  steel: {
    fontSize: FontSize.size_14,
    lineHeight: 21,
    fontFamily: FontFamily.spaceGroteskRegular,
    color: Color.colorDarkgray,
    textAlign: "left",
    alignSelf: "stretch",
  },
  depth4Frame1: {
    width: 105,
    overflow: "hidden",
  },
  depth3Frame11: {
    justifyContent: "center",
  },
  depth2Frame3: {
    height: 72,
    paddingVertical: Padding.p_8,
    gap: Gap.gap_16,
    minHeight: 72,
    paddingHorizontal: Padding.p_16,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  depth4Frame11: {
    width: 55,
    overflow: "hidden",
  },
  depth4Frame02: {
    width: 60,
    overflow: "hidden",
  },
  depth4Frame03: {
    width: 106,
    overflow: "hidden",
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
  contactShipper: {
    textAlign: "center",
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    overflow: "hidden",
  },
  depth5Frame0: {
    alignItems: "center",
    overflow: "hidden",
  },
  depth4Frame04: {
    backgroundColor: Color.colorRoyalblue100,
  },
  depth4Frame14: {
    width: 84,
    backgroundColor: Color.colorDarkslategray300,
  },
  depth3Frame06: {
    flexWrap: "wrap",
    alignContent: "flex-start",
    rowGap: Gap.gap_12,
    columnGap: 0,
    justifyContent: "space-between",
    flex: 1,
  },
  depth2Frame01: {
    alignSelf: "stretch",
  },
  depth2Frame11: {
    height: 20,
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  depth0Frame0: {
    minHeight: 844,
    justifyContent: "space-between",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  loadDetails: {
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default LoadDetails;
