import fetch from 'isomorphic-fetch';

export function setTweets(tweetsList) {
	return {
		type: 'SET_TWEETS',
		tweetsList: tweetsList
	};
}

export function addTweet(tweetText) {
	return {
		type: 'ADD_TWEET',
		tweetText: tweetText
	};
}

export function retweetTweet(tweetId, retweeted) {
	return {
		type: 'TOGGLE_RETWEET',
		tweetId: tweetId,
		retweeted: retweeted
	};
}

export function likeTweet(tweetId, liked) {
	return {
		type: 'TOGGLE_LIKE',
		tweetId: tweetId,
		liked: liked
	};
}

/*
export function fetchReceiveTweets() {
	return dispatch => {
		type: 'FETCH_RECEIVE_TWEETS',
		result: fetch('http://localhost:3000/tweets', {
			method: 'get'
		})
		.then(response => response.json())
		.then(json => dispatch(setTweets(json))
		.catch(err => err)
	}
}
*/

export function fetchReceiveTweets () {
	return function (dispatch) {
		return fetch('http://localhost:3000/tweets', {
			method: 'get'
		})
		.then(response => response.json())
		.then(json => dispatch(setTweets(json)))
		//NORMALIZE THE TWEETS FIRST!!!!!!!!
	}
}

export function fetchPostTweets(tweet) {
	return {
		type: 'FETCH_POST_TWEETS',
		tweet: tweet
	}
}