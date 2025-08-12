import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import {
  FontSize,
  Color,
  FontFamily,
  Gap,
  Padding,
  Border,
} from "../GlobalStyles";

export type Depth2Frame4Type = {
  uploadFrontOfRC?: string;
  uploadAClearImageOfTheFront?: string;
};

const Depth2Frame4 = ({
  uploadFrontOfRC,
  uploadAClearImageOfTheFront,
}: Depth2Frame4Type) => {
  return (
    <View style={styles.depth2Frame4}>
      <View style={styles.depth3Frame0}>
        <View style={[styles.depth4Frame0, styles.depth4FrameLayout]}>
          <View style={[styles.depth5Frame0, styles.depth4FrameLayout]}>
            <Text style={styles.uploadFrontOf}>{uploadFrontOfRC}</Text>
          </View>
          <View style={styles.depth4FrameLayout}>
            <Text style={[styles.uploadAClear, styles.uploadTypo]}>
              {uploadAClearImageOfTheFront}
            </Text>
          </View>
        </View>
        <Pressable style={[styles.depth4Frame1, styles.depth4FrameLayout]}>
          <View style={styles.depth5Frame01}>
            <Text style={[styles.upload, styles.uploadTypo]}>Upload</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth4FrameLayout: {
    maxWidth: 480,
    alignItems: "center",
  },
  uploadTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_14,
    textAlign: "center",
    color: Color.colorWhite,
    alignSelf: "stretch",
  },
  uploadFrontOf: {
    fontSize: FontSize.size_18,
    lineHeight: 23,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  depth5Frame0: {
    height: 23,
  },
  uploadAClear: {
    fontFamily: FontFamily.spaceGroteskRegular,
  },
  depth4Frame0: {
    gap: Gap.gap_8,
  },
  upload: {
    overflow: "hidden",
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    fontSize: FontSize.size_14,
  },
  depth5Frame01: {
    overflow: "hidden",
    alignItems: "center",
  },
  depth4Frame1: {
    width: 84,
    backgroundColor: Color.colorDarkslategray300,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_16,
    paddingVertical: 0,
    minWidth: 84,
    overflow: "hidden",
    borderRadius: Border.br_8,
  },
  depth3Frame0: {
    borderStyle: "dashed",
    borderColor: Color.colorDarkslategray100,
    borderWidth: 2,
    paddingHorizontal: Padding.p_24,
    paddingVertical: 56,
    gap: Gap.gap_24,
    alignItems: "center",
    borderRadius: Border.br_8,
    alignSelf: "stretch",
  },
  depth2Frame4: {
    padding: Padding.p_16,
    alignSelf: "stretch",
  },
});

export default Depth2Frame4;
