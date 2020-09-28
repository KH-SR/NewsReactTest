import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {Provider} from 'react-redux';
import store, {persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';

export default App = () => {
  return (
    //アプリ全体を監視出来る用に、storeで囲う
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
  <AppNavigator />
      </PersistGate>
  </Provider>
  );
}
