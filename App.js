import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './store';

export default App = () => {
  return (
    //アプリ全体を監視出来る用に、storeで囲う
    <Provider store={store}>
  <AppNavigator />
  </Provider>
  );
}
