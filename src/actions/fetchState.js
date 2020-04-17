import {UPDATE_ITEMS} from './actionTypes';

// This is an action creator. Creates a dispatcher action that will be process in the future
// by the dispatcher, then will invoke the reducer to update the state.
export const fetchState = () => dispatch => {
    console.log("fetchState")
    fetch('https://my-json-server.typicode.com/wong-jacob/json/fruitMarket')
        .then(res => res.json())
        .then(state => dispatch({
                name: UPDATE_ITEMS,
                payload: state
            }))
}