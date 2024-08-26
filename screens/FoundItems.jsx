// import React, { useState, useEffect } from 'react';
// import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import HeaderWithFilters from '../components/HeaderWithFilters';
// import { useNavigation } from '@react-navigation/native';
// import mockData from '../data/mockData';
// import axios from 'axios';

// export default function FoundItems() {
//   const navigation = useNavigation();
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [sortOption, setSortOption] = useState('최신순');

//   useEffect(() => {
//     // 백엔드에서 데이터 가져오기
//     // axios.get('백엔드 api')
//     //   .then(response => {
//     //     setData(response.data);
//     //     setFilteredData(response.data);
//     //   })
//     //   .catch(error => console.error(error));

//     // 목업 데이터 사용
//     setData(mockData.foundItems);
//     setFilteredData(mockData.foundItems);
//   }, []);

//   const handleCategorySelect = (category) => {
//     if (category) {
//       const filtered = data.filter(item => item.foundCategory === category);
//       setFilteredData(filtered);
//     } else {
//       setFilteredData(data);
//     }
//   };

//   const handleSortSelect = (option) => {
//     setSortOption(option);
//     let sortedData;
//     switch (option) {
//       case '최신순':
//         sortedData = [...filteredData].sort((a, b) => new Date(b.foundDate) - new Date(a.foundDate));
//         break;
//       case '오래된 순':
//         sortedData = [...filteredData].sort((a, b) => new Date(a.foundDate) - new Date(b.foundDate));
//         break;
//       case '이름순':
//         sortedData = [...filteredData].sort((a, b) => a.foundTitle.localeCompare(b.foundTitle));
//         break;
//     }
//     setFilteredData(sortedData);
//   };

//   const handleSearch = (text) => {
//     const filtered = data.filter(item =>
//       item.foundTitle.toLowerCase().includes(text.toLowerCase()) ||
//       item.foundContent.toLowerCase().includes(text.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

//   const handleItemPress = (item) => {
//     navigation.navigate('FoundItemDetail', {
//       FoundTitle: item.foundTitle,
//       //FoundContent: item.foundContent,
//       FoundAward: item.foundAward,
//       FoundImageUrl: item.foundImageUrl,
//       //FoundCategory: item.foundCategory,
//       //FoundDate: item.foundDate,
//       //FoundLatitude: item.foundLatitude,
//       //FoundLongitude: item.foundLongitude,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <HeaderWithFilters
//         onCategorySelect={handleCategorySelect}
//         onSortSelect={handleSortSelect}
//         onSearch={handleSearch} // 검색 기능 연결
//       />
//       <FlatList
//         data={filteredData}
//         keyExtractor={(item, index) => item.id !== undefined ? item.id.toString() : index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.itemWrapper}>
//             <View style={styles.itemContainer}>
//               {item.foundImageUrl ? (
//                 <Image source={typeof item.foundImageUrl === 'string' ? { uri: item.foundImageUrl } : item.foundImageUrl} style={styles.itemImage} />
//               ) : (
//                 <View style={[styles.itemImage, styles.placeholder]}>
//                   <Text style={styles.placeholderText}>이미지 없음</Text>
//                 </View>
//               )}
//               <Text style={styles.itemTitle}>{item.foundTitle}</Text>
//               <Text style={styles.itemReward}>사례금: {item.foundAward}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//         numColumns={2}
//         columnWrapperStyle={styles.row}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//   },
//   row: {
//     flex: 1,
//   },
//   itemWrapper: {
//     flex: 1,
//     maxWidth: '50%',  // 각 아이템이 50%의 너비를 차지하도록 설정
//   },
//   itemContainer: {
//     flex: 1,
//     padding: 10,
//     margin: 10,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   itemImage: {
//     width: '100%',
//     height: 130,
//     borderRadius: 10,
//   },
//   placeholder: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   placeholderText: {
//     color: '#999',
//     fontSize: 16,
//   },
//   itemTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 5,
//   },
//   itemReward: {
//     fontSize: 14,
//     color: '#555',
//   },
// });





