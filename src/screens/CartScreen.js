// src/screens/CartScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../redux/cartSlice";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";
import { IMAGES } from "../imageMap";

const MyCartScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

  const getImageSource = (imgKey) => {
    if (!imgKey) return IMAGES.placeholder;
    if (typeof imgKey === "string" && imgKey.startsWith("http")) return { uri: imgKey };
    return IMAGES[imgKey] || IMAGES.placeholder;
  };

  const increaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const decreaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const renderRightActions = (id) => (
    <View style={{ justifyContent: 'center', marginLeft: 10 }}>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => removeItem(id)}
      >
        <Ionicons name="trash" size={24} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Swipeable
      renderRightActions={() => renderRightActions(item.id)}
      overshootRight={false}
    >
      <View style={styles.cartItem}>
        <View style={styles.leftSection}>
          <Image 
            source={getImageSource(item?.gallery?.[0] || item?.image)} 
            style={styles.itemImage} 
          />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item.model}</Text>
            <Text style={styles.itemBrand}>{item.brand}</Text>
            <Text style={styles.itemPrice}>Rs {item.price?.toLocaleString()}</Text>
          </View>
        </View>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => decreaseQuantity(item.id)}
          >
            <Text style={styles.quantityButtonText}>−</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>{item.quantity}</Text>

          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => increaseQuantity(item.id)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  );

  return (
    <SafeAreaView style={[styles.container, { paddingTop: 0 }]}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>My Cart</Text>
        <Text style={styles.itemCount}>{cartItems.length} Items</Text>
      </View>

      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 180 }}
          />

          <View style={styles.footer}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Total Price:</Text>
              <Text style={styles.priceValue}>Rs {totalPrice}</Text>
            </View>

            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => navigation.navigate("Checkout")}
            >
              <Text style={styles.checkoutButtonText}>
                Proceed To Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyCartContainer}>
          <Ionicons name="cart-outline" size={80} color="#CBD5E1" />
          <Text style={styles.emptyCartText}>Your cart is empty!</Text>
          <TouchableOpacity 
            style={styles.shopBtn}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.shopBtnText}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, paddingHorizontal: 16 },
  headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  header: { fontSize: 28, fontWeight: "bold", color: COLORS.primary },
  itemCount: { fontSize: 14, color: COLORS.secondary, fontWeight: '600' },

  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 16,
    marginVertical: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  leftSection: { flexDirection: "row", alignItems: "center", gap: 12, flex: 1 },
  itemImage: { width: 80, height: 80, borderRadius: 12 },
  itemDetails: { justifyContent: "center", flex: 1 },
  itemName: { fontSize: 14, fontWeight: "700", color: COLORS.textPrimary },
  itemBrand: { fontSize: 11, fontWeight: '800', color: COLORS.secondary, textTransform: 'uppercase', marginTop: 2 },
  itemPrice: { fontSize: 13, fontWeight: "900", color: COLORS.primary, marginTop: 4 },

  quantityContainer: { flexDirection: "row", alignItems: "center", gap: 8 },
  quantityButton: { backgroundColor: COLORS.primary, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
  quantityButtonText: { color: COLORS.white, fontSize: 18, fontWeight: "bold" },
  quantityText: { marginHorizontal: 8, fontSize: 16, color: COLORS.textPrimary, fontWeight: '600', minWidth: 25, textAlign: 'center' },

  deleteButton: { backgroundColor: "#FF4D4D", justifyContent: "center", alignItems: "center", width: 60, height: 80, borderRadius: 12 },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    padding: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 65
  },
  priceRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 16 },
  priceLabel: { fontSize: 16, color: COLORS.secondary, fontWeight: '600' },
  priceValue: { fontSize: 18, fontWeight: "900", color: COLORS.primary },

  checkoutButton: { backgroundColor: COLORS.primary, paddingVertical: 14, borderRadius: 12, alignItems: "center" },
  checkoutButtonText: { color: COLORS.white, fontSize: 16, fontWeight: "bold" },

  emptyCartContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyCartText: { fontSize: 18, color: COLORS.secondary, fontWeight: '700', marginTop: 15 },
  shopBtn: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 12,
  },
  shopBtnText: { color: COLORS.white, fontWeight: '800', fontSize: 14 },
});

export default MyCartScreen;