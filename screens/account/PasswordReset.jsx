import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function PasswordResetScreen() {
  const navigation = useNavigation();
  const [userId, setUserId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isVerificationSent, setIsVerificationSent] = useState(false); // 인증 요청이 완료되었는지 여부

  const handleRequestVerification = async () => {
    try {
      const params = {
        user_id: userId,
        phone_number: phoneNumber
      };
  
      // params에 담겨있는 값을 콘솔에 출력
      console.log('Sending request with params:', params);
  
      // 서버에 userId와 phoneNumber를 전송하여 인증 요청
      const response = await axios.post('http://20.30.17.16:3000/find/find_password', params);
  
      if (response.data.exists) {
        setIsVerificationSent(true); // 인증 요청 완료 상태로 변경
        Alert.alert('인증 요청 완료', '인증 번호가 발송되었습니다.', [
          {
            text: '확인',
            onPress: () => {
              // 인증이 완료된 후, 비밀번호 변경 페이지로 이동
              navigation.navigate('PasswordRegister', { userId, phoneNumber});
            }
          }
        ]);
      } else {
        Alert.alert('인증 요청 실패', '입력한 아이디와 전화번호가 일치하는 사용자가 없습니다.');
      }
    } catch (error) {
      console.log('Error during verification request:', error);
      Alert.alert('Error', '서버와 통신하는 동안 오류가 발생했습니다.');
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.Passwordcontainer}>
        <Text style={styles.title}>비밀번호 재등록</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>아이디를 입력해주세요</Text>
          <TextInput 
            style={styles.input1} 
            value={userId}
            placeholder="아이디" 
            placeholderTextColor="#D9D9D9"
            onChangeText={setUserId}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>휴대폰 번호를 입력해주세요.</Text>
          <View style={styles.inputGroup2}>
            <TextInput 
              style={styles.input} 
              value={phoneNumber}
              placeholder="휴대폰 번호" 
              placeholderTextColor="#D9D9D9"
              onChangeText={setPhoneNumber}
            />
            <TouchableOpacity style={styles.button} onPress={handleRequestVerification}>
              <Text style={styles.buttonText}>인증 요청</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    position: 'center',
    width: '100%', // 너비 설정
    height: 852, // 높이 설정
    backgroundColor: '#FFFFFF', // 배경 색상 설정
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Passwordcontainer: {
    flex: 1,
    padding: 16,
    position: 'center',
    width: '100%', // 너비 설정
    height: '50%', // 높이 설정
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%', // 전체 너비 사용
    maxWidth: 400,
    fontWeight: '700',
    fontSize: 20, // 글자 크기 조정
    lineHeight: 28,
    color: '#000000',
    marginBottom: 20, // 아래 여백
    marginTop: 150,
  },
  inputGroup: {
    width: '100%', // 너비를 100%로 설정
    marginBottom: 16, // 아래 여백 추가
  },
  inputLabel: {
    width: 208,
    height: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    color: '#C9C9C9',
    marginBottom: 8, // 아래 여백 추가
  },
  inputGroup2: {
    flexDirection: 'row',
  },
  input1: {
    boxSizing: 'border-box',
    width: '100%', // 너비를 100%로 설정
    height: 48,
    backgroundColor: '#FFFFFF',
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8, // 내부 여백 추가
    marginRight: 10,
  },
  input: {
    boxSizing: 'border-box',
    width: '75%', // 너비를 100%로 설정
    height: 48,
    backgroundColor: '#FFFFFF',
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8, // 내부 여백 추가
    marginRight: 10,
  },
  button: {
    width: 82,
    height: 48,
    backgroundColor: '#7F7FFF',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
