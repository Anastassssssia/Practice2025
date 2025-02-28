import React, {useState} from 'react'
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'
import {StatusBar} from 'expo-status-bar';
import {LinearGradient} from 'expo-linear-gradient';

import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (    
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <TouchableOpacity style={styles.backIcon} onPress={() => navigation.navigate('Welcome')}>
        <Ionicons name="chevron-back" size={28} color={'#2B2C34'}/>
      </TouchableOpacity>

      <View style={styles.circle1} />
      <View style={styles.circle2} />

      <Text style={styles.title}>Вхід</Text>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Feather name="mail" style={styles.inputIcon}/>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" placeholderTextColor="rgba(43,44,52, 0.5)"/>
        </View>
        <View style={styles.inputContainer}>
          <Feather name="lock" style={styles.inputIcon}/>
          <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Пароль" placeholderTextColor="rgba(43,44,52,0.5)" secureTextEntry/>
        </View>
      </View>

      <TouchableOpacity style={styles.btnBox} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.btnText}>Увійти</Text>
      </TouchableOpacity>
      
      <View style={styles.linkContainer}>
        <Text style={styles.link}>Не маєте облікового запису?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={[styles.link, {color: '#6246EA', fontWeight: 700}]}> Зареєструйтеся</Text>
        </TouchableOpacity>    
      </View>

      <LinearGradient style={styles.circle3} colors={['#6246EA', '#ffffff']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} >
        <View style={styles.circle4}/>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 30,
    paddingVertical: 40,
    paddingHorizontal: 30,
    paddingTop: '55%',
    position: 'relative',
    backgroundColor: '#fff',
  },
  backIcon: {
    position: 'absolute',
    top: 60,
    left: 30,
  },
// --------circle
  circle1: {
    position: 'absolute',
    width: 300,
    height: 300,
    top: -140,
    right: -100,
    borderRadius: 150,
    backgroundColor: 'rgba(98,70,234, 1)',
  },
  circle2: {
    position: 'absolute',
    width: 300,
    height: 300,
    top: -120,
    right: -80,
    borderRadius: 150,
    backgroundColor: 'rgba(98,70,234, 0.3)',
  },
  circle3: {
    position: 'relative',
    width: 200,
    height: 200,
    bottom: -200,
    left: 20,
    borderRadius: 100,
  },
  circle4: {
    position: 'absolute',
    width: 200,
    height: 200,
    bottom: 20,
    left: 10,
    borderRadius: 100,
    backgroundColor: 'rgba(98,70,234, 0.3)',
  },
// --------form
  title: {
    fontFamily: 'Lato700',
    textAlign: 'center',
    fontSize: 24,
    letterSpacing: 1.25,
    color: '#2B2C34',
  },
  formContainer: {
    width: '100%',
    flexDirection: 'column',
    rowGap: 20,
  },
  inputContainer: {
    height: 60, 
    paddingHorizontal: 20, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    columnGap: 10,
    backgroundColor: '#fff', 
    borderWidth: 1,
    borderRadius: 70,
    borderColor: 'rgba(43,44,52,0.8)',   
  },
  inputIcon: {
    fontSize: 18,
    color: '#2B2C34',
  },
  input: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 400,
    color: '#2B2C34',
  },
// --------button
  btnBox: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    borderRadius: 60,
    backgroundColor: '#6246EA',
  },
  btnText: {
    fontFamily: 'Lato400',
    fontSize: 18,
    color: '#fff',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 400,
    color: '#2B2C34'
  },
});