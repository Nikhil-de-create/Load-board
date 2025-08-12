import * as React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Depth3frame0 from "../assets/depth-3-frame-0.svg";
import Depth4frame011 from "../assets/depth-4-frame-01.svg";
import Depth4frame03 from "../assets/depth-4-frame-03.svg";
import Depth4frame08 from "../assets/depth-4-frame-08.svg";
import Depth4frame01 from "../assets/depth-4-frame-01.svg";
import Depth4frame05 from "../assets/depth-4-frame-05.svg";
import {
  Color,
  Padding,
  FontSize,
  FontFamily,
  Gap,
  Border,
} from "../GlobalStyles";

const Wallet = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.wallet}
      contentContainerStyle={styles.walletScrollViewContent}
    >
      <Pressable
        style={[styles.depth0Frame0, styles.frameFlexBox]}
        onPress={() => navigation.navigate("Withdraw")}
      >
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame0, styles.depth2FrameSpaceBlock1]}>
            <Depth3frame0 style={styles.depth3Frame0} width={48} height={48} />
            <View style={styles.depth3Frame1}>
              <Text style={styles.wallet1}>Wallet</Text>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.depth2FrameSpaceBlock1]}>
            <Text style={[styles.currentBalance, styles.textFlexBox]}>
              Current Balance
            </Text>
          </View>
          <View style={[styles.depth2Frame2, styles.depth2FrameSpaceBlock]}>
            <Text style={[styles.text, styles.textFlexBox]}>₹ 12,500</Text>
          </View>
          <View style={[styles.depth2Frame1, styles.depth2FrameSpaceBlock1]}>
            <Text style={[styles.currentBalance, styles.textFlexBox]}>
              Last 5 Earnings
            </Text>
          </View>
          <View style={[styles.depth2Frame4, styles.depth2FrameFlexBox]}>
            <View style={styles.depth3Frame01}>
              <View style={styles.depth4Frame0}>
                <Text style={styles.text1}>₹ 2,500</Text>
              </View>
              <View style={styles.depth4Frame1}>
                <Text style={[styles.loadId12345, styles.textFlexBox]}>
                  Load ID: 12345
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.depth4Frame01}>
                <Text style={[styles.loadId12345, styles.textFlexBox]}>
                  2 days ago
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame4, styles.depth2FrameFlexBox]}>
            <View style={styles.depth3Frame01}>
              <View style={styles.depth4Frame02}>
                <Text style={styles.text1}>₹ 3,000</Text>
              </View>
              <View style={styles.depth4Frame1}>
                <Text style={[styles.loadId12345, styles.textFlexBox]}>
                  Load ID: 67890
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.depth4Frame01}>
                <Text style={[styles.loadId12345, styles.textFlexBox]}>
                  4 days ago
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame4, styles.depth2FrameFlexBox]}>
            <View style={styles.depth3Frame01}>
              <View style={styles.depth4Frame04}>
                <Text style={styles.text1}>₹ 2,000</Text>
              </View>
              <View style={styles.depth4Frame1}>
                <Text style={[styles.loadId12345, styles.textFlexBox]}>
                  Load ID: 11223
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.depth4Frame01}>
                <Text style={[styles.loadId12345, styles.textFlexBox]}>
                  7 days ago
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame4, styles.depth2FrameFlexBox]}>
            <View style={styles.depth3Frame01}>
              <View style={styles.depth4Frame06}>
                <Text style={styles.text1}>₹ 2,500</Text>
              </View>
              <View style={styles.depth4Frame1}>
                <Text style={[styles.loadId12345, styles.textFlexBox]}>
                  Load ID: 44556
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.depth4Frame01}>
                <Text style={[styles.loadId12345, styles.textFlexBox]}>
                  10 days ago
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame4, styles.depth2FrameFlexBox]}>
            <View style={styles.depth3Frame01}>
              <View style={styles.depth4Frame08}>
                <Text style={styles.text1}>₹ 2,500</Text>
              </View>
              <View style={styles.depth4Frame1}>
                <Text style={[styles.loadId12345, styles.textFlexBox]}>
                  Load ID: 77889
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.depth4Frame01}>
                <Text style={[styles.loadId12345, styles.textFlexBox]}>
                  14 days ago
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame01, styles.depth2FrameFlexBox]}>
            <Pressable style={styles.depth3Frame06}>
              <View style={styles.depth4Frame010}>
                <Text style={styles.withdraw}>Withdraw</Text>
              </View>
            </Pressable>
          </View>
          <View style={[styles.depth2Frame11, styles.depth2FrameBg]}>
            <View style={styles.depth3FrameFlexBox}>
              <Depth4frame011
                style={styles.depth4Frame011}
                width={24}
                height={32}
              />
              <View>
                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              </View>
            </View>
            <View style={styles.depth3FrameFlexBox}>
              <Depth4frame03
                style={styles.depth4Frame011}
                width={24}
                height={32}
              />
              <View>
                <Text style={[styles.home, styles.homeTypo]}>My Trips</Text>
              </View>
            </View>
            <View style={[styles.depth3Frame2, styles.depth3FrameFlexBox]}>
              <Depth4frame08
                style={styles.depth4Frame011}
                width={24}
                height={32}
              />
              <View>
                <Text style={[styles.wallet2, styles.homeTypo]}>Wallet</Text>
              </View>
            </View>
            <View style={styles.depth3FrameFlexBox}>
              <Depth4frame01
                style={styles.depth4Frame011}
                width={24}
                height={32}
              />
              <View>
                <Text style={[styles.home, styles.homeTypo]}>Chat</Text>
              </View>
            </View>
            <View style={styles.depth3FrameFlexBox}>
              <Depth4frame05
                style={styles.depth4Frame011}
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
  );
};

