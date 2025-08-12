import * as React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const WelcomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Load Board</Text>
        <Text style={styles.subtitle}>
          Your trusted platform for finding and managing loads
        </Text>
        
        <View style={styles.buttonContainer}>
          <Pressable 
            style={styles.primaryButton}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </Pressable>
          
          <Pressable 
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.secondaryButtonText}>I already have an account</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
            backgroundColor: Color.colorWhite,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: FontSize.size_28,
    fontFamily: FontFamily.spaceGroteskBold,
    color: Color.colorBlack,
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.spaceGroteskRegular,
    color: Color.colorDarkgray,
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  primaryButton: {
    backgroundColor: Color.colorRoyalblue100,
    paddingVertical: Padding.p_4,
    paddingHorizontal: Padding.p_16,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.spaceGroteskMedium,
  },
  secondaryButton: {
    paddingVertical: Padding.p_4,
    paddingHorizontal: Padding.p_16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
  },
  secondaryButtonText: {
    color: Color.colorDarkgray,
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.spaceGroteskMedium,
  },
});

export default WelcomeScreen;
