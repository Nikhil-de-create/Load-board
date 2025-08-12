import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Depth1Frame01111111 from "../components/Depth1Frame01111111";
import Depth1Frame111 from "../components/Depth1Frame111";
import { Color } from "../GlobalStyles";

const Chat = () => {
  return (
    <SafeAreaView style={styles.chatFlexBox}>
      <KeyboardAvoidingView
        style={styles.chatFlexBox}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={[styles.scrollview, styles.chatFlexBox]}
          contentContainerStyle={styles.chatScrollViewContent}
        >
          <View style={styles.depth0Frame0}>
            <Depth1Frame01111111 />
            <Depth1Frame111 />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chatScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 890,
  },
  chatFlexBox: {
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

export default Chat;