const styles = StyleSheet.create({
  walletScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 890,
  },
  frameFlexBox: {
    gap: 0,
    justifyContent: "space-between",
    backgroundColor: Color.colorGray300,
  },
  depth2FrameSpaceBlock1: {
    paddingBottom: Padding.p_8,
    paddingTop: Padding.p_16,
    paddingHorizontal: Padding.p_16,
    alignSelf: "stretch",
  },
  textFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  depth2FrameSpaceBlock: {
    paddingBottom: Padding.p_12,
    paddingHorizontal: Padding.p_16,
  },
  depth2FrameFlexBox: {
    paddingHorizontal: Padding.p_16,
    flexDirection: "row",
    alignSelf: "stretch",
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
    width: 48,
    height: 48,
  },
  wallet1: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    lineHeight: 23,
    fontSize: FontSize.size_18,
    alignSelf: "stretch",
  },
  depth3Frame1: {
    paddingRight: Padding.p_48,
    alignItems: "center",
    flex: 1,
  },
  depth2Frame0: {
    alignItems: "center",
    flexDirection: "row",
    gap: 0,
    justifyContent: "space-between",
    backgroundColor: Color.colorGray300,
  },
  currentBalance: {
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 23,
    fontSize: FontSize.size_18,
  },
  depth2Frame1: {
    height: 47,
  },
  text: {
    fontSize: FontSize.size_22,
    lineHeight: 28,
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    textAlign: "left",
  },
  depth2Frame2: {
    height: 60,
    paddingTop: Padding.p_20,
    alignSelf: "stretch",
  },
  text1: {
    fontFamily: FontFamily.spaceGroteskMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_16,
    textAlign: "left",
    color: Color.colorWhite,
    alignSelf: "stretch",
  },
  depth4Frame0: {
    width: 97,
    overflow: "hidden",
  },
  loadId12345: {
    fontSize: FontSize.size_14,
    lineHeight: 21,
    fontFamily: FontFamily.spaceGroteskRegular,
    color: Color.colorDarkgray,
  },
  depth4Frame1: {
    overflow: "hidden",
  },
  depth3Frame01: {
    justifyContent: "center",
  },
  depth4Frame01: {
    flex: 1,
  },
  depth2Frame4: {
    height: 72,
    paddingVertical: Padding.p_8,
    minHeight: 72,
    alignItems: "center",
    gap: 0,
    justifyContent: "space-between",
    backgroundColor: Color.colorGray300,
  },
  depth4Frame02: {
    width: 99,
    overflow: "hidden",
  },
  depth4Frame04: {
    width: 94,
    overflow: "hidden",
  },
  depth4Frame06: {
    width: 100,
    overflow: "hidden",
  },
  depth4Frame08: {
    width: 98,
    overflow: "hidden",
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
  withdraw: {
    lineHeight: 24,
    fontSize: FontSize.size_16,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  depth4Frame010: {
    alignItems: "center",
    overflow: "hidden",
  },
  depth3Frame06: {
    borderRadius: Border.br_8,
    backgroundColor: Color.colorRoyalblue100,
    paddingHorizontal: Padding.p_20,
    paddingVertical: 0,
    minWidth: 84,
    maxWidth: 480,
    justifyContent: "center",
    height: 48,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  depth2Frame01: {
    paddingVertical: Padding.p_12,
  },
  depth4Frame011: {
    width: 24,
    height: 32,
  },
  home: {
    color: Color.colorDarkgray,
  },
  wallet2: {
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
    alignSelf: "stretch",
  },
  wallet: {
    width: "100%",
    backgroundColor: Color.colorWhite,
    maxWidth: "100%",
    flex: 1,
  },
});

export default Wallet;
