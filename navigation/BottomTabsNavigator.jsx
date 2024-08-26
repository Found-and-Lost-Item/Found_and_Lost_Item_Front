import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import TopTabsNavigator from './TopTabsNavigator';
import ItemDetails from '../screens/ItemDetails';
import RegistrationModal from '../components/RegistrationModal';
import MypageStack from './MypageStack';
//import Map from '../screens/Map';

const BottomTab = createBottomTabNavigator();

export default function BottomTabsNavigator({ navigation }) {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handlePopupClose = () => setPopupVisible(false);

  const handlePopupSelect = (type) => {
    setPopupVisible(false);
    if (type === 'lost') {
      navigation.navigate('LostItemRegistration');
    } else {
      navigation.navigate('FoundItemRegistration');
    }
  };

  const RenderEmptyScreen = () => null;

  return (
    <>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === '목록') {
              iconName = 'list';
            } else if (route.name === '지도') {
              iconName = 'map';
            } else if (route.name === '등록') {
              iconName = 'add';
            } else if (route.name === '채팅목록') {
              iconName = 'chat';
            } else if (route.name === '내 정보') {
              iconName = 'person';
            }

            return <Icon name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: '#d9d9d9',
          tabBarInactiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#7F7FFF',
            borderTopWidth: 1,
            borderTopColor: '#ddd',
          },
        })}
      >
        <BottomTab.Screen name="목록" component={TopTabsNavigator} options={{ tabBarLabel: '목록', headerShown: false }}  />
        <BottomTab.Screen name="지도" component={Map} options={{ tabBarLabel: '지도', headerShown: false }} />
        <BottomTab.Screen
          name="등록"
          options={{
            tabBarLabel: '등록',
            tabBarIcon: ({ color, size }) => (<Icon name="add" color={color} size={size} />),
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => setPopupVisible(true)}
              />
            ),
          }}
        >
          {() => <RenderEmptyScreen />}
        </BottomTab.Screen>
        <BottomTab.Screen name="채팅목록" component={ItemDetails} options={{ tabBarLabel: '채팅목록', headerTitleAlign: 'center' }} />
        <BottomTab.Screen name="내 정보" component={MypageStack} options={{ tabBarLabel: '내 정보', headerShown: false }} />
      </BottomTab.Navigator>
      <RegistrationModal
        visible={isPopupVisible}
        onClose={handlePopupClose}
        onSelect={handlePopupSelect} 
      />
    </>
  );
}
