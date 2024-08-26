import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LostItemDetail from '../screens/LostItemDetail'; // 분실물 상세보기 화면

const Stack = createStackNavigator();

export default function LostItemsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LostItemDetail"
        component={LostItemDetail}
        options={{ 
          title: '분실물 상세보기',
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
}
