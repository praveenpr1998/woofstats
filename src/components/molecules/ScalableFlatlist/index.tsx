import React from 'react';
import {View, Animated, Dimensions, StyleSheet} from 'react-native';
import SliderDogCard from '../CardsList';
import {DUMMY_DATA} from '../../../utils/constants';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width * 0.6; // Width for the visible card
const SPACING = width * 0.01; // Spacing for the side cards
const FULL_CARD_WIDTH = CARD_WIDTH + SPACING;

const data = DUMMY_DATA.HOME_SLIDER;

export default function ScalableFlatlist() {
  const scrollX = new Animated.Value(0);

  const renderItem = ({item, index}) => {
    const inputRange = [
      (index - 1) * FULL_CARD_WIDTH,
      index * FULL_CARD_WIDTH,
      (index + 1) * FULL_CARD_WIDTH,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={[styles.card, {transform: [{scale}]}]}>
        <SliderDogCard item={item} />
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: (width - CARD_WIDTH) / 3, // Center the first and last items
        }}
        snapToInterval={FULL_CARD_WIDTH}
        decelerationRate="fast"
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.1, // Adjust the height based on your design
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
