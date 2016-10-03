import { combineReducers, createStore } from 'redux';
import { reducerTweets } from './reducer';
import { reducer as formReducer } from 'redux-form';

export default function makeStore() {

	const reducers = {
		tweets: reducerTweets,
		form: formReducer
	}

	const reducersCombined = combineReducers(reducers);

	return createStore(reducersCombined);
}