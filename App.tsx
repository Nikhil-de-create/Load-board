const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "./screens/SplashScreen";
import StitchDesign from "./components/StitchDesign";
import StitchDesign1 from "./components/StitchDesign1";
import TripDetails from "./components/TripDetails";
import LiveTracking from "./components/LiveTracking";
import StitchDesign2 from "./components/StitchDesign2";
import SelectLanguage from "./components/SelectLanguage";
import KYC from "./components/KYC";
import TruckDetails from "./components/TruckDetails";
import HomeScreen from "./components/HomeScreen";
import LoadDetails from "./components/LoadDetails";
import Bid from "./components/Bid";
import TruckPhoto from "./components/TruckPhoto";
import MyTrips from "./components/MyTrips";
import Wallet from "./components/Wallet";
import Withdraw from "./components/Withdraw";
import Chat from "./components/Chat";
import Feedback from "./components/Feedback";
import Profile from "./components/Profile";
import StitchDesign3 from "./components/StitchDesign3";
import StitchDesign4 from "./components/StitchDesign4";
import Depth1Frame01111 from "./components/Depth1Frame01111";
import Depth2Frame1111 from "./components/Depth2Frame1111";
import Depth1Frame0111111 from "./components/Depth1Frame0111111";
import Depth1Frame0111 from "./components/Depth1Frame0111";
import Depth2Frame111 from "./components/Depth2Frame111";
import Depth2Frame4 from "./components/Depth2Frame4";
import Depth1Frame01 from "./components/Depth1Frame01";
import Depth1Frame1 from "./components/Depth1Frame1";
import Depth2Frame21 from "./components/Depth2Frame21";
import Depth1Frame011111 from "./components/Depth1Frame011111";
import Depth1Frame01111111 from "./components/Depth1Frame01111111";
import Depth1Frame111 from "./components/Depth1Frame111";
import Depth1Frame011111111 from "./components/Depth1Frame011111111";
import Depth1Frame011 from "./components/Depth1Frame011";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Depth1Frame1"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Depth1Frame0"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StitchDesign"
              component={StitchDesign}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth1Frame01111"
              component={StitchDesign1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth2Frame1111"
              component={TripDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth1Frame0111111"
              component={LiveTracking}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth1Frame0111"
              component={StitchDesign2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectLanguage"
              component={SelectLanguage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth2Frame111"
              component={KYC}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth1Frame01"
              component={TruckDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth1Frame1"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoadDetails"
              component={LoadDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bid"
              component={Bid}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TruckPhoto"
              component={TruckPhoto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTrips"
              component={MyTrips}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Wallet"
              component={Wallet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Withdraw"
              component={Withdraw}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth1Frame011111111"
              component={Feedback}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth1Frame011"
              component={StitchDesign3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StitchDesign4"
              component={StitchDesign4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth1Frame01111"
              component={Depth1Frame01111}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth2Frame1111"
              component={Depth2Frame1111}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth1Frame0111111"
              component={Depth1Frame0111111}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth1Frame0111"
              component={Depth1Frame0111}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth2Frame111"
              component={Depth2Frame111}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth2Frame111"
              component={Depth2Frame4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth1Frame01"
              component={Depth1Frame01}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth1Frame1"
              component={Depth1Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth1Frame1"
              component={Depth2Frame21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bid"
              component={Depth1Frame011111}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Depth1Frame01111111}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Depth1Frame111}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth1Frame011111111"
              component={Depth1Frame011111111}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Depth1Frame011"
              component={Depth1Frame011}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
