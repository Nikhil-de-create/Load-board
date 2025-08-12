# Load Board App Navigation Structure

This document describes the navigation structure implemented in the Load Board React Native app.

## Navigation Architecture

The app uses React Navigation v6 with a hierarchical structure:

```
App
├── AuthProvider (Context)
└── Navigation
    ├── RootNavigator
    │   ├── AuthStack (when not authenticated)
    │   └── MainTabs (when authenticated)
    │       ├── HomeStack
    │       ├── MyTrips
    │       ├── Wallet
    │       ├── Chat
    │       └── Profile
```

## Authentication Flow

### Auth Stack (Unauthenticated Users)
1. **SplashScreen** - App splash screen (auto-navigates after 3 seconds)
2. **SelectLanguage** - Language selection screen
3. **WelcomeScreen** - Welcome screen with sign up/login options
4. **SignUpScreen** - User registration form
5. **OTPScreen** - OTP verification
6. **KYCScreen** - KYC verification
7. **TruckDetails** - Truck information input
8. **LoginScreen** - User login form

### Main App (Authenticated Users)
After successful authentication, users are taken to the main tab navigator:

- **Home Tab** - Contains HomeStack for load-related screens
- **My Trips Tab** - Trip management
- **Wallet Tab** - Financial management
- **Chat Tab** - Communication
- **Profile Tab** - User profile and settings

### Home Stack
- **HomeScreen** - Main loads list
- **LoadDetails** - Individual load information
- **PlaceBid** - Bidding interface
- **TripDetails** - Trip information
- **LiveTracking** - Real-time tracking

## Key Features

- **Automatic Navigation**: Splash screen automatically navigates to language selection
- **Authentication State Management**: Uses React Context for auth state
- **Protected Routes**: Main app screens are only accessible after authentication
- **Seamless Flow**: Users can navigate between auth screens and main app
- **Logout Functionality**: Profile screen includes logout button

## Usage

### Navigation Between Screens
```javascript
import { useNavigation } from '@react-navigation/native';

const MyScreen = () => {
  const navigation = useNavigation();
  
  // Navigate to another screen
  navigation.navigate('ScreenName');
  
  // Go back
  navigation.goBack();
};
```

### Authentication Functions
```javascript
import { useAuth } from '../src/state/auth';

const MyComponent = () => {
  const { signIn, signUp, signOut, isAuthenticated, user } = useAuth();
  
  // Use auth functions as needed
};
```

## File Structure

```
src/
├── navigation/
│   └── index.js          # Main navigation configuration
├── state/
│   └── auth.js           # Authentication context and state
screens/                   # All screen components
├── SplashScreen.tsx
├── SelectLanguage.tsx
├── WelcomeScreen.tsx
├── SignUpScreen.tsx
├── OTPScreen.tsx
├── KYC.tsx
├── TruckDetails.tsx
├── LoginScreen.tsx
├── HomeScreen.tsx
├── MyTrips.tsx
├── Wallet.tsx
├── Chat.tsx
├── Profile.tsx
├── LoadDetails.tsx
├── Bid.tsx
├── TripDetails.tsx
└── LiveTracking.tsx
```

## Dependencies

- `@react-navigation/native`
- `@react-navigation/native-stack`
- `@react-navigation/bottom-tabs`
- `react-native-screens`
- `react-native-safe-area-context`

## Notes

- All existing Locofy UI code has been preserved
- Navigation is implemented using JavaScript (not TypeScript)
- The app automatically handles authentication state changes
- Users are redirected to appropriate screens based on their auth status
