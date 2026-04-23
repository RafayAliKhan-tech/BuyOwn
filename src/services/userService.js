// src/services/userService.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import usersData from '../data/users.json';

const USERS_KEY = '@buyown_users';
const SESSION_KEY = '@buyown_session';
const USER_DATA_KEY = '@buyown_user_data';

// Initialize users storage if empty
const initializeUsersStorage = async () => {
  try {
    const existingUsers = await AsyncStorage.getItem(USERS_KEY);
    if (!existingUsers) {
      await AsyncStorage.setItem(USERS_KEY, JSON.stringify(usersData.users));
    }
  } catch (error) {
    console.error('Error initializing users storage:', error);
  }
};

// Get all users from storage
const getAllUsers = async () => {
  try {
    const usersJson = await AsyncStorage.getItem(USERS_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
  } catch (error) {
    console.error('Error getting all users:', error);
    return [];
  }
};

// Register a new user
const registerUser = async (name, email, password) => {
  try {
    // Initialize storage if needed
    await initializeUsersStorage();

    const users = await getAllUsers();

    // Check if user already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      return { success: false, message: 'User already registered with this email' };
    }

    // Create new user object
    const newUser = {
      id: String(Date.now()),
      name,
      email,
      password, // In production, this should be hashed
      createdAt: new Date().toISOString(),
    };

    // Add to users array
    users.push(newUser);

    // Save back to storage
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));

    // Initialize user-specific data storage
    const userDataKey = `${USER_DATA_KEY}_${email}`;
    await AsyncStorage.setItem(
      userDataKey,
      JSON.stringify({
        cart: [],
        orders: [],
        wishlist: [],
      })
    );

    return { success: true, message: 'User registered successfully', user: newUser };
  } catch (error) {
    console.error('Error registering user:', error);
    return { success: false, message: 'Registration failed' };
  }
};

// Login user - validate credentials
const loginUser = async (email, password) => {
  try {
    await initializeUsersStorage();
    const users = await getAllUsers();

    // Find user by email and password
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return { success: false, message: 'Invalid email or password' };
    }

    // Save current session
    await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(user));

    return { success: true, message: 'Login successful', user };
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false, message: 'Login failed' };
  }
};

// Get current logged-in user session
const getCurrentSession = async () => {
  try {
    const sessionJson = await AsyncStorage.getItem(SESSION_KEY);
    return sessionJson ? JSON.parse(sessionJson) : null;
  } catch (error) {
    console.error('Error getting current session:', error);
    return null;
  }
};

// Logout user
const logoutUser = async () => {
  try {
    await AsyncStorage.removeItem(SESSION_KEY);
    return { success: true, message: 'Logged out successfully' };
  } catch (error) {
    console.error('Error logging out:', error);
    return { success: false, message: 'Logout failed' };
  }
};

// Check if user is logged in
const isUserLoggedIn = async () => {
  const session = await getCurrentSession();
  return session !== null;
};

// Get user by email
const getUserByEmail = async (email) => {
  try {
    const users = await getAllUsers();
    return users.find(user => user.email === email) || null;
  } catch (error) {
    console.error('Error getting user by email:', error);
    return null;
  }
};

// Get user-specific data (cart, orders, wishlist)
const getUserData = async (email) => {
  try {
    const userDataKey = `${USER_DATA_KEY}_${email}`;
    const dataJson = await AsyncStorage.getItem(userDataKey);
    
    if (!dataJson) {
      // Initialize if not exists
      const initialData = {
        cart: [],
        orders: [],
        wishlist: [],
      };
      await AsyncStorage.setItem(userDataKey, JSON.stringify(initialData));
      return initialData;
    }

    return JSON.parse(dataJson);
  } catch (error) {
    console.error('Error getting user data:', error);
    return { cart: [], orders: [], wishlist: [] };
  }
};

// Update user-specific data
const updateUserData = async (email, data) => {
  try {
    const userDataKey = `${USER_DATA_KEY}_${email}`;
    await AsyncStorage.setItem(userDataKey, JSON.stringify(data));
    return { success: true, message: 'User data updated successfully' };
  } catch (error) {
    console.error('Error updating user data:', error);
    return { success: false, message: 'Failed to update user data' };
  }
};

// Add to cart
const addToCart = async (email, product) => {
  try {
    const userData = await getUserData(email);
    userData.cart.push(product);
    return await updateUserData(email, userData);
  } catch (error) {
    console.error('Error adding to cart:', error);
    return { success: false, message: 'Failed to add to cart' };
  }
};

// Get cart for user
const getCart = async (email) => {
  try {
    const userData = await getUserData(email);
    return userData.cart || [];
  } catch (error) {
    console.error('Error getting cart:', error);
    return [];
  }
};

// Add order
const addOrder = async (email, order) => {
  try {
    const userData = await getUserData(email);
    userData.orders.push({
      ...order,
      orderedAt: new Date().toISOString(),
    });
    return await updateUserData(email, userData);
  } catch (error) {
    console.error('Error adding order:', error);
    return { success: false, message: 'Failed to create order' };
  }
};

// Get orders for user
const getOrders = async (email) => {
  try {
    const userData = await getUserData(email);
    return userData.orders || [];
  } catch (error) {
    console.error('Error getting orders:', error);
    return [];
  }
};

export const userService = {
  registerUser,
  loginUser,
  getCurrentSession,
  logoutUser,
  isUserLoggedIn,
  getUserByEmail,
  getUserData,
  updateUserData,
  addToCart,
  getCart,
  addOrder,
  getOrders,
  initializeUsersStorage,
};
