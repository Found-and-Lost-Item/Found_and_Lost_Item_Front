import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function LostItemRegistration1({ navigation }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // expo-image-picker의 새 버전은 assets 배열을 사용
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>어떤 물건을 찾으시나요?</Text>
      <Text style={styles.subtitle}>물건의 사진을 업로드해주세요</Text>
      <TouchableOpacity onPress={pickImage} style={styles.imageUpload}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.uploadText}>사진 업로드</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('LostItemRegistration2', { image })}
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
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  imageUpload: {
    width: 200,
    height: 200,
    backgroundColor: '#ECECEC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  uploadText: {
    fontSize: 16,
    color: '#888',
  },
  nextButton: {
    backgroundColor: '#7F7FFF',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 6,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
