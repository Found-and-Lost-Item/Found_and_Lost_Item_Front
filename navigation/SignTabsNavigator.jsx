
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import IdFindScreen from './user/IdFind';
// import PasswordResetScreen from './user/PasswordReset';

// const TopTab = createMaterialTopTabNavigator();

// // 탭 네비게이터 정의
// export default function SignTabsNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarStyle: {
//           backgroundColor: '#FFFFFF',
//           borderBottomWidth: 1,
//           borderBottomColor: '#E5E5E5',
//           position: 'absolute',
//           top: 84, // 원하는 위치에 맞게 조정,
//         },
//         tabBarLabelStyle: {
//           fontFamily: 'Inter',
//           fontWeight: '600',
//           fontSize: 16,
//           lineHeight: 22,
//           color: '#000000',
//         },
//         tabBarIndicatorStyle: {
//           backgroundColor: '#222222', // 언더라인 색상
//           height: 4,
//           borderRadius: 2,
//           position: 'absolute',
//           top: 36, // 탭 아래에 위치
//         },
//       }}
//     >
//       <Tab.Screen name="IdFind" component={IdFindScreen} options={{ title: '아이디 찾기' }} />
//       <Tab.Screen name="PasswordReset" component={PasswordResetScreen} options={{ title: '비밀번호 찾기' }} />
//     </Tab.Navigator>
//   );
// }





import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import IdFindScreen from '../screens/account/IdFindScreen';
import PasswordReset from '../screens/account/PasswordReset';
import PasswordRegister from '../screens/account/PasswordRegister'
import { createStackNavigator } from '@react-navigation/stack';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

// 비밀번호 재등록 navigator 스택
function PasswordResetNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PasswordReset1" component={PasswordReset}
      options={{ headerShown: false }} />
      <Stack.Screen name="PasswordRegister" component={PasswordRegister}
      options={{ title: '비밀번호 등록', headerShown: false }} />
    </Stack.Navigator>
  )
}

export default function SignTabsNavigator() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold'},
        tabBarIndicatorStyle: { backgroundColor: 'black' },
      }}
    >
      <TopTab.Screen
        name="IdFindScreen"
        component={IdFindScreen}
        options={{title: '아이디 찾기' }}
      />
      <TopTab.Screen
        name="PasswordReset"
        component={PasswordResetNavigator}
        options={{ title: '비밀번호 찾기' }}
      />
    </TopTab.Navigator>
  );
}
