import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];
const initialState = {
    items: [
        {
          id: 1,
          name: "apple",
          price: "1.00",
          unit: "$/kg"
        },
        {
          id: 2,
          name: "orange",
          price: "5.00",
          unit: "$/kg"
        }
    ],
    selections: [
        {
            id: 1,
            weight: 0.5
        }
    ]
};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;

