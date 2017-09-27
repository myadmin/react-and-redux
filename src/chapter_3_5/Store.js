import { createStore } from 'redux'
import reducer from './Reducer'

const initValues = {
    'First': 0,
    'Second': 11,
    'Third': 22
};

const store = createStore(reducer, initValues);

export default store;
