import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import FormInput from '../FormInput';
import CustomButton from '../../CustomButton';
import FormError from '../Error';

import { signUpStart } from '../../../redux/user/actions';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;
	margin: 20px;

	.title {
		margin: 10px 0;
	}
`;

const SignUp = () => {
	const [state, setState] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const errorMessage = useSelector(userState => userState.user.signUpError);

	const dispatch = useDispatch();

	const handleSubmit = e => {
		const { displayName, email, password, confirmPassword } = state;
		e.preventDefault();

		if (password !== confirmPassword) {
			alert('Password must match');
			return;
		}

		dispatch(signUpStart({ displayName, email, password }));
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

export default SignUp;
