import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [activeTab, setActiveTab] = useState('index');

  return (
    <GestureHandlerRootView style={styles.container}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity
                onPress={() => setActiveTab('index')}
                style={[styles.tabButton, focused && styles.tabButtonFocused]}
              >
                <Image
                  source={{ uri: 'https://www.iconbolt.com/preview/twitter/those-icons-colored-outline/real-setate-house-home-apartment.svg' }}
                  style={styles.homeIcon}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tabs.Screen
          name="ranking"
          options={{
            title: 'Ranking',
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity
                onPress={() => setActiveTab('ranking')}
                style={[styles.tabButton, focused && styles.tabButtonFocused]}
              >
                <Image
                  source={{ uri: 'https://cdn.icon-icons.com/icons2/3271/PNG/512/medal_champion_award_winner_olympic_icon_207812.png' }}
                  style={styles.rankingIcon}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarStyle: {
    backgroundColor: '#fff',
    paddingBottom: 10,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tabButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButtonFocused: {
    transform: [{ scale: 1.2 }],
  },
  homeIcon: {
    width: 25,
    height: 25,
  },
  rankingIcon: {
    width: 35,
    height: 35,
  },
});
