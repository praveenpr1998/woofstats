import React from 'react';
import {
  Image,
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {GlobalStyles} from '../../theme/globalStyles';
import {ONBOARDING_SLIDES} from '../../utils/constants';
import {THEME_COLORS} from '../../theme/colors';
import CustomText from '../atoms/CustomText';
import {styleGenerator} from '../../utils/stylesGenerator';
import {onboardingSlideItem} from '../../types/common';
import FluxContainer from '../atoms/containers/FluxContainer';
import {useNavigation} from '@react-navigation/native';
import ExpandableButton from '../atoms/ExapandableButton';

const {width, height} = Dimensions.get('window');

const Slide = React.memo(({item}: {item: onboardingSlideItem}) => {
  return (
    <View style={GlobalStyles.alignItemCenter}>
      <Image source={item?.image} style={styles.sliderImage} />
      <View>
        <CustomText
          bold
          style={styleGenerator('mt20', 'fs22', 'mw70%', 'ta.center')}>
          {item?.title}
        </CustomText>
        <CustomText
          style={styleGenerator('mt10', 'lh23', 'fs14', 'mw70%', 'ta.center')}>
          {item?.subtitle}
        </CustomText>
      </View>
    </View>
  );
});

const Footer = React.memo(
  React.forwardRef(
    (
      {
        currentSlideIndex,
        setCurrentSlideIndex,
      }: {
        currentSlideIndex: number;
        setCurrentSlideIndex: React.Dispatch<React.SetStateAction<number>>;
      },
      ref,
    ) => {
      const navigation = useNavigation();

      const isLastIndex = currentSlideIndex == ONBOARDING_SLIDES.length - 1;

      const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex !== ONBOARDING_SLIDES.length) {
          const offset = nextSlideIndex * width;
          ref?.current.scrollToOffset({offset});
          setCurrentSlideIndex(currentSlideIndex + 1);
        }
      };

      const onButtonPress = () => {
        if (isLastIndex) {
          navigation.navigate('home');
        } else {
          goToNextSlide();
        }
      };

      const expPercent = React.useMemo(
        () => (currentSlideIndex / (ONBOARDING_SLIDES.length - 1)) * 100,
        [currentSlideIndex],
      );

      return (
        <View
          style={styleGenerator(
            `h${height * 0.25}`,
            'jc.space-between',
            'ph20',
          )}>
          <FluxContainer row style={styleGenerator('mt20', 'jc.center')}>
            {ONBOARDING_SLIDES.map((_, index) => (
              <View
                key={index}
                style={[
                  styleGenerator(
                    'h2',
                    'w10',
                    'mh3',
                    'br2',
                    `bg.${THEME_COLORS.GRAY}`,
                  ),
                  currentSlideIndex === index &&
                    styleGenerator('w25', `bg.${THEME_COLORS.WHITE}`),
                ]}
              />
            ))}
          </FluxContainer>

          <View style={styleGenerator('mb50')}>
            <ExpandableButton
              startAnimation={isLastIndex}
              onClick={onButtonPress}
              percentage={
                expPercent < 25 ? 25 : expPercent > 85 ? 85 : expPercent
              }>
              {isLastIndex ? 'GET STARTED' : 'NEXT'}
            </ExpandableButton>
          </View>
        </View>
      );
    },
  ),
);

function OnboardingSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const ref = React.useRef();
  const updateCurrentSlideIndex = (e: {
    nativeEvent: {contentOffset: {x: any}};
  }) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    console.log('in', currentIndex);
    setCurrentSlideIndex(currentIndex);
  };

  return (
    <SafeAreaView style={[GlobalStyles.flexone]}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.65}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={ONBOARDING_SLIDES}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
        ref={ref}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sliderImage: {
    ...styleGenerator('h75%', `w${width}`, 'rem.contain'),
  },
});

export default OnboardingSlider;
