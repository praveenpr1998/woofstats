import {
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import CustomView from '../AnimatedScrollCarousel/CustomView';
import AnimatedScrollCarousel from '../AnimatedScrollCarousel';
import {DUMMY_DATA} from '../../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
const ScalableCarousel = ({data, autoPlay, pagination}) => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const renderItem = (item, index, x, SPACER, SIZE) => {
    return (
      <Animated.View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', {data: item})}>
          <CustomView
            item={item}
            x={x}
            index={index}
            size={SIZE}
            spacer={SPACER}>
            <Text>test</Text>
          </CustomView>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View>
      <AnimatedScrollCarousel
        data={DUMMY_DATA.HOME_SLIDER}
        autoPlay={false}
        pagination={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ScalableCarousel;
