import './FormInput.component.css';

function FormInput({ id, label, ...props }) {
	return (
		<div className='formInput'>
			<label htmlFor={id}>{label}</label> 
			<input id={id} {...props} />
		</div>
	);
}

export default FormInput;
