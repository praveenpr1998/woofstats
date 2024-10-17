import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import {IMAGES} from '../../../utils/images';
import {THEME_COLORS} from '../../../theme/colors';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search places" />
      <Image source={IMAGES.dogPaw} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME_COLORS.WHITE,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginTop: 15,
    height: 50,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
  },
  icon: {
    paddingLeft: 10,
  },
});

export default SearchBar;
