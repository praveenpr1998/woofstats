import React from 'react';
import FluxContainer from '../../atoms/containers/FluxContainer';
import ScalableCarousel from '../../atoms/ScalableCarousel';
import {DUMMY_DATA} from '../../../utils/constants';
import {StyleSheet} from 'react-native';
import {styleGenerator} from '../../../utils/stylesGenerator';

export default function DogsCarousel() {
  return (
    <FluxContainer style={styles.container}>
      <ScalableCarousel
        data={DUMMY_DATA.HOME_SLIDER}
        autoPlay={false}
        pagination={false}
      />
    </FluxContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    ...styleGenerator('mt16'),
  },
});
