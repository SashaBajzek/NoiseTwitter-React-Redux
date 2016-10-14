import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { CharacterCounter } from '../components/CharacterCounter';

const selector = formValueSelector('createTweetForm');

const mapStateToProps = (state) => {
	let tweetTextValue = selector(state, 'tweetText');
	if (!tweetTextValue)
		{tweetTextValue = ""}  //tweetTextValue is undefined until it has text, so pass empty string to be able to use .length to calculate remainingCharacters
	
	return {
		remainingCharacters: state.tweets.getIn(['maxCharacters']) - tweetTextValue.length
	}
}

export const CharacterCounterContainer = connect(
	mapStateToProps, 
	null)(CharacterCounter);