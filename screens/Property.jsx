import React, {useState} from 'react'
import {StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput, Image, Dimensions, Linking, FlatList} from 'react-native'
import {StatusBar} from 'expo-status-bar';
import DropDownPicker from 'react-native-dropdown-picker';

import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

const {width, height} = Dimensions.get('window');

const data = [
  { id: '1', typeContract: 'Оренда', typeProperty: 'квартири', adress: 'вул. Французький бульвар, 67', district: 'Київський', 
    price: '14 000', room: '2', area: '50.0', floor: '4', floors: '24',  height: '2.7', livingArea: '32.5', landArea: '200',
    generalState: 'євроремонт', planning: 'роздільне', material: 'бетон', kitchen: 'кухня-їдальня', bathroom: 'сумісно',  
    heating: 'централізоване', water: 'централізоване', gas: 'наявний',  ageConstruction: 'вторинне',
    description: `Приваблива однокімнатна квартира з сучасним дизайном та виглядом на парк. Ідеальне розташування для сім'ї чи одинокої особи, що цінує комфорт та спокій.`,
  }
]

const images = [
  { id: '1', src: require('../assets/images/properties/2/1.jpg') },
  { id: '2', src: require('../assets/images/properties/2/2.jpg') },
  { id: '3', src: require('../assets/images/properties/2/3.jpg') }
];

