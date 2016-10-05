import { combineReducers, compose, createStore } from 'redux';
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