import React, {useState} from 'react'
import {StyleSheet, SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, Platform,} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Filter ({navigation}) {
  const [selectType, setSelectType] = useState('Всі');
  const [selectProperty, setSelectProperty] = useState('Всі');
  const [selectDistrict, setSelectDistrict] = useState(['Всі']);
  const [selectRoom, setSelectRoom] = useState([]);
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [floorFrom, setFloorFrom] = useState('');
  const [floorTo, setFloorTo] = useState('');
  
  const toggleDistrict = (item) => {
    setSelectDistrict((prev) => {
      if (item === 'Всі') return ['Всі'];
      if (prev.includes('Всі')) return [item]; 
      if (prev.includes(item)) return prev.filter((district) => district !== item); 
      return [...prev, item];
    });
  };

  const toggleRoom = (item) => {
    setSelectRoom((prev) => prev.includes(item) ? prev.filter((room) => room != item) : [...prev, item]) 
  }
  
  const clearFilters = () => {
    setSelectType('Всі');
    setSelectProperty('Всі');
    setSelectDistrict(['Всі']);
    setSelectRoom([]);
    setPriceFrom('');
    setPriceTo('');
    setFloorFrom('');
    setFloorTo('');
  };
  
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Main')}>
          <AntDesign name="arrowleft" size={25} color="#2B2C34"/>
        </TouchableOpacity>

        <Text style={styles.headerText}>Фільтр</Text>
        <TouchableOpacity style={styles.headerButton} onPress={clearFilters}>
            <Text style={styles.headerSubtitleText}>Очистити</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.filterContainer}>
            <Text style={styles.filterTitle}>Мета</Text>
            <View style={styles.filterBox}>
              {['Всі', 'Купити', 'Орендувати'].map((item) => (
                <TouchableOpacity key={item} style={[styles.filterButton, selectType === item && styles.active]} onPress={() => setSelectType(item)}>
                  <Text style={[styles.filterText, selectType === item && styles.activeText]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.filterContainer}>
            <Text style={styles.filterTitle}>Тип нерухомості</Text>
            <View style={styles.filterBox}>
              {['Всі', 'Квартира', 'Будинок'].map((item) => (
                <TouchableOpacity key={item} style={[styles.filterButton, selectProperty === item && styles.active]} onPress={()=>setSelectProperty(item)}>
                  <Text style={[styles.filterText, selectProperty === item && styles.activeText]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.filterContainer}>
            <Text style={styles.filterTitle}>Район</Text>
            <View style={styles.filterBox}>
              {['Всі', 'Приморський', 'Київський', 'Пересипський', 'Хаджибейський'].map((item) => (
                <TouchableOpacity key={item} style={[styles.filterButton, selectDistrict.includes(item) && styles.active]} onPress={() => toggleDistrict(item)}>
                  <Text style={[styles.filterText, selectDistrict.includes(item) && styles.activeText]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.filterContainer}>
            <Text style={styles.filterTitle}>Ціна</Text>
              <View style={styles.filterBox}>
                <View style={[styles.filterInput, styles.inputBox]}>
                  <TextInput style={[styles.filterText, {flexShrink: 1, width: '100%'}]} value={priceFrom} onChangeText={setPriceFrom} keyboardType="numeric" placeholder="Від" placeholderTextColor="rgba(43,44,52, 0.5)"  underlineColorAndroid="transparent"/>
                  <Text style={styles.filterText}>грн</Text>
                </View>

                <View style={[styles.filterInput, styles.inputBox]}>
                  <TextInput style={[styles.filterText, {flexShrink: 1, width: '100%'}]} value={priceTo} onChangeText={setPriceTo} keyboardType="numeric" placeholder="До" placeholderTextColor="rgba(43,44,52, 0.5)"  underlineColorAndroid="transparent"/>
                  <Text style={styles.filterText}>грн</Text>
                </View>
              </View>
          </View>

          <View style={styles.filterContainer}>
            <Text style={styles.filterTitle}>Кімнат</Text>
            <View style={styles.filterBox}>
              {['1', '2', '3', '4+'].map((item) => (
              <TouchableOpacity key={item} style={[styles.filterButton, selectRoom.includes(item) && styles.active]} onPress={()=>toggleRoom(item)}>
                <Text style={[styles.filterText, selectRoom.includes(item) && styles.activeText]}>{item}</Text>
              </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.filterContainer}>
            <Text style={[styles.filterTitle]}>Поверх</Text>
            <View style={styles.filterBox}>
              <TextInput style={[styles.filterInput, styles.filterText]} value={floorFrom} onChangeText={setFloorFrom} keyboardType="numeric" placeholder="Від" placeholderTextColor="rgba(43,44,52, 0.5)"  underlineColorAndroid="transparent"/>
              <TextInput style={[styles.filterInput, styles.filterText]} value={floorTo} onChangeText={setFloorTo} keyboardType="numeric" placeholder="До" placeholderTextColor="rgba(43,44,52, 0.5)"  underlineColorAndroid="transparent"/>
            </View>
          </View>

        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.showButton} onPress={() => navigation.navigate('Main')}>
            <Text style={[styles.showButtonText]}>Показати</Text>
        </TouchableOpacity>
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
    height: 70,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderColor: 'rgba(43, 44, 52, 0.2)',
  },
  headerText: {
    position: 'absolute',
    left: '50%', 
    transform: [{translateX: '-50%'}],
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 1.25,
    color: '#2B2C34',
  },
  headerButton: {
    flex: 1, 
  },
  headerSubtitleText:{
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: '#6246EA',
    textAlign: 'right', 
  },
// --------filter
  container: {
    flex: 1,
    flexDirection: 'column',
    rowGap: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  filterContainer: {
    flexDirection: 'column',
    rowGap: 10,
  },
  filterTitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
    color: '#2B2C34',
  },
  filterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    columnGap: 20,
    rowGap: 15,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#B9BDFF',
  },
  filterInput: {
    width: '45%',
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(217, 219, 255, 0.5)',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#B9BDFF',
    flexShrink: 1
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between",
    columnGap: 20,
    rowGap: 5,
  },
  filterText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '600',
    color: '#2B2C34',
  },
  active: {
    backgroundColor: 'rgba(217, 219, 255, 0.5)',
  },
// --------show botton
  bottomContainer:{
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  showButton:{
    width: '100%',
    height: 45,
    paddingHorizontal: 50,
    justifyContent: 'center',
    backgroundColor:'#6246EA',
    borderRadius: 50,
    
  },
  showButtonText:{
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#fff',
  },
});