export default function Property({navigation}) {
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(null);

  const [valueContract, setValueContract] = useState(null);
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
      <StatusBar barStyle="dark-content" backgroundColor="transparent"/>

      <View style={styles.imageContainer}>
        <FlatList data={images}
          keyExtractor={(item) => item.id} renderItem={({item}) =><Image source={item.src} style={styles.image}/>}
          horizontal showsHorizontalScrollIndicator={false} bounces={false} pagingEnabled
        />
      
        <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => navigation.navigate('Main')}>
          <AntDesign name="arrowleft" size={20} color="#2B2C34"/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.editButton]} onPress={()=>setEdit(true)}>
          <MaterialCommunityIcons name="pencil" size={20} color="#2B2C34"/>
        </TouchableOpacity>

        {edit && (<>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={[styles.button, styles.doneButton]} onPress={()=>setEdit(false)}>
              <MaterialCommunityIcons name="check" size={20} color="#fff"/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={()=>setEdit(false)}>
              <MaterialCommunityIcons name="close" size={20} color="#fff"/>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.button, styles.downloadButton]}>
              <Feather name="download" size={20} color="#2B2C34"/>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.trashButton]}>
            <Feather name="trash-2" size={20} color="#fff"/>
          </TouchableOpacity>
        </>)}
      </View>

      <ScrollView>
        {data.map((item, index) => 
          <View key={index} style={styles.infoContainer }>
            <View style={styles.titleContainer}>
              {!edit ? ( 
                <View style={styles.titleBox}>
                  <Text style={styles.titleText}>Оренда квартири</Text>
                  <Text style={[styles.titleText, {color: '#6246EA'}]}>{item.price} грн</Text>
                </View>)
              :( 
                <View style={styles.titleBox}>
                  <View>
                    <DropDownPicker placeholder={`${item.typeContract || ''} ${item.typeProperty}`} listMode="SCROLLVIEW"
                      open={open === 'contract'} value={valueContract}
                      items={[
                        {label: 'Оренда квартири', value:'оренда квартира'},
                        {label: 'Оренда будинку', value: 'оренда будинок'},
                        {label: 'Продаж квартири', value: 'продаж квартира'},
                        {label: 'Продаж будинку', value: 'продаж будинок'},
                      ]}
                      setOpen={(isOpen) => setOpen(isOpen ? 'contract' : null)} setValue={setValueContract}
                      style={[styles.dropdownBox, styles.dropdownBoxTitle]} textStyle={styles.dropdownTitle} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}}
                    />
                  </View>
                  <TextInput style={styles.inputText} keyboardType="numeric" placeholder={`${item.price} грн`} placeholderTextColor="#2B2C34"/>
                </View>
              )}

              {!edit ? (
                <Text style={styles.addressText}>вул. Французький бульвар, 67, Приморський район</Text>)
              :(
                <View style={styles.addressContainer}>
                  <TextInput style={[styles.addressText, styles.addressEdit]} placeholder={item.adress} placeholderTextColor="#2B2C34"/>
                  <View style={{width: '35%'}}>
                    <DropDownPicker placeholder={`${item.district}`} listMode="SCROLLVIEW"
                      open={open === 'district'} value={valueDistrict}
                      items={[
                        {label: 'Приморський', value:'Приморський'},
                        {label: 'Київський', value: 'Київський'},
                        {label: 'Пересипський', value: 'Пересипський'},
                        {label: 'Хаджибейський', value: 'Хаджибейський'},
                      ]}
                      setOpen={(isOpen) => setOpen(isOpen ? 'district' : null)} setValue={setValueDistrict}
                      style={[styles.dropdownAddress]} textStyle={styles.dropdownTitle} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}}
                    />
                  </View>
                </View>
              )}
            </View>
            
            <View style={styles.infoBox}>
              <View style={styles.titleBox}>
                <Text style={styles.titleText}>Характеристики</Text>
                <Text style={styles.titleText}>код <Text style={{color: '#6246EA'}}>2356</Text></Text>
              </View>

              <View style={styles.cards}>
                <View style={[styles.card, edit && styles.cardEdit]}>
                  <Ionicons name="bed-outline" size={18} color="#6246EA" />
                  <Text style={styles.cardLabel}>кімнат</Text>
                  {!edit ? (<Text style={styles.cardValue}>{item.room}</Text>)
                  :(
                    <TextInput style={[styles.cardBoxEdit, styles.cardValueEdit]} keyboardType="numeric" placeholder={item.room} placeholderTextColor="#2B2C34"/>
                  )}
                </View>
                <View style={[styles.card, edit && styles.cardEdit]}>
                  <MaterialCommunityIcons name="stairs" size={18} color="#6246EA"/>
                  <Text style={styles.cardLabel}>поверх</Text>
                  {!edit ? (<Text style={styles.cardValue}>{item.floor}/{item.floors}</Text>)
                  :(
                    <View style={styles.cardContainerEdit}>
                      <TextInput style={[styles.cardInput, styles.cardValueEdit]} keyboardType="numeric" placeholder={item.floor} placeholderTextColor="#2B2C34"/>
                      <Text style={[styles.cardValueEdit]}>/</Text>
                      <TextInput style={[styles.cardInput, styles.cardValueEdit]} keyboardType="numeric" placeholder={item.floors} placeholderTextColor="#2B2C34"/>
                    </View>
                  )}
                </View>
                <View style={[styles.card, edit && styles.cardEdit]}>
                  <MaterialCommunityIcons name="arrow-expand-vertical" size={18} color="#6246EA"/>
                  <Text style={styles.cardLabel}>висота стель</Text>
                  {!edit ? (<Text style={styles.cardValue}>{item.height} м</Text>)
                  :(<TextInput style={[styles.cardBoxEdit, styles.cardValueEdit]} keyboardType="numeric" placeholder={`${item.height} м`} placeholderTextColor="#2B2C34"/>)}
                </View>
                <View style={[styles.card, edit && styles.cardEdit]}>
                  <MaterialCommunityIcons name="floor-plan" size={18} color="#6246EA"/>
                  <Text style={styles.cardLabel}>заг. площа</Text>
                  {!edit ? (<Text style={styles.cardValue}>{item.area} м²</Text>)
                  :(<TextInput style={[styles.cardBoxEdit, styles.cardValueEdit]} keyboardType="numeric" placeholder={`${item.area} м²`} placeholderTextColor="#2B2C34"/>)}
                </View>
                <View style={[styles.card, edit && styles.cardEdit]}>
                  <MaterialCommunityIcons name="vector-square" size={18} color="#6246EA"/>
                  <Text style={styles.cardLabel}>жила площа</Text>
                  {!edit ? (<Text style={styles.cardValue}>{item.livingArea} м²</Text>)
                  :(<TextInput style={[styles.cardBoxEdit, styles.cardValueEdit]} keyboardType="numeric" placeholder={`${item.livingArea} м²`} placeholderTextColor="#2B2C34"/>)}
                </View>
                {item.typeProperty === 'будинок' && 
                  <View style={[styles.card, edit && styles.cardEdit]}>
                    <MaterialCommunityIcons name="image-size-select-small" size={18} color="#6246EA"/>
                    <Text style={styles.cardLabel}>зем. площа</Text>
                    {!edit ? (<Text style={styles.cardValue}>{item.landArea} м²</Text>)
                    :(<TextInput style={[styles.cardBoxEdit, styles.cardValueEdit]} keyboardType="numeric" placeholder={`${item.landArea} м²`} placeholderTextColor="#2B2C34"/>)}
                  </View>
                }
                <View style={[styles.card, edit && styles.cardEdit, {zIndex: open === 'state' ? 100 : 1}]}>
                  <MaterialCommunityIcons name="format-paint" size={18} color="#6246EA"/>
                  <Text style={styles.cardLabel}>стан</Text>
                  {!edit ? (<Text style={styles.cardValue}>{item.generalState}</Text>)
                  :(
                    <View>
                      <DropDownPicker placeholder={item.generalState} listMode="SCROLLVIEW" dropDownDirection="DOWN"
                        open={open === 'state'} value={valueState}
                        items={[
                          {label: 'євроремонт', value: 'євроремонт'},
                          {label: 'житло чисте', value: 'житло чисте'},
                          {label: 'потребує ремонту', value: 'потребує ремонту'},
                        ]}
                        setOpen={(isOpen) => setOpen(isOpen ? 'state' : null)} setValue={setValueState}
                        style={[styles.dropdownCard]} textStyle={styles.dropdownCardValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}} 
                      />
                    </View>
                  )}
                </View>
                <View style={[styles.card, edit && styles.cardEdit, {zIndex: open === 'planning' ? 100 : 1}]}>
                  <MaterialCommunityIcons name="pencil-ruler" size={18} color="#6246EA"/>
                  <Text style={styles.cardLabel}>планування</Text>
                  {!edit ? (<Text style={styles.cardValue}>{item.planning}</Text>)
                  :(
                    <View>
                      <DropDownPicker placeholder={item.planning} listMode="SCROLLVIEW" dropDownDirection="DOWN"
                        open={open === 'planning'} value={valuePlanning}
                        items={[
                          {label: 'роздільне', value: 'роздільне'},
                          {label: 'вільне', value: 'вільне'},
                          {label: 'суміжне', value: 'суміжне'},
                        ]}
                        setOpen={(isOpen) => setOpen(isOpen ? 'planning' : null)} setValue={setValuePlanning}
                        style={[styles.dropdownCard]} textStyle={styles.dropdownCardValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}}  
                      />
                    </View>
                  )}
                </View>
                <View style={[styles.card, edit && styles.cardEdit, {zIndex: open === 'material' ? 100 : 1}]}>
                  <MaterialCommunityIcons name="wall" size={18} color="#6246EA"/>
                  <Text style={styles.cardLabel}>матеріал</Text>
                  {!edit ? (<Text style={styles.cardValue}>{item.material}</Text>)
                  :(
                    <View>
                      <DropDownPicker placeholder={item.material} listMode="SCROLLVIEW" dropDownDirection="DOWN"
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
                        style={[styles.dropdownCard]} textStyle={styles.dropdownCardValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}} 
                      />
                    </View>
                  )}
                </View>
                <View style={[styles.card, edit && styles.cardEdit, {zIndex: open === 'kitchen' ? 100 : 1}]}>
                  <MaterialCommunityIcons name="silverware-fork-knife" size={18} color="#6246EA"/>
                  <Text style={styles.cardLabel}>тип кухні</Text>
                  {!edit ? (<Text style={styles.cardValue}>{item.kitchen}</Text>)
                  :(
                    <View>
                      <DropDownPicker placeholder={item.kitchen} listMode="SCROLLVIEW" dropDownDirection="DOWN"
                        open={open === 'kitchen'} value={valueKitchen}
                        items={[
                          {label: 'кухня-їдальня', value: 'кухня-їдальня'},
                          {label: 'кухня-вітальня', value: 'кухня-вітальня'},
                        ]}
                        setOpen={(isOpen) => setOpen(isOpen ? 'kitchen' : null)} setValue={setValueKitchen}
                        style={[styles.dropdownCard]} textStyle={styles.dropdownCardValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}} 
                      />
                    </View>
                  )}
                </View>
                <View style={[styles.card, edit && styles.cardEdit, {zIndex: open === 'bathroom' ? 100 : 1}]}>
                  <MaterialCommunityIcons name="shower" size={18} color="#6246EA"/>
                  <Text style={styles.cardLabel}>тип санвузла</Text>
                  {!edit ? (<Text style={styles.cardValue}>{item.bathroom}</Text>)
                  :(
                    <View>
                      <DropDownPicker placeholder={item.bathroom} listMode="SCROLLVIEW" dropDownDirection="DOWN"
                        open={open === 'bathroom'} value={valueBathroom}
                        items={[
                          {label: 'сумісно', value: 'сумісно'},
                          {label: 'роздільно', value: 'роздільно'},
                        ]}
                        setOpen={(isOpen) => setOpen(isOpen ? 'bathroom' : null)} setValue={setValueBathroom} 
                        style={[styles.dropdownCard]} textStyle={styles.dropdownCardValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}} 
                      />
                    </View>
                  )}
                </View>
                <View style={[styles.card, edit && styles.cardEdit, {zIndex: open === 'heating' ? 100 : 1}]}>
                  <MaterialCommunityIcons name="radiator" size={18} color="#6246EA"/>
                  <Text style={styles.cardLabel}>опалення</Text>
                  {!edit ? (<Text style={styles.cardValue}>{item.heating}</Text>)
                  :(
                    <View>
                      <DropDownPicker placeholder={item.heating} listMode="SCROLLVIEW" dropDownDirection="DOWN"
                        open={open === 'heating'} value={valueHeating}
                        items={[
                          {label: 'централізоване', value: 'централізоване'},
                          {label: 'автономне', value: 'автономне'},
                          {label: 'індивідуальне', value: 'індивідуальне'}
                        ]}
                        setOpen={(isOpen) => setOpen(isOpen ? 'heating' : null)} setValue={setValueHeating}
                        style={[styles.dropdownCard]} textStyle={styles.dropdownCardValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}} 
                      />
                    </View>
                  )}
                </View>
                <View style={[styles.card, edit && styles.cardEdit, {zIndex: open === 'water' ? 100 : 1}]}>
                  <MaterialCommunityIcons name="water-pump" size={18} color="#6246EA"/>
                  <Text style={styles.cardLabel}>водопостачання</Text>
                  {!edit ? (<Text style={styles.cardValue}>{item.water}</Text>)
                  :(
                    <View>
                      <DropDownPicker placeholder={item.water} listMode="SCROLLVIEW" dropDownDirection="DOWN"
                        open={open === 'water'} value={valueWater}
                        items={[
                          {label: 'централізоване', value: 'централізоване'},
                          {label: 'автономне', value: 'автономне'},
                          {label: 'індивідуальне', value: 'індивідуальне'}
                        ]}
                        setOpen={(isOpen) => setOpen(isOpen ? 'water' : null)} setValue={setValueWater}
                        style={[styles.dropdownCard]} textStyle={styles.dropdownCardValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}} 
                      />
                    </View>
                  )}
                </View>
                <View style={[styles.card, edit && styles.cardEdit, {zIndex: open === 'gas' ? 100 : 1}]}>
                  <FontAwesome name="fire" size={18} color="#6246EA"/>
                  <Text style={styles.cardLabel}>газ</Text>
                  {!edit ? (<Text style={styles.cardValue}>{item.gas}</Text>)
                  :(
                    <View>
                      <DropDownPicker placeholder={item.gas} listMode="SCROLLVIEW" dropDownDirection="DOWN"
                        open={open === 'gas'} value={valueGas}
                        items={[
                          {label: 'наявний', value: 'наявний'},
                          {label: 'відсутній', value: 'відсутній'}
                        ]}
                        setOpen={(isOpen) => setOpen(isOpen ? 'gas' : null)} setValue={setValueGas}
                        style={[styles.dropdownCard]} textStyle={styles.dropdownCardValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}} 
                      />
                    </View>
                  )}
                </View>
                <View style={[styles.card, edit && styles.cardEdit, {zIndex: open === 'age' ? 100 : 1}]}>
                  <MaterialCommunityIcons name="shield-home-outline" size={18} color="#6246EA"/>
                  <Text style={styles.cardLabel}>вік будівництва</Text>
                  {!edit ? (<Text style={styles.cardValue}>{item.ageConstruction}</Text>)
                  :(
                    <View>
                      <DropDownPicker placeholder={item.ageConstruction} listMode="SCROLLVIEW" dropDownDirection="DOWN"
                        open={open === 'age'} value={valueAge}
                        items={[
                          {label: 'новобудова', value: 'новобудова'},
                          {label: 'вторинне', value: 'вторинне'}
                        ]}
                        setOpen={(isOpen) => setOpen(isOpen ? 'age' : null)} setValue={setValueAge}
                        style={[styles.dropdownCard]} textStyle={styles.dropdownCardValue} dropDownContainerStyle={styles.dropdownList} arrowIconStyle={{tintColor: '#2B2C34'}} 
                      />
                    </View>
                  )}
                </View>
              </View>
            </View>

            <View style={styles.infoBox}>
              <View style={styles.titleBox}>
                <Text style={styles.titleText}>Опис</Text>
              </View>
              {!edit ? (
                <View>
                  <Text style={styles.infoText}>{item.description}</Text>
                </View>)
              :(
                <View style={styles.infoTextEdit}>
                  <TextInput style={styles.infoText} multiline={true} >{item.description}</TextInput>
                </View>
              )}
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.titleText}>Рієлтор</Text>

              <View style={styles.titleBox}>
                <View style={styles.titleBox}>
                  <Image style={styles.imageRealtor} source={require('../assets/images/profile/8.png')}/>
                  <Text style={styles.titleText}>Лисенко Андрій Петрович</Text>
                </View>
                <View style={styles.titleBox}>
                  <TouchableOpacity onPress={() => Linking.openURL(`mailto:example@gmail.com`)}>
                    <MaterialCommunityIcons name="email" size={24} color="#6246EA"/>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => Linking.openURL(`tel:+380123456789`)} >
                    <FontAwesome name="phone"  size={24} color="#6246EA" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
