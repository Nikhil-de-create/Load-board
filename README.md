# Load Board - React Native App

This is a React Native app generated from Figma via Locofy with a complete navigation structure implemented using React Navigation v6.

## Navigation Structure

### Root Navigation
- **App.tsx**: Main app entry point wrapped with AuthProvider
- **src/navigation/index.js**: Main navigation configuration

### Authentication Flow (AuthStack)
1. **SplashScreen** → Automatically navigates to Language after 3 seconds
2. **SelectLanguage** → Continue button navigates to Welcome
3. **WelcomeScreen** → Get Started button navigates to SignUp, "I already have an account" navigates to Login
4. **SignUpScreen** → Create Account button navigates to OTP
5. **OTPScreen** → Verify OTP button navigates to KYC
6. **KYC** → Next button navigates to TruckDetails
7. **TruckDetails** → Save button navigates to Login
8. **LoginScreen** → Sign In button authenticates user and navigates to main app

### Main App (MainTabs)
After successful authentication, users see a bottom tab navigator with:

- **Home Tab** → Contains HomeStack with nested navigation
- **MyTrips Tab** → Direct screen access
- **Wallet Tab** → Direct screen access  
- **Chat Tab** → Direct screen access
- **Profile Tab** → Contains logout functionality

### Home Stack (Nested within Home Tab)
- **HomeScreen** → Main loads list
- **LoadDetails** → Individual load details
- **PlaceBid** → Bid placement screen
- **TripDetails** → Trip information
- **LiveTracking** → Real-time tracking

## Key Features

- **Authentication Context**: Manages user login state using React Context
- **Automatic Navigation**: Splash screen automatically progresses through auth flow
- **Preserved UI**: All existing Locofy-generated UI components are maintained
- **Type Safety**: Uses proper TypeScript/JavaScript with React Navigation types
- **Responsive Design**: Adapts to different screen sizes and orientations

## File Structure

```
src/
├── navigation/
│   └── index.js          # Main navigation configuration
└── state/
    └── auth.js           # Authentication context and provider

screens/
├── SplashScreen.tsx      # Entry point with auto-navigation
├── SelectLanguage.tsx    # Language selection
├── WelcomeScreen.tsx     # Welcome screen
├── SignUpScreen.tsx      # User registration
├── OTPScreen.tsx         # OTP verification
├── KYC.tsx              # KYC verification
├── TruckDetails.tsx      # Truck information
├── LoginScreen.tsx       # User login
├── HomeScreen.tsx        # Main loads list
├── MyTrips.tsx          # Trip history
├── Wallet.tsx            # Wallet management
├── Chat.tsx              # Chat interface
├── Profile.tsx           # User profile with logout
├── LoadDetails.tsx       # Load information
├── Bid.tsx               # Bid placement
├── TripDetails.tsx       # Trip details
└── LiveTracking.tsx      # Live tracking
```

## Usage

1. **Installation**: All required React Navigation packages are already installed
2. **Running**: Use standard React Native commands (e.g., `npx react-native run-android`)
3. **Navigation**: The app automatically handles navigation flow based on authentication state
4. **Logout**: Users can logout from the Profile tab, which returns them to the auth flow

## Dependencies

- React Navigation v6
- React Native Screens
- React Native Safe Area Context
- React Native Gesture Handler
- React Native Reanimated

## Development Notes

- All existing Locofy UI components are preserved
- Navigation is implemented using JavaScript (not TypeScript) as requested
- Authentication state is managed centrally through React Context
- The app automatically switches between auth and main app flows based on login state
