import * as React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../src/state/auth";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { signIn } = useAuth();

  const handleLogin = async () => {
    // In a real app, you would get these values from state
    const credentials = {
      email: 'user@example.com',
      password: 'password123'
    };
    
    const result = await signIn(credentials);
    if (result.success) {
      // Navigation will be handled automatically by the auth context
      console.log('Login successful');
    } else {
      console.log('Login failed:', result.error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Sign in to your Load Board account
        </Text>
        
        <View style={styles.form}>
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
        </View>
        
        <View style={styles.buttonContainer}>
          <Pressable 
            style={styles.primaryButton}
            onPress={handleLogin}
          >
            <Text style={styles.primaryButtonText}>Sign In</Text>
          </Pressable>
          
          <View style={styles.linksContainer}>
            <Pressable style={styles.linkButton}>
              <Text style={styles.linkText}>Sign Up</Text>
            </Pressable>
            <Pressable style={styles.linkButton}>
              <Text style={styles.linkText}>Forgot Password?</Text>
            </Pressable>
          </View>
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
    gap: 24,
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
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkButton: {
    paddingVertical: Padding.p_4,
  },
  linkText: {
    color: Color.colorRoyalblue100,
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.spaceGroteskMedium,
  },
});

export default LoginScreen;
