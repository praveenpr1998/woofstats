import React from 'react';
import FluxContainer from '../../atoms/containers/FluxContainer';
import ScalableCarousel from '../../atoms/ScalableCarousel';
import {DUMMY_DATA} from '../../../utils/constants';
import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import {styleGenerator} from '../../../utils/stylesGenerator';
import CustomView from '../../atoms/AnimatedScrollCarousel/CustomView';
import AnimatedScrollCarousel from '../../atoms/AnimatedScrollCarousel';

export default function DogsCarousel() {
  const {width} = useWindowDimensions();
  const renderItem = (item, index, x, SPACER, SIZE) => {
    return (
      <CustomView
        height={150}
        item={item}
        x={x}
        index={index}
        size={SIZE}
        spacer={SPACER}>
        <Text>test</Text>
      </CustomView>
    );
  };

  return (
    <FluxContainer style={styles.container}>
      <AnimatedScrollCarousel
        data={DUMMY_DATA.HOME_SLIDER}
        autoPlay={true}
        pagination={true}
        renderItem={renderItem}
        SIZE={width * 0.9}
      />
    </FluxContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    ...styleGenerator('mt16'),
  },
});
