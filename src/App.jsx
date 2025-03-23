import { useRef } from 'react';
import './App.css';
import FormInput from './components/FormInput/FormInput.component';

function App() {
	const usernameRef = useRef();

	function handleSubmit(event) {
		event.preventDefault();
		console.log('usernameRef:', usernameRef.current?.value);
	}

	return (
		<div className='app'>
			<form onSubmit={handleSubmit}>
				<FormInput ref={usernameRef} placeholder='Username' />
				<FormInput placeholder='Email' />
				<FormInput placeholder='Full Name' />
				<FormInput placeholder='another' />
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default App;
