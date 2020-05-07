import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import FormInput from '../FormInput';
import CustomButton from '../../CustomButton';
import FormError from '../Error';

import { signUpStart } from '../../../redux/user/actions';

import { selectSignUpErrorMessage } from '../../../redux/user/selectors';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;
	margin: 20px;

	.title {
		margin: 10px 0;
	}
`;

const SignUp = ({ signUp, errorMessage }) => {
	const [state, setState] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const handleSubmit = e => {
		const { displayName, email, password, confirmPassword } = state;
		e.preventDefault();

		if (password !== confirmPassword) {
			alert('Password must match');
			return;
		}

		signUp({ displayName, email, password });
	};

	const handleChange = e => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value
		});
	};

	const { displayName, email, password, confirmPassword } = state;

	return (
		<Container>
			<h2>I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					label="Display name"
					name="displayName"
					handleChange={handleChange}
					value={displayName}
					required
				/>
				<FormInput
					type="email"
					label="email"
					name="email"
					handleChange={handleChange}
					value={email}
					required
				/>
				<FormInput
					type="password"
					label="password"
					name="password"
					handleChange={handleChange}
					value={password}
					required
				/>
				<FormInput
					type="password"
					label="Confirm password"
					name="confirmPassword"
					handleChange={handleChange}
					value={confirmPassword}
					required
				/>
				{errorMessage && <FormError>{errorMessage.message}</FormError>}
				<CustomButton type="submit"> SIGN UP </CustomButton>
			</form>
		</Container>
	);
};

const mapStateToProps = createStructuredSelector({
	errorMessage: selectSignUpErrorMessage
});

const mapDispatchToProps = dispatch => ({
	signUp: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
