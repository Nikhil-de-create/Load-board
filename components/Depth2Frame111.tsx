import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Padding, Gap } from "../GlobalStyles";

const Depth2Frame111 = () => {
  return (
    <View style={styles.depth2Frame1}>
      <View style={styles.depth3Frame0}>
        <View style={styles.depth4Frame0}>
          <View>
            <Text style={[styles.rc, styles.rcTypo]}>RC</Text>
          </View>
        </View>
        <View style={styles.depth4Frame0}>
          <View>
            <Text style={[styles.license, styles.rcTypo]}>License</Text>
          </View>
        </View>
        <View style={styles.depth4Frame0}>
          <View>
            <Text style={[styles.license, styles.rcTypo]}>PAN/Aadhaar</Text>
          </View>
        </View>
        <View style={styles.depth4Frame0}>
          <View>
            <Text style={[styles.license, styles.rcTypo]}>Truck Photo</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rcTypo: {
    textAlign: "left",
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    lineHeight: 21,
    fontSize: FontSize.size_14,
    alignSelf: "stretch",
  },
  rc: {
    color: Color.colorWhite,
  },
  depth4Frame0: {
    borderColor: Color.colorGainsboro,
    borderBottomWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Padding.p_16,
    paddingBottom: 13,
    borderStyle: "solid",
  },
  license: {
    color: Color.colorDarkgray,
  },
  depth3Frame0: {
    borderColor: Color.colorDarkslategray100,
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_16,
    paddingVertical: 0,
    gap: Gap.gap_32,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  depth2Frame1: {
    paddingBottom: Padding.p_12,
    alignSelf: "stretch",
  },
});

export default Depth2Frame111;
