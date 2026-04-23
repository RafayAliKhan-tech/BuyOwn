// // src/components/TopBar.js
// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { COLORS } from "../constants/theme";

// export default function TopBar({ title, selectedBrand, onClearBrand }) {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.topBar}>

//       {/* 🔥 LEFT: Hamburger */}
//       <TouchableOpacity
//         style={styles.iconButton}
//         onPress={() => navigation.navigate("CategoryScreen")}
//       >
//         {/* Custom Hamburger */}
//         <View style={styles.customMenuContainer}>
//           <View style={[styles.menuLine, { width: 14 }]} />
//           <View style={[styles.menuLine, { width: 22, marginVertical: 4 }]} />
//           <View style={[styles.menuLine, { width: 14 }]} />
//         </View>
//       </TouchableOpacity>

//       {/* 🔥 CENTER TITLE */}
//       <Text style={styles.brandTitle}>
//         {selectedBrand ? selectedBrand : (title || "BUYOWN")}
//       </Text>

//       {/* 🔥 RIGHT ICON */}
//       <TouchableOpacity
//         style={styles.iconButton}
//         onPress={onClearBrand}
//       >
//         <Ionicons
//           name={selectedBrand ? "close-circle-outline" : "ellipsis-vertical"}
//           size={22}
//           color={COLORS.primary}
//         />
//       </TouchableOpacity>

//     </View>
//   );
// }

// const styles = StyleSheet.create({

//   topBar: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     height: 40,
//     marginBottom: 0,
//     paddingHorizontal: 20,
//     marginTop : 30,
//   },

//   iconButton: {
//     width: 40,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   brandTitle: {
//     fontSize: 20,
//     fontWeight: "900",
//     letterSpacing: 5,
//     color: COLORS.primary,
//     textTransform: "uppercase",
//   },

//   // hamburger style
//   customMenuContainer: {
//     alignItems: "flex-start",
//     justifyContent: "center",
//   },

//   menuLine: {
//     height: 2.5,
//     backgroundColor: COLORS.primary,
//     borderRadius: 2,
//   },
// });
// src/components/TopBar.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/theme";

export default function TopBar({ title, selectedBrand, onClearBrand }) {
  const navigation = useNavigation();

  return (
    <View style={styles.topBar}>

      {/* 🔥 LEFT: Hamburger → Category Screen */}
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() =>
          navigation.navigate("CategoryScreen", {
            selectedBrand: selectedBrand || null,
          })
        }
      >
        <View style={styles.customMenuContainer}>
          <View style={[styles.menuLine, { width: 14 }]} />
          <View style={[styles.menuLine, { width: 22, marginVertical: 4 }]} />
          <View style={[styles.menuLine, { width: 14 }]} />
        </View>
      </TouchableOpacity>

      {/* 🔥 CENTER TITLE */}
      <Text style={styles.brandTitle}>
        {selectedBrand ? selectedBrand : (title || "BUYOWN")}
      </Text>

      {/* 🔥 RIGHT ICON (X or Menu) */}
      <TouchableOpacity
        style={styles.iconButton}
        onPress={onClearBrand}
      >
        <Ionicons
          name={selectedBrand ? "close" : "ellipsis-vertical"}
          size={22}
          color={COLORS.primary}
        />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 55,
    paddingHorizontal: 20,
    marginTop: 20,
  },

  iconButton: {
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },

  brandTitle: {
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 2,
    color: COLORS.primary,
    textTransform: "uppercase",
  },

  customMenuContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
  },

  menuLine: {
    height: 2.5,
    backgroundColor: COLORS.primary,
    borderRadius: 2,
  },
});