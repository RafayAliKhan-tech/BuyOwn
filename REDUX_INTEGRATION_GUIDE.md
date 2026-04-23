// REDUX STATE MANAGEMENT INTEGRATION GUIDE
// BuyOwn E-Commerce Mobile App

/**
 * ============================================================================
 * REDUX STRUCTURE OVERVIEW
 * ============================================================================
 * 
 * Store Structure:
 * {
 *   auth: {
 *     user: null | {...userData},
 *     userToken: null | string,
 *     isLoading: boolean,
 *     isLoggedIn: boolean,
 *     error: null | string
 *   },
 *   products: {
 *     items: [],
 *     loading: boolean,
 *     error: null | string
 *   },
 *   cart: {
 *     items: [],
 *     lastUpdated: timestamp
 *   },
 *   wishlist: {
 *     items: [],
 *     lastUpdated: timestamp
 *   }
 * }
 */

// ============================================================================
// 1. AUTH SLICE - Redux Authentication Management
// ============================================================================

/**
 * ASYNC THUNKS (Dispatch these with dispatch())
 * 
 * - initializeAuth()
 *   Initializes auth on app start, checks for existing sessions
 *   Called in: App.js useEffect
 * 
 * - loginUser({ email, password })
 *   Authenticates user with email/password
 *   Called in: LoginScreen.js
 *   Usage: dispatch(loginUser({ email, password }))
 * 
 * - registerUser({ name, email, password })
 *   Registers new user
 *   Called in: RegisterScreen.js
 *   Usage: dispatch(registerUser({ name, email, password }))
 * 
 * - logoutUser()
 *   Logs out current user
 *   Called in: ProfileScreen.js
 *   Usage: dispatch(logoutUser())
 */

/**
 * SELECTORS (Use with useSelector())
 * 
 * - selectUser(state) → user object or null
 * - selectUserToken(state) → token string or null
 * - selectIsLoggedIn(state) → boolean
 * - selectAuthLoading(state) → boolean
 * - selectAuthError(state) → error string or null
 * - selectUserName(state) → "User" or actual name
 * - selectUserEmail(state) → "email@example.com" or actual email
 */

/**
 * REGULAR ACTIONS
 * - clearError() - Clears error message from state
 */

import { useDispatch, useSelector } from 'react-redux';
import { 
  loginUser, 
  logoutUser, 
  selectIsLoggedIn, 
  selectAuthLoading,
  selectAuthError 
} from '../redux/authSlice';

// Example Usage in Component:
/*
const MyComponent = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  const handleLogin = async () => {
    const result = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(result)) {
      // Success
    }
  };

  return (
    <View>
      {error && <Text>{error}</Text>}
      {isLoading && <ActivityIndicator />}
      <TouchableOpacity onPress={handleLogin} disabled={isLoading}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
*/

// ============================================================================
// 2. PRODUCTS SLICE - Redux Product Management
// ============================================================================

/**
 * ASYNC THUNKS
 * 
 * - fetchProducts()
 *   Fetches all products from data
 *   Usage: dispatch(fetchProducts())
 */

/**
 * SELECTORS
 * 
 * - selectAllProducts(state) → products array
 * - selectProductsLoading(state) → boolean
 * - selectProductsError(state) → error string or null
 * - selectProductById(productId)(state) → product object or undefined
 * - selectProductsByCategory(category)(state) → filtered products array
 */

import { useSelector, useDispatch } from 'react-redux';
import { 
  fetchProducts, 
  selectAllProducts, 
  selectProductById 
} from '../redux/productsSlice';

// Example Usage:
/*
const ProductListScreen = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard product={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
*/

// ============================================================================
// 3. CART SLICE - Redux Shopping Cart Management
// ============================================================================

/**
 * ACTIONS (Dispatch these directly)
 * 
 * - addToCart(product)
 *   Adds product to cart or increments quantity
 *   Usage: dispatch(addToCart(product))
 * 
 * - removeFromCart(productId)
 *   Removes product from cart
 *   Usage: dispatch(removeFromCart(productId))
 * 
 * - updateQuantity({ id, quantity })
 *   Updates product quantity in cart
 *   Usage: dispatch(updateQuantity({ id: 5, quantity: 3 }))
 * 
 * - clearCart()
 *   Removes all items from cart
 *   Usage: dispatch(clearCart())
 */

/**
 * SELECTORS
 * 
 * - selectCartItems(state) → products array with quantities
 * - selectCartTotal(state) → total price string
 * - selectCartItemCount(state) → total items count
 * - selectCartIsEmpty(state) → boolean
 * - selectCartItemById(productId)(state) → cart item or undefined
 * - selectCartLastUpdated(state) → timestamp
 */

import { 
  addToCart, 
  removeFromCart, 
  updateQuantity,
  selectCartItems,
  selectCartTotal,
  selectCartItemCount
} from '../redux/cartSlice';

// Example Usage:
/*
const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
  };

  return (
    <View>
      {cartItems.map(item => (
        <CartItem 
          key={item.id} 
          item={item}
          onRemove={() => handleRemove(item.id)}
          onQuantityChange={(qty) => handleQuantityChange(item.id, qty)}
        />
      ))}
      <Text>Total: ${total}</Text>
    </View>
  );
};
*/

// ============================================================================
// 4. WISHLIST SLICE - Redux Wishlist Management
// ============================================================================

