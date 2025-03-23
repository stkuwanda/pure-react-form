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
			label: 'Username',
      placeholder: 'Enter username'
		},
		{
			id: 2,
			name: 'email',
			type: 'email',
			label: 'Email',
      placeholder: 'Enter email'
		},
		{
			id: 3,
			name: 'birthday',
			type: 'date',
			label: 'Birthday',
      placeholder: 'Birthday'
		},
		{
			id: 4,
			name: 'password',
			type: 'password',
			label: 'Username',
      placeholder: 'Enter password'
		},
		{
			id: 5,
			name: 'confirmPassword',
			type: 'password',
			label: 'Confirm Password',
      placeholder: 'Enter password'
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
