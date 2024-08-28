// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Keyboard,TouchableWithoutFeedback } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import axios from 'axios';
// import { useNavigation, useRoute } from '@react-navigation/native';

// export default function FoundItemRegistration3({navigation}) {
//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   //const [region, setRegion] = useState('');
//   const [foundLongitude, setFoundLongitude] = useState(''); //경도
//   const [foundLatitude, setFoundLatitude] = useState(''); //위도
//   //const [foundAward, setFoundAward] = useState('');
//   const route = useRoute();
//   const { FoundItemData2 } = route.params;

//   const handleDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(false);
//     setDate(currentDate);
//   };

//   const showDatepicker = () => {
//     setShowDatePicker(true);
//   };




//   const handleSubmit = async () => {
//     try {
//         const formData = new FormData();

//         // FoundItemData3 객체 생성
//         const FoundItemData3 = {
//             ...FoundItemData2,
//             foundDate: date.toISOString().split('T')[0],
//             foundLongitude: foundLongitude,
//             foundLatitude: foundLatitude,
//         };

//         // FormData에 각 필드를 추가
//         Object.keys(FoundItemData3).forEach(key => {
//             formData.append(key, FoundItemData3[key]);
//         });

//         // 이미지 파일 추가 (foundImageUrl이 존재할 경우에만)
//         if (FoundItemData2.foundImageUrl) {
//             const fileUri = FoundItemData2.foundImageUrl;
//             const fileName = fileUri.split('/').pop();
//             const fileType = `image/${fileUri.split('.').pop()}`;

//             formData.append('foundImage', {
//                 uri: fileUri,
//                 name: fileName,
//                 type: fileType,
//             });
//         }

//         console.log("formData:", formData);
//         console.log("FoundItemData3:", FoundItemData3);

//         // 서버로 POST 요청 보내기
//         const response = await axios.post('http://192.168.0.82:3000/found/submitFoundItem', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         });

//         if (response.data.success) {
//             Alert.alert('등록 성공', '분실물이 성공적으로 등록되었습니다.');
//             navigation.navigate('Home');
//         } else {
//             Alert.alert('등록 실패', response.data.message || '알 수 없는 오류가 발생했습니다.');
//         }
//     } catch (error) {
//         console.error('Error during registration:', error);
//         Alert.alert('서버 오류', '서버와 통신 중 문제가 발생했습니다.');
//     }
// };





//   // const handleSubmit = async () => {
//   //   try {
      
//   //     // 서버로 전송할 데이터 준비
//   //     const FoundItemData3 = {
//   //       ...FoundItemData2,
//   //       foundDate: date.toISOString().split('T')[0],  // 날짜만 전송
//   //       //region: region,
//   //       foundLongitude: foundLongitude,
//   //       foundLatitude: foundLatitude,
//   //       foundAward: foundAward,
//   //     };
//   //     console.log('FoundItemData3 :', FoundItemData3);

//   //     // 서버로 POST 요청 보내기
//   //     const response = await axios.post('http://192.168.0.82:3000/submitLostItem', FoundItemData3);
      

//   //     if (response.data.success) {
//   //       Alert.alert('등록 성공', '분실물이 성공적으로 등록되었습니다.');
//   //       // 성공 시 추가적인 동작을 원하면 여기에 작성 (예: 화면 전환)
//   //     } else {
//   //       Alert.alert('등록 실패', response.data.message || '알 수 없는 오류가 발생했습니다.');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error during registration:', error);
//   //     Alert.alert('서버 오류', '서버와 통신 중 문제가 발생했습니다.');
//   //   }
//   // };

//   return (
//   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//     <View style={styles.container}>
//       <Text style={styles.title}>찾았어요!</Text>
      
//       <Text style={styles.label}>물건을 언제 찾으셨나요? *</Text>
//       <TouchableOpacity onPress={showDatepicker} style={styles.dateInput}>
//         <Text style={styles.dateText}>
//           {date.toLocaleDateString()}
//         </Text>
//       </TouchableOpacity>
//       {showDatePicker && (
//         <DateTimePicker
//           value={date}
//           mode="date"
//           display="default"
//           onChange={handleDateChange}
//         />
//       )}

//       <Text style={styles.label}>찾으신 지역을 선택해주세요 *</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="경도를 입력해주세요."
//         value={foundLongitude}
//         onChangeText={setFoundLongitude}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="위도를 입력해주세요."
//         value={foundLatitude}
//         onChangeText={setFoundLatitude}
//       />

//       {/* <Text style={styles.label}>사례금을 작성해주세요 *</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="0~20% 정도가 권장하는 사례금 범위에요"
//         value={foundAward}
//         onChangeText={setFoundAward}
//       /> */}

