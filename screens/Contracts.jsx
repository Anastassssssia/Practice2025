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
  { id: '54', idProperty: '51', status: 'активний', price: '15 000', typeContract: 'оренда', typeProperty: 'квартира',  realtor: 'Черненко Володиимир Петрович', clientOwner: 'Ярова Ольга Миколаївна', clientSearch: 'Шевченко Олексій Віталійович', dateStart: '05.02.2025', dateEnd: '05.08.2025'},
  { id: '53', idProperty: '48', status: 'активний', price: '2 300 000', typeContract: 'продаж', typeProperty: 'квартира', realtor: 'Волошина Мішель Володимирівна', clientOwner: 'Волченко Аліса Олександрівна', clientSearch: 'Нікітін Олександр Миколайович', dateStart: '05.02.2025', dateEnd: '05.08.2026'},
  { id: '52', idProperty: '47', status: 'активний', price: '2 100 000', typeContract: 'продаж', typeProperty: 'будинок', realtor: 'Ніколаєва Олена Іванівна', clientOwner: 'Мельниченко Наталія Михайлівна', clientSearch: 'Сидоренко Мирослава Ігорівна', dateStart: '25.01.2025', dateEnd: '25.01.2026'},
  { id: '51', idProperty: '5', status: 'неактивний', price: '17 000', typeContract: 'оренда', typeProperty: 'квартира', realtor: 'Ніколаєва Олена Іванівна', clientOwner: 'Тимофєєв Вадим Леонідович', clientSearch: 'Василенко Сергій Олександрович', dateStart: '10.10.2024', dateEnd: '10.02.2025'},
  { id: '50', idProperty: '23', status: 'активний', price: '2 600 000', typeContract: 'продаж', typeProperty: 'квартира', realtor: 'Лисенко Андрій Петрович', clientOwner: 'Григоренко Марія Степанівна', clientSearch: 'Проходько Віта Вікторівна', dateStart: '08.01.2025', dateEnd: '08.01.2026'},
  { id: '49', idProperty: '45', status: 'неактивний', price: '19 000', typeContract: 'оренда', typeProperty: 'будинок', realtor: 'Волошина Мішель Володимирівна', clientOwner: 'Нікітін Олександр Миколайович', clientSearch: 'Шевченко Олексій Віталійович', dateStart: '02.09.2024', dateEnd: '02.02.2025'},
];

export default function Contracts({navigation}) {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.headerContainer}>
        <Header/>
        <Text style={styles.headerTitle}>Договори</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.findContainer}>
          <View style={{flex: 1}}>
            <Searchbar style={styles.search} inputStyle={styles.searchInput} onChangeText={setSearch} value={search} placeholder="Знайти код договору" placeholderTextColor="rgba(43,44,52, 0.5)"/>
          </View>
        </View>

        <FlatList style={styles.itemsContainer} contentContainerStyle={{paddingBottom: 0}} data={data} keyExtractor={(item) => item.id} renderItem={({item}) =>(
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.itemBox}>
              <View style={styles.itemInfo}>
                <Feather name="hash" size={18} color="#2B2C34" />
                <Text style={styles.itemTitle}>Договір № {item.id}</Text>
              </View>
              <View style={[styles.itemInfo, styles.infoRight]}>
                <MaterialCommunityIcons name="home-city" size={18} color="#2B2C34"/>
                <Text style={styles.itemText}>Код об’єкта {item.idProperty}</Text>
              </View>
            </View>

            <View style={styles.itemBox}>
              <View style={styles.itemInfo}>
                <MaterialCommunityIcons name="progress-clock" size={18} color="#2B2C34"/>
                <Text style={[styles.itemText, styles.itemStatus, item.status ==='неактивний' ? styles.redStatus : null]}>{item.status}</Text>
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
                <Text style={styles.itemText}>Власник: {item.clientOwner}</Text>
              </View>
            </View>

            <View style={styles.itemBox}>
              <View style={styles.itemInfo}>
                <MaterialCommunityIcons name="account" size={22} color="#2B2C34"/>
                <Text style={styles.itemText}>Пошуковець: {item.clientSearch}</Text>
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
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'column',
    rowGap: 15,
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
});
