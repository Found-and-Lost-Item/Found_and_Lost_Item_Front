import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { setToken } from './Management/TokenManagement';
import { setUser } from './Management/UserManagement';
import BottomTabsNavigator from '../navigation/BottomTabsNavigator';
import { UserContext } from '../context/UserContext';
import mockData from '../data/mockData';

export default function LoginScreen({navigation}) {
  const { setUser } = useContext(UserContext);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  // //목업데이터로 테스트 할 때
  const handleLogin = () => {
    // 목업 데이터에서 사용자를 찾음.
    const user = mockData.users.find(
      (user) => user.user_id === userId && user.user_password === password
    );

    if (user) {
      Alert.alert('로그인 성공!', `환영합니다!`);

      setUser({
        id: user.id,
        user_id: user.user_id,
        user_phone_number: user.user_phone_number,
        user_name: user.user_name,
        user_profile_image: user.user_profile_image,
        user_address: user.user_address,
        user_detailed_address: user.user_detailed_address,
        user_nickname: user.user_nickname,
      });

      // 로그인 성공 시, 다음 화면으로 이동.
      navigation.navigate('Home');
      setShowError(false); // 로그인 성공 시 에러 메시지 숨김
    } else { 
      setShowError(true); // 로그인 실패 시 에러 메시지 표시
    }
  };


  //백엔드와 통신할 때
  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post('http://192.168.0.82:3000/auth/login_process', {
  //       user_id: userId,
  //       user_password: password,
  //     });

  //     if (response.data.success) {
  //       Alert.alert('로그인 성공!', `환영합니다, ${userId}!`);

  //       // 서버에서 받아온 사용자 정보를 Context에 저장
  //       setUser({
  //         id: userData.id,
  //         user_id: userData.user_id,
  //         user_phone_number: userData.user_phone_number,
  //         user_password: userData.user_password, // 비밀번호를 저장하는 것은 보안상 권장되지 않음
  //         user_name: userData.user_name,
  //         user_profile_image: userData.user_profile_image,
  //         user_address: userData.user_address,
  //         user_detailed_address: userData.user_detailed_address,
  //         user_nickname: userData.user_nickname,
  //       });

  //       await setToken(response.data.token); // 토큰 저장
  //       // await setUser({ username }); // 유저 정보 저장
  //       navigation.navigate('MypageStack', { screen: 'MyPageHome' });
  //       setShowError(false); // 로그인 성공 시 에러 메시지 숨김
  //     } else {
  //       setShowError(true); // 로그인 실패 시 에러 메시지 표시
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //     Alert.alert('Error', 'An error occurred while logging in.');
  //     setShowError(true);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.lostItemExpert}>잃어버린 물건 찾기 전문가</Text>
      <Text style={styles.quickFindText}>
      분실된 물건을 신속하게 찾고 돌려받으세요. {'\n'}습득한 물건을 찾아주고 사례금을 받아보세요.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="아이디를 입력해주세요."
        value={userId}
        onChangeText={setUserId}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호를 입력해주세요"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {showError && (
        <Text style={styles.checkCredentialsText}>
          아이디 또는 비밀번호를 다시 확인하세요.
        </Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>

      <View style={styles.line28} />
      <View style={styles.textContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignTabs', { screen: 'IdFind' })}>
          <Text style={styles.textId}>아이디 찾기</Text>
        </TouchableOpacity>
        <View style={styles.line30} />
        <TouchableOpacity onPress={() => navigation.navigate('SignTabs', { screen: 'PasswordReset' })}>
          <Text style={styles.textPassword}>비밀번호 재등록</Text>
        </TouchableOpacity>
        <View style={styles.line31} />
        <TouchableOpacity onPress={() => navigation.navigate('SignUpAgree')}>
          <Text style={styles.textSignup}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  
    alignItems: 'center',
  },
  lostItemExpert: {
    
    marginLeft: '5%', // 화면의 중앙에서 약간 왼쪽으로 이동
    width: '100%',
    maxWidth: 400,
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    color: '#000000',
    marginBottom: 20,
    marginTop: 180,
  },
  quickFindText: {
    
    marginLeft: '5%', // 화면의 중앙에서 약간 왼쪽으로 이동
    width: '100%',
    maxWidth: 400,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
    marginBottom: 50,
  },
  input: {
    width: '90%',
    maxWidth: 327,
    height: 48,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 16,
    marginBottom: 20,
    alignSelf: 'center',
  },
  checkCredentialsText: {
    width: '100%',
    maxWidth: 400,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 16,
    color: '#FF0000',
    marginBottom: 16,
    marginLeft: 16,
  },
  button: {
    width: '100%',
    maxWidth: 359,
    height: 48,
    backgroundColor: '#7F7FFF',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  line28: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    width: 359,
    height: 0,
    borderWidth: 0.6,
    borderColor: '#BEBEBE',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  line30: {
    width: 1,
    height: 20,
    backgroundColor: '#BEBEBE',
    marginHorizontal: 20,
  },
  line31: {
    width: 1,
    height: 20,
    backgroundColor: '#BEBEBE',
    marginHorizontal: 20,
  },
  textId: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    color: '#8E8E8E',
  },
  textPassword: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    color: '#8E8E8E',
  },
  textSignup: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    color: '#8E8E8E',
  },
});
