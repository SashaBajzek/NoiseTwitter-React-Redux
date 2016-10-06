import { connect } from 'react-redux';
import { TweetList } from '../components/TweetList';
import { toJS } from 'immutable';

const mapStateToProps = (state) => ({
	result: state.tweets.getIn(['tweetsList','result']).toJS().reverse()
});

export const TweetListContainer = connect(mapStateToProps)(TweetList);