import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function LostItemDetail() {
  const route = useRoute();
  const {
    LostAward = '정보 없음',
    LostCategory = '정보 없음',
    LostContent = '정보 없음',
    LostDate = '정보 없음',
    LostImageUrl = null,
    LostLatitude = '정보 없음',
    LostLongitude = '정보 없음',
    LostTitle = '정보 없음',
  } = route.params || {};

  return (
    <View style={styles.container}>
      {LostImageUrl ? (
        <Image source={typeof LostImageUrl === 'string' ? { uri: LostImageUrl } : LostImageUrl} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.placeholderText}>이미지 없음</Text>
        </View>
      )}
      <Text style={styles.title}>{LostTitle}</Text>
      <Text style={styles.content}>{LostContent}</Text>

      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>분류: </Text>
        <Text style={styles.detailText}>{LostCategory}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>날짜: </Text>
        <Text style={styles.detailText}>{LostDate}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>장소: </Text>
        <Text style={styles.detailText}>{LostLatitude}, {LostLongitude}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>사례금: </Text>
        <Text style={styles.detailText}>{LostAward}</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>찾았어요!</Text>
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
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  placeholderText: {
    color: '#999',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  detailText: {
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#7F7FFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
