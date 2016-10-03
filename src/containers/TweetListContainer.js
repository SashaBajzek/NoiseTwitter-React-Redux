import { connect } from 'react-redux';
import { TweetList } from '../components/TweetList';

const mapStateToProps = (state) => ({
	tweetsList: state.tweets.get('tweetsList')
});

export const TweetListContainer = connect(mapStateToProps)(TweetList);

