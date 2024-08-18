import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RegistrationModal({ visible, onClose, onSelect }) {
  const navigation = useNavigation();

  const handleSelect = (type) => {
    onClose();
    if (type === 'lost') {
      navigation.navigate('LostRegistrationStack', {
        screen: 'LostItemRegistration1', // 첫 번째 분실물 등록 화면으로 이동
      });
    } else {
      navigation.navigate('FoundRegistrationStack', {
        screen: 'FoundItemRegistration1', // 첫 번째 습득물 등록 화면으로 이동
      });
    }
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.popup}>
          <Text style={styles.title}>해당하는 상황을 골라주세요</Text>
          <TouchableOpacity style={styles.option1} onPress={() => handleSelect('lost')}>
            <Text style={styles.optionTitle1}>물건을 잃어버렸어요!</Text>
            <Text style={styles.optionDescription1}>본인 또는 타인의 물건을 잃어버린 경우</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option2} onPress={() => handleSelect('found')}>
            <Text style={styles.optionTitle2}>물건을 주웠어요!</Text>
            <Text style={styles.optionDescription2}>타인의 분실물을 찾은 경우</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>닫기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  popup: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#7F7FFF',
  },
  option1: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ECECEC',
    marginBottom: 15,
    alignItems: 'center',
  },
  option2: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#7F7FFF',
    marginBottom: 15,
    alignItems: 'center',
  },
  optionTitle1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  optionDescription1: {
    fontSize: 12,
    color: 'black',
  },
  optionTitle2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  optionDescription2: {
    fontSize: 12,
    color: '#ECECEC',
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
    marginTop: 20,
  },
});
