import React, {useState} from 'react'
import {StyleSheet, SafeAreaView, FlatList, View, Text, TouchableOpacity, Platform,} from 'react-native'
import {Searchbar} from 'react-native-paper';
import Header from '../components/Header';

import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const data = [
  { id: '71', idProperty: '62', status: 'в процесі', price: '15 000', typeContract: 'оренда', typeProperty: 'квартира',  realtor: 'Черненко Володиимир Петрович', client: 'Нікітін Олександр Миколайович', dateStart: '05.02.2025', dateEnd: '05.08.2025'},
  { id: '70', idProperty: '61', status: 'в процесі', price: '2 300 000', typeContract: 'продаж', typeProperty: 'квартира', realtor: 'Волошина Мішель Володимирівна', client: 'Хмарна Ірина Олександрівна', dateStart: '05.02.2025', dateEnd: '05.08.2026'},
  { id: '69', idProperty: '60', status: 'скасовано', price: '2 100 000', typeContract: 'продаж', typeProperty: 'будинок', realtor: 'Ніколаєва Олена Іванівна', client: 'Карпатський Іван Іванович', dateStart: '25.01.2025', dateEnd: '25.01.2026'},
  { id: '65', idProperty: '59', status: 'виконано', price: '17 000', typeContract: 'оренда', typeProperty: 'квартира', realtor: 'Ніколаєва Олена Іванівна', client: 'Коваленко Василь Петрович', dateStart: '10.01.2025', dateEnd: '10.07.2025'},
  { id: '64', idProperty: '58', status: 'в процесі', price: '2 600 000', typeContract: 'продаж', typeProperty: 'квартира', realtor: 'Лисенко Андрій Петрович', client: 'Романенко Аліна Іванівна', dateStart: '08.01.2025', dateEnd: '08.01.2026'},
  { id: '63', idProperty: '57', status: 'виконано', price: '19 000', typeContract: 'оренда', typeProperty: 'будинок', realtor: 'Волошина Мішель Володимирівна', client: 'Нікітін Олександр Миколайович', dateStart: '08.01.2025', dateEnd: '08.07.2025'},
];

export default function Requests({navigation}) {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.headerContainer}>
        <Header/>
        <Text style={styles.headerTitle}>Заявки</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.findContainer}>
          <View style={{flex: 1}}>
            <Searchbar style={styles.search} inputStyle={styles.searchInput} onChangeText={setSearch} value={search} placeholder="Знайти код заявки" placeholderTextColor="rgba(43,44,52, 0.5)"/>
          </View>
        </View>

        <FlatList style={styles.itemsContainer} contentContainerStyle={{paddingBottom: 0}} data={data} keyExtractor={(item) => item.id} renderItem={({item}) =>(
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemBox}>
              <View style={styles.itemInfo}>
                <Feather name="hash" size={18} color="#2B2C34" />
                <Text style={styles.itemTitle}>Заявка № {item.id}</Text>
              </View>
              <View style={[styles.itemInfo, styles.infoRight]}>
                <MaterialCommunityIcons name="home-city" size={18} color="#2B2C34"/>
                <Text style={styles.itemText}>Код об’єкта {item.idProperty}</Text>
              </View>
            </View>

            <View style={styles.itemBox}>
              <View style={styles.itemInfo}>
                <MaterialCommunityIcons name="progress-clock" size={18} color="#2B2C34"/>
                <Text style={[styles.itemText, styles.itemStatus, item.status ==='скасовано' ? styles.redStatus :  item.status === 'виконано' ? styles.greenStatus : null]}>{item.status}</Text>
              </View>
              <View style={[styles.itemInfo, styles.infoRight]}>
                <Entypo name="price-tag" size={18} color="#2B2C34"/>
                <Text style={styles.itemText}>{item.price} грн</Text>
              </View>
            </View>

            <View style={styles.itemBox}>
              <View style={styles.itemInfo}>
                <MaterialCommunityIcons name="file-document-outline" size={18} color="#2B2C34"/>
                <Text style={styles.itemText}>{item.typeContract}</Text>
              </View>
              <View style={[styles.itemInfo, styles.infoRight]}>
                {item.typeProperty === 'квартира' ? <MaterialIcons name="apartment" size={18} color="#2B2C34"/> : <Ionicons name="home" size={18} color="#2B2C34"/>}
                <Text style={styles.itemText}>{item.typeProperty}</Text>
              </View>
            </View>

            <View style={styles.itemBox}>
              <View style={styles.itemInfo}>
                <MaterialCommunityIcons name="account-tie" size={22} color="#2B2C34"/>
                <Text style={styles.itemText}>Рієлтор: {item.realtor}</Text>
              </View>
            </View>

            <View style={styles.itemBox}>
              <View style={styles.itemInfo}>
                <MaterialCommunityIcons name="account" size={22} color="#2B2C34"/>
                <Text style={styles.itemText}>Клієнт: {item.client}</Text>
              </View>
            </View>

            <View style={styles.itemBox}>
              <View style={styles.itemInfo}>
                <Entypo name="calendar" size={18} color="#6246EA"/>
                <Text style={[styles.itemTitle, {color: '#6246EA'}]}>{item.dateStart}</Text>
              </View>
              <View style={styles.itemInfo}>
                <Entypo name="calendar" size={18} color="#6246EA"/>
                <Text style={[styles.itemTitle, {color: '#6246EA'}]}>{item.dateEnd}</Text>
              </View>
            </View>
          </TouchableOpacity>
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
// --------items
  itemsContainer: {
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
  itemContainer: {
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'column',
    rowGap: 15,
    columnGap: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'rgba(43,44,52, 0.1)',
    elevation: 3,
    shadowColor: '#2B2C34',
    overflow: 'hidden',
  },
  itemBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
  },
  itemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  infoRight: {
    width: 120,
  },
  itemTitle: { 
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 700,
    color: '#2B2C34',
  },
  itemText: { 
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    color: '#2B2C34',
  },
  itemStatus: {
    paddingVertical: 5,
    paddingHorizontal: 7,
    backgroundColor: '#D9DBFF',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#B9BDFF',
  },
  redStatus: {
    backgroundColor: 'rgba(234, 70, 73, 0.2)',
    borderColor: 'rgba(234, 70, 73, 0.3)',
  },
  greenStatus: {
    backgroundColor: 'rgba(70, 234, 78, 0.2)',
    borderColor: 'rgba(70, 234, 78, 0.4)',
  },
});