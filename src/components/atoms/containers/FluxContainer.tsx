// FluxContainer.tsx
import React from 'react';
import {View} from 'react-native';
import {GlobalStyles} from '../../../theme/globalStyles';

export type FluxContainerProps = {
  row?: boolean;
  children: React.ReactNode;
  style?: any;
};

const FluxContainer: React.FC<FluxContainerProps> = ({
  children,
  row,
  style,
}) => {
  return (
    <View style={[style, row ? GlobalStyles.flexRow : GlobalStyles.flexColumn]}>
      {children}
    </View>
  );
};

export default FluxContainer;
