// src/components/TopBar.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function TopBar({ title }) {
  return (
    <View style={styles.container}>
      {/* Left Hamburger */}
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="menu" size={28} color="#333" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{title || "Shop"}</Text>

      {/* Right Icons */}
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="search" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="ellipsis-vertical" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  iconButton: {
    padding: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
});