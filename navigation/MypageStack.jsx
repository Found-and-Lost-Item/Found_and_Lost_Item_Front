import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MyPageHome from '../screens/MyPage/MyPageHome';
import Announcement from '../screens/MyPage/Announcement';
import ChangeAddress from '../screens/MyPage/ChangeAddress';
import ChangeImage from '../screens/MyPage/ChangeImage';
import ChangePassword from '../screens/MyPage/ChangePassword';

const Stack = createStackNavigator();

export default function MypageStack() {
  return(
    <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center', // 스택 스크린에 공통으로 적용
    }}>
      <Stack.Screen name="MyPageHome" component={MyPageHome} options={{ title: '내 정보', headerLeft: () => null /* 돌아가기 버튼을 제거*/ }} />
      <Stack.Screen name="ChangeAddress" component={ChangeAddress} options={{ title: '주소 등록'}} />
      <Stack.Screen name="ChangeImage" component={ChangeImage} options={{ title: '내 정보'}} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ title: '내 정보'}} />
      <Stack.Screen name="Announcement" component={Announcement} options={{ title: '공지사항'}} />
    </Stack.Navigator>
  );
}