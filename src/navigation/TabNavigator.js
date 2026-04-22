// // // // frontend/src/navigation/TabNavigator.js
// // // import React, { useEffect, useRef } from "react";
// // // import { View, Text, StyleSheet, TouchableOpacity, Animated, Platform } from "react-native";
// // // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // // import { Ionicons } from "@expo/vector-icons";
// // // import { COLORS } from "../constants/theme";
// // // // import StackNavigator from "./Stac/kNavigator";
// // // import ProductListScreen from "../screens/ProductListScreen";
// // // import CartScreen from "../screens/CartScreen";
// // // import WishlistScreen from "../screens/WishlistScreen";
// // // import ProfileScreen from "../screens/ProfileScreen";

// // // const Tab = createBottomTabNavigator();

// // // const TabButton = (props) => {
// // //   const { item, onPress, accessibilityState } = props;
// // //   const focused = accessibilityState?.selected;

// // //   // Animation Refs
// // //   const widthAnim = useRef(new Animated.Value(0)).current;
// // //   const opacityAnim = useRef(new Animated.Value(0)).current;

// // //   useEffect(() => {
// // //     if (focused) {
// // //       // Jab tab focus ho toh text ko expand aur show karo
// // //       Animated.parallel([
// // //         Animated.timing(widthAnim, {
// // //           toValue: 1, // Full expansion
// // //           duration: 300,
// // //           useNativeDriver: false, // Width ke liye false rakhna parta hai
// // //         }),
// // //         Animated.timing(opacityAnim, {
// // //           toValue: 1,
// // //           duration: 300,
// // //           useNativeDriver: false,
// // //         }),
// // //       ]).start();
// // //     } else {
// // //       // Jab focus hatay toh wapas zero
// // //       Animated.parallel([
// // //         Animated.timing(widthAnim, {
// // //           toValue: 0,
// // //           duration: 200,
// // //           useNativeDriver: false,
// // //         }),
// // //         Animated.timing(opacityAnim, {
// // //           toValue: 0,
// // //           duration: 200,
// // //           useNativeDriver: false,
// // //         }),
// // //       ]).start();
// // //     }
// // //   }, [focused]);

// // //   // Width calculation for the label
// // //   const textWidth = widthAnim.interpolate({
// // //     inputRange: [0, 1],
// // //     outputRange: [0, 70], // Isko adjust kar sakte hain label length ke mutabiq
// // //   });

// // //   return (
// // //     <TouchableOpacity
// // //       onPress={onPress}
// // //       activeOpacity={0.9}
// // //       style={styles.container}
// // //     >
// // //       <View style={[styles.pill, focused && styles.pillActive]}>
// // //         <View style={[styles.iconCircle, focused && { backgroundColor: COLORS.primary }]}>
// // //           <Ionicons
// // //             name={focused ? item.activeIcon : item.inactiveIcon}
// // //             size={20}
// // //             color={focused ? COLORS.white : COLORS.secondary}
// // //           />
// // //         </View>

// // //         <Animated.View style={{
// // //           width: textWidth,
// // //           opacity: opacityAnim,
// // //           overflow: 'hidden',
// // //           justifyContent: 'center'
// // //         }}>
// // //           <Text style={styles.pillText}>{item.label}</Text>
// // //         </Animated.View>
// // //       </View>
// // //     </TouchableOpacity>
// // //   );
// // // };

// // // export default function TabNavigator() {
// // //   return (
// // //     <Tab.Navigator
// // //       screenOptions={{
// // //         headerShown: false,
// // //         tabBarShowLabel: false,
// // //         tabBarStyle: styles.tabBar,
// // //       }}
// // //     >
// // //       <Tab.Screen
// // //         name="HomeTab"
// // //         component={StackNavigator}
// // //         options={{
// // //           tabBarButton: (p) => <TabButton {...p} item={{ label: "Home", activeIcon: "home", inactiveIcon: "home-outline" }} />,
// // //         }}
// // //       />
// // //       <Tab.Screen
// // //         name="Home"
// // //         component={ProductListScreen}
// // //       />
// // //       <Tab.Screen
// // //         name="Cart"
// // //         component={CartScreen}
// // //         options={{
// // //           tabBarButton: (p) => <TabButton {...p} item={{ label: "Cart", activeIcon: "cart", inactiveIcon: "cart-outline" }} />,
// // //         }}
// // //       />
// // //       <Tab.Screen
// // //         name="Wishlist"
// // //         component={WishlistScreen}
// // //         options={{
// // //           tabBarButton: (p) => <TabButton {...p} item={{ label: "Saved", activeIcon: "heart", inactiveIcon: "heart-outline" }} />,
// // //         }}
// // //       />
// // //       <Tab.Screen
// // //         name="Profile"
// // //         component={ProfileScreen}
// // //         options={{
// // //           tabBarButton: (p) => <TabButton {...p} item={{ label: "Profile", activeIcon: "person", inactiveIcon: "person-outline" }} />,
// // //         }}
// // //       />
// // //     </Tab.Navigator>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   tabBar: {
// // //     backgroundColor: COLORS.white,
// // //     height: 75,
// // //     borderTopWidth: 0,
// // //     elevation: 20,
// // //     shadowColor: COLORS.black,
// // //     shadowOpacity: 0.1,
// // //     shadowRadius: 10,
// // //     paddingHorizontal: 15,
// // //     position: 'absolute',
// // //     bottom: 0,
// // //     left: 0,
// // //     right: 0,
// // //   },
// // //   container: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   pill: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     paddingVertical: 6,
// // //     paddingHorizontal: 8,
// // //     borderRadius: 30,
// // //     backgroundColor: 'transparent',
// // //   },
// // //   pillActive: {
// // //     backgroundColor: '#E8EBF0',
// // //   },
// // //   iconCircle: {
// // //     width: 36,
// // //     height: 36,
// // //     borderRadius: 18,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   pillText: {
// // //     color: COLORS.primary,
// // //     fontSize: 13,
// // //     fontWeight: '800',
// // //     marginLeft: 4,
// // //     width: 60, // Fixed width taake wrapping na ho animation ke waqt
// // //   },
// // // });
// // // src/navigation/TabNavigator.js
// // import React from "react";
// // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import { Ionicons } from "@expo/vector-icons";
// // import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// // import { COLORS } from "../constants/theme";

