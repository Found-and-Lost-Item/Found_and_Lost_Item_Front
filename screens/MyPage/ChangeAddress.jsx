import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import Postcode from '@actbase/react-daum-postcode';
import { UserContext } from '../../context/UserContext';

export default function ChangeAddress({ navigation }) {
  const { user } = useContext(UserContext);
  const route = useRoute();
  const { userData } = route.params;
  const [address, setAddress] = useState('');
  const [detailedAddress, setDetailedAddress] = useState('');
  const [isPostcodeVisible, setPostcodeVisible] = useState(false);

  const handleAddressSelect = (data) => {
    setAddress(data.address);
    setPostcodeVisible(false);
  };

  const handleRegister = async () => {
    const finalUserData = {
      ...userData,
      user_address: address,
      user_detailed_address: detailedAddress,
    };
    try {
      const response = await axios.post('http://20.30.17.16:3000/auth/register', finalUserData);
      if (response.data.success) {
        Alert.alert('주소 변경이 완료되었습니다.');
        navigation.navigate('MypageStack');
      } else {
        Alert.alert('주소 변경이 실패했습니다.', response.data.message);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'signup error');
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title3}>주소를 설정해주세요</Text>

      <View style={styles.inputGroup}>
        <View style={styles.inputGroup2}>
          <TextInput
            style={styles.input}
            placeholder={user.user_address}
            editable={false}
          />
          <TouchableOpacity style={styles.button} onPress={() => setPostcodeVisible(true)}>
            <Text style={styles.buttonText}>주소 검색</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>상세주소를 입력해주세요</Text>
        <TextInput
          style={styles.input1}
          placeholder={user.user_detailed_address}
        />
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={handleRegister}>
        <Text style={styles.nextButtonText}>주소 변경</Text>
      </TouchableOpacity>

      {isPostcodeVisible && (
        <View style={styles.postcodeContainer}>
          <Postcode
            style={{ width: '100%', height: '100%' }}
            jsOptions={{ animation: true }}
            onSelected={handleAddressSelect}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title3: {
    fontWeight: '700',
    fontSize: 28,
    color: '#000000',
    marginBottom: 16,
    marginTop: 50,
  },
  inputGroup: {
    marginTop: 40,
    marginBottom: 16,
  },
  inputGroup2: {
    flexDirection: 'row',
  },
  input: {
    width: '75%',
    height: 60,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    marginRight: 10,
  },
  input1: {
    width: '100%',
    height: 60,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  button: {
    width: 82,
    height: 50,
    backgroundColor: '#7F7FFF',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  nextButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#7F7FFF',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 290,
  },
  nextButtonText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#FFFFFF',
  },
  postcodeContainer: {
    position: 'absolute',
    width: '110%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    zIndex: 1,
  },
});
