import React from 'react';
import {
  Text,
  TextStyle,
  StyleSheet,
  TextProps as RNTextProps,
} from 'react-native';
import Animated, {AnimateProps} from 'react-native-reanimated';

// Base Props for the Text Component
interface BaseTextProps {
  color?: string;
  bold?: boolean;
  size?: 8 | 12 | 16 | 24;
  style?: TextStyle;
}

// Regular Text Props
interface CustomTextProps extends RNTextProps, BaseTextProps {}

// Animated Text Props (Including AnimateProps from Reanimated)
interface CustomAnimatedTextProps
  extends AnimateProps<RNTextProps>,
    BaseTextProps {}

// Font Size Mapping
const fontSizeMapping: {[key: number]: number} = {
  8: 8,
  12: 12,
  16: 16,
  24: 24,
};

// Regular CustomText Component
const CustomText: React.FC<CustomTextProps> & {
  Animated: React.FC<CustomAnimatedTextProps>;
} = ({children, color = 'white', bold = false, size = 16, style, ...props}) => {
  return (
    <Text
      style={[
        styles.text,
        {
          color,
          fontWeight: bold ? 'bold' : 'normal',
          fontSize: fontSizeMapping[size],
        } as TextStyle,
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

// Animated CustomText Component
CustomText.Animated = ({
  children,
  color = 'white',
  bold = false,
  size = 16,
  style,
  ...props
}: CustomAnimatedTextProps) => {
  return (
    <Animated.Text
      style={[
        styles.text,
        {
          color,
          fontWeight: bold ? 'bold' : 'normal',
          fontSize: fontSizeMapping[size],
        } as TextStyle,
        style,
      ]}
      {...props}>
      {children}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'commonFontFamily', // Replace with your actual font family
  } as TextStyle,
});

export default CustomText;
