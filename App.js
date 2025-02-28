import React, {useState, useEffect} from 'react'
import {StyleSheet, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Register from './screens/Register';
import Properties from './screens/Properties';
import Filter from './screens/Filter';
import Property from './screens/Property';
import Requests from './screens/Requests';
import Contracts from './screens/Contracts';
import Clients from './screens/Clients';
import AddButton from './screens/AddButton';
import AddProperty from './screens/AddProperty';
import AddRequest from './screens/AddRequest';
import AddContract from './screens/AddContract';


import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

function AuthStack({setIsLoggedIn}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome">  
        {(props) => <Welcome {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register}/>
    </Stack.Navigator>
  );
}

const tabBarStyle = {
  size: 30,
  active: '#6647FF',
  inactive: 'rgba(43,44,52, 0.5)',
};

function TabNavigation() {
  return (
    <View style ={{flex: 1, backgroundColor: '#fff'}}>
      <Tab.Navigator screenOptions={{tabBarStyle: styles.tabBar,  tabBarItemStyle: styles.tabBarItem, headerShown: false, tabBarLabel: () => null }}>
        <Tab.Screen name="Нерухомість" component={Properties} options={{
          tabBarIcon: ({focused}) => (<AntDesign name="home" size={tabBarStyle.size} color={focused ? tabBarStyle.active : tabBarStyle.inactive}/> ),
        }}/>
        
        <Tab.Screen name="Заявки" component={Requests} options={{
          tabBarIcon: ({focused}) => (<AntDesign name="filetext1"  size={25} color={focused ? tabBarStyle.active : tabBarStyle.inactive}/>),
        }}/>

        <Tab.Screen name="AddButton" options={{ tabBarButton: (props) => <AddButton {...props} /> }}>
            {() => null}
        </Tab.Screen>

        <Tab.Screen name="Договори" component={Contracts} options={{
          tabBarIcon: ({focused}) => (<Ionicons name="file-tray-full-outline"  size={tabBarStyle.size} color={focused ? tabBarStyle.active : tabBarStyle.inactive}/>),
        }}/>

        <Tab.Screen name="Клієнти" component={Clients} options={{
          tabBarIcon: ({focused}) => (<AntDesign name="contacts" size={tabBarStyle.size} color={focused ? tabBarStyle.active : tabBarStyle.inactive}/>),
        }}/>
      </Tab.Navigator>
    </View>
  );
}

function MainStack() {
  return (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Main" component={TabNavigation}/>
    <Stack.Screen name="Filter" component={Filter}/>
    <Stack.Screen name="Property" component={Property}/>

    <Stack.Screen name="AddProperty" component={AddProperty}/>
    <Stack.Screen name="AddRequest" component={AddRequest}/>
    <Stack.Screen name="AddContract" component={AddContract}/>
  </Stack.Navigator>
  )
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loaded, error] = useFonts({
    'RedactedScript': require('./assets/fonts/RedactedScript-Regular.ttf'),
    'Lato400': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato700': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato900': require('./assets/fonts/Lato-Black.ttf'),
    'Roboto': require('./assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="white"/>
      {isLoggedIn ? <MainStack /> : <AuthStack setIsLoggedIn={setIsLoggedIn} />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    height: 60,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tabBarItem: {
    height: 40,
    paddingVertical: 0,
    justifyContent: 'center', 
    alignItems: 'center',
  },
});
