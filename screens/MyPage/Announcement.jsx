import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Announcement() {
  return (
    <View style={styles.container}>
      <Text style={styles.noticeTitle}>공지사항</Text>
      <Text style={styles.noticeCount}>총 5건의 공지사항이 있습니다.</Text>
      <View style={styles.separator} />
      
      <View style={styles.announcementBox}>
        <Text style={styles.announcementText}>[공지] 피그마 그리는 것도 힘드네요</Text>
      </View>
      <View style={styles.announcementBox}>
        <Text style={styles.announcementText}>[공지] 피그마 그리는 것도 힘드네요</Text>
      </View>
      <View style={styles.announcementBox}>
        <Text style={styles.announcementText}>[공지] 피그마 그리는 것도 힘드네요</Text>
      </View>
      <View style={styles.announcementBox}>
        <Text style={styles.announcementText}>[공지] 피그마 그리는 것도 힘드네요</Text>
      </View>
      <View style={styles.announcementBox}>
        <Text style={styles.announcementText}>[공지] 피그마 그리는 것도 힘드네요</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  noticeTitle: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    color: '#000000',
    marginBottom: 10,
    marginTop: 40,
    marginLeft: 16,
  },
  noticeCount: {
    fontWeight: '200',
    fontSize: 20,
    lineHeight: 28,
    color: '#000000',
    marginBottom: 10,
    marginLeft: 16,
  },
  separator: {
    width: '100%',
    height: 10,
    backgroundColor: '#E8E9EE',
    marginTop: 10,
  },
  announcementBox: {
    width: '100%',
    height: 55,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    justifyContent: 'center',
    paddingLeft: 16,
  },
  announcementText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 35,
    color: '#000000',
  },
});
