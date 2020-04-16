import React, { useState } from 'react';
import styled from 'styled-components';

import FormInput from '../FormInput';

const Container = styled.div`
	width: 30vw;
	display: flex;
	flex-direction: column;
`;

const SignInForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => e.preventDefault();

	return (
		<Container>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					label="email"
					name="email"
					type="email"
					handleChange={e => setEmail(e.target.value)}
					value={email}
					required
				/>
				<FormInput
					label="password"
					name="password"
					type="password"
					handleChange={e => setPassword(e.target.value)}
					value={password}
					required
				/>
				<input type="submit" />
			</form>
		</Container>
	);
};

export default SignInForm;
