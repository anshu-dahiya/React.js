//Learn to show errors/validations on Form
import React, { useState } from 'react'
import './FormVal.css'

const FormValidation = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [age,setAge] = useState('');
    const [gender,setGender] = useState('');
    const [errors,setErrors] = useState({});
 

    const validationForm = () => {
        const errors = {};
        
        if(!name){
            errors.name = 'Name is Required';
        }

        if(!email){
            errors.email = 'Email is Required';
        }else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = 'Email is Invalid';
        }

        if(!password){
            errors.password = 'Password is Required';
        }else if(password.length < 6){
            errors.password = 'Password must be of 6 digit';
        }

        if(!confirmPassword){
            errors.confirmPassword = 'Confirm Password is Required';
        }else if(password !== confirmPassword){
            errors.confirmPassword = 'Password do not match';
        }

        if(!age){
            errors.age = 'Age is Required';
        }else if(isNaN(age) || age<18){
            errors.age = 'Age must be a number or at least 18';
        }

        if(!gender){
            errors.gender = 'Gender is Required';
        }
        
        console.log(errors);    
        return errors;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationaErrors = validationForm();
        if(Object.keys(validationaErrors).length > 0){
            setErrors(validationaErrors);
        }else{
            setErrors({});
            console.log('Form Submited');
        }
    }

  return (
    <div className='container'>
        <h1>Form Validation</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type='text' value={name} 
                    onChange={(e) => setName(e.target.value)
                }/>
                {errors.name}
            </div>
            <div>
                <label>Email:</label>
                <input type='text' value={email} 
                    onChange={(e) => setEmail(e.target.value)
                }/>
                {errors.email}
            </div>
            <div>
                <label>Password:</label>
                <input type='password' value={password} 
                    onChange={(e) => setPassword(e.target.value)
                }/>
                {errors.password}
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type='password' value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)
                }/>
                {errors.confirmPassword}
            </div>
            <div>
                <label>Age:</label>
                <input type='text' value={age} 
                    onChange={(e) => setAge(e.target.value)
                }/>
                {errors.age}
            </div>
            <div>
                <label>Gender:</label>
                <select value={gender} 
                    onChange={(e) => setGender(e.target.value)
                }>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                {errors.gender}
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default FormValidation