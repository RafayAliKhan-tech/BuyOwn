//src/navigation/AppNavigator.js
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { AuthContext, AuthProvider } from "../context/AuthContext";

const NavigationStack = () => {
  const { isLoading, isLoggedIn } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#253347" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StackNavigator isLoggedIn={isLoggedIn} />
    </NavigationContainer>
  );
};

export default function AppNavigator() {
  return (
    <AuthProvider>
      <NavigationStack />
    </AuthProvider>
  );
}