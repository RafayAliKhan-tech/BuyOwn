
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/Edit-Profile";
import GeneralSettingsScreen from "../screens/General-Settings";
import SettingsScreen from "../screens/SettingsScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";

// Tabs
import TabNavigator from "./TabNavigator";

// Extra screens (optional outside tabs)
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CategoryScreen from "../screens/CategoryScreen";
import CartScreen from "../screens/CartScreen";
import CheckOutScreen from "../screens/CheckOutScreen";

const Stack = createNativeStackNavigator();

/* AUTH STACK - Shown when user is not logged in */
const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

/* MAIN APP STACK - Shown when user is logged in */
const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/* Main app with bottom tabs */}
    <Stack.Screen 
      name="MainTabs" 
      component={TabNavigator}
      options={{ headerShown: false }}
    />

    {/* Modal/Stack screens on top of tabs */}
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    <Stack.Screen name="GeneralSettings" component={GeneralSettingsScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="MyOrders" component={MyOrdersScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    <Stack.Screen 
      name="CategoryScreen" 
      component={CategoryScreen}
      options={{
        presentation: "modal",
        animation: "slide_from_bottom",
      }}
    />
    <Stack.Screen name="MyCart" component={CartScreen} />
    <Stack.Screen name="Checkout" component={CheckOutScreen} />
  </Stack.Navigator>
);

/* ROOT STACK - Always show MainTabs after Onboarding */
export default function StackNavigator({ isLoggedIn }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Splash & Onboarding - shown first time only */}
      <Stack.Screen 
        name="SplashStart" 
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Onboarding" 
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />

      {/* Main App - Always Available */}
      <Stack.Screen 
        name="MainTabs" 
        component={TabNavigator}
        options={{ headerShown: false }}
      />

      {/* Additional Screens - Available after MainTabs */}
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="GeneralSettings" component={GeneralSettingsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="MyOrders" component={MyOrdersScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen 
        name="CategoryScreen" 
        component={CategoryScreen}
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen name="MyCart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckOutScreen} />

      {/* Auth Stack - For users who want to login */}
      <Stack.Screen 
        name="AuthStack" 
        component={AuthStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}