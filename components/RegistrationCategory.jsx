import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const categories = [
  '전자기기',
  '지갑',
  '카드',
  '가방',
  '의류 및 잡화',
  '귀금속',
  '금융자산 (현금, 채권 등)',
  '도서',
  '쇼핑백',
  '증명서',
  '자동차용품',
  '기타',
];

export default function RegistrationCategory({ selectedCategory, onSelectCategory }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSelect = (category) => {
    onSelectCategory(category);
    setDropdownVisible(false);
  };

  return (
    <View>
      <TouchableOpacity style={styles.input} onPress={() => setDropdownVisible(!dropdownVisible)}>
        <Text style={styles.inputText}>{selectedCategory || '카테고리를 선택해주세요'}</Text>
      </TouchableOpacity>

      {dropdownVisible && (
        <View style={styles.dropdown}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={styles.dropdownItem}
              onPress={() => handleSelect(category)}
            >
              <Text style={styles.dropdownItemText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  inputText: {
    color: '#888',
  },
  dropdown: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    zIndex: 1000,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dropdownItemText: {
    fontSize: 16,
  },
});
