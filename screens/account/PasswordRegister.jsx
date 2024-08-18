// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';

// export default function PasswordRegister() {
//   const navigation = useNavigation();
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   // const handleNext = async () => {
//   //   console.log('비밀번호 등록 버튼 클릭');
  
//   //   if (password !== confirmPassword) {
//   //     Alert.alert('비밀번호가 일치하지 않습니다.');
//   //     return;
//   //   }
  
//   //   try {
//   //     // 비밀번호를 DB에 전송하는 요청
//   //     const response = await axios.post('http://192.168.0.116:3000/find/change_password', { password });
//   //     if (response.data.success) {
//   //       Alert.alert('비밀번호가 성공적으로 변경되었습니다.');
//   //       navigation.navigate('LoginScreen');
//   //     } else {
//   //       Alert.alert('비밀번호 변경에 실패했습니다.');
//   //     }
//   //   } catch (error) {
//   //     console.log('Error:', error);
//   //     Alert.alert('서버와의 통신 중 오류가 발생했습니다.');
//   //   }
//   // };


//   const handleNext = async () => {
//     if (password !== confirmPassword) {
//       Alert.alert('비밀번호가 일치하지 않습니다.');
//       return;
//     }
  
//     try {
//       const response = await axios.post('http://192.168.0.116:3000/find/change_password', { 
//         user_id: route.params.userId,  // 전달된 userId 사용
//         phone_number: route.params.phoneNumber, // 전달된 phoneNumber 사용
//         new_password: password 
//       });
  
//       if (response.data.success) {
//         Alert.alert('비밀번호가 성공적으로 변경되었습니다.');
//         navigation.navigate('LoginScreen');
//       } else {
//         Alert.alert('비밀번호 변경에 실패했습니다.');
//       }
//     } catch (error) {
//       console.log('Error:', error);
//       Alert.alert('서버와의 통신 중 오류가 발생했습니다.');
//     }
//   };
  

//   return (
//     <View style={styles.container}>
//       <View style={styles.Passwordcontainer}>
//         <Text style={styles.title}>비밀번호 재등록</Text>

//         <View style={styles.inputGroup}>
//           <Text style={styles.inputLabel}>새로운 비밀번호를 입력해주세요</Text>
//           <TextInput
//             style={styles.input1}
//             secureTextEntry
//             value={password}
//             onChangeText={setPassword}
//             placeholder="새 비밀번호"
//             placeholderTextColor="#D9D9D9"
//           />
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.inputLabel}>새로운 비밀번호를 재입력해주세요</Text>
//           <TextInput
//             style={styles.input1}
//             secureTextEntry
//             value={confirmPassword}
//             onChangeText={setConfirmPassword}
//             placeholder="비밀번호 확인"
//             placeholderTextColor="#D9D9D9"
//           />
//         </View>
//       </View>

//       <TouchableOpacity 
//         style={styles.nextButton} 
//         onPress={handleNext}
//       >
//         <Text style={styles.nextButtonText}>비밀번호 등록</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'space-between',
//     position: 'center',
//     width: '100%', // 너비 설정
//     height: 852, // 높이 설정
//   },
//   Passwordcontainer: {
//     padding: 16,
//     width: '100%', // 너비 설정
//   },
//   title: {
//     width: '100%',
//     fontWeight: '700',
//     fontSize: 20,
//     lineHeight: 28,
//     color: '#000000',
//     marginBottom: 30,
//     marginTop: 60,
//   },
//   inputGroup: {
//     width: '100%',
//     marginBottom: 40,
//   },
//   inputLabel: {
//     fontWeight: '700',
//     fontSize: 16,
//     lineHeight: 19,
//     color: '#C9C9C9',
//     marginBottom: 8,
//   },
//   input1: {
//     width: '100%',
//     height: 48,
//     backgroundColor: '#FFFFFF',
//     borderColor: '#EEEEEE',
//     borderWidth: 1,
//     borderRadius: 6,
//     paddingHorizontal: 8,
//   },
//   nextButton: {
//     width: '100%',
//     maxWidth: 359,
//     height: 48,
//     backgroundColor: '#7F7FFF',
//     borderRadius: 6,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     marginBottom: 80,
//   },
//   nextButtonText: {
//     fontWeight: '600',
//     fontSize: 16,
//     color: '#FFFFFF',
//   },
// });



















import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function PasswordRegister({ route }) {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 이전 화면에서 전달받은 userId와 phoneNumber를 받음
  const { userId, phoneNumber } = route.params;

  const handleNext = async () => {
    console.log('비밀번호 등록 버튼 클릭');
  
    if (password !== confirmPassword) {
      Alert.alert('비밀번호가 일치하지 않습니다.');
      return;
    }
  
    try {
      console.log('Sending request to backend with phone number:', password); // 요청 전 로그
      // 서버로 비밀번호 변경 요청
      const response = await axios.post('http://192.168.0.116:3000/find/change_password', { 
        user_id: userId,
        phone_number: phoneNumber,
        new_password: password 
      });

      if (response.data.success) {
        Alert.alert('비밀번호가 성공적으로 변경되었습니다.');
        navigation.navigate('Login');
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
          <Text style={styles.inputLabel}>새로운 비밀번호를 입력해주세요</Text>
          <TextInput
            style={styles.input1}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholder="새 비밀번호"
            placeholderTextColor="#D9D9D9"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>새로운 비밀번호를 재입력해주세요</Text>
          <TextInput
            style={styles.input1}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="비밀번호 확인"
            placeholderTextColor="#D9D9D9"
          />
        </View>
      </View>

      <TouchableOpacity 
        style={styles.nextButton} 
        onPress={handleNext}
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
    position: 'center',
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
