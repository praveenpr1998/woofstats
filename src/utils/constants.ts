import {onboardingSlideItems} from '../types/common';
import {IMAGES} from './images';

const {onboarding_one, onboarding_two, onboarding_three} = IMAGES;
export const ONBOARDING_SLIDES: onboardingSlideItems = [
  {
    id: '1',
    image: onboarding_one,
    title: 'Best Digital Solution',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    image: onboarding_two,
    title: 'Achieve Your Goals',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    image: onboarding_three,
    title: 'Increase Your Value',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export const DUMMY_DATA = {
  HOME_SLIDER: [
    {id: '1', name: 'Staffordshire', country: 'India', image: IMAGES.husky},
    {id: '2', name: 'Golden Retriever', country: 'India', image: IMAGES.husky},
    {id: '3', name: 'Beagle', country: 'India', image: IMAGES.husky},
  ],
  CATEGORY_TABS: [
    {
      id: '1',
      text: 'Dogs',
      image: IMAGES.dogPaw,
    },
    {
      id: '1',
      text: 'Dogs',
      image: IMAGES.dogPaw,
    },
    {
      id: '1',
      text: 'Dogs',
      image: IMAGES.dogPaw,
    },
  ],
};
