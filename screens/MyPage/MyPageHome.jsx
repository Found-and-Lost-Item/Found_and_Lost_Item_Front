import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';

export default function MyPageHome() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleLogout = async () => {
    try {
      setUser(null);
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Logout Error: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mycontainer}>
        <View style={styles.rectangle}>
          <Text style={styles.name}>{user.user_name}</Text>
          <Text style={styles.town}>{user.user_address}</Text>
          <TouchableOpacity onPress={toggleModal} style={styles.arrow}>
            <Image
              source={require('./arrow.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Image
          source={user.user_profile_image}
          style={styles.ellipse} 
        />

        <View style={styles.rectanglepay} >
          <Text style={styles.myPay}>나의 pay</Text>
          <Text style={styles.amount}>0원</Text>
          <View style={styles.rectanglechr}>
            <Text style={styles.recharge}>충전하기</Text>
          </View>
        </View>

        <View style={styles.line28} />

        <View style={styles.groupContainer}>
          <TouchableOpacity style={styles.commonRectangle} onPress={() => navigation.navigate('ChangeAddress')}>
            <Text style={styles.commonText}>내 동네 설정하기</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.groupContainer}>
          <TouchableOpacity style={styles.commonRectangle}>
            <Text style={styles.commonText}>나의 분실물 내역</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.groupContainer}>
          <TouchableOpacity style={styles.commonRectangle}>
            <Text style={styles.commonText}>나의 습득물 내역</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.groupContainer} >
          <TouchableOpacity style={styles.commonRectangle} onPress={() => navigation.navigate('Announcement')}>
            <Text style={styles.commonText}>공지사항</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.popup}>
            <TouchableOpacity onPress={() => { /* 로그아웃 처리 */ }}>
              <Text style={styles.popupItem}>로그아웃</Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity onPress={() => { /* 회원탈퇴 처리 */ }}>
              <Text style={styles.popupItem}>회원탈퇴</Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity onPress={() => navigation.navigate('ChangeImage')}>
              <Text style={styles.popupItem}>정보수정</Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.popupItem}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  mycontainer: {
    flex: 1,
    top: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rectangle: {
    width: '90%',
    maxWidth: 393,
    height: 100,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  name: {
    position: 'absolute',
    left: 90,
    top: 10,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 35,
    color: '#000000',
    textAlign: 'center',
  },
  town: {
    position: 'absolute',
    left: 90,
    top: 45,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 35,
    color: '#8E8E8E',
    textAlign: 'center',
  },
  arrow: {
    position: 'absolute',
    width: 16,
    height: 32,
    left: 335,
    top: 20,
  },
  ellipse: {
    position: 'absolute',
    width: 60,
    height: 60,
    left: 17,
    top: 15,
    // backgroundColor: '#D9D9D9',
    borderRadius: 30,
  },
  rectanglepay: {
    width: '90%',
    maxWidth: 360,
    height: 55,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#7F7FFF',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 40,
  },
  myPay: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 35,
    color: '#222222',
    textAlign: 'left',
    marginRight: 8,
  },
  amount: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 35,
    color: '#000000',
    textAlign: 'left',
  },
  rectanglechr: {
    width: 77,
    height: 35,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 6,
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recharge: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
    color: '#000000',
    textAlign: 'center',
  },
  line28: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '110%',
    height: 10,
    backgroundColor: '#E8E9EE',
    borderWidth: 0.6,
    borderColor: '#E8E9EE',
  },
  groupContainer: {
    width: '110%',
    maxWidth: 400,
    alignItems: 'center',
    marginTop: 10,
  },
  commonRectangle: {
    width: '100%',
    height: 55,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  commonText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 35,
    color: '#000000',
    textAlign: 'center',
    marginLeft: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    width: 135,
    height: 190,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#757575',
    marginTop: 5,
    marginBottom: 5,
  },
  popupItem: {
    fontSize: 16,
    color: '#545F71',
    marginVertical: 5,
  },
});
