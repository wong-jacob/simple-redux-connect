import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import selectionsReducer from './selectionsReducer';

// If there are multiple states inside state store, then you'll need multiple reducers.
// One reducer for each substate.
export default combineReducers({
    items: itemsReducer,
    selections: selectionsReducer
});