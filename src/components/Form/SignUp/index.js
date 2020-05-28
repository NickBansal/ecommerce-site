import React, { useState } from 'react';
import styled from 'styled-components';

import FormInput from '../FormInput';
import CustomButton from '../../CustomButton';
import FormError from '../Error';

import { auth } from '../../../firebase/utils';
import createUser from '../../../firebase/createUser';

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
	const [error, setError] = useState(null);

	const handleSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = state;

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUser(user, { displayName });

			setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (err) {
			setError(err.message);
		}
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
				{error && <FormError>{error}</FormError>}
				<CustomButton type="submit"> SIGN UP </CustomButton>
			</form>
		</Container>
	);
};

export default SignUp;
