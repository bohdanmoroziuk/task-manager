import { createStore } from 'redux';
import { rootReducer } from '../reducers/root';
import { DATA_STORE_KEY } from '../constants';
import DataStore from '../datastore/DataStore'; 

const initialState = DataStore.restore(DATA_STORE_KEY);

const store = createStore(
    rootReducer,
    initialState
);

store.subscribe(() => DataStore.save(DATA_STORE_KEY, store.getState()));

export default store;