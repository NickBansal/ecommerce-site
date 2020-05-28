import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/reducer';
import cartReducer from './cart/reducer';
import directoryReducer from './directory/reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'cart']
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);