import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {StatusBar} from 'expo-status-bar';

const slides = [
  { id: '1', image: require('../assets/images/welcome/welcome-1.jpg'), text: 'Ваш партнер у світі нерухомості – знайдіть житло своєї мрії разом із нами' },
  { id: '2', image: require('../assets/images/welcome/welcome-2.jpg'), text: 'Шукаєте житло? Обирайте серед перевірених варіантів' },
  { id: '3', image: require('../assets/images/welcome/welcome-3.jpg'), text: 'Простий спосіб знайти нерухомість – переглядайте, обирайте, звертайтеся!' }
];

export default function Welcome({navigation, setIsLoggedIn}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white"/>
      <View style={styles.logoContainer}>
          <Image source={require('../assets/images/icon/logo.png')} style={styles.logoImage}/>
          <Text style={styles.logo}>RealEstate</Text>
      </View>

      <View style={{rowGap: 70}}>
        <View style={styles.imageContainer}>
          <View style={styles.imageBox}>
            <Image source={slides[index].image} style={styles.welcomeImage} />
          </View>
          <Text style={styles.welcomeText}>{slides[index].text}</Text>
        </View>
       
        <Text style={styles.title}><Text style={{color: '#6246EA'}}>Увійдіть</Text>, щоб отримати доступ до всіх функцій</Text>
      </View> 
      
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.circle3} />

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnBox} onPress={() => navigation.navigate('Login')}><Text style={styles.btnText}>Увійти</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.btnBox, {backgroundColor: 'transparent'}]}  onPress={() => setIsLoggedIn(true)}><Text style={[styles.btnText, {color: '#2B2C34'}]}>Продовжити без логіну</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
// --------circle
  circle1: {
    position: 'absolute',
    width: 150,
    height: 150,
    top: -40,
    right: -40,
    borderRadius: 100, 
    backgroundColor: '#6246EA',
  },
  circle2: {
    position: 'absolute',
    width: 150,
    height: 150,
    top: -30,
    right: -30,
    borderRadius: 100, 
    backgroundColor: 'rgba(98,70,234, 0.3)',        
  },
  circle3: {
    position: 'absolute',
    width: 150,
    height: 150,
    top: 470,
    left: -100,
    borderRadius: 100, 
    backgroundColor: '#6246EA',
  },
// --------logo
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
    marginTop: 50,
  },
  logoImage: {
    width: 45,
    height: 45,
  },
  logo: {
    fontFamily: 'RedactedScript',
    fontSize: 36,
    lineHeight: 55,
    color: '#2B2C34',
  },
// --------image
  imageContainer: {
    flexDirection: 'column',
    rowGap: 15,
  },
  imageBox:{
    width: '100%',
    height: 260,
  },
  welcomeImage: {
    width: '100%',
    height: '95%',
    borderRadius: 30,
  },
  welcomeText: {
    paddingHorizontal: 10,
    fontFamily: 'Lato400',
    textAlign: 'center',
    lineHeight: 30,
    fontSize: 16,
    color: '#2B2C34',
  },
  title: {
    position: 'relative',
    fontFamily: 'Lato700',
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 35,
    letterSpacing: 0.5,
    color: '#2B2C34',
  },
// --------button
  btnContainer:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 10,
  },
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
});