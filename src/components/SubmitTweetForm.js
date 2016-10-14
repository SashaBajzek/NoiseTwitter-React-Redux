import React, { Component } from 'react';
import { Field } from 'redux-form';

/*
Redux-Forms instruction:  Notice the reused stateless function component used to render each field. It is important that this not be defined inline (in the render() function), because it will be created anew on every render and trigger a rerender for the field, because the component prop will have changed.
*/

const renderField = ({ input, type, meta: { touched, error } }) => (
	<div>
		<textArea {...input} placeholder="Compose new Tweet..." type={type} className="tweetbox__field"></textArea>
		{ touched && error && <span>{ error }</span> }
	</div>
)

export class SubmitTweetForm extends Component {
  render() {
		const { handleSubmit, remainingCharacters, valid } = this.props;
		
		return (
			<form className="tweetbox" onSubmit={ handleSubmit }>
				<Field name="tweetText" component={ renderField } type="text" />
				<div className="tweetbox__actions">
					<div className="tweetbox__counter">{ remainingCharacters }</div>
					<input className="tweetbox__button"  disabled={ !valid }  type="submit" />
				</div>
			</form>	
		);
  }
}