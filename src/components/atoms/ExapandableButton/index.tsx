import React, {useEffect, useRef} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const ExpandableButton: React.FC<{
  startAnimation: boolean;
  onClick: () => void;
  children: React.ReactNode;
  percentage: number;
}> = ({startAnimation, onClick, children, percentage}) => {
  const widthAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    const animate = (toWidth: number) => {
      // Ensure the width and position are valid numbers
      Animated.parallel([
        Animated.timing(widthAnim, {
          toValue: toWidth, // Set this to the desired final width
          duration: 1000,
          useNativeDriver: false, // Ensure that this is correct for your setup
        }),
      ]).start();
    };

    const toWidth = (screenWidth * percentage) / 100;

    animate(toWidth);
  }, [widthAnim, startAnimation, percentage]);

  return (
    <TouchableNativeFeedback style={styles.container} onPress={onClick}>
      <Animated.View style={[styles.button, {width: widthAnim}]}>
        <View style={styles.innerButton}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Animated.View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'red',
  },
  button: {
    position: 'absolute',
    justifyContent: 'center',
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    right: 0,
  },
  innerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExpandableButton;
