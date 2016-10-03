import { connect } from 'react-redux';
import { retweetTweet, likeTweet } from '../action_creators';
import { Tweet } from '../components/Tweet';

const dispatchProps = { retweetTweet, likeTweet };

export const TweetContainer = connect(
	null,
	dispatchProps
)(Tweet);