import React, { useState } from 'react';
import styled from 'styled-components';

import FormInput from '../FormInput';
import CustomButton from '../../CustomButton';
import FormError from '../Error';

import { auth, signInWithGoogle } from '../../../firebase/utils';

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

const SignInForm = () => {
	const [state, setState] = useState({
		email: '',
		password: ''
	});

	const [error, setError] = useState(false);

	const handleSubmit = async e => {
		const { email, password } = state;

		e.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
			setState({
				email: '',
				password: ''
			});
			setError(false);
		} catch (err) {
			setError(err);
		}
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
				{error && <FormError>{error.message}</FormError>}
				<Buttons>
					<CustomButton type="submit"> SIGN IN </CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogle>
						{' '}
						SIGN IN WITH GOOGLE{' '}
					</CustomButton>
				</Buttons>
			</form>
		</Container>
	);
};

export default SignInForm;
