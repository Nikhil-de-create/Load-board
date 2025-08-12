import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Depth3frame0 from "../assets/depth-3-frame-0.svg";
import Depth3frame010 from "../assets/depth-3-frame-010.svg";
import Depth4frame011 from "../assets/depth-4-frame-01.svg";
import Depth4frame03 from "../assets/depth-4-frame-03.svg";
import Depth4frame08 from "../assets/depth-4-frame-08.svg";
import Depth4frame01 from "../assets/depth-4-frame-01.svg";
import Depth4frame05 from "../assets/depth-4-frame-05.svg";
import {
  Padding,
  Color,
  Border,
  FontSize,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const Withdraw = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={styles.withdraw}>
      <KeyboardAvoidingView
        style={styles.keyboardavoidingview}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.withdrawScrollViewContent}
        >
          <Pressable
            style={[styles.depth0Frame0, styles.frameFlexBox]}
            onPress={() => navigation.navigate("Profile")}
          >
            <View style={styles.depth1Frame0}>
              <View style={[styles.depth2Frame0, styles.depth2FrameFlexBox]}>
                <Depth3frame0
                  style={styles.depth3Frame0}
                  width={48}
                  height={48}
                />
                <View style={styles.depth3Frame1}>
                  <Text style={styles.withdraw1}>Withdraw</Text>
                </View>
              </View>
              <View
                style={[styles.depth2Frame1, styles.depth2FrameSpaceBlock1]}
              >
                <Text style={[styles.withdrawTo, styles.upiIdFlexBox]}>
                  Withdraw to
                </Text>
              </View>
              <View style={[styles.depth2Frame2, styles.depth2FrameFlexBox]}>
                <Depth3frame010
                  style={[styles.depth3Frame01, styles.depth3FrameLayout]}
                  width={48}
                  height={48}
                />
                <View style={styles.depth3Frame11}>
                  <View style={styles.depth4Frame0}>
                    <Text style={styles.sanjaykumarupi}>sanjay.kumar@upi</Text>
                  </View>
                  <View style={styles.depth4Frame1}>
                    <Text style={[styles.upiId, styles.upiIdFlexBox]}>
                      UPI ID
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.depth2Frame3, styles.frameLayout]}>
                <TextInput
                  style={styles.depth3Frame02}
                  placeholder="Enter  amount"
                  placeholderTextColor="#9ca8ba"
                />
              </View>
            </View>
            <View style={styles.depth1Frame0}>
              <View
                style={[styles.depth2Frame01, styles.depth2FrameSpaceBlock]}
              >
                <Pressable style={[styles.depth3Frame03, styles.frameLayout]}>
                  <View style={styles.depth4Frame01}>
                    <Text style={styles.withdraw2}>Withdraw</Text>
                  </View>
                </Pressable>
              </View>
              <View style={[styles.depth2Frame11, styles.depth2FrameBg]}>
                <View style={styles.depth3FrameFlexBox}>
                  <Depth4frame011
                    style={styles.depth4Frame02}
                    width={24}
                    height={32}
                  />
                  <View>
                    <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                  </View>
                </View>
                <View style={styles.depth3FrameFlexBox}>
                  <Depth4frame03
                    style={styles.depth4Frame02}
                    width={24}
                    height={32}
                  />
                  <View>
                    <Text style={[styles.home, styles.homeTypo]}>My Trips</Text>
                  </View>
                </View>
                <View style={[styles.depth3Frame2, styles.depth3FrameFlexBox]}>
                  <Depth4frame08
                    style={styles.depth4Frame02}
                    width={24}
                    height={32}
                  />
                  <View>
                    <Text style={[styles.wallet, styles.homeTypo]}>Wallet</Text>
                  </View>
                </View>
                <View style={styles.depth3FrameFlexBox}>
                  <Depth4frame01
                    style={styles.depth4Frame02}
                    width={24}
                    height={32}
                  />
                  <View>
                    <Text style={[styles.home, styles.homeTypo]}>Chat</Text>
                  </View>
                </View>
                <View style={styles.depth3FrameFlexBox}>
                  <Depth4frame05
                    style={styles.depth4Frame02}
                    width={24}
                    height={32}
                  />
                  <View>
                    <Text style={[styles.home, styles.homeTypo]}>Profile</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.depth2Frame21, styles.depth2FrameBg]} />
            </View>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  withdrawScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 890,
  },
  frameFlexBox: {
    gap: 0,
    justifyContent: "space-between",
  },
  depth2FrameFlexBox: {
    paddingHorizontal: Padding.p_16,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  depth2FrameSpaceBlock1: {
    paddingBottom: Padding.p_12,
    paddingHorizontal: Padding.p_16,
  },
  upiIdFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  depth3FrameLayout: {
    borderRadius: Border.br_8,
    height: 48,
  },
  frameLayout: {
    maxWidth: 480,
    flexDirection: "row",
  },
  depth2FrameSpaceBlock: {
    paddingVertical: Padding.p_12,
    paddingHorizontal: Padding.p_16,
  },
  depth2FrameBg: {
    backgroundColor: Color.colorGray100,
    alignSelf: "stretch",
  },
  homeTypo: {
    lineHeight: 18,
    fontSize: FontSize.size_12,
    fontFamily: FontFamily.spaceGroteskMedium,
    fontWeight: "500",
    textAlign: "left",
    alignSelf: "stretch",
  },
  depth3FrameFlexBox: {
    gap: Gap.gap_4,
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  depth3Frame0: {
    height: 48,
    width: 48,
  },
  withdraw1: {
    fontSize: FontSize.size_18,
    lineHeight: 23,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  depth3Frame1: {
    paddingRight: Padding.p_48,
    alignItems: "center",
    flex: 1,
  },
  depth2Frame0: {
    paddingTop: Padding.p_16,
    paddingBottom: Padding.p_8,
    gap: 0,
    justifyContent: "space-between",
  },
  withdrawTo: {
    fontSize: FontSize.size_22,
    lineHeight: 28,
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    textAlign: "left",
  },
  depth2Frame1: {
    height: 60,
    paddingTop: Padding.p_20,
    alignSelf: "stretch",
  },
  depth3Frame01: {
    width: 48,
    borderRadius: Border.br_8,
  },
  sanjaykumarupi: {
    fontFamily: FontFamily.spaceGroteskMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_16,
    textAlign: "left",
    color: Color.colorWhite,
    alignSelf: "stretch",
  },
  depth4Frame0: {
    overflow: "hidden",
  },
  upiId: {
    fontSize: FontSize.size_14,
    lineHeight: 21,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.spaceGroteskRegular,
  },
  depth4Frame1: {
    width: 143,
    overflow: "hidden",
  },
  depth3Frame11: {
    justifyContent: "center",
  },
  depth2Frame2: {
    height: 72,
    paddingVertical: Padding.p_8,
    gap: Gap.gap_16,
    minHeight: 72,
  },
  depth3Frame02: {
    minWidth: 160,
    fontFamily: FontFamily.spaceGroteskRegular,
    fontSize: FontSize.size_16,
    flex: 1,
    width: "100%",
  },
  depth2Frame3: {
    alignItems: "flex-end",
    flexWrap: "wrap",
    alignContent: "flex-end",
    paddingVertical: Padding.p_12,
    paddingHorizontal: Padding.p_16,
    width: "100%",
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
  withdraw2: {
    lineHeight: 24,
    fontSize: FontSize.size_16,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  depth4Frame01: {
    alignItems: "center",
    overflow: "hidden",
  },
  depth3Frame03: {
    backgroundColor: Color.colorRoyalblue100,
    paddingHorizontal: Padding.p_20,
    paddingVertical: 0,
    minWidth: 84,
    justifyContent: "center",
    borderRadius: Border.br_8,
    height: 48,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  depth2Frame01: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  depth4Frame02: {
    width: 24,
    height: 32,
  },
  home: {
    color: Color.colorDarkgray,
  },
  wallet: {
    color: Color.colorWhite,
  },
  depth3Frame2: {
    borderRadius: 27,
  },
  depth2Frame11: {
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray300,
    borderTopWidth: 1,
    paddingTop: Padding.p_8,
    gap: Gap.gap_8,
    paddingBottom: Padding.p_12,
    paddingHorizontal: Padding.p_16,
    flexDirection: "row",
  },
  depth2Frame21: {
    height: 20,
  },
  depth0Frame0: {
    minHeight: 844,
    overflow: "hidden",
    backgroundColor: Color.colorGray300,
    gap: 0,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  scrollview: {
    backgroundColor: Color.colorWhite,
    maxWidth: "100%",
    flex: 1,
    width: "100%",
  },
  keyboardavoidingview: {
    flex: 1,
    width: "100%",
  },
  withdraw: {
    flex: 1,
    width: "100%",
  },
});

export default Withdraw;
