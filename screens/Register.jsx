import React, {useState} from 'react'
import {StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity} from 'react-native'
import {StatusBar} from 'expo-status-bar';

import Feather from '@expo/vector-icons/Feather';

export default function Register({navigation}) {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent"/>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
      
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Feather name="user" style={styles.inputIcon}/>
            <TextInput style={styles.input} value={lastName} onChangeText={setLastName} placeholder="Прізвище" placeholderTextColor="rgba(43,44,52, 0.5)"/>
          </View>
          <View style={styles.inputContainer}>
            <Feather name="user" style={styles.inputIcon}/>
            <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} placeholder="Ім'я" placeholderTextColor="rgba(43,44,52, 0.5)"/>
          </View>
          <View style={styles.inputContainer}>
            <Feather name="user" style={styles.inputIcon}/>
            <TextInput style={styles.input} value={patronymic} onChangeText={setPatronymic} placeholder="По батькові" placeholderTextColor="rgba(43,44,52, 0.5)"/>
          </View>
          <View style={styles.inputContainer}>
            <Feather name="mail" style={styles.inputIcon}/>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" placeholderTextColor="rgba(43,44,52, 0.5)"/>
          </View>
          <View style={styles.inputContainer}>
            <Feather name="phone" style={styles.inputIcon}/>
            <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Телефон" placeholderTextColor="rgba(43,44,52, 0.5)" keyboardType="phone-pad"/>
          </View>
          <View style={styles.inputContainer}>
            <Feather name="lock" style={styles.inputIcon}/>
            <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Пароль" placeholderTextColor="rgba(43,44,52,0.5)" secureTextEntry/>
          </View>
        </View>

        <TouchableOpacity style={styles.btnBox} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.btnText}>Зареєструватися</Text>
        </TouchableOpacity>
        
        <View style={styles.linkContainer}>
          <Text style={styles.link}>Уже маєте обліковий запис? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.link, {color: '#6246EA',  fontWeight: 700}]}> Увійдіть</Text>
          </TouchableOpacity>    
        </View>
      </View>  
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    rowGap: 30,
    paddingVertical: 40,
    paddingHorizontal: 30,
    paddingTop: '50%',
    position: 'relative',
    backgroundColor: '#fff',
  },
// --------circle
  circle: {
    position: 'absolute',
    width: 400,
    height: 400,
    top: -150,
    left: -100,
    borderRadius: 200,
  },
  circle1: {
    position: 'absolute',
    width: 300,
    height: 300,
    top: -180,
    left: -10,
    borderRadius: 150,
    backgroundColor: 'rgba(98,70,234, 1)',
  },
  circle2: {
    position: 'absolute',
    width: 300,
    height: 300,
    top: -150,
    left: -10,
    borderRadius: 150,
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
  btnBox: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#6246EA',
    borderRadius: 60,
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