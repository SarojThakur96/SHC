import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './screens/LandingPage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './screens/LoginPage';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#47c6e6" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
}


export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>

          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="HomePage" component={HomePage} />

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#E5E5E5'
  },
});
