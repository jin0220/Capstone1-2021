import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainScreen from './Components/MainScreen';
import CategoryScreen from './Components/CategoryScreen';
import SearchScreen from './Components/SearchScreen';
import MypageScreen from './Components/MypageScreen';


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
            else if (route.name === 'Category') {
              iconName = focused ? 'ios-list' : 'ios-list';
            }
            else if (route.name === 'Search'){
              iconName = focused ? 'search' : 'search';
            }
            else if (route.name === 'Mypage') {
              iconName = focused ? 'person' : 'person';
            }
            

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Category" component={CategoryScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Mypage" component={MypageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}