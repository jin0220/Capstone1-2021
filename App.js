import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainScreen from './Components/MainScreen';
import ItemsListScreen from './Components/ItemsListScreen';
import SearchScreen from './Components/SearchScreen';
import MypageScreen from './Components/MypageScreen';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import ItemsListScreen from './Components/ItemsListScreen';

const firebaseConfig = {
  apiKey: "AIzaSyB_LXYdFtcpCDsupM_bCXuj4DOFJY5hkSU",
  authDomain: "reactnativeapp-f5f89.firebaseapp.com",
  projectId: "reactnativeapp-f5f89",
  storageBucket: "reactnativeapp-f5f89.appspot.com",
  messagingSenderId: "832058202775",
  appId: "1:832058202775:web:32ebc73939767252a827d2",
  measurementId: "G-M29HWFLHDG"
};


firebase.initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            }
            else if (route.name === 'Items') {
              iconName = focused ? 'ios-list' : 'ios-list';
            }
            else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search';
            }
            else if (route.name === 'Mypage') {
              iconName = focused ? 'person' : 'person';
            }


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: '#D9B650',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Items" component={ItemsListScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Mypage" component={MypageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}