//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>등록하기</Text>
//       </TouchableOpacity>
//     </View>
//   </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     color: '#5B5B5B',
//     marginBottom: 10,
//   },
//   input: {
//     height: 48,
//     borderColor: '#D9D9D9',
//     borderWidth: 1,
//     borderRadius: 6,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//     backgroundColor: '#F8F8F8',
//   },
//   dateInput: {
//     height: 48,
//     borderColor: '#D9D9D9',
//     borderWidth: 1,
//     borderRadius: 6,
//     paddingHorizontal: 10,
//     justifyContent: 'center',
//     backgroundColor: '#F8F8F8',
//     marginBottom: 20,
//   },
//   dateText: {
//     color: '#000',
//   },
//   button: {
//     backgroundColor: '#7F7FFF',
//     paddingVertical: 14,
//     borderRadius: 8,
//     alignSelf: 'center',
//     position: 'absolute',
//     bottom: 80,
//     width: '100%',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     textAlign: 'center',
//   },

  
// });





import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Keyboard,TouchableWithoutFeedback } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function FoundItemRegistration3({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  //const [region, setRegion] = useState('');
  const [foundLongitude, setFoundLongitude] = useState(''); //경도
  const [foundLatitude, setFoundLatitude] = useState(''); //위도
  //const [foundAward, setFoundAward] = useState('');
  const route = useRoute();
  const { FoundItemData2 } = route.params;

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };




  const handleSubmit = async () => {
    try {
        const formData = new FormData();

        // FoundItemData3 객체 생성
        const FoundItemData3 = {
            ...FoundItemData2,
            foundDate: date.toISOString().split('T')[0],
            foundLongitude: foundLongitude,
            foundLatitude: foundLatitude,
        };

        // FormData에 각 필드를 추가
        Object.keys(FoundItemData3).forEach(key => {
            formData.append(key, FoundItemData3[key]);
        });

        // 이미지 파일 추가 (foundImageUrl이 존재할 경우에만)
        if (FoundItemData2.foundImageUrl) {
            const fileUri = FoundItemData2.foundImageUrl;
            const fileName = fileUri.split('/').pop();
            const fileType = `image/${fileUri.split('.').pop()}`;

            formData.append('foundImageUrl', {
                uri: fileUri,
                name: fileName,
                type: fileType,
            });
        }

        console.log("formData:", formData);
        console.log("FoundItemData3:", FoundItemData3);

        // 서버로 POST 요청 보내기
        const response = await axios.post('http://20.30.17.16:3000/found/submitFoundItem', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.data.success) {
            Alert.alert('등록 성공', '분실물이 성공적으로 등록되었습니다.');
            navigation.navigate('Home');
        } else {
            Alert.alert('등록 실패', response.data.message || '알 수 없는 오류가 발생했습니다.');
        }
    } catch (error) {
        console.error('Error during registration:', error);
        Alert.alert('서버 오류', '서버와 통신 중 문제가 발생했습니다.');
    }
};





  // const handleSubmit = async () => {
  //   try {
      
  //     // 서버로 전송할 데이터 준비
  //     const FoundItemData3 = {
  //       ...FoundItemData2,
  //       foundDate: date.toISOString().split('T')[0],  // 날짜만 전송
  //       //region: region,
  //       foundLongitude: foundLongitude,
  //       foundLatitude: foundLatitude,
  //       foundAward: foundAward,
  //     };
  //     console.log('FoundItemData3 :', FoundItemData3);

  //     // 서버로 POST 요청 보내기
  //     const response = await axios.post('http://192.168.0.82:3000/submitLostItem', FoundItemData3);
      

  //     if (response.data.success) {
  //       Alert.alert('등록 성공', '분실물이 성공적으로 등록되었습니다.');
  //       // 성공 시 추가적인 동작을 원하면 여기에 작성 (예: 화면 전환)
  //     } else {
  //       Alert.alert('등록 실패', response.data.message || '알 수 없는 오류가 발생했습니다.');
  //     }
  //   } catch (error) {
  //     console.error('Error during registration:', error);
  //     Alert.alert('서버 오류', '서버와 통신 중 문제가 발생했습니다.');
  //   }
  // };

  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Text style={styles.title}>찾았어요!</Text>
      
      <Text style={styles.label}>물건을 언제 찾으셨나요? *</Text>
      <TouchableOpacity onPress={showDatepicker} style={styles.dateInput}>
        <Text style={styles.dateText}>
          {date.toLocaleDateString()}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Text style={styles.label}>찾으신 지역을 선택해주세요 *</Text>
      <TextInput
        style={styles.input}
        placeholder="경도를 입력해주세요."
        value={foundLongitude}
        onChangeText={setFoundLongitude}
      />
      <TextInput
        style={styles.input}
        placeholder="위도를 입력해주세요."
        value={foundLatitude}
        onChangeText={setFoundLatitude}
      />

      {/* <Text style={styles.label}>사례금을 작성해주세요 *</Text>
      <TextInput
        style={styles.input}
        placeholder="0~20% 정도가 권장하는 사례금 범위에요"
        value={foundAward}
        onChangeText={setFoundAward}
      /> */}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>등록하기</Text>
      </TouchableOpacity>
    </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#5B5B5B',
    marginBottom: 10,
  },
  input: {
    height: 48,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#F8F8F8',
  },
  dateInput: {
    height: 48,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    marginBottom: 20,
  },
  dateText: {
    color: '#000',
  },
  button: {
    backgroundColor: '#7F7FFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 80,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },

  
});
