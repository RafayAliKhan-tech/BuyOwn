import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import ProfileScreen from './ProfileScreen'; // ✅ import karo

export default function ProfileTabWrapper({ navigation }) {
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext?.isLoggedIn || authContext?.userToken;

  // ❌ REMOVE useEffect completely

  // ✅ If NOT logged in
  if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Ionicons 
            name="person-circle-outline" 
            size={80} 
            color={COLORS.primary} 
            style={{ marginBottom: 20 }}
          />
          
          <Text style={styles.title}>Welcome to BUYOWN</Text>
          
          <Text style={styles.description}>
            Please log in or create an account to access your profile and orders.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.primaryButton]}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.primaryButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.button, styles.secondaryButton]}
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={styles.secondaryButtonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  // ✅ If logged in → directly render ProfileScreen
  return <ProfileScreen navigation={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: COLORS.secondary,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
  },
  primaryButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  secondaryButtonText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
  },
});
