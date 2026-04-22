// frontend/src/components/ProductCard.js
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProductCard = ({ product, navigation }) => {
  const image = product?.gallery?.[0] || product?.colors?.[0]?.image || "https://via.placeholder.com/150";

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.95}
      onPress={() => navigation.navigate("ProductDetails", { product })}
    >
      {/* Discount Badge (Optional) */}
      <View style={styles.badge}>
          <Text style={styles.badgeText}>New</Text>
      </View>

      <TouchableOpacity style={styles.wishlist}>
        <Ionicons name="heart-outline" size={18} color="#666" />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>

      <View style={styles.info}>
        <Text style={styles.brand}>{product?.brand}</Text>
        <Text numberOfLines={1} style={styles.title}>{product?.model}</Text>
        
        <View style={styles.bottomRow}>
            <View>
                <Text style={styles.price}>Rs {product?.price?.toLocaleString()}</Text>
                <View style={styles.ratingRow}>
                    <Ionicons name="star" size={12} color="#FFC107" />
                    <Text style={styles.rating}>{product?.rating || 4.5}</Text>
                </View>
            </View>
            <View style={styles.addBtn}>
                <Ionicons name="add" size={20} color="#FFF" />
            </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 16,
    padding: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  badge: { position: 'absolute', top: 12, left: 12, backgroundColor: '#E8F5E9', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, zIndex: 5 },
  badgeText: { fontSize: 10, color: '#4CAF50', fontWeight: 'bold' },
  wishlist: { position: "absolute", top: 10, right: 10, zIndex: 10 },
  imageContainer: {
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  image: { width: "95%", height: "95%", resizeMode: "contain" },
  info: { paddingHorizontal: 5, marginTop: 10 },
  brand: { fontSize: 10, color: "#AAA", fontWeight: "700", textTransform: 'uppercase' },
  title: { fontSize: 14, fontWeight: "700", color: "#333", marginVertical: 2 },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 8 },
  price: { fontSize: 15, fontWeight: "800", color: "#6A5ACD" },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  rating: { fontSize: 11, color: "#666", marginLeft: 3, fontWeight: '600' },
  addBtn: { width: 32, height: 32, backgroundColor: '#1A1A1A', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }
});

export default ProductCard;