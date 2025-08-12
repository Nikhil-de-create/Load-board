import * as React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Depth3frame0 from "../assets/depth-3-frame-0.svg";
import Depth4frame1 from "../assets/depth-4-frame-1.svg";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Depth1Frame01 = () => {
  return (
    <View style={styles.depth1Frame0}>
      <View style={styles.depth2Frame0}>
        <Depth3frame0 style={styles.depth3Frame0} width={48} height={48} />
        <View style={styles.depth3Frame1}>
          <Text style={styles.truckDetails}>Truck Details</Text>
        </View>
      </View>
      <View style={styles.depth2Frame1}>
        <View style={styles.depth3Frame01}>
          <TextInput
            style={styles.depth4Frame0}
            placeholder="Truck Name"
            placeholderTextColor="#fff"
          />
          <TextInput style={[styles.depth4Frame1, styles.depth4FrameLayout]} />
        </View>
      </View>
      <View style={styles.depth2Frame1}>
        <View style={styles.depth3Frame01}>
          <TextInput
            style={styles.depth4Frame0}
            placeholder="Truck Type"
            placeholderTextColor="#fff"
          />
          <Depth4frame1
            style={[styles.depth4Frame11, styles.depth4FrameLayout]}
          />
        </View>
      </View>
      <View style={styles.depth2Frame1}>
        <View style={styles.depth3Frame01}>
          <TextInput
            style={styles.depth4Frame0}
            placeholder="Capacity"
            placeholderTextColor="#fff"
          />
          <TextInput style={[styles.depth4Frame1, styles.depth4FrameLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth4FrameLayout: {
    overflow: "hidden",
    height: 32,
    borderRadius: Border.br_8,
    width: "100%",
    alignSelf: "stretch",
  },
  depth3Frame0: {
    width: 48,
    height: 48,
  },
  truckDetails: {
    fontSize: FontSize.size_18,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.spaceGroteskBold,
    color: Color.colorWhite,
    textAlign: "center",
    alignSelf: "stretch",
  },
  depth3Frame1: {
    height: 23,
    paddingRight: Padding.p_48,
    flex: 1,
    alignItems: "center",
  },
  depth2Frame0: {
    backgroundColor: Color.colorGray300,
    justifyContent: "space-between",
    paddingTop: Padding.p_16,
    gap: 0,
    paddingBottom: Padding.p_8,
    paddingHorizontal: Padding.p_16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  depth4Frame0: {
    fontWeight: "500",
    fontFamily: FontFamily.spaceGroteskMedium,
    fontSize: FontSize.size_16,
    width: "100%",
    paddingBottom: Padding.p_8,
    alignSelf: "stretch",
  },
  depth4Frame1: {
    backgroundColor: Color.colorDarkslategray300,
  },
  depth3Frame01: {
    minWidth: 160,
    flex: 1,
  },
  depth2Frame1: {
    alignItems: "flex-end",
    flexWrap: "wrap",
    alignContent: "flex-end",
    paddingVertical: Padding.p_12,
    maxWidth: 480,
    width: "100%",
    paddingHorizontal: Padding.p_16,
    flexDirection: "row",
  },
  depth4Frame11: {
    maxWidth: "100%",
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
});

export default Depth1Frame01;
