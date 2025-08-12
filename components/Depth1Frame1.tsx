import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Depth4frame0 from "../assets/depth-4-frame-0.svg";
import Depth4frame03 from "../assets/depth-4-frame-03.svg";
import Depth4frame02 from "../assets/depth-4-frame-02.svg";
import Depth4frame01 from "../assets/depth-4-frame-01.svg";
import Depth4frame05 from "../assets/depth-4-frame-05.svg";
import { Color, Gap, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Depth1Frame1 = () => {
  return (
    <View style={styles.depth1Frame1}>
      <View style={[styles.depth2Frame0, styles.depth2FrameBg]}>
        <View style={[styles.depth3Frame0, styles.depth3FrameFlexBox]}>
          <Depth4frame0 style={styles.depth4Frame0} width={24} height={32} />
          <View>
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          </View>
        </View>
        <View style={styles.depth3FrameFlexBox}>
          <Depth4frame03 style={styles.depth4Frame0} width={24} height={32} />
          <View>
            <Text style={[styles.myTrips, styles.homeTypo]}>My Trips</Text>
          </View>
        </View>
        <View style={styles.depth3FrameFlexBox}>
          <Depth4frame02 style={styles.depth4Frame0} width={24} height={32} />
          <View>
            <Text style={[styles.myTrips, styles.homeTypo]}>Wallet</Text>
          </View>
        </View>
        <View style={styles.depth3FrameFlexBox}>
          <Depth4frame01 style={styles.depth4Frame0} width={24} height={32} />
          <View>
            <Text style={[styles.myTrips, styles.homeTypo]}>Chat</Text>
          </View>
        </View>
        <View style={styles.depth3FrameFlexBox}>
          <Depth4frame05 style={styles.depth4Frame0} width={24} height={32} />
          <View>
            <Text style={[styles.myTrips, styles.homeTypo]}>Profile</Text>
          </View>
        </View>
      </View>
      <View style={[styles.depth2Frame1, styles.depth2FrameBg]} />
    </View>
  );
};

const styles = StyleSheet.create({
  depth2FrameBg: {
    backgroundColor: Color.colorGray100,
    alignSelf: "stretch",
  },
  depth3FrameFlexBox: {
    gap: Gap.gap_4,
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  homeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.spaceGroteskMedium,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.size_12,
    alignSelf: "stretch",
  },
  depth4Frame0: {
    width: 24,
    height: 32,
  },
  home: {
    color: Color.colorWhite,
  },
  depth3Frame0: {
    borderRadius: 27,
  },
  myTrips: {
    color: Color.colorDarkgray,
  },
  depth2Frame0: {
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray300,
    borderTopWidth: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_16,
    paddingTop: Padding.p_8,
    paddingBottom: Padding.p_12,
    gap: Gap.gap_8,
  },
  depth2Frame1: {
    height: 20,
  },
  depth1Frame1: {
    alignSelf: "stretch",
  },
});

export default Depth1Frame1;
