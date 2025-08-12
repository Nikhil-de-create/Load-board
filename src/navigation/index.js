import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { AuthContext } from '../state/auth';

// Import screens
import SplashScreen from '../../screens/SplashScreen';
import SelectLanguage from '../../screens/SelectLanguage';
import KYC from '../../screens/KYC';
import TruckDetails from '../../screens/TruckDetails';
import HomeScreen from '../../screens/HomeScreen';
import MyTrips from '../../screens/MyTrips';
import Wallet from '../../screens/Wallet';
import Chat from '../../screens/Chat';
import Profile from '../../screens/Profile';
import LoadDetails from '../../screens/LoadDetails';
import Bid from '../../screens/Bid';
import TripDetails from '../../screens/TripDetails';
import LiveTracking from '../../screens/LiveTracking';

// Placeholder screens (created later)
import WelcomeScreen from '../../screens/WelcomeScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import OTPScreen from '../../screens/OTPScreen';
import LoginScreen from '../../screens/LoginScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Main Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>🏠</Text>
          ),
        }}
      />
      <Tab.Screen 
        name="MyTrips" 
        component={MyTrips} 
        options={{
          tabBarLabel: 'My Trips',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>🚛</Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Wallet" 
        component={Wallet} 
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>💰</Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Chat" 
        component={Chat} 
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>💬</Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>👤</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Home Stack Navigator
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoadDetails" component={LoadDetails} />
      <Stack.Screen name="PlaceBid" component={Bid} />
      <Stack.Screen name="TripDetails" component={TripDetails} />
      <Stack.Screen name="LiveTracking" component={LiveTracking} />
    </Stack.Navigator>
  );
}

// Auth Stack Navigator
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Language" component={SelectLanguage} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="KYC" component={KYC} />
      <Stack.Screen name="TruckDetails" component={TruckDetails} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

// Root Navigator
function RootNavigator() {
  const { isAuthenticated, isLoading } = React.useContext(AuthContext);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="Main" component={MainTabs} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
