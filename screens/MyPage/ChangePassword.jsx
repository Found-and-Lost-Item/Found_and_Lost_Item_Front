import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';

export default function ChangePassword({ navigation, route }) {
  const { user, setUser } = useContext(UserContext);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleNext = async () => {
    console.log('비밀번호 등록 버튼 클릭');
  
    // if (currentPassword !== user.user_password) {
    //   Alert.alert('현재 비밀번호가 일치하지 않습니다.');
    //   return;
    // }

    if (newPassword !== confirmNewPassword) {
      Alert.alert('새 비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      console.log(user.user_id, currentPassword);
      // 서버로 비밀번호 변경 요청
      const response = await axios.post('http://20.30.17.16:3000/password/reset_password', { 
        user_id: user.user_id,
        current_password: currentPassword,
        new_password: newPassword 
      });

      console.log('Server response:', response.data);

      if (response.data.success) {
        Alert.alert('비밀번호가 성공적으로 변경되었습니다.');
        // 비밀번호 변경 후, context에서 비밀번호를 업데이트
        setUser({ ...user, user_password: newPassword });
        navigation.navigate('MypageStack'); // 로그인 페이지로 이동
      } else {
        Alert.alert('비밀번호 변경에 실패했습니다.');
      }
    } catch (error) {
      console.log('Error:', error);
      Alert.alert('서버와의 통신 중 오류가 발생했습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Passwordcontainer}>
        <Text style={styles.title}>비밀번호 재등록</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>현재 비밀번호를 입력해주세요</Text>
          <TextInput
            style={styles.input1}
            secureTextEntry
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>새로운 비밀번호를 입력해주세요</Text>
          <TextInput
            style={styles.input1}
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>새로운 비밀번호를 재입력해주세요</Text>
          <TextInput
            style={styles.input1}
            secureTextEntry
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
          />
        </View>
      </View>

      <TouchableOpacity 
        style={styles.nextButton} 
        onPress={handleNext} // 이 부분에서 handleNext 함수를 호출하도록 수정
      >
        <Text style={styles.nextButtonText}>비밀번호 등록</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    width: '100%', // 너비 설정
    height: 852, // 높이 설정
  },
  Passwordcontainer: {
    padding: 16,
    width: '100%', // 너비 설정
  },
  title: {
    width: '100%',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    color: '#000000',
    marginBottom: 30,
    marginTop: 60,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 40,
  },
  inputLabel: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    color: '#C9C9C9',
    marginBottom: 8,
  },
  input1: {
    width: '100%',
    height: 48,
    backgroundColor: '#FFFFFF',
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  nextButton: {
    width: '100%',
    maxWidth: 359,
    height: 48,
    backgroundColor: '#7F7FFF',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 80,
  },
  nextButtonText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
