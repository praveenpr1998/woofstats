import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../theme/globalStyles';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import useGoogleLogin from '../../hooks/useGoogleLogin';
import ThemeContainer from '../../components/atoms/containers/ThemeContainer';

export default function Login() {
  const {login} = useGoogleLogin();

  return (
    <ThemeContainer style={[styles.container]}>
      <Image
        style={styles.logo}
        source={require('../../../assets/loginlogo.png')}
      />
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Dark}
        onPress={login}
      />
    </ThemeContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.placeCenter,
  },
  logo: {
    width: 200,
    height: 200,
  },
});
