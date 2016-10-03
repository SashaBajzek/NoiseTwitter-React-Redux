import { reset } from 'redux-form';
import { connect } from 'react-redux';
import { addTweet } from '../action_creators';
import { App } from '../components/App';

const mapDispatchToProps = (dispatch) => ({
	mySubmitHandler: (data) => {
		console.log('Submission received!', data);
		dispatch(addTweet(data));
		dispatch(reset('createTweetForm'));
	}
});

export const AppContainer = connect(null, mapDispatchToProps)(App);
