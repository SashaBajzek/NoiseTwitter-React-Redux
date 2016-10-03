import { fromJS, Map } from 'immutable';

const characterLimit = 140;

export function setTweets(state, tweetsList) {
	return state.set('tweetsList',
									fromJS(tweetsList))
									.set('maxCharacters', characterLimit);
}

export function addTweet(state, tweetText) {
	//find next tweetId based on max id
	const tweetId = state.get('tweetsList').toJS().reduce((maxId, tweet) => Math.max(tweet.id, maxId), 0) +1;
	
	const newTweet = Map({id: tweetId,  avatar: "avatar.jpg", author: "JeffreyATW", time: "now", ...tweetText, retweeted: false, liked: false});	
	
	return state.update('tweetsList', (tweetsList) => tweetsList.push(newTweet));
}

export function retweetTweet(state, tweetId, retweeted) {
	return state.setIn(['tweetsList', tweetId, 'retweeted'], !retweeted);
}

export function likeTweet(state, tweetId, liked) {
	return state.setIn(['tweetsList', tweetId, 'liked'], !liked);
}