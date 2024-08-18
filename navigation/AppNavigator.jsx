import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabsNavigator from './BottomTabsNavigator';
import { LostRegistrationStack, FoundRegistrationStack } from './RegistrationStack';
import SignStack from './SigninStack';
import MypageStack from './MypageStack';
import LostItemsStackNavigator from './LostItemsStackNavigator';
import LostItemDetail from '../screens/LostItemDetail';
const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Sign' component={SignStack} />
      <Stack.Screen name="Home" component={BottomTabsNavigator} />
      <Stack.Screen name="LostRegistrationStack" component={LostRegistrationStack} />
      <Stack.Screen name="FoundRegistrationStack" component={FoundRegistrationStack} />
      <Stack.Screen name="MypageStack" component={MypageStack} />
      <Stack.Screen name="LostItemsStackNavigator" component={LostItemsStackNavigator}/>
      <Stack.Screen name="LostItemDetail" component={LostItemDetail} options={{ title: '분실물 상세보기' }}/>

    </Stack.Navigator>
  );
}
