import {UPDATE_A_SELECTION} from "./actionTypes";

// This is an action creator. Creates a dispatcher action that will be process in the future
// by the dispatcher, then will invoke the reducer to update the state.
export const updateSelection = (id, weight) => (dispatch) => {
    dispatch({
        name: UPDATE_A_SELECTION,
        type: UPDATE_A_SELECTION,
        payload: {
            selection: {
                id,
                weight: (+weight)
            }
        }
    });
} 