// // // Screens
// // import ProductListScreen from "../screens/ProductListScreen";
// // import CartScreen from "../screens/CartScreen";
// // import WishlistScreen from "../screens/WishlistScreen";
// // import ProfileScreen from "../screens/ProfileScreen";

// // const Tab = createBottomTabNavigator();

// // export default function TabNavigator() {
// //   return (
// //     <Tab.Navigator
// //       screenOptions={{
// //         headerShown: false,
// //         tabBarShowLabel: false,
// //         tabBarStyle: styles.tabBar,
// //       }}
// //     >

// //       {/* HOME */}
// //       <Tab.Screen
// //         name="Home"
// //         component={ProductListScreen}
// //         options={{
// //           tabBarIcon: ({ focused }) => (
// //             <Ionicons
// //               name={focused ? "home" : "home-outline"}
// //               size={24}
// //               color={focused ? COLORS.primary : COLORS.secondary}
// //             />
// //           ),
// //         }}
// //       />

// //       {/* CART */}
// //       <Tab.Screen
// //         name="Cart"
// //         component={CartScreen}
// //         options={{
// //           tabBarIcon: ({ focused }) => (
// //             <Ionicons
// //               name={focused ? "cart" : "cart-outline"}
// //               size={24}
// //               color={focused ? COLORS.primary : COLORS.secondary}
// //             />
// //           ),
// //         }}
// //       />

// //       {/* WISHLIST */}
// //       <Tab.Screen
// //         name="Wishlist"
// //         component={WishlistScreen}
// //         options={{
// //           tabBarIcon: ({ focused }) => (
// //             <Ionicons
// //               name={focused ? "heart" : "heart-outline"}
// //               size={24}
// //               color={focused ? COLORS.primary : COLORS.secondary}
// //             />
// //           ),
// //         }}
// //       />

// //       {/* PROFILE */}
// //       <Tab.Screen
// //         name="Profile"
// //         component={ProfileScreen}
// //         options={{
// //           tabBarIcon: ({ focused }) => (
// //             <Ionicons
// //               name={focused ? "person" : "person-outline"}
// //               size={24}
// //               color={focused ? COLORS.primary : COLORS.secondary}
// //             />
// //           ),
// //         }}
// //       />

// //     </Tab.Navigator>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   tabBar: {
// //     backgroundColor: "#fff",
// //     height: 70,
// //     borderTopWidth: 0,
// //     elevation: 10,
// //     position: "absolute",
// //   },
// // });
// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";

// import { COLORS } from "../constants/theme";

// // Screens
// import ProductListScreen from "../screens/ProductListScreen";
// import CartScreen from "../screens/CartScreen";
// import WishlistScreen from "../screens/WishlistScreen";
// import ProfileScreen from "../screens/ProfileScreen";

// const Tab = createBottomTabNavigator();

// export default function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           backgroundColor: "#fff",
//           height: 70,
//         },
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
//         component={ProfileScreen}
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
//src/navigation/TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";

// Screens
import ProductListScreen from "../screens/ProductListScreen";
import CartScreen from "../screens/CartScreen";
import WishlistScreen from "../screens/WishlistScreen";
import ProfileScreen from "../screens/ProfileScreen";

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

      {/* HOME = PRODUCT LIST (THIS IS YOUR MAIN SCREEN) */}
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

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="cart-outline" size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="heart-outline" size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="person-outline" size={24} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}