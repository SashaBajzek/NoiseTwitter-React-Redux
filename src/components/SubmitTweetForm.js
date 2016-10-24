import React, { Component } from 'react';
import { Field } from 'redux-form';
import { CharacterCounterContainer } from '../containers/CharacterCounterContainer.js';
import TextArea from 'react-textarea-autosize';

/*
Redux-Forms instruction:  Notice the reused stateless function component used to render each field. It is important that this not be defined inline (in the render() function), because it will be created anew on every render and trigger a rerender for the field, because the component prop will have changed.
*/

const renderField = ({ input, type, meta: { touched, error } }) => (
	<div>
		<TextArea minRows={2} {...input} placeholder="Compose new beachy Tweet..." type={type} className="tweetbox__field"></TextArea>
		{ touched && error && <span>{ error }</span> }
	</div>
)

export class SubmitTweetForm extends Component {
  render() {
		const { handleSubmit, valid } = this.props;
		
		return (
			<form className="tweetbox" onSubmit={ handleSubmit }>
				<Field name="tweetText" component={ renderField } type="text" />
				<div className="tweetbox__actions">
					<CharacterCounterContainer />
					<input className="tweetbox__button"  disabled={ !valid }  type="submit" />
				</div>
			</form>	
		);
  }
}