/**
 * ACTIONS (Dispatch these directly)
 * 
 * - addToWishlist(product)
 *   Adds product to wishlist if not exists
 *   Usage: dispatch(addToWishlist(product))
 * 
 * - removeFromWishlist(productId)
 *   Removes product from wishlist
 *   Usage: dispatch(removeFromWishlist(productId))
 * 
 * - toggleWishlist(product)
 *   Adds if not exists, removes if exists
 *   Usage: dispatch(toggleWishlist(product))
 * 
 * - clearWishlist()
 *   Removes all wishlist items
 *   Usage: dispatch(clearWishlist())
 */

/**
 * SELECTORS
 * 
 * - selectWishlistItems(state) → products array
 * - selectWishlistItemCount(state) → count number
 * - selectIsInWishlist(productId)(state) → boolean
 * - selectWishlistIsEmpty(state) → boolean
 * - selectWishlistItemById(productId)(state) → product or undefined
 * - selectWishlistLastUpdated(state) → timestamp
 */

import { 
  toggleWishlist,
  selectWishlistItems,
  selectIsInWishlist
} from '../redux/wishlistSlice';

// Example Usage:
/*
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const isInWishlist = useSelector(selectIsInWishlist(product.id));

  return (
    <TouchableOpacity 
      onPress={() => dispatch(toggleWishlist(product))}
    >
      <Icon name={isInWishlist ? "heart" : "heart-outline"} />
    </TouchableOpacity>
  );
};
*/

// ============================================================================
// NAVIGATION FLOW WITH REDUX AUTH
// ============================================================================

/**
 * App Flow:
 * 
 * 1. App.js starts
 *    - Wraps app with Redux Provider
 *    - Dispatches initializeAuth() in useEffect
 * 
 * 2. AppNavigator.js checks auth state
 *    - Uses selectIsLoggedIn selector
 *    - Shows loading spinner while auth initializes
 * 
 * 3. StackNavigator.js receives isLoggedIn prop
 *    - Shows Auth screens if NOT logged in (Splash, Login, Register)
 *    - Shows App screens if logged in (MainTabs, Profile, Cart, etc)
 * 
 * 4. Auth state changes automatically update navigation
 *    - No manual navigation needed after login/logout
 *    - Redux state change triggers UI update
 */

// ============================================================================
// BEST PRACTICES
// ============================================================================

/**
 * DO:
 * ✅ Use selectors for accessing state
 * ✅ Use useDispatch and useSelector hooks
 * ✅ Handle loading/error states from selectors
 * ✅ Disable buttons/inputs during loading
 * ✅ Clear errors when user starts new action
 * ✅ Use descriptive action/thunk names
 * 
 * DON'T:
 * ❌ Access state directly without selectors
 * ❌ Mutate state directly (immer handles this)
 * ❌ Mix Redux and Context API for same state
 * ❌ Forget to check .fulfilled.match() for thunks
 * ❌ Dispatch without error handling
 */

// ============================================================================
// COMMON PATTERNS
// ============================================================================

/**
 * PATTERN 1: Async Thunk with Error Handling
 */
const handleLogin = async () => {
  setErrorMessage('');
  dispatch(clearError());

  const result = await dispatch(loginUser({ email, password }));
  
  if (loginUser.fulfilled.match(result)) {
    // Success - result.payload contains the data
    Alert.alert('Success', 'Login successful');
  } else if (loginUser.rejected.match(result)) {
    // Error - result.payload contains the error message
    setErrorMessage(result.payload);
  }
};

/**
 * PATTERN 2: Conditional Rendering Based on State
 */
const MyScreen = () => {
  const isLoading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  const data = useSelector(selectSomeData);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return <Content data={data} />;
};

/**
 * PATTERN 3: Disable UI During Loading
 */
<TouchableOpacity 
  onPress={handleAction}
  disabled={isLoading}
  style={[styles.button, isLoading && { opacity: 0.6 }]}
>
  {isLoading ? (
    <ActivityIndicator size="small" color="#fff" />
  ) : (
    <Text>Action</Text>
  )}
</TouchableOpacity>

/**
 * PATTERN 4: Listening for State Changes
 */
useEffect(() => {
  if (authError) {
    // Show error notification
    Toast.show(authError);
  }
}, [authError]);

// ============================================================================
// MIGRATION NOTES
// ============================================================================

/**
 * What Changed:
 * 1. AuthContext → authSlice (Redux)
 *    - All auth state now in Redux store
 *    - App.js initializes auth on startup
 * 
 * 2. AppNavigator.js
 *    - Removed AuthProvider wrapper
 *    - Now checks Redux state for navigation
 * 
 * 3. StackNavigator.js
 *    - Added isLoggedIn prop check
 *    - Conditionally renders auth/app screens
 * 
 * 4. Auth Screens (Login, Register)
 *    - Changed from useContext to useDispatch/useSelector
 *    - Dispatch async thunks instead of calling context methods
 * 
 * 5. ProfileScreen.js
 *    - Changed from useContext to selectors
 *    - Logout now dispatches logoutUser thunk
 * 
 * All Features Preserved:
 * ✅ Login/Register flow
 * ✅ Session persistence
 * ✅ Cart management
 * ✅ Wishlist management
 * ✅ Product listing
 * ✅ Error handling
 * ✅ Loading states
 */
