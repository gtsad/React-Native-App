import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Discover from './discover-page';
import Tickets from './tickets-page';
import CheckIn from './checkin-page';
import MyTabBar from './customtab'

const Tab = createBottomTabNavigator();

function TabNavigator ({navigation}) {
  return (
    <Tab.Navigator screenOptions={{headerShown: false,}} tabBar={(props) => <MyTabBar {...props} />} >
    <Tab.Screen name="Discover" component={Discover}  />
    <Tab.Screen name="Tickets" component={Tickets} />
    <Tab.Screen name="Check in" component={CheckIn} />
    </Tab.Navigator>
  );
};



export default TabNavigator;