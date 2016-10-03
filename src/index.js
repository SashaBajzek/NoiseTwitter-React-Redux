import React from 'react';
import ReactDOM from 'react-dom';
import makeStore from './store.js';
import { Provider } from 'react-redux';
import { AppContainer } from './containers/AppContainer';
import { setTweets } from './action_creators';
import { Schema, arrayOf } from 'normalizr';
import './style.css';

export const store = makeStore();

const tweet = new Schema('tweets', { idAttribute: 'id' });

store.dispatch(setTweets(
	[{id: 0, avatar: "avatar.jpg", author: "JeffreyATW", time: "3h", tweetText: "I'm a little teapot, short and stout.", retweeted: false, liked: false},
	{id: 1, avatar: "avatar.jpg", author: "JeffreyATW", time: "2h", tweetText: "Old McDonald had a farm.", retweeted: false, liked: false},
	{id: 2, avatar: "avatar.jpg", author: "JeffreyATW", time: "1h", tweetText: "You give love a bad name.", retweeted: false, liked: false}]
));

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
);