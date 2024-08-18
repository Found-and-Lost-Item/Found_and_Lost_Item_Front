import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import HeaderWithFilters from '../components/HeaderWithFilters';
import { useNavigation } from '@react-navigation/native';
import mockData from '../data/mockData';

export default function LostItems() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortOption, setSortOption] = useState('최신순');

  useEffect(() => {
    // 목업 데이터 사용
    setData(mockData.lostItems);
    setFilteredData(mockData.lostItems);
  }, []);

  const handleCategorySelect = (category) => {
    if (category) {
      const filtered = data.filter(item => item.lostCategory === category);
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  const handleSortSelect = (option) => {
    setSortOption(option);
    let sortedData;
    switch (option) {
      case '최신순':
        sortedData = [...filteredData].sort((a, b) => new Date(b.lostDate) - new Date(a.lostDate));
        break;
      case '오래된 순':
        sortedData = [...filteredData].sort((a, b) => new Date(a.lostDate) - new Date(b.lostDate));
        break;
      case '이름순':
        sortedData = [...filteredData].sort((a, b) => a.lostTitle.localeCompare(b.lostTitle));
        break;
    }
    setFilteredData(sortedData);
  };

  const handleItemPress = (item) => {
    // 네비게이션에서 정확한 스택 화면으로 이동
    navigation.navigate('LostItemDetail', {
      LostAward: item.lostAward,
      LostCategory: item.lostCategory,
      LostContent: item.lostContent,
      LostDate: item.lostDate,
      LostImageUrl: item.lostImageUrl,
      LostLatitude: item.lostLatitude,
      LostLongitude: item.lostLongitude,
      LostTitle: item.lostTitle,
    });
  };

  return (
    <View style={styles.container}>
      <HeaderWithFilters
        onCategorySelect={handleCategorySelect}
        onSortSelect={handleSortSelect}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => item.id !== undefined ? item.id.toString() : index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.itemWrapper}>
            <View style={styles.itemContainer}>
              {item.lostImageUrl ? (
                <Image source={typeof item.lostImageUrl === 'string' ? { uri: item.lostImageUrl } : item.lostImageUrl} style={styles.itemImage} />
              ) : (
                <View style={[styles.itemImage, styles.placeholder]}>
                  <Text style={styles.placeholderText}>이미지 없음</Text>
                </View>
              )}
              <Text style={styles.itemTitle}>{item.lostTitle}</Text>
              <Text style={styles.itemReward}>사례금: {item.lostAward}</Text>
            </View>
          </TouchableOpacity>
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  row: {
    flex: 1,
  },
  itemWrapper: {
    flex: 1,
    maxWidth: '50%',  // 각 아이템이 50%의 너비를 차지하도록 설정
  },
  itemContainer: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  itemImage: {
    width: '100%',
    height: 130,
    borderRadius: 10,
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
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  itemReward: {
    fontSize: 14,
    color: '#555',
  },
});
