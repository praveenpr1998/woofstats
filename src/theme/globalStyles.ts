import {StyleSheet} from 'react-native';
import {THEME_COLORS} from './colors';

export const GlobalStyles = StyleSheet.create({
  flexone: {
    flex: 1,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  placeCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignItemCenter: {
    alignItems: 'center',
  },
  themeColor: {
    backgroundColor: THEME_COLORS.theme,
  },
});
