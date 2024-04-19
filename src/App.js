import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {SafeAreaView } from 'react-native';
import MainScreen from './screens/Main/MainScreen.js';

export default function App() {

  return (
    <SafeAreaView>
      <MainScreen />
    </SafeAreaView>
  );
}

