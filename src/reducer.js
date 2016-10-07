import { Map } from 'immutable';
import { setTweets, addTweet, retweetTweet, likeTweet, fetchReceiveTweets, fetchPostTweets } from './core';

export function reducerTweets(state = Map(), action) {
	switch (action.type) {
		case 'SET_TWEETS':
			return setTweets(state, action.tweetsList);
		case 'ADD_TWEET':
			return addTweet(state, action.tweetText);
		case 'TOGGLE_RETWEET':
			return retweetTweet(state, action.tweetId, action.retweeted);
		case 'TOGGLE_LIKE':
			return likeTweet(state, action.tweetId, action.liked);
		case 'FETCH_RECEIVE_TWEETS':
			return fetchReceiveTweets(state);
		case 'FETCH_POST_TWEETS':
			return fetchPostTweets(state, action.tweet);		
		default:
			return state;
	}
}