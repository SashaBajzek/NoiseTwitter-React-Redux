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