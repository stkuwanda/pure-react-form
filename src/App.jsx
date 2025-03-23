import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput/FormInput.component';

function App() {
	const [values, setValues] = useState({
		username: '',
		email: '',
		birthday: '',
		password: '',
		confirmPassword: '',
	});

	const inputs = [
		{
			id: 1,
			name: 'username',
			type: 'text',
			errorMessage:
				"Username should be 3-16 characters and shouldn't include any special characters!",
			label: 'Username',
			placeholder: 'Enter username',
			pattern: '^[A-Za-z0-9]{3,16}$',
			required: true
		},
		{
			id: 2,
			name: 'email',
			type: 'email',
			errorMessage: 'Enter a valid email address!',
			label: 'Email',
			placeholder: 'Enter email',
			required: true
		},
		{
			id: 3,
			name: 'birthday',
			type: 'date',
			label: 'Birthday',
			placeholder: 'Birthday',
		},
		{
			id: 4,
			name: 'password',
			type: 'password',
			errorMessage:
				'Password should be 8-20 characters and must include at least 1 letter, 1 number and 1 special character!',
			label: 'Username',
			placeholder: 'Enter password',
			pattern: '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,20}$',
			required: true
		},
		{
			id: 5,
			name: 'confirmPassword',
			type: 'password',
			errorMessage: 'Passwords must match!',
			label: 'Confirm Password',
			placeholder: 'Enter password',
			pattern: values.password,
			required: true
		},
	];

	function handleSubmit(event) {
		event.preventDefault();
		console.log(values);
	}

	return (
		<div className='app'>
			<form onSubmit={handleSubmit}>
				<h1>Register</h1>
				{inputs.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={(e) =>
							setValues((val) => ({ ...val, [e.target.name]: e.target.value }))
						}
					/>
				))}
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default App;
