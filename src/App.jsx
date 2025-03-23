import './App.css';
import FormInput from './components/FormInput/FormInput.component';

function App() {
	function handleSubmit(event) {
		event.preventDefault();
    const data = new FormData(event.target);
    console.log(Object.fromEntries(data.entries()));
	}

	return (
		<div className='app'>
			<form onSubmit={handleSubmit}>
				<FormInput name='username' placeholder='Username' />
				<FormInput name='email' placeholder='Email' />
				<FormInput name='fullName' placeholder='Full Name' />
				<FormInput name='another' placeholder='another' />
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default App;
