import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function SettingsScreen({ navigation }) {
  const settingsOptions = [
    { label: 'General Settings', icon: 'settings', screen: 'GeneralSettings' },
    { label: 'Edit Profile', icon: 'edit-2', screen: 'EditProfile' },
    { label: 'My Orders', icon: 'package', screen: 'MyOrders' },
    { label: 'Logout', icon: 'log-out', screen: null, action: 'logout' },
  ];

  const handleSettingPress = (option) => {
    if (option.screen) {
      navigation.navigate(option.screen);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: 0 }]}>
      <ScrollView contentContainerStyle={styles.content}>
        {settingsOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionRow}
            onPress={() => handleSettingPress(option)}
          >
            <FeatherIcon name={option.icon} size={20} color="#253347" />
            <Text style={styles.optionText}>{option.label}</Text>
            <FeatherIcon name="chevron-right" size={20} color="#999" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    paddingVertical: 10,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 16,
  },
});
