// // frontend/src/navigation/AppNavigator.js
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import TabNavigator from "./TabNavigator";

// export default function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <TabNavigator />
//     </NavigationContainer>
//   );
// }
//src/navigation/AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
