import {UPDATE_A_SELECTION} from '../actions/actionTypes';

// Reducer with initially empty states {}
// This reduce will take care of  the state: se;ections
export default function selectionReducer(selections = [], action) {
    switch (action.name) {
        case UPDATE_A_SELECTION:
            let {id, weight} = action.payload.selection;
            let selection = selections.find((selection) => selection.id === id);
            if (selection) {
                // Construct the updated selections using spread operation
                return selections.map((selection) => selection.id === id ? { id, weight } : selection);
            } else {
                // Construct the updated selections using spread operation
                // Note that we don't need to have selections in the object. This is already done 
                // in combineReducers in reducers/index.js
                return [ ...selections, {id, weight} ];
            }
        default:
            return selections;
    }
}
