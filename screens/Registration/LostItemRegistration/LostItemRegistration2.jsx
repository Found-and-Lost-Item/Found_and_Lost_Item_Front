import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import RegistrationCategory from '../../../components/RegistrationCategory';

export default function LostItemRegistration2({ navigation }) {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>잃어버렸어요!</Text>
      
      <RegistrationCategory
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      
      <TextInput
        style={styles.input}
        placeholder="게시물의 제목을 작성해주세요"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.textArea}
        placeholder="게시물의 내용을 작성해주세요"
        value={description}
        onChangeText={setDescription}
        multiline={true}
      />
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('LostItemRegistration3', { category, title, description })}
      >
        <Text style={styles.nextButtonText}>다음으로</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  nextButton: {
    backgroundColor: '#7F7FFF',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 6,
    alignSelf: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
