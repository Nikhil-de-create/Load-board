import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
} from "react-native";
import Depth3frame03 from "../assets/depth-3-frame-03.svg";
import {
  Padding,
  Border,
  Color,
  FontSize,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const TruckPhoto = () => {
  return (
    <ScrollView
      style={[styles.truckPhoto, styles.truckPhotoLayout]}
      contentContainerStyle={styles.truckPhotoScrollViewContent}
    >
      <View style={styles.depth0Frame0}>
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame0, styles.depth2FrameFlexBox]}>
            <Depth3frame03 style={styles.depth3Frame0} width={48} height={48} />
          </View>
          <View style={[styles.depth2Frame1, styles.frameSpaceBlock]}>
            <Image
              style={[styles.depth3Frame01, styles.truckPhotoLayout]}
              resizeMode="cover"
              source={require("../assets/depth-3-frame-09.png")}
            />
          </View>
        </View>
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame01, styles.depth2FrameFlexBox]}>
            <View style={[styles.depth3Frame02, styles.frameSpaceBlock]}>
              <Pressable
                style={[styles.depth4Frame0, styles.depth4FrameLayout]}
              >
                <View style={styles.depth5Frame0}>
                  <Text style={styles.retake}>Retake</Text>
                </View>
              </Pressable>
              <Pressable
                style={[styles.depth4Frame1, styles.depth4FrameLayout]}
              >
                <View style={styles.depth5Frame0}>
                  <Text style={styles.retake}>Upload</Text>
                </View>
              </Pressable>
            </View>
          </View>
          <View style={styles.depth2Frame11} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  truckPhotoScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 890,
  },
  truckPhotoLayout: {
    maxWidth: "100%",
    flex: 1,
  },
  depth2FrameFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameSpaceBlock: {
    paddingVertical: Padding.p_12,
    flexDirection: "row",
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
  depth3Frame0: {
    width: 48,
    height: 48,
  },
  depth2Frame0: {
    justifyContent: "flex-end",
    paddingTop: Padding.p_16,
    paddingBottom: Padding.p_8,
    paddingHorizontal: Padding.p_16,
    alignItems: "center",
    backgroundColor: Color.colorGray300,
  },
  depth3Frame01: {
    height: 260,
    overflow: "hidden",
  },
  depth2Frame1: {
    paddingHorizontal: 0,
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
  retake: {
    fontSize: FontSize.size_16,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.spaceGroteskBold,
    color: Color.colorWhite,
    textAlign: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  depth5Frame0: {
    alignItems: "center",
    overflow: "hidden",
  },
  depth4Frame0: {
    backgroundColor: Color.colorDarkslategray300,
  },
  depth4Frame1: {
    backgroundColor: Color.colorRoyalblue100,
  },
  depth3Frame02: {
    flexWrap: "wrap",
    alignContent: "flex-start",
    rowGap: Gap.gap_12,
    columnGap: 0,
    paddingHorizontal: Padding.p_16,
    justifyContent: "space-between",
    flex: 1,
    paddingVertical: Padding.p_12,
  },
  depth2Frame01: {
    justifyContent: "space-between",
  },
  depth2Frame11: {
    height: 20,
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  depth0Frame0: {
    gap: 0,
    minHeight: 844,
    justifyContent: "space-between",
    overflow: "hidden",
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  truckPhoto: {
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default TruckPhoto;
