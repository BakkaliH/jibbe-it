import { reducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}

export const initialState = {
    
};

export const Reducer = (state = initialState, action) => {
    return state;
};

export default persistReducer(persistConfig);