import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput/FormInput.component';

function App() {
	const [username, setUsername] = useState('');

	function inputHandler(event) {
		setUsername(event.target.value);
	}

	return (
		<div className='app'>
			<form>
				<FormInput placeholder='Username' value={username} onChange={inputHandler} />
				<FormInput placeholder='Email' />
				<FormInput placeholder='Full Name' />
				<FormInput placeholder='another' />
			</form>
		</div>
	);
}

export default App;
