import React from 'react';
import ReactDOM from 'react-dom';
import makeStore from './store.js';
import { Provider } from 'react-redux';
import { AppContainer } from './containers/AppContainer';
import { setTweets } from './action_creators';
import { normalize, Schema, arrayOf } from 'normalizr'
import './style.css';

export const store = makeStore();

let seedTweets = [
		{id: 0, avatar: "avatar.jpg", author: "dabridginator", time: "3h", tweetText: "Going to the beach today?", retweeted: false, liked: false},
		{id: 1, avatar: "avatar.jpg", author: "dabridginator", time: "2h", tweetText: "Seashell hunting.", retweeted: false, liked: false},
		{id: 2, avatar: "avatar.jpg", author: "dabridginator", time: "1h", tweetText: "Stinson Beach is nice.", retweeted: false, liked: false}
	];

const tweet = new Schema('tweets');
seedTweets = normalize(seedTweets, arrayOf(tweet));

store.dispatch(setTweets(seedTweets));

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
);