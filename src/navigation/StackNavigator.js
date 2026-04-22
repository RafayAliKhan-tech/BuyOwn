// // // // // frontend/src/navigation/StackNavigator.js
// // // // import React from "react";
// // // // import { createStackNavigator } from "@react-navigation/stack";
// // // // import ProductListScreen from "../screens/ProductListScreen";
// // // // import ProductDetailsScreen from "../screens/ProductDetailsScreen";
// // // // import CategoryScreen from "../screens/CategoryScreen"; // Ya "../components/CategoryScreen"

// // // // const Stack = createStackNavigator();

// // // // export default function StackNavigator() {
// // // //     return (
// // // //         <Stack.Navigator initialRouteName="ProductList">
// // // //             <Stack.Screen
// // // //                 name="ProductList"
// // // //                 component={ProductListScreen}
// // // //                 options={{ headerShown: false }}
// // // //             />
// // // //             <Stack.Screen
// // // //                 name="CategoryScreen" 
// // // //                 component={CategoryScreen}
// // // //                 options={{ headerShown: false }}
// // // //             />
// // // //             <Stack.Screen
// // // //                 name="ProductDetails"
// // // //                 component={ProductDetailsScreen}
// // // //                 options={{ headerShown: false }}
// // // //             />
// // // //         </Stack.Navigator>
// // // //     );
// // // // }
// // // // frontend/src/navigation/StackNavigator.js

// // // import React from "react";
// // // import { createNativeStackNavigator } from "@react-navigation/native-stack";

// // // // Screens (correct paths - tum apni structure ke hisaab se adjust kar sakte ho)
// // // import SplashScreen from "../screens/SplashScreen";
// // // import OnboardingScreen from "../screens/OnboardingScreen";
// // // import LoginScreen from "../screens/Login-Screen";
// // // import RegisterScreen from "../screens/Register-Screen";

// // // import ProductListScreen from "../screens/ProductListScreen";
// // // import ProductDetailsScreen from "../screens/ProductDetailsScreen";
// // // import CategoryScreen from "../screens/CategoryScreen";

// // // import MyCartScreen from "../screens/MyCartScreen";
// // // import CheckOutScreen from "../screens/CheckOutScreen";

// // // const Stack = createNativeStackNavigator();


// // // // ================= AUTH STACK =================
// // // const AuthStack = () => {
// // //   return (
// // //     <Stack.Navigator screenOptions={{ headerShown: false }}>
// // //       <Stack.Screen name="Login" component={LoginScreen} />
// // //       <Stack.Screen name="Register" component={RegisterScreen} />
// // //     </Stack.Navigator>
// // //   );
// // // };


// // // // ================= MAIN APP STACK =================
// // // // (Splash → Onboarding → Auth → Product Flow)
// // // export default function StackNavigator() {
// // //   return (
// // //     <Stack.Navigator screenOptions={{ headerShown: false }}>

// // //       {/* Initial Flow */}
// // //       <Stack.Screen name="Splash" component={SplashScreen} />
// // //       <Stack.Screen name="Onboarding" component={OnboardingScreen} />

// // //       {/* Auth Flow */}
// // //       <Stack.Screen name="Auth" component={AuthStack} />

// // //       {/* Product Flow */}
// // //       <Stack.Screen name="ProductList" component={ProductListScreen} />
// // //       <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
// // //       <Stack.Screen name="MyCart" component={MyCartScreen} />
// // //       <Stack.Screen name="Checkout" component={CheckOutScreen} />

// // //       {/* Category Modal */}
// // //       <Stack.Screen
// // //         name="CategoryScreen"
// // //         component={CategoryScreen}
// // //         options={{
// // //           presentation: "modal",
// // //           animation: "slide_from_bottom",
// // //         }}
// // //       />

// // //     </Stack.Navigator>
// // //   );
// // // }
// // //src/navigation/StackNavigator.js
// // import React from "react";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";

// // // Core Flow Screens
// // import SplashScreen from "../screens/SplashScreen";
// // import OnboardingScreen from "../screens/OnboardingScreen";

// // // Auth Screens
// // import LoginScreen from "../screens/Login-Screen";
// // import RegisterScreen from "../screens/Register-Screen";

// // // Main App Tabs
// // import TabNavigator from "./TabNavigator";

// // // Product Flow Screens (standalone / modal use)
// // import ProductListScreen from "../screens/ProductListScreen";
// // import ProductDetailsScreen from "../screens/ProductDetailsScreen";
// // import CategoryScreen from "../screens/CategoryScreen";

// // // Cart / Checkout
// // import CartScreen from "../screens/CartScreen";
// // import CheckOutScreen from "../screens/CheckOutScreen";

// // const Stack = createNativeStackNavigator();