// --------image
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: width , 
    height: height * 0.3,
    resizeMode: 'cover',
  },
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(43, 44, 52, 0.25)',
  },
  editButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(43, 44, 52, 0.25)',
  },
  actionButtons: {
    position: 'absolute',
    top: 50,
    right: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    columnGap: 30,
  },
  doneButton: {
    backgroundColor: '#2B2C34',
  },
  cancelButton: {
    backgroundColor: '#D64548',
  },
  downloadButton: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    backgroundColor: '#fff',
  },
  trashButton: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    backgroundColor: '#D64548',
  },
  infoContainer: {
    flexDirection: 'column',
    rowGap: 20,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
// --------title
  titleContainer: {
    flexDirection: 'column',
    rowGap: 10,
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 15,
  },
  titleText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 700,
    color: '#2B2C34',
  },
  addressText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 400,
    color: 'rgba(43, 44, 52, 0.7)',
  },
// --------edit title
  dropdownContainer: {
    maxWidth: 170,
  },
  dropdownBox:{
    backgroundColor: 'rgba(217, 219, 255, 0.5)',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D9DBFF',    
  },
  dropdownBoxTitle: {
    width: 170,
    maxWidth: 170,
    height: 40,
    minHeight: 40,
  },
  dropdownTitle: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 400,
    color: '#2B2C34',
  },
  dropdownList: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D9DBFF',
  },
  inputText: {
    width: width*0.3,
    height: 40,
    paddingHorizontal: 10,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 400,
    color: '#2B2C34',
    backgroundColor: 'rgba(217, 219, 255, 0.5)',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D9DBFF',
  },
  addressContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D9DBFF',
  },
  addressEdit: {
    width: '65%',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(217, 219, 255, 0.5)',
    color: '#2B2C34',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
  },
  dropdownAddress: {
    height:40,
    minHeight: 40,
    backgroundColor: 'rgba(217, 219, 255, 0.5)', 
    borderWidth: 0, 
    borderRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
// --------info
  infoBox: {
    flexDirection: 'column',
    rowGap: 15,
  },
// --------cards
  cards: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',    
  },
  card: {
    width: '31.4%',
    paddingVertical: 7,
    paddingHorizontal: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'rgba(43, 44, 52, 0.2)',
    shadowColor:  'rgba(43, 44, 52, 0.5)',
    elevation: 5,
  },
  cardEdit: {
    width: '48%',
    paddingHorizontal: 5,
  },
  cardLabel: {
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: 500,
    color: 'rgba(43, 44, 52, 0.8)',
  },
  cardValue: {
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: 700,
    color: '#6246EA',
  },
