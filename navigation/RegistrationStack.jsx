import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LostItemRegistration1 from '../screens/Registration/LostItemRegistration/LostItemRegistration1';
import LostItemRegistration2 from '../screens/Registration/LostItemRegistration/LostItemRegistration2';
import LostItemRegistration3 from '../screens/Registration/LostItemRegistration/LostItemRegistration3';
import FoundItemRegistration1 from '../screens/Registration/FoundItemRegistration/FoundItemRegistration1';
import FoundItemRegistration2 from '../screens/Registration/FoundItemRegistration/FoundItemRegistration2';
import FoundItemRegistration3 from '../screens/Registration/FoundItemRegistration/FoundItemRegistration3';

const Stack = createStackNavigator();

export function LostRegistrationStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center', // 스택 스크린에 공통으로 적용
    }}>
      <Stack.Screen name="LostItemRegistration1" component={LostItemRegistration1} options={{ title: '물건을 잃어버렸어요!' }} />
      <Stack.Screen name="LostItemRegistration2" component={LostItemRegistration2} options={{ title: '물건을 잃어버렸어요!' }} />
      <Stack.Screen name="LostItemRegistration3" component={LostItemRegistration3} options={{ title: '물건을 잃어버렸어요!' }} />
    </Stack.Navigator>
  );
}

export function FoundRegistrationStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center', // 스택 스크린에 공통으로 적용
    }}>
      <Stack.Screen name="FoundItemRegistration1" component={FoundItemRegistration1} options={{ title: '물건을 주웠어요!' }} />
      <Stack.Screen name="FoundItemRegistration2" component={FoundItemRegistration2} options={{ title: '물건을 주웠어요!' }} />
      <Stack.Screen name="FoundItemRegistration3" component={FoundItemRegistration3} options={{ title: '물건을 주웠어요!' }} />
    </Stack.Navigator>
  );
}
