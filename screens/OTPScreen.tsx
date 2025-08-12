import * as React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const OTPScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>
          Enter the 6-digit code sent to your email
        </Text>
        
        <View style={styles.otpContainer}>
          <TextInput
            style={styles.otpInput}
            placeholder="0"
            placeholderTextColor={Color.colorDarkgray}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            style={styles.otpInput}
            placeholder="0"
            placeholderTextColor={Color.colorDarkgray}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            style={styles.otpInput}
            placeholder="0"
            placeholderTextColor={Color.colorDarkgray}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            style={styles.otpInput}
            placeholder="0"
            placeholderTextColor={Color.colorDarkgray}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            style={styles.otpInput}
            placeholder="0"
            placeholderTextColor={Color.colorDarkgray}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            style={styles.otpInput}
            placeholder="0"
            placeholderTextColor={Color.colorDarkgray}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>
        
        <View style={styles.buttonContainer}>
          <Pressable 
            style={styles.primaryButton}
            onPress={() => navigation.navigate('KYC')}
          >
            <Text style={styles.primaryButtonText}>Verify OTP</Text>
          </Pressable>
          
          <Pressable style={styles.linkButton}>
            <Text style={styles.linkText}>Resend</Text>
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
    marginBottom: 32,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderRadius: 8,
    width: 45,
    height: 45,
    textAlign: 'center',
    fontSize: FontSize.size_18,
    fontFamily: FontFamily.spaceGroteskMedium,
    color: Color.colorBlack,
  },
  buttonContainer: {
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
  linkButton: {
    alignItems: 'center',
    paddingVertical: Padding.p_4,
  },
  linkText: {
    color: Color.colorRoyalblue100,
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.spaceGroteskMedium,
  },
});

export default OTPScreen;
