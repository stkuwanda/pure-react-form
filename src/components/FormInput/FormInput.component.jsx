import './FormInput.component.css';

function FormInput({...props}) {
	return (
		<div className='formInput'>
			{/* <label>Username</label> */}
			<input {...props}/>
		</div>
	);
}

export default FormInput;
