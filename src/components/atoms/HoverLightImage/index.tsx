import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../../theme/globalStyles';
import Animated, {Easing, FadeIn} from 'react-native-reanimated';

export default function HoverLightImage() {
  return (
    <View style={[styles.container, GlobalStyles.placeCenter]}>
      <Animated.Image
        source={require('../../../../assets/loginlogo.png')}
        style={[styles.image]}
        resizeMode="cover"
        entering={FadeIn.duration(1800).easing(Easing.ease)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
