import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LostItems from '../screens/LostItems';
import FoundItems from '../screens/FoundItems';

const TopTab = createMaterialTopTabNavigator();

export default function TopTabsNavigator() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold'},
        tabBarIndicatorStyle: { backgroundColor: 'black' },
      }}
    >
      <TopTab.Screen
        name="LostItems"
        component={LostItems}
        options={{title: '분실물 찾기' }}
      />
      <TopTab.Screen
        name="FoundItems"
        component={FoundItems}
        options={{ title: '습득물 찾기' }}
      />
    </TopTab.Navigator>
  );
}

// import React from 'react';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import LostItems from '../screens/LostItems';
// import FoundItems from '../screens/FoundItems';
// import TopTabBar from '../components/TopTabBar';

// const TopTab = createMaterialTopTabNavigator();

// export default function TopTabsNavigator() {
//   return (
//     <TopTab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
//       <TopTab.Screen name="LostItems" component={LostItems} options={{ tabBarLabel: '분실물 찾기' }} />
//       <TopTab.Screen name="FoundItems" component={FoundItems} options={{ tabBarLabel: '습득물 찾기' }} />
//     </TopTab.Navigator>
//   );
// }
