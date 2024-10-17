import React from 'react';
import {GlobalStyles} from '../../../theme/globalStyles';
import FluxContainer, {FluxContainerProps} from './FluxContainer';

export default function ThemeContainer({children, style}: FluxContainerProps) {
  return (
    <FluxContainer
      style={[GlobalStyles.flexone, GlobalStyles.themeColor, style]}>
      {children}
    </FluxContainer>
  );
}
