import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MypageHome from '../screens/MyPage/MyPageHome';

const Stack = createStackNavigator();

export default function MypageStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="MypageHome" component={MypageHome} options={{ title: '내 정보', headerTitleAlign: 'center' }} />
    </Stack.Navigator>
  );
}