import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Depth3frame0 from "../assets/depth-3-frame-0.svg";
import Depth3frame0121 from "../assets/depth-3-frame-0121.svg";
import Depth3frame12 from "../assets/depth-3-frame-12.svg";
import Depth4frame021 from "../assets/depth-4-frame-02.svg";
import Depth4frame010 from "../assets/depth-4-frame-010.svg";
import Depth4frame09 from "../assets/depth-4-frame-09.svg";
import Depth4frame013 from "../assets/depth-4-frame-013.svg";
import Depth4frame012 from "../assets/depth-4-frame-012.svg";
import {
  Padding,
  FontFamily,
  Color,
  Gap,
  FontSize,
  Border,
} from "../GlobalStyles";

const Profile = () => {
  return (
    <SafeAreaView style={[styles.profile, styles.profileLayout]}>
      <KeyboardAvoidingView
        style={[styles.keyboardavoidingview, styles.profileLayout]}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={[styles.scrollview, styles.profileLayout]}
          contentContainerStyle={styles.profileScrollViewContent}
        >
          <View style={[styles.depth0Frame0, styles.frameFlexBox1]}>
            <View style={styles.depth1Frame0}>
              <View style={[styles.depth2Frame0, styles.depth2FrameSpaceBlock]}>
                <Depth3frame0
                  style={styles.depth3FrameLayout}
                  width={48}
                  height={48}
                />
                <View style={styles.depth3Frame1}>
                  <Text style={[styles.profile1, styles.textTypo]}>
                    Profile
                  </Text>
                </View>
              </View>
              <View style={styles.depth2Frame1}>
                <View style={styles.depth3Frame01}>
                  <View style={[styles.depth4Frame0, styles.frameFlexBox]}>
                    <Image
                      style={styles.depth5Frame0}
                      resizeMode="cover"
                      source={require("../assets/depth-5-frame-02.png")}
                    />
                    <View style={styles.depth5Frame1}>
                      <View style={styles.depth6Frame0}>
                        <Text style={[styles.rohanVerma, styles.textFlexBox]}>
                          Rohan Verma
                        </Text>
                      </View>
                      <View style={styles.depth6Frame1}>
                        <Text style={[styles.blank, styles.blankTypo]}>
                          +91 98765 43210
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.depth2Frame2, styles.depth2FrameSpaceBlock]}>
                <Text style={[styles.truckDetails, styles.textFlexBox]}>
                  Truck Details
                </Text>
              </View>
              <View style={[styles.depth2Frame3, styles.frameFlexBox]}>
                <Depth3frame0121
                  style={[styles.depth3Frame02, styles.depth3FrameLayout]}
                  width={48}
                  height={48}
                />
                <View style={styles.depth3Frame11}>
                  <TextInput
                    style={[styles.depth4Frame01, styles.frameTypo]}
                    placeholder="Truck Number"
                    placeholderTextColor="#fff"
                  />
                  <View style={styles.depth4Frame1}>
                    <Text style={[styles.mh02Ab, styles.textFlexBox]}>
                      MH 02 AB 1234
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.depth2Frame3, styles.frameFlexBox]}>
                <Depth3frame0121
                  style={[styles.depth3Frame02, styles.depth3FrameLayout]}
                  width={48}
                  height={48}
                />
                <View style={styles.depth3Frame11}>
                  <TextInput
                    style={[styles.depth4Frame01, styles.frameTypo]}
                    placeholder="Truck Model"
                    placeholderTextColor="#fff"
                  />
                  <View style={styles.depth4Frame11}>
                    <Text style={[styles.mh02Ab, styles.textFlexBox]}>
                      Tata Motors
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.depth2Frame2, styles.depth2FrameSpaceBlock]}>
                <Text style={[styles.truckDetails, styles.textFlexBox]}>
                  Earnings Summary
                </Text>
              </View>
              <View style={[styles.depth2Frame6, styles.frameFlexBox]}>
                <View style={styles.depth3FrameBorder}>
                  <View style={styles.depth1Frame0}>
                    <Text
                      style={[styles.totalEarnings, styles.depth4Frame01Typo]}
                    >
                      Total Earnings
                    </Text>
                  </View>
                  <View style={styles.depth4Frame12}>
                    <Text style={[styles.text, styles.textFlexBox]}>
                      ₹ 1,25,000
                    </Text>
                  </View>
                </View>
                <View style={[styles.depth3Frame13, styles.depth3FrameBorder]}>
                  <View style={styles.depth1Frame0}>
                    <Text
                      style={[styles.totalEarnings, styles.depth4Frame01Typo]}
                    >
                      Completed Trips
                    </Text>
                  </View>
                  <View style={styles.depth1Frame0}>
                    <Text style={[styles.text, styles.textFlexBox]}>25</Text>
                  </View>
                </View>
                <View style={styles.depth3FrameBorder}>
                  <View style={styles.depth1Frame0}>
                    <Text
                      style={[styles.totalEarnings, styles.depth4Frame01Typo]}
                    >
                      Average Rating
                    </Text>
                  </View>
                  <View style={styles.depth1Frame0}>
                    <Text style={[styles.text, styles.textFlexBox]}>4.8</Text>
                  </View>
                </View>
              </View>
              <View style={styles.depth2FrameSpaceBlock}>
                <Text style={[styles.truckDetails, styles.textFlexBox]}>
                  Settings
                </Text>
              </View>
              <View
                style={[styles.depth2Frame8, styles.depth2FrameSpaceBlock1]}
              >
                <TextInput
                  style={[styles.depth3Frame05, styles.frameTypo]}
                  placeholder="Language"
                  placeholderTextColor="#fff"
                />
                <View>
                  <View style={styles.depth3Frame01}>
                    <Text style={[styles.english, styles.blankTypo]}>
                      English
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.depth2Frame8, styles.depth2FrameSpaceBlock1]}
              >
                <View style={styles.depth3Frame06}>
                  <Text style={[styles.notifications, styles.blankTypo]}>
                    Notifications
                  </Text>
                </View>
                <View>
                  <View style={styles.depth4Frame07}>
                    <View style={styles.depth5Frame01} />
                  </View>
                </View>
              </View>
              <View
                style={[styles.depth2Frame8, styles.depth2FrameSpaceBlock1]}
              >
                <View style={styles.depth3Frame06}>
                  <Text style={[styles.notifications, styles.blankTypo]}>
                    Privacy Policy
                  </Text>
                </View>
                <Depth3frame12
                  style={styles.depth3Frame16}
                  width={28}
                  height={28}
                />
              </View>
              <View
                style={[styles.depth2Frame8, styles.depth2FrameSpaceBlock1]}
              >
                <View style={styles.depth3Frame06}>
                  <Text style={[styles.notifications, styles.blankTypo]}>
                    Terms of Service
                  </Text>
                </View>
                <Depth3frame12
                  style={styles.depth3Frame16}
                  width={28}
                  height={28}
                />
              </View>
              <View style={styles.depth2FrameSpaceBlock}>
                <Text style={[styles.truckDetails, styles.textFlexBox]}>
                  Support
                </Text>
              </View>
              <View
                style={[styles.depth2Frame8, styles.depth2FrameSpaceBlock1]}
              >
                <View style={styles.depth3Frame06}>
                  <Text style={[styles.notifications, styles.blankTypo]}>
                    Help Center
                  </Text>
                </View>
                <Depth3frame12
                  style={styles.depth3Frame16}
                  width={28}
                  height={28}
                />
              </View>
              <View
                style={[styles.depth2Frame8, styles.depth2FrameSpaceBlock1]}
              >
                <View style={styles.depth3Frame06}>
                  <Text style={[styles.notifications, styles.blankTypo]}>
                    Contact Support
                  </Text>
                </View>
                <Depth3frame12
                  style={styles.depth3Frame16}
                  width={28}
                  height={28}
                />
              </View>
            </View>
            <View style={styles.depth1Frame0}>
              <View style={[styles.depth2Frame01, styles.depth2FrameBg]}>
                <View style={styles.depth3FrameFlexBox}>
                  <Depth4frame021
                    style={styles.depth4Frame08}
                    width={24}
                    height={32}
                  />
                  <View>
                    <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                  </View>
                </View>
                <View style={styles.depth3FrameFlexBox}>
                  <Depth4frame010
                    style={styles.depth4Frame08}
                    width={24}
                    height={32}
                  />
                  <View>
                    <Text style={[styles.home, styles.homeTypo]}>My Trips</Text>
                  </View>
                </View>
                <View style={styles.depth3FrameFlexBox}>
                  <Depth4frame09
                    style={styles.depth4Frame08}
                    width={24}
                    height={32}
                  />
                  <View>
                    <Text style={[styles.home, styles.homeTypo]}>Wallet</Text>
                  </View>
                </View>
                <View style={styles.depth3FrameFlexBox}>
                  <Depth4frame013
                    style={styles.depth4Frame08}
                    width={24}
                    height={32}
                  />
                  <View>
                    <Text style={[styles.home, styles.homeTypo]}>Chat</Text>
                  </View>
                </View>
                <View style={[styles.depth3Frame4, styles.depth3FrameFlexBox]}>
                  <Depth4frame012
                    style={styles.depth4Frame08}
                    width={24}
                    height={32}
                  />
                  <View>
                    <Text style={[styles.profile2, styles.homeTypo]}>
                      Profile
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.depth2Frame15, styles.depth2FrameBg]} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 890,
  },
  profileLayout: {
    width: "100%",
    flex: 1,
  },
  frameFlexBox1: {
    gap: 0,
    justifyContent: "space-between",
  },
  depth2FrameSpaceBlock: {
    paddingBottom: Padding.p_8,
    paddingTop: Padding.p_16,
    paddingHorizontal: Padding.p_16,
    alignSelf: "stretch",
  },
  textTypo: {
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  frameFlexBox: {
    gap: Gap.gap_16,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  blankTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_16,
    textAlign: "left",
    alignSelf: "stretch",
  },
  depth3FrameLayout: {
    height: 48,
    width: 48,
  },
  frameTypo: {
    fontSize: FontSize.size_16,
    overflow: "hidden",
  },
  depth4Frame01Typo: {
    fontFamily: FontFamily.spaceGroteskMedium,
    fontWeight: "500",
  },
  depth3FrameBorder: {
    minWidth: 158,
    padding: Padding.p_24,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray200,
    borderRadius: Border.br_12,
    gap: Gap.gap_8,
    borderStyle: "solid",
    flex: 1,
  },
  depth2FrameSpaceBlock1: {
    paddingHorizontal: Padding.p_16,
    alignItems: "center",
    backgroundColor: Color.colorGray400,
  },
  depth2FrameBg: {
    backgroundColor: Color.colorGray200,
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
  profile1: {
    textAlign: "center",
    color: Color.colorWhite,
    lineHeight: 23,
    fontSize: FontSize.size_18,
    fontWeight: "700",
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
    backgroundColor: Color.colorGray400,
  },
  depth5Frame0: {
    width: 128,
    borderRadius: 64,
    maxHeight: "100%",
    minHeight: 128,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  rohanVerma: {
    fontSize: FontSize.size_22,
    lineHeight: 28,
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
  },
  depth6Frame0: {
    height: 28,
  },
  blank: {
    color: Color.colorLightsteelblue,
    fontFamily: FontFamily.spaceGroteskRegular,
  },
  depth6Frame1: {
    width: 135,
  },
  depth5Frame1: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  depth4Frame0: {
    flex: 1,
  },
  depth3Frame01: {
    flex: 1,
  },
  depth2Frame1: {
    padding: Padding.p_16,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  truckDetails: {
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
    lineHeight: 23,
    fontSize: FontSize.size_18,
  },
  depth2Frame2: {
    height: 47,
  },
  depth3Frame02: {
    borderRadius: Border.br_8,
  },
  depth4Frame01: {
    fontFamily: FontFamily.spaceGroteskMedium,
    fontWeight: "500",
  },
  mh02Ab: {
    fontSize: FontSize.size_14,
    lineHeight: 21,
    color: Color.colorLightsteelblue,
    fontFamily: FontFamily.spaceGroteskRegular,
  },
  depth4Frame1: {
    width: 107,
    overflow: "hidden",
  },
  depth3Frame11: {
    justifyContent: "center",
  },
  depth2Frame3: {
    height: 72,
    paddingVertical: Padding.p_8,
    minHeight: 72,
    paddingHorizontal: Padding.p_16,
    alignItems: "center",
    backgroundColor: Color.colorGray400,
  },
  depth4Frame11: {
    width: 94,
    overflow: "hidden",
  },
  totalEarnings: {
    lineHeight: 24,
    fontSize: FontSize.size_16,
    textAlign: "left",
    alignSelf: "stretch",
    color: Color.colorWhite,
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.size_24,
    lineHeight: 30,
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceGroteskBold,
    fontWeight: "700",
  },
  depth4Frame12: {
    height: 60,
    alignSelf: "stretch",
  },
  depth3Frame13: {
    height: 142,
  },
  depth2Frame6: {
    flexWrap: "wrap",
    alignContent: "flex-start",
    padding: Padding.p_16,
  },
  depth3Frame05: {
    fontFamily: FontFamily.spaceGroteskRegular,
    flex: 1,
    width: "100%",
  },
  english: {
    fontFamily: FontFamily.spaceGroteskRegular,
    color: Color.colorWhite,
  },
  depth2Frame8: {
    height: 56,
    paddingVertical: 0,
    minHeight: 56,
    flexDirection: "row",
    gap: 0,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  notifications: {
    fontFamily: FontFamily.spaceGroteskRegular,
    color: Color.colorWhite,
    overflow: "hidden",
  },
  depth3Frame06: {
    overflow: "hidden",
    flex: 1,
  },
  depth5Frame01: {
    width: 27,
    shadowColor: Color.colorGray500,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderRadius: 14,
    overflow: "hidden",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  depth4Frame07: {
    width: 51,
    borderRadius: 16,
    backgroundColor: Color.colorDarkslategray300,
    height: 31,
    padding: 2,
    alignItems: "center",
    flexDirection: "row",
  },
  depth3Frame16: {
    width: 28,
    height: 28,
  },
  depth4Frame08: {
    width: 24,
    height: 32,
  },
  home: {
    color: Color.colorLightsteelblue,
  },
  profile2: {
    color: Color.colorWhite,
  },
  depth3Frame4: {
    borderRadius: 27,
  },
  depth2Frame01: {
    borderColor: Color.colorDarkslategray300,
    borderTopWidth: 1,
    paddingTop: Padding.p_8,
    paddingBottom: Padding.p_12,
    gap: Gap.gap_8,
    borderStyle: "solid",
    backgroundColor: Color.colorGray200,
    paddingHorizontal: Padding.p_16,
    flexDirection: "row",
  },
  depth2Frame15: {
    height: 20,
  },
  depth0Frame0: {
    minHeight: 844,
    overflow: "hidden",
    backgroundColor: Color.colorGray400,
    gap: 0,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  scrollview: {
    maxWidth: "100%",
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  keyboardavoidingview: {
    flex: 1,
  },
  profile: {
    flex: 1,
  },
});

export default Profile;
