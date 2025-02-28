import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
          <Ionicons name="calendar-outline" size={28} color="#2B2C34" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../assets/images/profile/0.png')} style={styles.profileImage} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(43, 44, 52, 0.2)',
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
});
