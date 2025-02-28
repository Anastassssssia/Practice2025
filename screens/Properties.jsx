import React, {useState} from 'react'
import {StyleSheet, SafeAreaView, View, Text, FlatList, TouchableOpacity, Image, Dimensions, Platform} from 'react-native'
import {StatusBar} from 'expo-status-bar';
import {Searchbar} from 'react-native-paper';
import Header from '../components/Header';

import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');

const data = [
  { id: '1', typeContract: 'Оренда', typeProperty: 'квартира', district: 'Київський', room: '2', area: '50.00', floor: '4', floors: '7', price: '14 000', image: require('../assets/images/properties/5/1.jpg')},
  { id: '2', typeContract: 'Продаж', typeProperty: 'квартира', district: 'Приморський', room: '1', area: '39.00', floor: '7', floors: '16', price: '2 500 000', image: require('../assets/images/properties/2/1.jpg')},
  { id: '3', typeContract: 'Продаж', typeProperty: 'будинок', district: 'Хаджибейський', room: '3', area: '70.00', floor: '1', floors: '1', price: '3 456 000', image: require('../assets/images/properties/4/1.jpg')},
  { id: '4', typeContract: 'Оренда', typeProperty: 'квартира', district: 'Пересипський', room: '2', area: '45.00', floor: '2', floors: '9', price: '10 000', image: require('../assets/images/properties/3/1.jpg')},
  { id: '5', typeContract: 'Продаж', typeProperty: 'квартира', district: 'Приморський', room: '1', area: '38.00', floor: '18', floors: '24', price: '2 800 000', image: require('../assets/images/properties/1/1.jpg')},
  { id: '6', typeContract: 'Оренда', typeProperty: 'квартира', district: 'Київський', room: '1', area: '55.00', floor: '10', floors: '14', price: '16 500', image: require('../assets/images/properties/6/1.jpg')},
];

export default function Properties({navigation}) {
  const [search, setSearch] = useState("");

  const [liked, setLiked] = useState({});
  const toggleLike = (id) => {
    setLiked((prev) => ({...prev, [id]: !prev[id],}))
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff"/>

      <View style={styles.headerContainer}>
        <Header />
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name="map-outline" size={28} color="#2B2C34"/>
        </TouchableOpacity>
      </View>
      
      <View style={styles.container}>
        <View style={styles.findContainer}>
          <View style={{flex: 1}} >
            <Searchbar style={styles.search} inputStyle={styles.searchInput} onChangeText={setSearch} value={search} placeholder="Знайти адресу чи код об'єкта" placeholderTextColor="rgba(43,44,52, 0.5)"/>
          </View>

          <TouchableOpacity style={styles.filterContainer} onPress={() => navigation.navigate('Filter')}>
            <Feather name="sliders" size={24} color="#2B2C34" style={{transform: [{rotate: '-90deg' }]}}/>
          </TouchableOpacity>
        </View>

        <FlatList style={styles.itemsContainer} contentContainerStyle={{paddingBottom: 0}} data={data} keyExtractor={(item) => item.id} renderItem={({item}) =>(
          <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('Property')}>
              <Image source={item.image} style={styles.itemImage}/>
            </TouchableOpacity>
            
            <View style={styles.likeContainer}>
              <TouchableOpacity onPress={()=>toggleLike(item.id)}>
                <AntDesign name={liked[item.id] ? "heart" : "hearto"} size={25} color="#6246EA" />
              </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
              <View style={styles.infoBox}>
                <Text style={[styles.infoTitle]}>{item.typeContract} {item.typeProperty}</Text>
                <View style={styles.paramItem}>
                  <Feather name="map-pin" size={16} color="#2B2C34" />
                  <Text style={[styles.infoTitle, {fontWeight: 500}]}>{item.district} район</Text>
                </View>
              </View>

              <View style={styles.infoBox}>
                <View style={styles.params}>
                  <View style={styles.paramItem}>
                    <Ionicons name="bed-outline" size={18} color="#2B2C34"/>
                    <Text style={styles.infoText}>{item.room}</Text>
                  </View>
                  <View style={styles.paramItem}>
                    <MaterialCommunityIcons name="floor-plan" size={16} color="#2B2C34" />
                    <Text style={styles.infoText}>{item.area} м²</Text>
                  </View>
                  <View style={styles.paramItem}>
                    <MaterialCommunityIcons name="stairs" size={16} color="#2B2C34"/>
                    <Text style={styles.infoText}>{item.floor}/{item.floors}</Text>
                  </View>
                </View>
                <Text style={[styles.infoTitle, {color: '#6246EA'}]}>{item.price} грн</Text>
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
  headerIcon: {
    position: 'absolute',
    left: 20, 
  },
  container: {
    flexDirection: 'column',
    flex: 1,
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
// --------items
  itemsContainer: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    rowGap: 20,
  },
  itemContainer: {
    marginBottom: 20,
    paddingBottom: 15,
    flexDirection: 'column',
    rowGap: 15,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 15,
    borderColor: 'rgba(43,44,52, 0.1)',
    elevation: 2,
    shadowColor: '#2B2C34',
    overflow: 'hidden',
  },
  // --------image
  imageContainer: {
    width: '100%',
    height: height*0.2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',    
  },
  itemImage: {
    width: width, 
    height: height*0.2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    resizeMode: 'cover',
  },
  likeContainer: {
    width: 40,
    height: 40,
    position: 'absolute',
    right: 10,
    top: 7,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 50,
    borderColor: 'rgba(43, 44, 52, 0.25)',
    elevation:5
  },
// --------info
  infoContainer: {
    marginHorizontal: 15,
    flexDirection: 'column',
    rowGap: 15,
    overflow: 'hidden',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 20,
  },
  params: {
    flexDirection: 'row',
    columnGap: 10,
  },
  paramItem: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,    
  },
  infoTitle: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 700,
    color: '#2B2C34',
  },
  infoText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    color: '#2B2C34',
  },
});
