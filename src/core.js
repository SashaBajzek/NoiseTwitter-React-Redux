import { fromJS, toJS, Map } from 'immutable';

const characterLimit = 140;

export function setTweets(state, tweetsList) {
	return state.set('tweetsList',
									fromJS(tweetsList))
									.set('maxCharacters', characterLimit);
}

export function addTweet(state, tweetText) {
	//find next tweetId based on max id
	const currentIds = state.getIn(['tweetsList', 'result']).toJS();
	const tweetId = Math.max.apply(null, currentIds) + 1;

	const newTweet = Map({id: tweetId,  avatar: "avatar.jpg", author: "JeffreyATW", time: "now", ...tweetText, retweeted: false, liked: false});	
	
	return state.setIn(['tweetsList', 'entities', 'tweets', tweetId.toString()], newTweet).setIn(['tweetsList', 'result',  tweetId.toString()], tweetId);
}

export function retweetTweet(state, tweetId, retweeted) {
	return state.setIn(['tweetsList', 'entities', 'tweets', tweetId.toString(), 'retweeted'], !retweeted);
}

export function likeTweet(state, tweetId, liked) {
	return state.setIn(['tweetsList', 'entities', 'tweets', tweetId.toString(), 'liked'], !liked);
}