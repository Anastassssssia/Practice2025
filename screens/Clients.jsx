import React, {useState} from 'react'
import {StyleSheet, SafeAreaView, FlatList, View, Text, Image, Platform,} from 'react-native'
import {Searchbar} from 'react-native-paper';
import Header from '../components/Header';

import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const data = [
  { id: '39', name: 'Карпатський Іван Іванович', email: 'ivan55@gmail.com', phone: '0965534213', image: require('../assets/images/profile/1.png')},
  { id: '38', name: 'Хмарна Ірина Олександрівна', email: '1.irina_111@ukr.net', phone: '0509876543', image: require('../assets/images/profile/2.png')},
  { id: '37', name: 'Коваленко Василь Петрович', email: 'kovalenko_vas@gmail.com', phone: '0631112233',  image: require('../assets/images/profile/3.png')},
  { id: '36', name: 'Сидоренко Мирослава Ігорівна', email: 'myroslava_sidorenko@i.ua', phone: '0985554433',  image: require('../assets/images/profile/4.png')},
  { id: '35', name: 'Романенко Аліна Іванівна', email: 'alina.romanenko@gmail.com', phone: '0978765432',  image: require('../assets/images/profile/5.png')},
  { id: '34', name: 'Нікітін Олександр Миколайович', email: 'o.nikitin@gmail.com', phone: '0971122334',  image: require('../assets/images/profile/6.png')},
  { id: '33', name: 'Тимофєєв Вадим Леонідович', email: 'vadim@i.ua', phone: '0634123655',  image: require('../assets/images/profile/default_profile.png')},

];

export default function Clients() {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.headerContainer}>
        <Header/>
        <Text style={styles.headerTitle}>Клієнти</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.findContainer}>
          <View style={{flex: 1}}>
            <Searchbar style={styles.search} inputStyle={styles.searchInput} onChangeText={setSearch} value={search} placeholder="Знайти клієнта" placeholderTextColor="rgba(43,44,52, 0.5)"/>
          </View>
        </View>

        <FlatList style={styles.itemsContainer} contentContainerStyle={{paddingBottom: 0}} data={data} keyExtractor={(item) => item.id} renderItem={({item}) =>(
          <View style={styles.itemContainer}>
            <View style={styles.imgContainer}>
              <Image source={item.image} style={styles.image} />
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <View style={styles.itemInfo}>
                <Entypo name="mail" size={16} color="#6246EA"/>
                <Text style={styles.itemText}>{item.email}</Text>
              </View>

              <View style={styles.itemInfoBox}>
                <View style={styles.itemInfo}>
                  <FontAwesome6 name="phone" size={14} color="#6246EA"/>
                  <Text style={styles.itemText}>{item.phone}</Text>
                </View>

                <View style={[styles.itemInfo, {gap: 3,}]}>
                    <Feather name="hash" size={16} color="#6246EA" />
                    <Text style={styles.itemText}>{item.id}</Text>
                </View>
              </View>
            </View>
          </View>
        )} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    backgroundColor: '#fff', 
  },
// --------header
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    position: 'absolute',
    left: '50%', 
    transform: [{translateX: '-50%'}],
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.25,
    color: '#2B2C34',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
// --------search
  findContainer: {
    marginVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  search: {
    height: 60,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor:'rgba(43,44,52, 0.25)',
  },
  searchInput: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#2B2C34',
  },
// --------image
  imgContainer: {

  },
  image: {
    width: 95, 
    height: 95, 
    borderRadius: 50,
  },
// --------items
  itemsContainer: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    rowGap: 20,
  },
  itemContainer: {
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'rgba(43,44,52, 0.1)',
    elevation: 3,
    shadowColor: '#2B2C34',
    overflow: 'hidden',
  },
  infoContainer: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 15,
  },
  itemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  itemInfoBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemTitle: { 
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 700,
    color: '#6246EA',
  },
  itemText: { 
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    color: '#2B2C34',
  },
});