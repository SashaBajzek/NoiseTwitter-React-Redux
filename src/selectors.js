import { createSelector } from 'reselect';
import { toJS } from 'immutable';

const getTweetIds = state => state.tweets.getIn(['tweetsList','result']);

export const getReversedTweetIds = createSelector(
	getTweetIds,
	(tweets) => 
		tweets.toJS().reverse()
)
