import * as React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Depth3frame0 from "../assets/depth-3-frame-0.svg";
import Depth4frame011 from "../assets/depth-4-frame-01.svg";
import Depth4frame07 from "../assets/depth-4-frame-07.svg";
import Depth4frame02 from "../assets/depth-4-frame-02.svg";
import Depth4frame01 from "../assets/depth-4-frame-01.svg";
import Depth4frame05 from "../assets/depth-4-frame-05.svg";
import { Color, Padding, FontFamily, FontSize, Gap } from "../GlobalStyles";

const MyTrips = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.myTrips}
      contentContainerStyle={styles.myTripsScrollViewContent}
    >
      <Pressable
        style={[styles.depth0Frame0, styles.frameFlexBox]}
        onPress={() => navigation.navigate("Wallet")}
      >
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame0, styles.depth2FrameSpaceBlock]}>
            <Depth3frame0 style={styles.depth3Frame0} width={48} height={48} />
            <View style={styles.depth3Frame1}>
              <Text style={styles.myTrips1}>My Trips</Text>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.depth2FrameSpaceBlock]}>
            <View style={styles.depth3Frame01}>
              <View style={styles.depth4Frame0}>
                <Text style={styles.tripToMumbai}>Trip to Mumbai</Text>
              </View>
              <View style={styles.depth4Frame1}>
                <Text style={[styles.rs25000, styles.rs25000Typo]}>
                  Rs. 25,000
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.depth4Frame01}>
                <Text style={[styles.separator, styles.rs25000Typo]}>
                  20/07/2024
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.depth2FrameSpaceBlock]}>
            <View style={styles.depth3Frame01}>
              <View style={styles.depth4Frame0}>
                <Text style={styles.tripToMumbai}>Trip to Delhi</Text>
              </View>
              <View style={styles.depth4Frame11}>
                <Text style={[styles.rs25000, styles.rs25000Typo]}>
                  Rs. 18,000
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.depth4Frame01}>
                <Text style={[styles.separator, styles.rs25000Typo]}>
                  15/07/2024
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.depth2FrameSpaceBlock]}>
            <View style={styles.depth3Frame01}>
              <View style={styles.depth4Frame0}>
                <Text style={styles.tripToMumbai}>Trip to Bangalore</Text>
              </View>
              <View style={styles.depth4Frame12}>
                <Text style={[styles.rs25000, styles.rs25000Typo]}>
                  Rs. 32,000
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.depth4Frame01}>
                <Text style={[styles.separator, styles.rs25000Typo]}>
                  10/07/2024
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.depth2FrameSpaceBlock]}>
            <View style={styles.depth3Frame01}>
              <View style={styles.depth4Frame0}>
                <Text style={styles.tripToMumbai}>Trip to Chennai</Text>
              </View>
              <View style={styles.depth4Frame13}>
                <Text style={[styles.rs25000, styles.rs25000Typo]}>
                  Rs. 22,000
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.depth4Frame01}>
                <Text style={[styles.separator, styles.rs25000Typo]}>
                  05/07/2024
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame1, styles.depth2FrameSpaceBlock]}>
            <View style={styles.depth3Frame01}>
              <View style={styles.depth4Frame0}>
                <Text style={styles.tripToMumbai}>Trip to Kolkata</Text>
              </View>
              <View style={styles.depth4Frame14}>
                <Text style={[styles.rs25000, styles.rs25000Typo]}>
                  Rs. 28,000
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.depth4Frame01}>
                <Text style={[styles.separator, styles.rs25000Typo]}>
                  01/07/2024
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame01, styles.depth2FrameBg]}>
            <View style={styles.depth3FrameFlexBox}>
              <Depth4frame011
                style={styles.depth4Frame010}
                width={24}
                height={32}
              />
              <View>
                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              </View>
            </View>
            <View style={[styles.depth3Frame16, styles.depth3FrameFlexBox]}>
              <Depth4frame07
                style={styles.depth4Frame010}
                width={24}
                height={32}
              />
              <View>
                <Text style={[styles.myTrips2, styles.homeTypo]}>My Trips</Text>
              </View>
            </View>
            <View style={styles.depth3FrameFlexBox}>
              <Depth4frame02
                style={styles.depth4Frame010}
                width={24}
                height={32}
              />
              <View>
                <Text style={[styles.home, styles.homeTypo]}>Wallet</Text>
              </View>
            </View>
            <View style={styles.depth3FrameFlexBox}>
              <Depth4frame01
                style={styles.depth4Frame010}
                width={24}
                height={32}
              />
              <View>
                <Text style={[styles.home, styles.homeTypo]}>Chat</Text>
              </View>
            </View>
            <View style={styles.depth3FrameFlexBox}>
              <Depth4frame05
                style={styles.depth4Frame010}
                width={24}
                height={32}
              />
              <View>
                <Text style={[styles.home, styles.homeTypo]}>Profile</Text>
              </View>
            </View>
          </View>
          <View style={[styles.depth2Frame11, styles.depth2FrameBg]} />
        </View>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  myTripsScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 890,
  },
  frameFlexBox: {
    gap: 0,
    justifyContent: "space-between",
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  depth2FrameSpaceBlock: {
    paddingHorizontal: Padding.p_16,
    flexDirection: "row",
  },
  rs25000Typo: {
    fontFamily: FontFamily.spaceGroteskRegular,
    textAlign: "left",
    alignSelf: "stretch",
  },
  depth2FrameBg: {
    backgroundColor: Color.colorGray100,
    alignSelf: "stretch",
  },
  homeTypo: {
    lineHeight: 18,
    fontSize: FontSize.size_12,
    textAlign: "left",
    fontFamily: FontFamily.spaceGroteskMedium,
    fontWeight: "500",
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
  myTrips1: {
    fontSize: FontSize.size_18,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.spaceGroteskBold,
    textAlign: "center",
    color: Color.colorWhite,
    alignSelf: "stretch",
  },
  depth3Frame1: {
    height: 23,
    paddingRight: Padding.p_48,
    alignItems: "center",
    flex: 1,
  },
  depth2Frame0: {
    paddingTop: Padding.p_16,
    paddingBottom: Padding.p_8,
    alignItems: "center",
    gap: 0,
    justifyContent: "space-between",
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  tripToMumbai: {
    textAlign: "left",
    fontFamily: FontFamily.spaceGroteskMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_16,
    color: Color.colorWhite,
    alignSelf: "stretch",
  },
  depth4Frame0: {
    overflow: "hidden",
  },
  rs25000: {
    fontSize: FontSize.size_14,
    lineHeight: 21,
    color: Color.colorDarkgray,
  },
  depth4Frame1: {
    width: 115,
    overflow: "hidden",
  },
  depth3Frame01: {
    justifyContent: "center",
  },
  separator: {
    lineHeight: 24,
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.spaceGroteskRegular,
    color: Color.colorWhite,
  },
  depth4Frame01: {
    flex: 1,
  },
  depth2Frame1: {
    height: 72,
    paddingVertical: Padding.p_8,
    minHeight: 72,
    alignItems: "center",
    gap: 0,
    justifyContent: "space-between",
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  depth4Frame11: {
    width: 92,
    overflow: "hidden",
  },
  depth4Frame12: {
    width: 132,
    overflow: "hidden",
  },
  depth4Frame13: {
    width: 116,
    overflow: "hidden",
  },
  depth4Frame14: {
    width: 111,
    overflow: "hidden",
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame010: {
    width: 24,
    height: 32,
  },
  home: {
    color: Color.colorDarkgray,
  },
  myTrips2: {
    color: Color.colorWhite,
  },
  depth3Frame16: {
    borderRadius: 27,
  },
  depth2Frame01: {
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray300,
    borderTopWidth: 1,
    paddingTop: Padding.p_8,
    paddingBottom: Padding.p_12,
    gap: Gap.gap_8,
    paddingHorizontal: Padding.p_16,
    flexDirection: "row",
  },
  depth2Frame11: {
    height: 20,
  },
  depth0Frame0: {
    minHeight: 844,
    overflow: "hidden",
  },
  myTrips: {
    width: "100%",
    backgroundColor: Color.colorWhite,
    maxWidth: "100%",
    flex: 1,
  },
});

export default MyTrips;
