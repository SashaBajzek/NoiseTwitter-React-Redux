import thunkMiddleware from 'redux-thunk';
import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { reducerTweets } from './reducer';
import { reducer as formReducer } from 'redux-form';

export default function makeStore() {
	//Using Redux dev tools instead of return createStore(reducer);

	const reducers = {
		tweets: reducerTweets,
		form: formReducer
	}
	
	const reducersCombined = combineReducers(reducers);
	
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	
  return createStore(reducersCombined,  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));
}



/*
BEFORE ADDING THUNKMIDDLEWARE

import thunkMiddleware from 'redux-thunk';
import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { reducerTweets } from './reducer';
import { reducer as formReducer } from 'redux-form';

export default function makeStore() {
	//Using Redux dev tools instead of return createStore(reducer);
	const createStoreDevTools = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);

	const reducers = {
		tweets: reducerTweets,
		form: formReducer
	}

	const reducersCombined = combineReducers(reducers);

	return createStoreDevTools(reducersCombined);
}
*/