import {useState, useEffect} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {updateUser} from '../redux';

type GoogleLoginHookReturnType = {
  loading: boolean;
  error: string | null;
  login: () => Promise<void>;
};

const useGoogleLogin = (): GoogleLoginHookReturnType => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const checkUser = async () => {
      try {
        const userInfo = await AsyncStorage.getItem('user');
        if (userInfo) {
          dispatch(
            updateUser({
              userInfo: JSON.parse(userInfo),
              isFirstTimeLogin: false,
            }),
          );
        }
      } catch (error) {
        setError('Error checking user in AsyncStorage');
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [dispatch]);

  const login = async () => {
    setLoading(true);
    setError(null);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo: any = await GoogleSignin.signIn();
      await AsyncStorage.setItem('user', JSON.stringify(userInfo));
      dispatch(
        updateUser({
          userInfo: JSON.parse(userInfo),
          isFirstTimeLogin: true,
        }),
      );
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        setError('User cancelled the login flow');
      } else {
        setError('Error during Google login');
      }
    } finally {
      setLoading(false);
    }
  };

  return {loading, error, login};
};

export default useGoogleLogin;
