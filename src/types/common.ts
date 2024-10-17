import {ImageSourcePropType} from 'react-native';

export interface onboardingSlideItem {
  title: string;
  subtitle: string;
  id: string;
  image: ImageSourcePropType | undefined;
}

export type onboardingSlideItems = onboardingSlideItem[];
