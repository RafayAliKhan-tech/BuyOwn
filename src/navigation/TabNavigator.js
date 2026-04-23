// //src/navigation/TabNavigator.js
// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";
// import { COLORS } from "../constants/theme";

// // Screens
// import ProductListScreen from "../screens/ProductListScreen";
// import CartScreen from "../screens/CartScreen";
// import WishlistScreen from "../screens/WishlistScreen";
// import ProfileScreen from "../screens/ProfileScreen";
// import ProfileTabWrapper from "../screens/ProfileTabWrapper";

// const Tab = createBottomTabNavigator();

// export default function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: { height: 70 },
//       }}
//     >

//       {/* HOME */}
//       <Tab.Screen
//         name="Home"
//         component={ProductListScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <Ionicons
//               name={focused ? "home" : "home-outline"}
//               size={24}
//               color={focused ? COLORS.primary : COLORS.secondary}
//             />
//           ),
//         }}
//       />

//       {/* CART */}
//       <Tab.Screen
//         name="Cart"
//         component={CartScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <Ionicons 
//               name={focused ? "cart" : "cart-outline"} 
//               size={24}
//               color={focused ? COLORS.primary : COLORS.secondary}
//             />
//           ),
//         }}
//       />

//       {/* WISHLIST */}
//       <Tab.Screen
//         name="Wishlist"
//         component={WishlistScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <Ionicons 
//               name={focused ? "heart" : "heart-outline"} 
//               size={24}
//               color={focused ? COLORS.primary : COLORS.secondary}
//             />
//           ),
//         }}
//       />

//       {/* PROFILE */}
//       <Tab.Screen
//         name="Profile"
//         component={ProfileTabWrapper}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <Ionicons 
//               name={focused ? "person" : "person-outline"} 
//               size={24}
//               color={focused ? COLORS.primary : COLORS.secondary}
//             />
//           ),
//         }}
//       />

//     </Tab.Navigator>
//   );
// }
// src/navigation/TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";

// ✅ Import TopBar
import TopBar from "../components/TopBar";

// Screens
import ProductListScreen from "../screens/ProductListScreen";
import CartScreen from "../screens/CartScreen";
import WishlistScreen from "../screens/WishlistScreen";
import ProfileTabWrapper from "../screens/ProfileTabWrapper";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        // ❌ REMOVE headerShown: false
        tabBarShowLabel: false,
        tabBarStyle: { height: 70 },
      }}
    >

      {/* 🔥 HOME */}
      <Tab.Screen
        name="Home"
        component={ProductListScreen}
        options={{
          headerShown: true,
          header: () => <TopBar title="Home" />,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? COLORS.primary : COLORS.secondary}
            />
          ),
        }}
      />

      {/* 🔥 CART */}
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: true,
          header: () => <TopBar title="My Cart" />,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={24}
              color={focused ? COLORS.primary : COLORS.secondary}
            />
          ),
        }}
      />

      {/* 🔥 WISHLIST */}
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          headerShown: true,
          header: () => <TopBar title="Wishlist" />,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={24}
              color={focused ? COLORS.primary : COLORS.secondary}
            />
          ),
        }}
      />

      {/* 🔥 PROFILE */}
      <Tab.Screen
        name="Profile"
        component={ProfileTabWrapper}
        options={{
          headerShown: true,
          header: () => <TopBar title="Profile" />,
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