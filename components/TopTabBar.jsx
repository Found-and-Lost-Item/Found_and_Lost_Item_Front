import React from 'react';
import { View, Text } from 'react-native';
import { TabBar } from 'react-native-tab-view';

export default function TopTabBar(props) {
  return (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'black' }}
      style={{ backgroundColor: 'white' }}
      renderLabel={({ route, focused }) => (
        <Text style={{ color: focused ? 'black' : 'gray' }}>
          {route.title}
        </Text>
      )}
    />
  );
}
