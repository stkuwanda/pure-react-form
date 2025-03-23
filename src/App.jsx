import './App.css';
import FormInput from './components/FormInput/FormInput.component';

function App() {
	return (
		<div className='app'>
			<form>
        <FormInput placeholder='Username'/>
        <FormInput placeholder='Email'/>
        <FormInput placeholder='Full Name'/>
        <FormInput placeholder='another'/>
      </form>
		</div>
	);
}

export default App;
