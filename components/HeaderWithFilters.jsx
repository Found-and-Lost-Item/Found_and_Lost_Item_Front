import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

const categories = [
  '전자기기',
  '지갑',
  '카드',
  '가방',
  '의류 및 잡화',
  '귀금속',
  '금융자산',
  '도서',
  '쇼핑백',
  '증명서',
  '자동차용품',
  '기타',
];

export default function HeaderWithFilters({ onCategorySelect, onSortSelect, onSearch }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleCategoryPress = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      onCategorySelect(null);
    } else {
      setSelectedCategory(category);
      onCategorySelect(category);
    }
  };

  const handleSearchToggle = () => {
    setIsSearchActive(!isSearchActive);
    if (isSearchActive) {
      onSearch('');  // 검색이 비활성화될 때 검색어를 초기화
      setSearchText('');
    }
  };

  const handleSearch = (text) => {
    setSearchText(text);
    onSearch(text);  // 부모 컴포넌트에 검색어 전달
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        {isSearchActive ? (
          <TextInput
            style={styles.searchInput}
            placeholder="검색어를 입력하세요"
            value={searchText}
            onChangeText={handleSearch}
            autoFocus
          />
        ) : (
          <View style={styles.locationContainer}>
            <Text style={styles.headerText}>주례동</Text>
            <Icon name="arrow-drop-down" />
          </View>
        )}
        <TouchableOpacity onPress={handleSearchToggle}>
          <Icon name={isSearchActive ? "close" : "search"} />
        </TouchableOpacity>
      </View>

      {!isSearchActive && (
        <View style={styles.filtersContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.selectedCategoryButton,
                ]}
                onPress={() => handleCategoryPress(category)}
              >
                <Text style={styles.categoryButtonText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={styles.sortButton}
            onPress={() => setSortModalVisible(true)}
          >
            <Text style={styles.sortButtonText}>최신순</Text>
            <Icon name="arrow-drop-down" />
          </TouchableOpacity>
        </View>
      )}

      <Modal
        transparent={true}
        visible={sortModalVisible}
        onRequestClose={() => setSortModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalBackground} onPress={() => setSortModalVisible(false)}>
          <View style={styles.modalContainer}>
            {['최신순', '오래된 순', '이름순'].map((sortOption, index) => (
              <TouchableOpacity
                key={index}
                style={styles.sortOption}
                onPress={() => {
                  onSortSelect(sortOption);
                  setSortModalVisible(false);
                }}
              >
                <Text>{sortOption}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    fontSize: 16,
  },
  filtersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  categoryButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginRight: 10,
  },
  selectedCategoryButton: {
    backgroundColor: '#aaa',
  },
  categoryButtonText: {
    fontSize: 14,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#eee',
    borderRadius: 20,
  },
  sortButtonText: {
    fontSize: 14,
    marginRight: 5,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  sortOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
