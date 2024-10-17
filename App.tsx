/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import StatusBarWrapper from './src/components/StatusBar';
import RootContainer from './src/screens/navigation';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <StatusBarWrapper>
        <RootContainer />
      </StatusBarWrapper>
    </Provider>
  );
}

export default App;
