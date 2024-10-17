import React from 'react';
import {View, ViewProps} from 'react-native';
import CustomText from '../../atoms/CustomText';
import {GlobalStyles} from '../../../theme/globalStyles';
import Animated, {Easing, FadeIn, FadeInDown} from 'react-native-reanimated';

function LoginLogoText(
  props: React.JSX.IntrinsicAttributes &
    React.JSX.IntrinsicClassAttributes<View> &
    Readonly<ViewProps>,
) {
  return (
    <View style={[GlobalStyles.flexone, GlobalStyles.placeCenter]}>
      <CustomText.Animated
        bold
        size={24}
        entering={FadeInDown.duration(500).easing(Easing.ease)}>
        woofstats
      </CustomText.Animated>
    </View>
  );
}

export default LoginLogoText;
