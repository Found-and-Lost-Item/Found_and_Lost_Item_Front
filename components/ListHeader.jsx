import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Header({ navigation, onSearch }) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchText, setSearchText] = useState('');

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
});
