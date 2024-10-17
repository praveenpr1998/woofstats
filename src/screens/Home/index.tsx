import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../TabScreens/HomeScreen';
import ProfileScreen from '../TabScreens/ProfileScreen';
import SearchScreen from '../TabScreens/SearchScreen';
import {Image, StyleSheet, View} from 'react-native';
import {IMAGES} from '../../utils/images';
import FluxContainer from '../../components/atoms/containers/FluxContainer';
import {styleGenerator} from '../../utils/stylesGenerator';
import {GlobalStyles} from '../../theme/globalStyles';

const {tabHome, tabProfile, tabSearch} = IMAGES;
const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {backgroundColor: 'black'},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = tabHome;
          } else if (route.name === 'Search') {
            iconName = tabSearch;
          } else {
            iconName = tabProfile;
          }
          return (
            <FluxContainer style={[GlobalStyles.placeCenter]}>
              <Image
                source={iconName}
                style={[styles.tabHomeIcon]}
                resizeMode="cover"
              />
              {focused && <View style={styles.highlighted}></View>}
            </FluxContainer>
          );
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabHomeIcon: {
    height: 20,
    width: 20,
  },
  highlighted: {
    ...styleGenerator('w5', 'h5', 'br50', 'bg.red', 'mt3'),
  },
});
