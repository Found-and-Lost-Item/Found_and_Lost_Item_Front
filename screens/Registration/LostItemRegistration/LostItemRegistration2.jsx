import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import RegistrationCategory from '../../../components/RegistrationCategory';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function LostItemRegistration2({ navigation }) {
  const route = useRoute();
  const [lostCategory, setLostCategory] = useState('');
  const [lostTitle, setLostTitle] = useState('');
  const [lostContent, setLostContent] = useState('');
  const { LostItemData1 } = route.params; // LostItem1에서 전달된 데이터

  // console.log(lost_image_url, category, lost_title, lost_content);

  const handleNext = () => {
    // if (!category || !lost_title || !lost_content) {
    //   // 필요한 필드가 비어 있는 경우 경고 메시지를 표시가능.
    //   Alert.alert('모든 필드를 입력해주세요');
    //   return;
    // }
    const LostItemData2 = {...LostItemData1, lostCategory, lostTitle, lostContent};


    navigation.navigate('LostItemRegistration3', {LostItemData2});
    console.log('LostItemData2 :', LostItemData2);
  };

  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Text style={styles.label}>물건의 카테고리를 선택해주세요. <Text style={styles.required}>*</Text></Text>
      <RegistrationCategory
        selectedCategory={lostCategory}
        onSelectCategory={setLostCategory}
      />
      
      <Text style={styles.label}>게시물의 제목을 작성해주세요. <Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="게시물의 제목을 작성해주세요."
        value={lostTitle}
        onChangeText={setLostTitle}
      />

      <Text style={styles.label}>게시물의 내용을 작성해주세요. <Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.textArea}
        placeholder="게시물의 내용을 작성해주세요."
        value={lostContent}
        onChangeText={setLostContent}
        multiline={true}
      />

      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>다음으로</Text>
      </TouchableOpacity>
    </View>
  </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
    textAlign: 'left',
  },
  required: {
    color: '#7F7FFF',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 32,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  textArea: {
    height: 220,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  nextButton: {
    backgroundColor: '#7F7FFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 80,
    width: '100%',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
