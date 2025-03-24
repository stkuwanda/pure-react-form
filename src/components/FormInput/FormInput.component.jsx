import { useState } from 'react';
import './FormInput.component.css';

function FormInput({ id, label, errorMessage, ...props }) {
	const [focused, setFocused] = useState(false);

	function handleBlur() {
		setFocused(true);
	}

	function handleFocus() {
		props.name === 'confirmPassword' && setFocused(true);
	}

	return (
		<div className='formInput'>
			<label htmlFor={id}>{label}</label>
			<input id={id} {...props} onBlur={handleBlur} focused={focused.toString()} onFocus={handleFocus}/>
			<span>{errorMessage}</span>
		</div>
	);
}

export default FormInput;
