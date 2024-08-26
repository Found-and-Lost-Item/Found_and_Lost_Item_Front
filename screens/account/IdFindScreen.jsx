import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import axios from 'axios';

export default function IdFind() {  // 파일 이름과 동일하게 설정
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userId, setUserId] = useState('');

  const handleResendPress = () => {
    // 재발송 버튼 클릭 시 실행할 로직
    console.log('재발송 버튼이 클릭되었습니다.');
  };

  const handleVerifyPress = async () => {
    try {
      console.log('Sending request to backend with phone number:', phoneNumber); // 요청 전 로그
  
      const response = await axios.post('http://192.168.0.116:3000/find/find_id', {
        phone_number: phoneNumber,
      });
  
      console.log('Response from backend:', response.data); // 응답 후 로그
  
      if (response.data.success) {
        setUserId(response.data.user_id);
        Alert.alert('아이디 찾기 성공', `아이디: ${response.data.user_id}`);
      } else {
        Alert.alert('아이디 찾기 실패', response.data.message);
      }
    } catch (error) {
      console.error('Error during request:', error);
      Alert.alert('에러', '서버와 통신 중 문제가 발생했습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Idcontainer}>
        <Text style={styles.title}>아이디 찾기</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>휴대폰 번호를 입력해주세요.</Text>
          <View style={styles.inputGroup2}>
            <TextInput
              style={styles.input}
              placeholder="휴대폰 번호"
              placeholderTextColor="#D9D9D9"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <TouchableOpacity style={styles.button} onPress={handleVerifyPress}>
              <Text style={styles.buttonText}>인증 요청</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.resendText}>
            인증 요청이 오지 않았을 시{' '}
            <TouchableOpacity onPress={handleResendPress}>
              <Text style={styles.resendButton}>재발송</Text>
            </TouchableOpacity>
            을 눌러주세요.
          </Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>인증번호를 입력해주세요.</Text>
          <View style={styles.inputGroup2}>
            <TextInput
              style={styles.input}
              placeholder="인증번호"
              placeholderTextColor="#D9D9D9"
            />
            <TouchableOpacity style={styles.button} onPress={handleVerifyPress}>
              <Text style={styles.buttonText}>인증 확인</Text>
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
  Idcontainer: {
    flex: 1,
    padding: 16,
    position: 'center',
    width: '100%', // 너비 설정
    height: '40%', // 높이 설정
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
  resendText: {
    fontSize: 12, // 글자 크기 조정
    lineHeight: 16,
    color: '#000000',
    marginTop: 8,
    marginBottom: 16,
  },
  resendButton: {
    textDecorationLine: 'underline',
    color: '#000000', // 버튼 색상
    fontSize: 12,
  },
});
