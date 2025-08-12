import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import Depth1Frame0 from "../components/Depth1Frame0";
import { Color } from "../GlobalStyles";

const SplashScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  useEffect(() => {
    // Navigate to Language screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Language');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ScrollView
      style={styles.splashScreen}
      contentContainerStyle={styles.splashScreenScrollViewContent}
    >
      <View style={[styles.depth0Frame0, styles.frameBg]}>
        <Depth1Frame0 />
        <View style={styles.depth1Frame1}>
          <View style={[styles.depth2Frame0, styles.frameBg]} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  splashScreenScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 890,
  },
  frameBg: {
    backgroundColor: Color.colorGray300,
    alignSelf: "stretch",
  },
  depth2Frame0: {
    height: 20,
  },
  depth1Frame1: {
    alignSelf: "stretch",
  },
  depth0Frame0: {
    overflow: "hidden",
    justifyContent: "space-between",
    gap: 0,
    minHeight: 844,
  },
  splashScreen: {
    width: "100%",
    backgroundColor: Color.colorWhite,
    flex: 1,
    maxWidth: "100%",
  },
});

export default SplashScreen;
