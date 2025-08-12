import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";
import Depth3frame0 from "../assets/depth-3-frame-0.svg";
import Depth7frame0 from "../assets/depth-7-frame-0.svg";
import Depth7frame02 from "../assets/depth-7-frame-02.svg";
import Depth7frame1 from "../assets/depth-7-frame-1.svg";
import Depth6frame1 from "../assets/depth-6-frame-1.svg";
import {
  Padding,
  FontSize,
  FontFamily,
  Color,
  Border,
  Gap,
} from "../GlobalStyles";

const Depth1Frame0111111 = () => {
  return (
    <View style={styles.depth1Frame0}>
      <View style={[styles.depth2Frame0, styles.frameFlexBox1]}>
        <Depth3frame0 style={styles.depth3Frame0} width={48} height={48} />
        <View style={styles.depth3Frame1}>
          <Text style={styles.liveTracking}>Live Tracking</Text>
        </View>
      </View>
      <View style={styles.depth2Frame1}>
        <View style={styles.depth2Frame1}>
          <ImageBackground
            style={[styles.depth4Frame0, styles.frameFlexBox]}
            resizeMode="cover"
            source={require("../assets/depth4frame0.png")}
          >
            <View style={styles.depth5Frame0}>
              <View style={styles.depth6Frame0}>
                <Depth7frame0 style={styles.depth7Frame0} width={40} />
                <TextInput
                  style={[styles.depth7Frame1, styles.frameFlexBox]}
                  placeholder="Search  for a location"
                  placeholderTextColor="#9ca8ba"
                />
              </View>
            </View>
            <View style={styles.depth5Frame1}>
              <View style={styles.depth6Frame01}>
                <Depth7frame02
                  style={[styles.depth7Frame01, styles.frameLayout]}
                  width={40}
                  height={40}
                />
                <Depth7frame1
                  style={[styles.depth7Frame11, styles.frameLayout]}
                  width={40}
                  height={40}
                />
              </View>
              <Depth6frame1
                style={[styles.depth6Frame1, styles.frameLayout]}
                width={40}
                height={40}
              />
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox1: {
    paddingBottom: Padding.p_8,
    alignItems: "center",
    flexDirection: "row",
  },
  frameFlexBox: {
    overflow: "hidden",
    flex: 1,
    alignSelf: "stretch",
  },
  frameLayout: {
    height: 40,
    width: 40,
    overflow: "hidden",
  },
  depth3Frame0: {
    width: 48,
    height: 48,
  },
  liveTracking: {
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
    paddingHorizontal: Padding.p_16,
    alignSelf: "stretch",
  },
  depth7Frame0: {
    maxHeight: "100%",
    borderBottomLeftRadius: Border.br_8,
    borderTopLeftRadius: Border.br_8,
    width: 40,
    alignSelf: "stretch",
  },
  depth7Frame1: {
    backgroundColor: Color.colorGray100,
    paddingLeft: Padding.p_8,
    paddingTop: Padding.p_8,
    paddingRight: Padding.p_16,
    width: "100%",
    fontFamily: FontFamily.spaceGroteskRegular,
    fontSize: FontSize.size_16,
    borderBottomRightRadius: Border.br_8,
    borderTopRightRadius: Border.br_8,
    paddingBottom: Padding.p_8,
    alignItems: "center",
    flexDirection: "row",
  },
  depth6Frame0: {
    borderRadius: Border.br_8,
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  depth5Frame0: {
    minWidth: 160,
    width: 358,
    height: 48,
  },
  depth7Frame01: {
    borderTopRightRadius: Border.br_8,
    borderTopLeftRadius: Border.br_8,
  },
  depth7Frame11: {
    borderBottomRightRadius: Border.br_8,
    borderBottomLeftRadius: Border.br_8,
  },
  depth6Frame01: {
    gap: Gap.gap_2,
  },
  depth6Frame1: {
    borderRadius: Border.br_8,
  },
  depth5Frame1: {
    alignItems: "flex-end",
    gap: Gap.gap_12,
    width: 358,
  },
  depth4Frame0: {
    paddingTop: 92,
    paddingBottom: 0,
    gap: 102,
    minHeight: 320,
    paddingHorizontal: Padding.p_16,
  },
  depth2Frame1: {
    flex: 1,
    alignSelf: "stretch",
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
});

export default Depth1Frame0111111;
