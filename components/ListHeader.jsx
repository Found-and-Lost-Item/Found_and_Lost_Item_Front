import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Header({ navigation }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.locationContainer}>
        <Text style={styles.headerText}>주례동</Text>
        <Icon name="arrow-drop-down" />
      </View>
      <TouchableOpacity>
        <Icon name="search" />
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
});
