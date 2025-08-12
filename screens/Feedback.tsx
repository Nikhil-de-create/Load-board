import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Depth1Frame011111111 from "../components/Depth1Frame011111111";
import Depth1Frame1 from "../components/Depth1Frame1";
import { Color } from "../GlobalStyles";

const Feedback = () => {
  return (
    <SafeAreaView style={styles.feedbackFlexBox}>
      <KeyboardAvoidingView
        style={styles.feedbackFlexBox}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={[styles.scrollview, styles.feedbackFlexBox]}
          contentContainerStyle={styles.feedbackScrollViewContent}
        >
          <View style={styles.depth0Frame0}>
            <Depth1Frame011111111 />
            <Depth1Frame1 />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  feedbackScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 890,
  },
  feedbackFlexBox: {
    flex: 1,
    width: "100%",
  },
  depth0Frame0: {
    alignSelf: "stretch",
    backgroundColor: Color.colorGray300,
    overflow: "hidden",
    justifyContent: "space-between",
    gap: 0,
    minHeight: 844,
  },
  scrollview: {
    backgroundColor: Color.colorWhite,
    maxWidth: "100%",
  },
});

export default Feedback;
