import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  ReactNode,
  ReactElement,
} from 'react-native';

interface SpacingContainerProps {
  children: ReactNode;
  flexValues: (number | string)[];
  percentage?: boolean;
}

const SpacingContainer: React.FC<SpacingContainerProps> = ({
  children,
  flexValues,
  percentage = false,
}) => {
  // Ensure flexValues length matches the number of children
  const numChildren = React.Children.count(children);
  if (flexValues.length !== numChildren) {
    throw new Error('Number of flexValues must match the number of children.');
  }

  // Calculate style for each child based on flexValues
  const childStyles: StyleProp<ViewStyle>[] = flexValues.map(value => {
    if (typeof value === 'number') {
      return {flex: value};
    } else if (percentage) {
      return {flex: parseFloat(value) / 100};
    } else {
      return {flex: parseFloat(value)};
    }
  });

  // Log details of each child
  React.Children.forEach(children, (child, index) => {
    if (React.isValidElement(child)) {
      console.log(`Child ${index + 1}:`, child);
      console.log(`Props:`, child.props);
    } else {
      console.log(`Child ${index + 1}:`, child);
    }
  });

  return (
    <View style={styles.container}>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child as ReactElement, {
              style: [
                child.props.style,
                childStyles[index],
              ] as StyleProp<ViewStyle>,
            })
          : child,
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Change this to 'column' if you want vertical stacking
    flexWrap: 'wrap', // To wrap children in case of overflow
  },
});

export default SpacingContainer;
