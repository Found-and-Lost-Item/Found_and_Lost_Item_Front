import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

export default function LostItemRegistration1({ navigation }) {
  const [lostImageUrl, setLostImageUrl] = useState(null);
  const [noImage, setNoImage] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setLostImageUrl(result.assets[0].uri);
      setNoImage(false); // 사진을 선택하면 "올릴 수 있는 사진이 없어요" 옵션 해제
    }
  };

  const handleNoImage = () => {
    setNoImage(!noImage);
    if (!noImage) {
      setLostImageUrl(null); // "올릴 수 있는 사진이 없어요"를 선택하면 업로드된 사진 초기화
    }
  };

  const handleNext = () => {
    
    const LostItemData1 = {lostImageUrl};

    if (lostImageUrl || noImage) {
      navigation.navigate('LostItemRegistration2', { LostItemData1 });
      console.log('LostItemData1 :', LostItemData1);
    } else {
      Alert.alert("사진을 업로드 해주세요", "사진을 업로드하거나 '올릴 수 있는 사진이 없어요'를 선택해주세요.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>어떤 물건을 찾으시나요?</Text>
      <Text style={styles.description}>물건의 사진을 업로드해주세요</Text>

      <TouchableOpacity onPress={pickImage} style={styles.imageUpload} disabled={noImage}>
  {lostImageUrl ? (
    <Image source={{ uri: lostImageUrl }} style={styles.image} />
  ) : (
    <Text style={styles.uploadText}>사진 업로드</Text>
  )}
</TouchableOpacity>


      <TouchableOpacity
        style={[styles.noImageOption, noImage ? styles.noImageOptionSelected : null]}
        onPress={handleNoImage}
      >
        <Ionicons
          name={noImage ? "checkbox-outline" : "square-outline"}
          size={28}
          color={noImage ? "#7F7FFF" : "gray"}
        />
        <Text style={[styles.noImageText, noImage ? { color: '#7F7FFF' } : null]}>올릴 수 있는 사진이 없어요</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNext}
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
  },
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 20,
    textAlign: 'left',
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
    textAlign: 'left',
  },
  imageUpload: {
    width: '100%',
    height: 200,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'solid',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  uploadText: {
    fontSize: 16,
    color: '#888',
  },
  noImageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: '#aaa',
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: 'flex-start',
  },
  noImageOptionSelected: {
    borderColor: '#7F7FFF',
  },
  noImageText: {
    marginLeft: 10,
    color: '#555',
    fontSize: 16,
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

