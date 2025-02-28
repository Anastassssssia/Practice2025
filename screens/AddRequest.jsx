import React, {useState} from 'react'
import {StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput, Platform} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

export default function AddRequest({navigation}) {
  const [activeInput, setActiveInput] = useState(null);
  const [open, setOpen] = useState(null);
  const [valueContract, setValueContract] = useState(null);

  const [valueDateStart, setValueDateStart] = useState(null);
  const [valueDateEnd, setValueDateEnd] = useState(null);
  const [showPicker, setShowPicker] = useState({ start: false, end: false });

  const handleDateChange = (event, selectedDate, type) => {
    setShowPicker({ ...showPicker, [type]: false });
    if (selectedDate) {
      type === 'start' ? setValueDateStart(selectedDate) : setValueDateEnd(selectedDate);
    }
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Main', {screen: 'Заявки'})}>
          <AntDesign name="arrowleft" size={25} color="#2B2C34"/>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Додати заявку</Text>

        <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerText}>Скасувати</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.inputContainer, styles.iconBox, activeInput === 'id' && styles.activeBackground]}>
            <Feather name="hash" size={18} color="#2B2C34" />
            <TextInput style={[styles.textValue, {flexShrink: 1, width: '100%'}]} onFocus={() => setActiveInput('id')} onBlur={() => setActiveInput(null)} placeholder='Код об’єкта' placeholderTextColor="#2B2C34"/>
          </View>
          
          <View style={[styles.dropdownContainer, open === 'contract' && styles.activeBackground]}>
            <MaterialCommunityIcons name="file-document-outline" size={20} color="#2B2C34" style={styles.dropdownIcon}/>
            <DropDownPicker placeholder='Тип договору' listMode="SCROLLVIEW" dropDownDirection="DOWN"
              open={open === 'contract'} value={valueContract} 
              items={[
                {label: 'оренда', value: 'оренда'},
                {label: 'продаж', value: 'продаж'},
              ]}
              setOpen={(isOpen) => setOpen(isOpen ? 'contract' : null)} setValue={setValueContract}
              style={[styles.dropdownBox,]} textStyle={styles.textValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}} 
            />
          </View>

          <View style={[styles.inputContainer, styles.inputBox, styles.inputFull, activeInput === 'price' && styles.activeBackground]}>
            <Entypo name="price-tag" size={18} color="#2B2C34"/>
            <TextInput style={[ styles.textValue, {flexShrink: 1, width: '100%'}]} onFocus={() => setActiveInput('price')} onBlur={() => setActiveInput(null)} keyboardType="numeric" placeholder='Ціна' placeholderTextColor="#2B2C34"/>
            <Text style={styles.textValue}>грн</Text>
          </View>
          
          <View style={[styles.inputContainer, styles.iconBox, styles.inputFull, activeInput === 'realtor' && styles.activeBackground]}>
            <MaterialCommunityIcons name="account-tie" size={24} color="#2B2C34"/>
            <TextInput style={[styles.textValue, {flexShrink: 1, width: '100%'}]} onFocus={() => setActiveInput('realtor')} onBlur={() => setActiveInput(null)} placeholder='Рієлтор' placeholderTextColor="#2B2C34"/>
          </View>

          <View style={[styles.inputContainer, styles.iconBox, styles.inputFull, activeInput === 'client' && styles.activeBackground]}>
            <MaterialCommunityIcons name="account" size={24} color="#2B2C34"/>
            <TextInput style={[styles.textValue, {flexShrink: 1, width: '100%'}]} onFocus={() => setActiveInput('client')} onBlur={() => setActiveInput(null)} placeholder='Клієнт' placeholderTextColor="#2B2C34"/>
          </View>
        
          <TouchableOpacity style={[styles.inputContainer, styles.iconBox, {gap: 7}]} onPress={() => setShowPicker({...showPicker, start: true})}>
            <AntDesign name="calendar" size={20} color="#2B2C34" />
            <Text style={styles.textValue}>{valueDateStart ? valueDateStart.toLocaleDateString() : 'Дата початку'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.inputContainer, styles.iconBox, {gap: 7}]} onPress={() => setShowPicker({...showPicker, end: true})}>
            <AntDesign name="calendar" size={20} color="#2B2C34" />
            <Text style={styles.textValue}>{valueDateEnd ? valueDateEnd.toLocaleDateString() : 'Дата завершення'}</Text>
          </TouchableOpacity>

          {showPicker.start && (
            <DateTimePicker value={valueDateStart || new Date()} mode='date'
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event, selectedDate) => handleDateChange(event, selectedDate, 'start')}         
            />
          )}

          {showPicker.end && (
              <DateTimePicker value={valueDateEnd || new Date()} mode='date' 
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(event, selectedDate) => handleDateChange(event, selectedDate, 'end')}
              />
          )}
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('Main', {screen: 'Заявки'})}>
            <Text style={[styles.saveButtonText]}>Зберегти</Text>
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
  headerTitle: {
    position: 'absolute',
    left: '50%', 
    transform: [{translateX: '-50%'}],
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.15,
    color: '#2B2C34',
  },
  headerButton: {
    flex: 1, 
  },
  headerText:{
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.1,
    color: '#6246EA',
    textAlign: 'right', 
  },
// --------add
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    padding: 20,
  },
  inputContainer: {
    width: '47%',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#B9BDFF',
    justifyContent: 'center'
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 5,
  },
  inputFull: {
    width: '100%',
  },
  dropdownContainer: {
    width: '47%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#B9BDFF',
    backgroundColor: '#fff',
    zIndex: 100,
  },
  dropdownBox: {
    paddingLeft: 35, 
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  dropdownList: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D9DBFF',
  },
  dropdownIcon: {
    position: 'absolute',
    left: 10,
  },
  textValue: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    color: '#2B2C34',
  },
  activeBackground: {
    backgroundColor: 'rgba(217,219, 255, 0.5)',
  },
// --------save botton
  bottomContainer:{
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  saveButton:{
    width: '100%',
    height: 45,
    paddingHorizontal: 50,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor:'#6246EA',
  },
  saveButtonText:{
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#fff',
  },
});