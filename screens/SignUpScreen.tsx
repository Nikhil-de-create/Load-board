import * as React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const SignUpScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Sign up to start using Load Board
        </Text>
        
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor={Color.colorDarkgray}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={Color.colorDarkgray}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={Color.colorDarkgray}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor={Color.colorDarkgray}
            secureTextEntry
          />
        </View>
        
        <View style={styles.buttonContainer}>
          <Pressable 
            style={styles.primaryButton}
            onPress={() => navigation.navigate('OTP')}
          >
            <Text style={styles.primaryButtonText}>Create Account</Text>
          </Pressable>
          
          <Pressable 
            style={styles.linkButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.linkText}>Already have an account? Sign In</Text>
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
  form: {
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderRadius: 8,
    paddingVertical: Padding.p_4,
    paddingHorizontal: Padding.p_12,
    marginBottom: 16,
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.spaceGroteskRegular,
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

export default SignUpScreen;
