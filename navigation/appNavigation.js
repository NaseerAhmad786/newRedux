import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import UserList from '../Screens/UserList';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
       
        <Stack.Screen name="Home"  component={HomeScreen} />
        <Stack.Screen name="UserList"  component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}