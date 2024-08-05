import { Tabs } from 'expo-router';
import React from 'react';
import { Image, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useState } from 'react';
import { TouchableOpacity, GestureHandlerRootView  } from 'react-native-gesture-handler';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [activeTab, setActiveTab] = useState('index');

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff', 
          paddingBottom: 10, 
          paddingTop: 10,
        },
        tabBarIconStyle: { transition: 'transform 0.3s ease' }, // Apply transition to icon
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <TouchableOpacity onPress={() => setActiveTab('index')}
              className={`w-12 h-12 rounded-full flex items-center justify-center `}
              style={{ transform: [{ scale: focused ? 1.2 : 1 }] }} // Zoom effect
            >
              <Image
                source={{ uri: 'https://www.iconbolt.com/preview/twitter/those-icons-colored-outline/real-setate-house-home-apartment.svg' }}
                style={{ width: 28, height: 28 }}
              />
            </TouchableOpacity>
          )
        }}
      />
      <Tabs.Screen
        name="ranking"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <TouchableOpacity onPress={() => setActiveTab('ranking')} 
              className={`w-12 h-12 rounded-full flex items-center justify-center`}
              style={{ transform: [{ scale: focused ? 1.2 : 1 }] }} // Zoom effect
            >
              <Image
                source={{ uri: 'https://cdn.icon-icons.com/icons2/3271/PNG/512/medal_champion_award_winner_olympic_icon_207812.png' }}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          )
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Setting',
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <TouchableOpacity onPress={() => setActiveTab('setting')}
              className={`w-12 h-12 rounded-full flex items-center justify-center`}
              style={{ transform: [{ scale: focused ? 1.2 : 1 }] }} // Zoom effect
            >
              <Image
                source={{ uri: 'https://st3.depositphotos.com/11574170/35416/v/450/depositphotos_354165902-stock-illustration-profile-vector-flat-color-icon.jpg' }}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          )
        }}
      />
    </Tabs>
    </GestureHandlerRootView>
  );
}