// // /* ================= AUTH STACK ================= */
// // const AuthStack = () => (
// //   <Stack.Navigator screenOptions={{ headerShown: false }}>
// //     <Stack.Screen name="Login" component={LoginScreen} />
// //     <Stack.Screen name="Register" component={RegisterScreen} />
// //   </Stack.Navigator>
// // );

// // /* ================= MAIN STACK ================= */
// // export default function StackNavigator() {
// //   return (
// //     <Stack.Navigator screenOptions={{ headerShown: false }}>

// //       {/* 1. Splash */}
// //       <Stack.Screen name="Splash" component={SplashScreen} />

// //       {/* 2. Onboarding */}
// //       <Stack.Screen name="Onboarding" component={OnboardingScreen} />

// //       {/* 3. Auth Flow */}
// //       <Stack.Screen name="Auth" component={AuthStack} />

// //       {/* 4. MAIN APP */}
// //       <Stack.Screen name="ProductListHome" component={ProductListScreen} />
// //       <Stack.Screen name="MainTabs" component={TabNavigator} />

// //       {/* 5. PRODUCT FLOW (outside tabs for reuse) */}
// //       <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />

// //       {/* 6. CATEGORY MODAL */}
// //       <Stack.Screen
// //         name="CategoryScreen"
// //         component={CategoryScreen}
// //         options={{
// //           presentation: "modal",
// //           animation: "slide_from_bottom",
// //         }}
// //       />

// //       {/* 7. CART FLOW */}
// //       <Stack.Screen name="MyCart" component={CartScreen} />
// //       <Stack.Screen name="Checkout" component={CheckOutScreen} />

// //     </Stack.Navigator>
// //   );
// // }
// // src/navigation/StackNavigator.js
// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// // Core Screens
// import SplashScreen from "../screens/SplashScreen";
// import OnboardingScreen from "../screens/OnboardingScreen";

// // Auth
// import LoginScreen from "../screens/Login-Screen";
// import RegisterScreen from "../screens/Register-Screen";

// // Main App (Tabs)
// import TabNavigator from "./TabNavigator";

// // Extra Screens
// import ProductListScreen from "../screens/ProductListScreen";
// import ProductDetailsScreen from "../screens/ProductDetailsScreen";
// import CategoryScreen from "../screens/CategoryScreen";
// import CartScreen from "../screens/CartScreen";
// import CheckOutScreen from "../screens/CheckOutScreen";

// const Stack = createNativeStackNavigator();

// // AUTH STACK
// const AuthStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="Login" component={LoginScreen} />
//     <Stack.Screen name="Register" component={RegisterScreen} />
//   </Stack.Navigator>
// );

// export default function StackNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>

//       {/* 1. Splash */}
//       <Stack.Screen name="Splash" component={SplashScreen} />

//       {/* 2. Onboarding */}
//       <Stack.Screen name="Onboarding" component={OnboardingScreen} />

//       {/* 3. Auth */}
//       <Stack.Screen name="Auth" component={AuthStack} />

//       {/* 4. MAIN APP (BOTTOM BAR HERE 👇) */}
//       <Stack.Screen name="MainTabs" component={TabNavigator} />

//       {/* Extra Screens (outside tabs) */}
//       <Stack.Screen name="ProductList" component={ProductListScreen} />
//       <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />

//       <Stack.Screen
//         name="CategoryScreen"
//         component={CategoryScreen}
//         options={{
//           presentation: "modal",
//           animation: "slide_from_bottom",
//         }}
//       />

//       <Stack.Screen name="MyCart" component={CartScreen} />
//       <Stack.Screen name="Checkout" component={CheckOutScreen} />

//     </Stack.Navigator>
//   );
// }
//src/navigation/StackNavigator.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/Login-Screen";
import RegisterScreen from "../screens/Register-Screen";

// Tabs
import TabNavigator from "./TabNavigator";

// Extra screens (optional outside tabs)
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CategoryScreen from "../screens/CategoryScreen";
import CartScreen from "../screens/CartScreen";
import CheckOutScreen from "../screens/CheckOutScreen";

const Stack = createNativeStackNavigator();

/* AUTH STACK */
const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

/* MAIN STACK */
export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      {/* 1. Splash */}
      <Stack.Screen name="Splash" component={SplashScreen} />

      {/* 2. Onboarding */}
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />

      {/* 3. Auth */}
      <Stack.Screen name="Auth" component={AuthStack} />

      {/* 4. MAIN APP (BOTTOM BAR FIXED HERE) */}
      <Stack.Screen
               name="ProductList"
               component={ProductListScreen}
                options={{ headerShown: false }}
            />
      <Stack.Screen name="MainTabs" component={TabNavigator} />

      {/* Extra screens */}
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="MyCart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckOutScreen} />

    </Stack.Navigator>
  );
}