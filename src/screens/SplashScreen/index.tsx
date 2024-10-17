import React, {useEffect} from 'react';
import {View} from 'react-native';
import useCustomLoading from '../../hooks/useCustomLoading';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/navigation';
import useGoogleLogin from '../../hooks/useGoogleLogin';
import {useSelector} from 'react-redux';
import {UserSelectors} from '../../redux';
import ThemeContainer from '../../components/atoms/containers/ThemeContainer';
import HoverLightImage from '../../components/atoms/HoverLightImage';
import {GlobalStyles} from '../../theme/globalStyles';
import LoginLogoText from '../../components/molecules/LoginLogoText';
import {styleGenerator} from '../../utils/stylesGenerator';
import usePlayBarkSound from '../../hooks/usePlayBarkSound';

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'auth'
>;
type SplashScreenProps = {
  navigation: SplashScreenNavigationProp;
};

export default function SplashScreen({navigation}: SplashScreenProps) {
  const {customLoading} = useCustomLoading({delay: 2000});
  const {loading, error} = useGoogleLogin();
  const isAuthenticated = useSelector(UserSelectors.getAuthStatus);
  const isFirstTimeLogin = useSelector(UserSelectors.getIsFirstTimeLogin);
  usePlayBarkSound();

  useEffect(() => {
    if (!customLoading && !loading) {
      if (error || !isAuthenticated) {
        navigation.navigate('auth');
      } else if (!isFirstTimeLogin) {
        navigation.navigate('onboarding');
      } else if (isAuthenticated) {
        navigation.navigate('home');
      }
    }
  }, [
    customLoading,
    error,
    isAuthenticated,
    loading,
    navigation,
    isFirstTimeLogin,
  ]);

  return (
    <ThemeContainer>
      <View style={[styleGenerator('fl0.8'), GlobalStyles.placeCenter]}>
        <HoverLightImage />
      </View>
      <View style={[styleGenerator('fl0.2')]}>
        <LoginLogoText />
      </View>
    </ThemeContainer>
  );
}
