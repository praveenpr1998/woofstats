import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {THEME_COLORS} from '../../../theme/colors';
import CustomText from '../../atoms/CustomText';
import FluxContainer from '../../atoms/containers/FluxContainer';
import {useSelector} from 'react-redux';
import {UserSelectors} from '../../../redux';
import Animated, {
  Easing,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from 'react-native-reanimated';

const Header = () => {
  const userInfo = useSelector(UserSelectors.getUserInfo);
  const {name, photo} = userInfo.user || {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FluxContainer>
          <CustomText.Animated
            entering={FadeInLeft.duration(1000).easing(Easing.ease)}
            style={styles.greetingText}>
            Hi, {name?.toUpperCase()} 👋
          </CustomText.Animated>
          <CustomText.Animated
            entering={FadeInRight.duration(1000).easing(Easing.ease)}
            style={styles.subText}>
            Explore the Dogs
          </CustomText.Animated>
        </FluxContainer>
        <Animated.Image
          entering={FadeInRight.duration(1000).easing(Easing.ease)}
          source={{uri: photo}}
          style={styles.avatar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: THEME_COLORS.theme,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 24,
    fontWeight: '600',
    width: 300,
  },
  subText: {
    color: '#8c8c8c',
    fontSize: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Header;
