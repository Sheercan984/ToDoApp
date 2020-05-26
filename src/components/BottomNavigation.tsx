import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Profile from '../screens/Profile';
import ToDoList from '../screens/ToDoList';
import Article from '../screens/Article';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({color,size}) =>(
          <MaterialCommunityIcons name="account" color = {color} size = {size} />
        ),
      }} />
      <Tab.Screen
      name="To do list"
      component={ToDoList}
      options={{
        tabBarIcon:({color,size}) =>(
          <MaterialCommunityIcons name="book" color = {color} size = {size} />
        ),
      }} />
      <Tab.Screen 
      name="Article" 
      component={Article}
      options={{
        tabBarIcon:({color,size}) =>(
          <MaterialCommunityIcons name="newspaper" color = {color} size = {size} />
        ),
      }} />
    </Tab.Navigator>
  );
}



export default MyTabs;