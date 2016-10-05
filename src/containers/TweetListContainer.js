import { connect } from 'react-redux';
import { TweetList } from '../components/TweetList';

const mapStateToProps = (state) => ({
	result: state.tweets.getIn(['tweetsList','result','tweets'])
});

export const TweetListContainer = connect(mapStateToProps)(TweetList);