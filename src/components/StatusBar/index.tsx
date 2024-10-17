import React, {ReactNode} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {GlobalStyles} from '../../theme/globalStyles';
import {THEME_COLORS} from '../../theme/colors';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 54 : StatusBar.currentHeight;

export default function StatusBarWrapper({children}: {children: ReactNode}) {
  return (
    <View style={GlobalStyles.flexone}>
      <View style={[styles.statusBarBackground]} />
      {children}
    </View>
  );
}

export const styles = StyleSheet.create({
  statusBarBackground: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: THEME_COLORS.theme,
  },
});
