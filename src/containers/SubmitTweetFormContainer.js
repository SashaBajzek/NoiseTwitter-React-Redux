import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { SubmitTweetForm } from '../components/SubmitTweetForm';


//Validation for the form fields
const validate = (values, props) => {
	const errors = {};
	if(!values.tweetText) {
		errors.tweetText = 'Tweet required, no empty tweets allowed'
	} else if (values.tweetText.length > props.maxCharacters) {
		errors.tweetText = 'Must be 140 or less characters'
	}
	return errors;
}

const mapStateToProps = (state) => ({
	maxCharacters: state.tweets.getIn(['maxCharacters'])
})

export const SubmitTweetFormContainer = connect(
	mapStateToProps, 
	null) 
	(reduxForm({
		form: 'createTweetForm',  //a unique name for this form
		validate //add validation
	})(SubmitTweetForm));