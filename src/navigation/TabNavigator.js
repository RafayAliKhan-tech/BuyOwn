import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";

// Screens
import ProductListScreen from "../screens/ProductListScreen";
import CartScreen from "../screens/CartScreen";
import WishlistScreen from "../screens/WishlistScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProfileTabWrapper from "../screens/ProfileTabWrapper";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: 70 },
      }}
    >

      {/* HOME */}
      <Tab.Screen
        name="Home"
        component={ProductListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? COLORS.primary : COLORS.secondary}
            />
          ),
        }}
      />

      {/* CART */}
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name={focused ? "cart" : "cart-outline"} 
              size={24}
              color={focused ? COLORS.primary : COLORS.secondary}
            />
          ),
        }}
      />

      {/* WISHLIST */}
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name={focused ? "heart" : "heart-outline"} 
              size={24}
              color={focused ? COLORS.primary : COLORS.secondary}
            />
          ),
        }}
      />

      {/* PROFILE */}
      <Tab.Screen
        name="Profile"
        component={ProfileTabWrapper}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name={focused ? "person" : "person-outline"} 
              size={24}
              color={focused ? COLORS.primary : COLORS.secondary}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
}