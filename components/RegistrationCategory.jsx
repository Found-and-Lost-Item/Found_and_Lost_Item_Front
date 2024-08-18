import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function RegistrationCategory({ selectedCategory, onSelectCategory }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(selectedCategory);
  const [items, setItems] = useState([
    { label: '전자기기', value: '1' },
    { label: '지갑', value: '2' },
    { label: '카드', value: '카드' },
    { label: '가방', value: '가방' },
    { label: '의류 및 잡화', value: '의류 및 잡화' },
    { label: '귀금속', value: '귀금속' },
    { label: '금융자산 (현금, 채권 등)', value: '금융자산' },
    { label: '도서', value: '도서' },
    { label: '쇼핑백', value: '쇼핑백' },
    { label: '증명서', value: '증명서' },
    { label: '자동차용품', value: '자동차용품' },
    { label: '기타', value: '기타' },
  ]);

  return (
    <View style={[styles.container, open && styles.containerOpen]}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="카테고리 선택"
        onChangeValue={(category) => onSelectCategory(category)}
        style={styles.input}
        dropDownContainerStyle={styles.dropdown}
        zIndex={3000} // DropDownPicker가 항상 가장 위에 있도록 설정
        zIndexInverse={1000} // DropDownPicker가 닫혔을 때의 zIndex
        listMode="SCROLLVIEW" // 드롭다운의 리스트를 스크롤 가능하게 설정
        scrollViewProps={{ nestedScrollEnabled: true }}
        //maxHeight={0} // 드롭다운 리스트의 최대 높이 설정
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 32,
    zIndex: 1000, // 다른 요소보다 항상 위에 표시되도록 설정
  },
  containerOpen: {
    zIndex: 3000, // 드롭다운이 열릴 때 이 컨테이너가 최상위에 위치하도록 설정
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    height: 40, // 입력 필드 높이 조정
    paddingHorizontal: 10,
  },
  dropdown: {
    borderColor: '#ddd',
    borderRadius: 5, // 드롭다운 컨테이너의 모서리 둥글게
    marginTop: 2, // 드롭다운 메뉴가 입력 필드 아래에 약간의 여유 공간을 가짐
    zIndex: 3000, // 드롭다운 메뉴가 항상 다른 요소들 위에 표시되도록 설정
    maxHeight: 160, // 드롭다운 리스트의 최대 높이 설정
  },
});
