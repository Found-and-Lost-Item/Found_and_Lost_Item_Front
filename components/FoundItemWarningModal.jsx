import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';


export default function FoundItemWarningModal({ visible, onConfirm, onClose }) {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.popup}>
          <Text style={styles.title}>찾은 물건을 보관해야 할까요?</Text>
          <Image source = {require('../assets/images/QuestionMark.png')}
          style = {styles.QuestionMark}></Image>
          <Text style={styles.message}>
            NO! {'\n'}발견한 습득물은 제자리에 두고 사진을 찍어 {'\n'} 등록해주세요. {'\n'} 분실자는 물건을 더 빠르게 찾을 수 있고, 
            {'\n'}습득자는 법적인 책임을 피할 수 있기 때문이에요.
          </Text>
          <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
            <Text style={styles.confirmButtonText}>확인했어요!</Text>
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
    width: 320,
    padding: 16,
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
  message: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  confirmButton: {
    backgroundColor: '#7F7FFF',
    paddingVertical: 12,
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',

  },
  QuestionMark: {
    marginBottom: 20,
    width: 100,
    height: 100,
  }
});