import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import HeaderWithFilters from '../components/HeaderWithFilters';
import { useNavigation } from '@react-navigation/native';
import mockData from '../data/mockData';
import axios from 'axios';

export default function FoundItems() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortOption, setSortOption] = useState('최신순');

  useEffect(() => {
    // 백엔드에서 데이터 가져오기
    axios.get('http://192.168.0.82:3000/found/viewFoundItems')
      .then(response => {
        if (response.data.success) {
          const fetchedData = response.data.data; // 여기서 data 속성 안의 배열을 사용
          setData(fetchedData);
          setFilteredData(fetchedData);
        }
        console.log("fetchedData :", response.data.data);
      })
      .catch(error => console.error(error));

    // 목업 데이터 사용
    // setData(mockData.foundItems);
    // setFilteredData(mockData.foundItems);
  }, []);

  const handleCategorySelect = (category) => {
    if (category) {
      const filtered = data.filter(item => item.foundCategory === category);
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  const handleSortSelect = async (option) => {
    try {
      setSortOption(option);
  
      // 서버에 정렬 옵션을 포함하여 요청을 보냅니다.
      const response = await axios.get('http://192.168.0.82:3000/found/viewFoundItems', {
        params: { order: option === '이름순' ? 'nameorder' : option === '오래된 순' ? 'oldest' : '최신순' }
      });
  
      if (response.data.success) {
        setFilteredData(response.data.data);  // 서버에서 받은 정렬된 데이터를 상태로 설정합니다.
      }
    } catch (error) {
      console.error('정렬 중 오류 발생:', error);
    }
  };

  // const handleSortSelect = (option) => {
  //   setSortOption(option);
  //   let sortedData;
  //   switch (option) {
  //     case '최신순':
  //       sortedData = [...filteredData].sort((a, b) => new Date(b.foundDate) - new Date(a.foundDate));
  //       break;
  //     case '오래된 순':
  //       sortedData = [...filteredData].sort((a, b) => new Date(a.foundDate) - new Date(b.foundDate));
  //       break;
  //     case '이름순':
  //       sortedData = [...filteredData].sort((a, b) => a.foundTitle.localeCompare(b.foundTitle));
  //       break;
  //   }
  //   setFilteredData(sortedData);
  // };

  const handleSearch = (text) => {
    const filtered = data.filter(item =>
      item.foundTitle.toLowerCase().includes(text.toLowerCase()) ||
      item.foundContent.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleItemPress = (item) => {
    navigation.navigate('FoundItemDetail', {
      FoundTitle: item.foundTitle,
      //FoundContent: item.foundContent,
      // FoundAward: item.foundAward,
      FoundImageUrl: item.foundImageUrl,
      //FoundCategory: item.foundCategory,
      //FoundDate: item.foundDate,
      //FoundLatitude: item.foundLatitude,
      //FoundLongitude: item.foundLongitude,
    });
  };

  return (
    <View style={styles.container}>
      <HeaderWithFilters
        onCategorySelect={handleCategorySelect}
        onSortSelect={handleSortSelect}
        onSearch={handleSearch} // 검색 기능 연결
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => item.id !== undefined ? item.id.toString() : index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.itemWrapper}>
            <View style={styles.itemContainer}>
              {item.found_image_url ? (
                <Image source={{ uri: `http://192.168.0.82:3000${item.found_image_url}` }} style={styles.itemImage} />
              ) : (
                <View style={[styles.itemImage, styles.placeholder]}>
                  <Text style={styles.placeholderText}>이미지 없음</Text>
                </View>
              )}
              <Text style={styles.itemTitle}>{item.found_title}</Text>
              {/* <Text style={styles.itemReward}>사례금: {item.foundAward}</Text> */}
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
