import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import RegistrationCategory from '../../../components/RegistrationCategory';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function FoundItemRegistration2({ navigation }) {
  const route = useRoute();
  const [foundCategory, setFoundCategory] = useState('');
  const [foundTitle, setFoundTitle] = useState('');
  const [foundContent, setFoundContent] = useState('');
  const { FoundItemData1 } = route.params; // FoundItem1에서 전달된 데이터


  const handleNext = () => {
    // if (!category || !lost_title || !lost_content) {
    //   // 필요한 필드가 비어 있는 경우 경고 메시지를 표시가능.
    //   Alert.alert('모든 필드를 입력해주세요');
    //   return;
    // }
    const FoundItemData2 = {...FoundItemData1, foundCategory, foundTitle, foundContent};


    navigation.navigate('FoundItemRegistration3', {FoundItemData2});
    console.log('FoundItemData2 :', FoundItemData2);
  };

  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Text style={styles.label}>물건의 카테고리를 선택해주세요. <Text style={styles.required}>*</Text></Text>
      <RegistrationCategory
        selectedCategory={foundCategory}
        onSelectCategory={setFoundCategory}
      />
      
      <Text style={styles.label}>게시물의 제목을 작성해주세요. <Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="게시물의 제목을 작성해주세요."
        value={foundTitle}
        onChangeText={setFoundTitle}
      />

      <Text style={styles.label}>게시물의 내용을 작성해주세요. <Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.textArea}
        placeholder="게시물의 내용을 작성해주세요."
        value={foundContent}
        onChangeText={setFoundContent}
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
