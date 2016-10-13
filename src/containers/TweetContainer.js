import { connect } from 'react-redux';
import { retweetTweet, likeTweet } from '../action_creators';
import { Tweet } from '../components/Tweet';

const mapStateToProps = (state, ownProps) => ({
	tweet: state.tweets.getIn(['tweetsList', 'entities', 'tweets', ownProps.id.toString()])
});

const dispatchProps = { retweetTweet, likeTweet };

export const TweetContainer = connect(
	mapStateToProps,
	dispatchProps
)(Tweet);