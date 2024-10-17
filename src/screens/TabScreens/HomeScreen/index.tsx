import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Header from '../../../components/molecules/Header';
import SearchBar from '../../../components/molecules/SearchBar';
import {THEME_COLORS} from '../../../theme/colors';
import {GlobalStyles} from '../../../theme/globalStyles';
import HomeBanner from '../../../components/molecules/HomeBanner';
import DogsCarousel from '../../../components/molecules/DogsCarousel';
import DetailsScreen from '../DetailsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function LandingScreen() {
  return (
    <ScrollView style={[GlobalStyles.flexone, styles.container]}>
      <Header />
      <HomeBanner />
      <SearchBar />
      <DogsCarousel />
    </ScrollView>
  );
}

export default function HomeScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="landing" component={LandingScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_COLORS.theme,
  },
});
