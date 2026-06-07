import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// 2. Main Screen dengan Bottom Navigation
function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="Profil" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  );
}

// Bonus: Navigation Drawer Wrap
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Utama" component={BottomTabs} options={{ title: 'Panduan Akademik' }} />
      <Drawer.Screen name="Profil Mahasiswa" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

// Main Navigation Graph
export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* 1. Splash Screen */}
      <Stack.Screen name="Splash" component={SplashScreen} />
      {/* Main Flow */}
      <Stack.Screen name="Main" component={DrawerNavigator} />
      {/* 3. Detail Screen */}
      <Stack.Screen name="DetailMatakuliah" component={DetailScreen} options={{ headerShown: true, title: 'Detail Mata Kuliah' }} />
    </Stack.Navigator>
  );
}