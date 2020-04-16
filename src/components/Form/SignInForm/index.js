import React, { useState } from 'react';
import styled from 'styled-components';

import FormInput from '../FormInput';
import CutomButton from '../../CustomButton';

import { signInWithGoogle } from '../../../firebase/utils';

const Container = styled.div`
	width: 30vw;
	display: flex;
	flex-direction: column;
`;

const SignInForm = () => {
	const [state, setState] = useState({
		email: '',
		password: ''
	});

	const handleSubmit = e => e.preventDefault();

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
				<CutomButton type="submit"> SIGN IN </CutomButton>
				<CutomButton onClick={signInWithGoogle}>
					{' '}
					SIGN IN WITH GOOGLE{' '}
				</CutomButton>
			</form>
		</Container>
	);
};

export default SignInForm;
