import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DOWNLOAD, HOME, NEWHOT, SEARCH} from '../utils/routes';
import HomeScreen from '../screens/home/home';
import NewHotScreen from '../screens/newHot';
import SearchScreen from '../screens/search';
import DownloadScreen from '../screens/download';
import {themeColors} from '../themes/themeColors';
import {Home, Video, SearchNormal, ArrowDown2} from 'iconsax-react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: themeColors.WHITE,
        tabBarInactiveTintColor: themeColors.GRAY,
        tabBarStyle: {
          backgroundColor: themeColors.BLACK,
          paddingBottom: 5,
          height: height * 0.08,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '500',
          marginBottom: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Home
              
              color={focused ? themeColors.WHITE : themeColors.GRAY}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="New Hot"
        component={NewHotScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Video
             
              color={focused ? themeColors.WHITE : themeColors.GRAY}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <SearchNormal
             
              color={focused ? themeColors.WHITE : themeColors.GRAY}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Download"
        component={DownloadScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <ArrowDown2
             
              color={focused ? themeColors.WHITE : themeColors.GRAY}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
