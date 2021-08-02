import {createStore, combineReducers, compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cineCompra  from '../Redux/reducerCine';



const rootReducer= combineReducers({
   cine : cineCompra,


})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export default function generate(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}