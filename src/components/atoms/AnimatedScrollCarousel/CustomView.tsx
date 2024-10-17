import {StyleSheet, Image, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Animated, {useAnimatedStyle, interpolate} from 'react-native-reanimated';
import CustomText from '../CustomText';
import {GlobalStyles} from '../../../theme/globalStyles';
const CustomView = ({item, x, index, size, spacer, height}) => {
  const [aspectRatio, setAspectRatio] = useState(1);

  // Get Image Width and Height to Calculate AspectRatio
  useLayoutEffect(() => {
    if (item.image) {
      const {width, height} = Image.resolveAssetSource(item.image);
      setAspectRatio(width / height);
    }
  }, [item.image]);

  const style = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [(index - 2) * size, (index - 1) * size, index * size],
      [0.8, 1, 0.8],
    );
    return {
      transform: [{scale}],
    };
  });

  if (!item.image) {
    return <View style={{width: spacer}} key={index} />;
  }
  return (
    <View style={[{width: size, height}]} key={index}>
      <Animated.View
        style={[
          styles.imageContainer,
          style,
          GlobalStyles.placeCenter,
          {height},
        ]}>
        <Animated.Image
          sharedTransitionTag={`T${item.id}`}
          source={item.image}
          style={[styles.image, {aspectRatio: aspectRatio}]}
        />
        <CustomText size={24} color="black">
          {item.name}
        </CustomText>
      </Animated.View>
    </View>
  );
};

export default CustomView;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 34,
    overflow: 'hidden',
    backgroundColor: 'white',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: undefined,
  },
});
