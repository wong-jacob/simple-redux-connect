import {UPDATE_ITEMS} from '../actions/actionTypes';

// Reducer with initially empty states {}
// This reduce will take care of  the state: items
export default function itemsReducer(items = [], action) {
    switch (action.name) {
        case UPDATE_ITEMS:
            return action.payload.items;
        default:
            return items;
    }
}
