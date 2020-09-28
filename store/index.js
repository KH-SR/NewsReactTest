import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/user';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    user: userReducer,
  });
//上記のツリーでstoreを作成する
const store = createStore(rootReducer,composeWithDevTools);

export default store;

