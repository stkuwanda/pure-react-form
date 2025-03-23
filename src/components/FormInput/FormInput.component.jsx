import './FormInput.component.css';

function FormInput({ id, label, errorMessage, ...props }) {
	return (
		<div className='formInput'>
			<label htmlFor={id}>{label}</label>
			<input id={id} {...props} />
			<span>{errorMessage}</span>
		</div>
	);
}

export default FormInput;
