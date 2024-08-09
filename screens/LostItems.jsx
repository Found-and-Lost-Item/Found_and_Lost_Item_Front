import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';
import HeaderWithFilters from '../components/HeaderWithFilters';
import axios from 'axios';
import mockData from '../data/mockData'; // 목업 데이터

export default function LostItems() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortOption, setSortOption] = useState('최신순');

  useEffect(() => {
    // 백엔드에서 데이터 가져오기
    // axios.get('https://your-backend-api.com/api/lost-items')
    //   .then(response => {
    //     setData(response.data);
    //     setFilteredData(response.data);
    //   })
    //   .catch(error => console.error(error));

    // 목업 데이터 사용
    setData(mockData.lostItems);
    setFilteredData(mockData.lostItems);
  }, []);

  const handleCategorySelect = (category) => {
    if (category) {
      const filtered = data.filter(item => item.category === category);
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
        sortedData = [...filteredData].sort((a, b) => b.date - a.date);
        break;
      case '오래된 순':
        sortedData = [...filteredData].sort((a, b) => a.date - b.date);
        break;
      case '이름순':
        sortedData = [...filteredData].sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
    setFilteredData(sortedData);
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
          <View style={styles.itemContainer}>
            <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={styles.itemImage} />
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemReward}>사례금: {item.reward}</Text>
          </View>
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
    justifyContent: 'space-around',
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
  itemTitle: {
    paddingTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  itemReward: {
    fontSize: 14,
    color: '#555',
  },
});
