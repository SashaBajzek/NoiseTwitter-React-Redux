import { connect } from 'react-redux';
import { retweetTweet, likeTweet } from '../action_creators';
import { Tweet } from '../components/Tweet';
import { toJS } from 'immutable';

const mapStateToProps = (state, ownProps) => ({
	avatar: state.tweets.getIn(['tweetsList', 'entities', 'tweets', ownProps.id.toString(), 'avatar']),
	author: state.tweets.getIn(['tweetsList', 'entities', 'tweets', ownProps.id.toString(), 'author']),
	time: state.tweets.getIn(['tweetsList', 'entities', 'tweets', ownProps.id.toString(), 'time']),
	tweetText: state.tweets.getIn(['tweetsList', 'entities', 'tweets', ownProps.id.toString(), 'tweetText']),
	retweeted: state.tweets.getIn(['tweetsList', 'entities', 'tweets', ownProps.id.toString(), 'retweeted']),
	liked: state.tweets.getIn(['tweetsList', 'entities', 'tweets', ownProps.id.toString(), 'liked']),
});

const dispatchProps = { retweetTweet, likeTweet };

export const TweetContainer = connect(
	mapStateToProps,
	dispatchProps
)(Tweet);