// --------edit cards
  cardBoxEdit: {
    width: '60%',
    height: 30,
    minHeight: 30,
    paddingVertical: 0,
    paddingHorizontal: 5,
    backgroundColor: 'rgba(217, 219, 255, 0.5)',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#D9DBFF',
  },
  dropdownCard: {
    height: 35,
    minHeight: 35,
    paddingVertical: 3,
    padding: 5,
    backgroundColor: 'rgba(217, 219, 255, 0.5)',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#D9DBFF',
  },
  dropdownCardValue: {
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: 500,
    color: '#2B2C34',
    flexShrink:1,
  },
  cardValueEdit: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: 500,
    color: '#2B2C34',
  },
  cardContainerEdit: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(217, 219, 255, 0.5)',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#D9DBFF',
  },
  cardInput: {
    width: '25%',
    height: 30,
    minHeight: 30,
    paddingVertical: 0,
    marginHorizontal: 5,
  }, 
// --------description
  infoText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    color: '#2B2C34',
    lineHeight: 25,
  },
  infoTextEdit: {
    textAlignVertical: 'top',
    paddingHorizontal: 10,
    paddingVertical: 0,
    backgroundColor: 'rgba(217, 219, 255, 0.5)',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D9DBFF',
  },
// --------realtor
  imageRealtor: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
});