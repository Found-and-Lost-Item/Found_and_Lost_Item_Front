import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { setToken } from './Management/TokenManagement';
import { setUser } from './Management/UserManagement';

export default function MypageHome() {
  return (
    <View>
      <Text>마이페이지</Text>
    </View>
  );
}