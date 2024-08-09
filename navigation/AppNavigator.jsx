import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabsNavigator from './BottomTabsNavigator';
import RegistrationStack from './RegistrationStack';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={BottomTabsNavigator} />
      <Stack.Screen name="RegistrationStack" component={RegistrationStack} />
    </Stack.Navigator>
  );
}
