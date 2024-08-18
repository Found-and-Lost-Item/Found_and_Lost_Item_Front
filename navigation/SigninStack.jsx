import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpAgree from '../screens/SignUp/SignUpAgree';
import SignUp1 from '../screens/SignUp/SignUp1';
import SignUp2 from '../screens/SignUp/SignUp2';
import SignUp3 from '../screens/SignUp/SignUp3';
import SignIn from '../screens/SignIn';
import SignTabsNavigator from './SignTabsNavigator';


const Stack = createStackNavigator();


export default function SignStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: '로그인', headerShown: false }} />
      <Stack.Screen name="SignUpAgree" component={SignUpAgree} options={{ title: '회원가입', headerTitleAlign: 'center' }} />
      <Stack.Screen name="SignUp1" component={SignUp1} options={{ title: '회원가입', headerTitleAlign: 'center' }} />
      <Stack.Screen name="SignUp2" component={SignUp2} options={{ title: '회원가입', headerTitleAlign: 'center' }} />
      <Stack.Screen name="SignUp3" component={SignUp3} options={{ title: '회원가입', headerTitleAlign: 'center' }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ title: '회원가입성공' }} />

      <Stack.Screen name='SignTabs' component={SignTabsNavigator} options={{title: '계정 찾기'}} />
    </Stack.Navigator>
  );
}