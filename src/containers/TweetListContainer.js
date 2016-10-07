import { connect } from 'react-redux';
import { TweetList } from '../components/TweetList';
import { toJS } from 'immutable';
import { getReversedTweetIds } from '../selectors.js';

const mapStateToProps = (state) => ({
	result: getReversedTweetIds(state)
});

export const TweetListContainer = connect(mapStateToProps)(TweetList);