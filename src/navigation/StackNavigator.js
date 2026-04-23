// src/navigation/StackNavigator.js
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
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CategoryScreen from "../screens/CategoryScreen";
import CartScreen from "../screens/CartScreen";
import CheckOutScreen from "../screens/CheckOutScreen";

// Tabs
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="SplashStart">

      {/* Splash */}
      <Stack.Screen
        name="SplashStart"
        component={SplashScreen}
        options={{ headerShown: false }}
      />

      {/* Onboarding */}
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />

      {/* Auth */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />

      {/* Main App */}
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />

      {/* Other Screens */}
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GeneralSettings" component={GeneralSettingsScreen} options={{ headerShown: false }} />

      <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: true }} />
      <Stack.Screen name="MyOrders" component={MyOrdersScreen} options={{ headerShown: true }} />
      <Stack.Screen name="MyCart" component={CartScreen} options={{ headerShown: true }} />
      <Stack.Screen name="Checkout" component={CheckOutScreen} options={{ headerShown: true }} />

      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ headerShown: false }} />

      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          headerShown: false,
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />

    </Stack.Navigator>
  );
}