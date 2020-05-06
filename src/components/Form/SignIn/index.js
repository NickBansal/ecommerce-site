import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import FormInput from '../FormInput';
import CustomButton from '../../CustomButton';
import FormError from '../Error';

import { selectErrorMessage } from '../../../redux/user/selectors';

import {
	googleSignInStart,
	emailSignInStart
} from '../../../redux/user/actions';

const Container = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;
	margin: 20px;
`;

const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
`;

const SignInForm = ({
	googleSignInToStart,
	emailSignInToStart,
	errorMessage
}) => {
	const [state, setState] = useState({
		email: '',
		password: ''
	});

	const handleSubmit = async e => {
		const { email, password } = state;
		e.preventDefault();
		emailSignInToStart(email, password);
	};

	const handleChange = e => {
		const { name, value } = e.target;
		setState({
			...state,
			[name]: value
		});
	};

	const { email, password } = state;

	return (
		<Container>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					label="email"
					name="email"
					type="email"
					handleChange={handleChange}
					value={email}
					required
				/>
				<FormInput
					label="password"
					name="password"
					type="password"
					handleChange={handleChange}
					value={password}
					required
				/>
				{errorMessage && <FormError>{errorMessage.message}</FormError>}
				<Buttons>
					<CustomButton type="submit"> SIGN IN </CustomButton>
					<CustomButton
						type="button"
						onClick={googleSignInToStart}
						isGoogle
					>
						{' '}
						SIGN IN WITH GOOGLE{' '}
					</CustomButton>
				</Buttons>
			</form>
		</Container>
	);
};

const mapStateToProps = createStructuredSelector({
	errorMessage: selectErrorMessage
});

const mapDispatchToProps = dispatch => ({
	googleSignInToStart: () => dispatch(googleSignInStart()),
	emailSignInToStart: (email, password) =>
		dispatch(emailSignInStart({ email, password }))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
