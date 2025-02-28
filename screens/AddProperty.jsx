import React, {useState} from 'react'
import {StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput, Platform, Dimensions} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

export default function AddProperty({navigation}) {
  const [activeInput, setActiveInput] = useState(null);
  const [open, setOpen] = useState(null);

  const [valueProperty, setValueProperty] = useState(null);
  const [valueDistrict, setValueDistrict] = useState(null);
  const [valueState, setValueState] = useState(null);
  const [valuePlanning, setValuePlanning] = useState(null);
  const [valueMaterial, setValueMaterial] = useState(null);
  const [valueKitchen, setValueKitchen] = useState(null);
  const [valueBathroom, setValueBathroom] = useState(null);
  const [valueHeating, setValueHeating] = useState(null);
  const [valueWater, setValueWater] = useState(null);
  const [valueGas, setValueGas] = useState(null);
  const [valueAge, setValueAge] = useState(null);
      
  return (
    <SafeAreaView style={styles.safeContainer}>  
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Main')}>
          <AntDesign name="arrowleft" size={25} color="#2B2C34"/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Додати об'єкт</Text>

        <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerText}>Скасувати</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.dropdownContainer, {zIndex: open === 'property' ? 100 : 1}]}>
            <DropDownPicker placeholder='Тип нерухомості' listMode="SCROLLVIEW" dropDownDirection="DOWN"
              open={open === 'property'} value={valueProperty} 
              items={[
                {label: 'квартира', value: 'квартира'},
                {label: 'будинок', value: 'будинок'},
              ]}
              setOpen={(isOpen) => setOpen(isOpen ? 'property' : null)} setValue={setValueProperty}
              style={[styles.dropdownBox, open === 'property' && styles.activeBackground]} textStyle={styles.textValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}} 
            />
          </View>

          <View style={[styles.dropdownContainer, {zIndex: open === 'district' ? 100 : 1}]}>
            <DropDownPicker placeholder='Район' listMode="SCROLLVIEW" dropDownDirection="DOWN"
              open={open === 'district'} value={valueDistrict}
              items={[
                {label: 'Приморський', value:'Приморський'},
                {label: 'Київський', value: 'Київський'},
                {label: 'Пересипський', value: 'Пересипський'},
                {label: 'Хаджибейський', value: 'Хаджибейський'},
              ]}
              setOpen={(isOpen) => setOpen(isOpen ? 'district' : null)} setValue={setValueDistrict}
              style={[styles.dropdownBox, open === 'district' && styles.activeBackground]} textStyle={styles.textValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}}
            />
          </View>
                
          <TextInput style={[styles.inputContainer, styles.textValue, activeInput === 'street' && styles.activeBackground, {width: '100%'}]} onFocus={() => setActiveInput('street')} onBlur={() => setActiveInput(null)} placeholder='Вулиця' placeholderTextColor="#2B2C34"/>
          <TextInput style={[styles.inputContainer, styles.textValue, activeInput === 'num_house' && styles.activeBackground]} onFocus={() => setActiveInput('num_house')} onBlur={() => setActiveInput(null)} placeholder='№ будинку' placeholderTextColor="#2B2C34"/>
          <TextInput style={[styles.inputContainer, styles.textValue, activeInput === 'room' && styles.activeBackground]} onFocus={() => setActiveInput('room')} onBlur={() => setActiveInput(null)} keyboardType="numeric" placeholder='Кіл-ть кімнат' placeholderTextColor="#2B2C34"/>
          <TextInput style={[styles.inputContainer, styles.textValue, activeInput === 'floors' && styles.activeBackground]} onFocus={() => setActiveInput('floors')} onBlur={() => setActiveInput(null)} keyboardType="numeric" placeholder='Поверховість' placeholderTextColor="#2B2C34"/>
          <TextInput style={[styles.inputContainer, styles.textValue, activeInput === 'floor' && styles.activeBackground]} onFocus={() => setActiveInput('floor')} onBlur={() => setActiveInput(null)} keyboardType="numeric" placeholder='Поверх' placeholderTextColor="#2B2C34"/>
          <TextInput style={[styles.inputContainer, styles.textValue, activeInput === 'parade' && styles.activeBackground]} onFocus={() => setActiveInput('parade')} onBlur={() => setActiveInput(null)} keyboardType="numeric" placeholder='Парадна' placeholderTextColor="#2B2C34"/>
          <TextInput style={[styles.inputContainer, styles.textValue, activeInput === 'num_flat' && styles.activeBackground]} onFocus={() => setActiveInput('num_flat')} onBlur={() => setActiveInput(null)} keyboardType="numeric" placeholder='№ квартири' placeholderTextColor="#2B2C34"/>
          <TextInput style={[styles.inputContainer, styles.textValue, activeInput === 'area' && styles.activeBackground]} onFocus={() => setActiveInput('area')} onBlur={() => setActiveInput(null)} keyboardType="numeric" placeholder='Загальна площа' placeholderTextColor="#2B2C34"/>
          <TextInput style={[styles.inputContainer, styles.textValue, activeInput === 'livingArea' && styles.activeBackground]} onFocus={() => setActiveInput('livingArea')} onBlur={() => setActiveInput(null)} keyboardType="numeric" placeholder='Жила площа' placeholderTextColor="#2B2C34"/>
        
          <TextInput style={[styles.inputContainer, styles.textValue, activeInput === 'landArea' && styles.activeBackground]} onFocus={() => setActiveInput('landArea')} onBlur={() => setActiveInput(null)} keyboardType="numeric" placeholder='Площа території' placeholderTextColor="#2B2C34"/>

          <TextInput style={[styles.inputContainer, styles.textValue, activeInput === 'height' && styles.activeBackground]} onFocus={() => setActiveInput('height')} onBlur={() => setActiveInput(null)} keyboardType="numeric" placeholder='Висота стель' placeholderTextColor="#2B2C34"/>

          <View style={[styles.dropdownContainer, {zIndex: open === 'state' ? 100 : 1}]}>
            <DropDownPicker placeholder='Загальний стан' listMode="SCROLLVIEW" dropDownDirection="DOWN"
              open={open === 'state'} value={valueState}
              items={[
                {label: 'євроремонт', value: 'євроремонт'},
                {label: 'житло чисте', value: 'житло чисте'},
                {label: 'потребує ремонту', value: 'потребує ремонту'},
              ]}
              setOpen={(isOpen) => setOpen(isOpen ? 'state' : null)} setValue={setValueState}
              style={[styles.dropdownBox, open === 'state' && styles.activeBackground]} textStyle={styles.textValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}}
            />
          </View>

          <View style={[styles.dropdownContainer, {zIndex: open === 'planning' ? 100 : 1}]}>
            <DropDownPicker placeholder='Планування' listMode="SCROLLVIEW" dropDownDirection="DOWN"
              open={open === 'planning'} value={valuePlanning}
              items={[
                {label: 'роздільне', value: 'роздільне'},
                {label: 'вільне', value: 'вільне'},
                {label: 'суміжне', value: 'суміжне'},
              ]}
              setOpen={(isOpen) => setOpen(isOpen ? 'planning' : null)} setValue={setValuePlanning}
              style={[styles.dropdownBox, open === 'planning' && styles.activeBackground]} textStyle={styles.textValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}}
            />
          </View>

          <View style={[styles.dropdownContainer, {zIndex: open === 'material' ? 100 : 1}]}>
            <DropDownPicker placeholder='Тип матеріалу' listMode="SCROLLVIEW" dropDownDirection="DOWN"
              open={open === 'material'} value={valueMaterial}
              items={[
                {label: 'бетон', value: 'бетон'},
                {label: 'цегла', value: 'цегла'},
                {label: 'газобетон', value: 'газобетон'},
                {label: 'дерево', value: 'дерево'},
                {label: 'піноблоки', value: 'піноблоки'},
                {label: 'камінь', value: 'камінь'},
                {label: 'полістиролбетон', value: 'полістиролбетон'},
                {label: 'металокаркас', value: 'металокаркас'},
              ]}
              setOpen={(isOpen) => setOpen(isOpen ? 'material' : null)} setValue={setValueMaterial}
              style={[styles.dropdownBox, open === 'material' && styles.activeBackground]} textStyle={styles.textValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}}
            />
          </View>

          <View style={[styles.dropdownContainer, {zIndex: open === 'kitchen' ? 100 : 1}]}>
            <DropDownPicker placeholder='Тип кухні' listMode="SCROLLVIEW" dropDownDirection="DOWN"
              open={open === 'kitchen'} value={valueKitchen}
              items={[
                {label: 'кухня-їдальня', value: 'кухня-їдальня'},
                {label: 'кухня-вітальня', value: 'кухня-вітальня'},
              ]}
              setOpen={(isOpen) => setOpen(isOpen ? 'kitchen' : null)} setValue={setValueKitchen}
              style={[styles.dropdownBox, open === 'kitchen' && styles.activeBackground]} textStyle={styles.textValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}}
            />
          </View>

          <View style={[styles.dropdownContainer, {zIndex: open === 'bathroom' ? 100 : 1}]}>
            <DropDownPicker placeholder='Тип санвузла' listMode="SCROLLVIEW" dropDownDirection="DOWN"
              open={open === 'bathroom'} value={valueBathroom}
              items={[
                {label: 'сумісно', value: 'сумісно'},
                {label: 'роздільно', value: 'роздільно'},
              ]}
              setOpen={(isOpen) => setOpen(isOpen ? 'bathroom' : null)} setValue={setValueBathroom} 
              style={[styles.dropdownBox, open === 'bathroom' && styles.activeBackground]} textStyle={styles.textValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}}
            />
          </View>

          <View style={[styles.dropdownContainer, {zIndex: open === 'heating' ? 100 : 1}]}>
            <DropDownPicker placeholder='Опалення' listMode="SCROLLVIEW" dropDownDirection="DOWN"
              open={open === 'heating'} value={valueHeating}
              items={[
                {label: 'централізоване', value: 'централізоване'},
                {label: 'автономне', value: 'автономне'},
                {label: 'індивідуальне', value: 'індивідуальне'}
              ]}
              setOpen={(isOpen) => setOpen(isOpen ? 'heating' : null)} setValue={setValueHeating}
              style={[styles.dropdownBox, open === 'heating' && styles.activeBackground]} textStyle={styles.textValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}}
            />
          </View>

          <View style={[styles.dropdownContainer, {zIndex: open === 'water' ? 100 : 1}]}>
            <DropDownPicker placeholder='Водопостачання' listMode="SCROLLVIEW" dropDownDirection="DOWN"
              open={open === 'water'} value={valueWater}
              items={[
                {label: 'централізоване', value: 'централізоване'},
                {label: 'автономне', value: 'автономне'},
                {label: 'індивідуальне', value: 'індивідуальне'}
              ]}
              setOpen={(isOpen) => setOpen(isOpen ? 'water' : null)} setValue={setValueWater}
              style={[styles.dropdownBox, open === 'water' && styles.activeBackground]} textStyle={styles.textValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}}
            />
          </View>

          <View style={[styles.dropdownContainer, {zIndex: open === 'gas' ? 100 : 1}]}>
            <DropDownPicker placeholder='Газ' listMode="SCROLLVIEW" dropDownDirection="DOWN"
              open={open === 'gas'} value={valueGas}
              items={[
                {label: 'наявний', value: 'наявний'},
                {label: 'відсутній', value: 'відсутній'}
              ]}
              setOpen={(isOpen) => setOpen(isOpen ? 'gas' : null)} setValue={setValueGas}
              style={[styles.dropdownBox, open === 'gas' && styles.activeBackground]} textStyle={styles.textValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}}
            />
          </View>

          <View style={[styles.dropdownContainer, {zIndex: open === 'age' ? 100 : 1}]}>
            <DropDownPicker placeholder='Вік будівництва' listMode="SCROLLVIEW" dropDownDirection="DOWN"
              open={open === 'age'} value={valueAge}
              items={[
                {label: 'новобудова', value: 'новобудова'},
                {label: 'вторинне', value: 'вторинне'}
              ]}
              setOpen={(isOpen) => setOpen(isOpen ? 'age' : null)} setValue={setValueAge}
              style={[styles.dropdownBox, open === 'age' && styles.activeBackground]} textStyle={styles.textValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}}
            />
          </View>


          <TextInput style={[styles.multilineContainer, styles.textValue, activeInput === 'description' ? styles.activeBackground : null, {width: '100%'}]} 
            onFocus={() => setActiveInput('description')} onBlur={() => setActiveInput(null)} 
            multiline={true} numberOfLines={200}
            placeholder='Опис' placeholderTextColor="#2B2C34"
          />

          <TouchableOpacity style={styles.downloadContainer}>
            <Feather name="download" size={20} color="#2B2C34"/>
            <Text style={styles.textValue}>Завантажити зображення</Text>
          </TouchableOpacity>   
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('Main')}>
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
    letterSpacing: 0.5,
    color: '#6246EA',
    textAlign: 'right', 
  },
// --------add
  container: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  dropdownContainer: {
    width: '47%',
  },
  inputContainer: {
    width: '47%',
    height: 50,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#B9BDFF',
  },
  multilineContainer: {
    width: '100%',
    minHeigh: 200,
    padding: 10,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#B9BDFF',
  },
  dropdownBox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#B9BDFF',
  },
  dropdownList: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D9DBFF',
  },
  textValue: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 400,
    color: '#2B2C34',
  },
  activeBackground: {
    backgroundColor: 'rgba(217,219, 255, 0.5)',
  },
  downloadContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    gap: 10,
    backgroundColor: 'rgba(185, 189, 255, 0.7)',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(43, 44, 52, 0.5)'
  },
// --------save botton
  bottomContainer:{
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  saveButton:{
    width: '100%',
    height: 45,
    paddingHorizontal: 50,
    justifyContent: 'center',
    backgroundColor:'#6246EA',
    borderRadius: 50,
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