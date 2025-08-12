import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ImageSourcePropType,
} from "react-native";
import Depth6frame11 from "../assets/depth-6-frame-11.svg";
import {
  Border,
  FontSize,
  Color,
  FontFamily,
  Gap,
  Padding,
} from "../GlobalStyles";

export type Depth2Frame21Type = {
  pickupMumbai?: string;
  dropDelhi?: string;
  tons?: string;
  depth4Frame1?: ImageSourcePropType;
  onPress?: () => void;
};

const Depth2Frame21 = ({
  pickupMumbai,
  dropDelhi,
  tons,
  depth4Frame1,
  onPress,
}: Depth2Frame21Type) => {
  return (
    <Pressable style={styles.depth2Frame2} onPress={onPress}>
      <View style={[styles.depth3Frame0, styles.frameFlexBox1]}>
        <View style={styles.depth4Frame0}>
          <View style={styles.depth5Frame0}>
            <View style={styles.depth6Frame0}>
              <Text style={[styles.pickupMumbai, styles.bidLayout]}>
                {pickupMumbai}
              </Text>
            </View>
            <View style={styles.depth6Frame1}>
              <Text style={[styles.dropDelhi, styles.bidClr]}>{dropDelhi}</Text>
            </View>
            <View style={styles.depth6Frame0}>
              <Text style={[styles.pickupMumbai, styles.bidLayout]}>
                {tons}
              </Text>
            </View>
          </View>
          <Pressable style={[styles.depth5Frame1, styles.frameFlexBox]}>
            <View style={styles.frameFlexBox}>
              <Text style={[styles.bid, styles.bidClr]}>Bid</Text>
            </View>
            <Depth6frame11
              style={styles.depth6Frame11}
              width={18}
              height={18}
            />
          </Pressable>
        </View>
        <Image
          style={styles.depth4Frame1}
          resizeMode="cover"
          source={depth4Frame1}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameFlexBox1: {
    flexDirection: "row",
    borderRadius: Border.br_8,
  },
  bidLayout: {
    lineHeight: 21,
    fontSize: FontSize.size_14,
  },
  bidClr: {
    color: Color.colorWhite,
    alignSelf: "stretch",
  },
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  pickupMumbai: {
    fontFamily: FontFamily.spaceGroteskRegular,
    color: Color.colorDarkgray,
    textAlign: "left",
    alignSelf: "stretch",
  },
  depth6Frame0: {
    alignSelf: "stretch",
  },
  dropDelhi: {
    fontSize: FontSize.size_16,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.spaceGroteskBold,
    textAlign: "left",
  },
  depth6Frame1: {
    height: 20,
    alignSelf: "stretch",
  },
  depth5Frame0: {
    gap: Gap.gap_4,
    alignSelf: "stretch",
  },
  bid: {
    fontWeight: "500",
    fontFamily: FontFamily.spaceGroteskMedium,
    textAlign: "center",
    overflow: "hidden",
    lineHeight: 21,
    fontSize: FontSize.size_14,
  },
  depth6Frame11: {
    width: 18,
    height: 18,
  },
  depth5Frame1: {
    width: 84,
    backgroundColor: Color.colorDarkslategray300,
    height: 32,
    justifyContent: "center",
    paddingLeft: Padding.p_16,
    paddingRight: Padding.p_8,
    minWidth: 84,
    maxWidth: 480,
    gap: Gap.gap_4,
    flexDirection: "row",
    borderRadius: Border.br_8,
  },
  depth4Frame0: {
    width: 228,
    gap: Gap.gap_16,
  },
  depth4Frame1: {
    flex: 1,
    maxWidth: "100%",
    height: 118,
    overflow: "hidden",
    borderRadius: Border.br_8,
  },
  depth3Frame0: {
    justifyContent: "space-between",
    gap: 0,
    alignSelf: "stretch",
  },
  depth2Frame2: {
    padding: Padding.p_16,
    alignSelf: "stretch",
  },
});

export default Depth2Frame21;
