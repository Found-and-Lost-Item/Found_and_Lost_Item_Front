import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { UserContext } from '../../context/UserContext';

export default function ChangeImage({ navigation, route }) {
  const { user } = useContext(UserContext);

  const [name, setName] = useState('');
  const [imageUri, setImageUri] = useState(null);

  // useEffect(() => {
  //   if (userData) {
  //     setNickname(userData.user_name);
  //     setImageUri(userData.user_profile_image || null);
  //   } else {
  //     // userData가 없을 경우 기본값 설정
  //     setNickname('기본닉네임'); // 원하는 기본값 설정
  //     setImageUri(null); // 기본 이미지를 null로 설정
  //   }
  // }, [userData]);

  const handleSelectImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('권한 거부', '이 앱은 사진 접근 권한이 필요합니다.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const { assets } = result;
      if (assets && assets.length > 0) {
        const uri = assets[0].uri;
        const fileName = uri.split('/').pop();
        const newPath = FileSystem.documentDirectory + fileName;

        try {
          await FileSystem.copyAsync({
            from: uri,
            to: newPath,
          });
          setImageUri(newPath);
          Alert.alert('이미지 선택 완료', '이미지가 성공적으로 선택되었습니다.', [{ text: '확인' }]);
        } catch (error) {
          console.error('이미지 저장 오류:', error);
        }
      }
    }
  };

  const handleSubmit = async () => {
    const updatedUserData = { ...userData, user_name: name, user_profile_image: imageUri };
    console.log('ChangeImage userData:', updatedUserData);

    // 아래의 주석 처리된 부분은 백엔드와 연결하는 코드입니다.
    
    try {
      const response = await axios.post('http://20.30.17.16:3000/profile/update_profile', updatedUserData);
      console.log('서버 응답:', response.data);
      // 네비게이션
      navigation.navigate('MyPageHome', { userData: response.data });
    } catch (error) {
      console.error('서버와의 연결 오류:', error);
      Alert.alert('오류', '프로필 업데이트 중 오류가 발생했습니다.');
    }
    

    // 백엔드 연결 없이 프론트에서 데이터 확인
    // navigation.navigate('MyPageHome', { userData: updatedUserData });
    // navigation.navigate('MyPageHome');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>사진과 이름을 등록해주세요.</Text>
      <TouchableOpacity onPress={handleSelectImage} style={styles.imageContainer}>
        <Image
          style={styles.imagePlaceholder}
          source={imageUri ? { uri: imageUri } : user.user_profile_image ? { uri: user.user_profile_image } : require('../../assets/icon.png')}
        />
      </TouchableOpacity>
      <Text style={styles.nicknameLabel}>닉네임을 입력해주세요.</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.inputBox} 
          value={name}
          onChangeText={setName}
          placeholder={user.user_name}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>완료</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <Text style={styles.resetPasswordLabel} onPress={() => navigation.navigate('ChangePassword')}>비밀번호 재설정</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    position: 'absolute',
    left: 22,
    top: 90,
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 30,
    color: '#000000',
  },
  imageContainer: {
    position: 'absolute',
    width: 180,
    height: 180,
    left: 113,
    top: 190,
    backgroundColor: '#D9D9D9',
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: '100%',
    height: '100%',
    borderRadius: 90,
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    // backgroundColor: '#D9D9D9',
    borderRadius: 90,
  },
  nicknameLabel: {
    position: 'absolute',
    left: 20,
    top: 420,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 25,
    color: '#000000',
  },
  inputContainer: {
    position: 'absolute',
    width: 361,
    height: 48,
    left: 16,
    top: 460,
  },
  inputBox: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderColor: '#EEEEEE',
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  button: {
    position: 'absolute',
    width: 361,
    height: 48,
    left: 16,
    top: 650,
    backgroundColor: '#7F7FFF',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 35,
    color: '#FFFFFF',
  },
  line: {
    position: 'absolute',
    width: 160,
    height: 1,
    left: 120,
    top: 580,
    borderColor: '#757575',
    borderWidth: 1,
  },
  resetPasswordLabel: {
    position: 'absolute',
    left: 144,
    top: 550,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: '#545F71',
  },
});
