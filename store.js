import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/index';


const initialState = {};

const middleware = [thunk];


const store = createStore(
    rootReducer,  /*main reducer for all reducers*/
    initialState, /*main state for all state*/
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
