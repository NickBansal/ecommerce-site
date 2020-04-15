import React, { useState } from 'react';

const SignInForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={e => e.preventDefault()}>
				<input
					name="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<input
					name="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default SignInForm;
