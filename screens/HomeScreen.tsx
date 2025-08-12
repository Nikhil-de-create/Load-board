import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Depth3frame1 from "../assets/depth-3-frame-1.svg";
import Depth2Frame21 from "../components/Depth2Frame21";
import Depth1Frame1 from "../components/Depth1Frame1";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [depth2Frame21Items] = useState([
    {
      pickupMumbai: "Pickup: Mumbai",
      dropDelhi: "Drop: Delhi",
      tons: "10 tons",
      depth4Frame1: require("../assets/depth-4-frame-1.png"),
    },
    {
      pickupMumbai: "Pickup: Bangalore",
      dropDelhi: "Drop: Chennai",
      tons: "15 tons",
      depth4Frame1: require("../assets/depth-4-frame-11.png"),
    },
    {
      pickupMumbai: "Pickup: Kolkata",
      dropDelhi: "Drop: Hyderabad",
      tons: "12 tons",
      depth4Frame1: require("../assets/depth-4-frame-13.png"),
    },
  ]);

  return (
    <ScrollView
      style={[styles.homeScreen, styles.homeScreenLayout]}
      contentContainerStyle={styles.homeScreenScrollViewContent}
    >
      <Pressable
        style={[styles.depth0Frame0, styles.frameFlexBox]}
        onPress={() => navigation.navigate("MyTrips")}
      >
        <View style={styles.depth1Frame0}>
          <View style={[styles.depth2Frame0, styles.depth2FrameFlexBox]}>
            <View style={styles.depth3Frame0}>
              <Text style={styles.loads}>Loads</Text>
            </View>
            <Depth3frame1 style={styles.depth3Frame1} width={48} height={48} />
          </View>
          <View style={[styles.depth2Frame1, styles.depth2FrameFlexBox]}>
            <Image
              style={[styles.depth3Frame01, styles.homeScreenLayout]}
              resizeMode="cover"
              source={require("../assets/depth-3-frame-02.png")}
            />
          </View>
          {depth2Frame21Items.map((item, index) => (
            <Depth2Frame21
              key={index}
              pickupMumbai={item.pickupMumbai}
              dropDelhi={item.dropDelhi}
              tons={item.tons}
              depth4Frame1={item.depth4Frame1}
            />
          ))}
        </View>
        <Depth1Frame1 />
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeScreenScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 890,
  },
  homeScreenLayout: {
    maxWidth: "100%",
    flex: 1,
  },
  frameFlexBox: {
    gap: 0,
    justifyContent: "space-between",
    backgroundColor: Color.colorGray300,
  },
  depth2FrameFlexBox: {
    paddingHorizontal: Padding.p_16,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  loads: {
    fontSize: FontSize.size_18,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.spaceGroteskBold,
    color: Color.colorWhite,
    textAlign: "center",
    alignSelf: "stretch",
  },
  depth3Frame0: {
    paddingLeft: Padding.p_48,
    alignItems: "center",
    flex: 1,
  },
  depth3Frame1: {
    width: 48,
    height: 48,
  },
  depth2Frame0: {
    paddingTop: Padding.p_16,
    paddingBottom: Padding.p_8,
    alignItems: "center",
    gap: 0,
    justifyContent: "space-between",
    backgroundColor: Color.colorGray300,
  },
  depth3Frame01: {
    borderRadius: Border.br_8,
    height: 201,
    overflow: "hidden",
  },
  depth2Frame1: {
    paddingVertical: Padding.p_12,
  },
  depth1Frame0: {
    alignSelf: "stretch",
  },
  depth0Frame0: {
    minHeight: 844,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  homeScreen: {
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default HomeScreen;
