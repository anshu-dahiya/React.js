//Form validations by useForm
import React, { useState } from 'react'
import './FormVal.css'
import { useForm } from 'react-hook-form';

const useFormEx = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

  return (
    <div className='container'>
        <h1>Form Validation</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <input type='text' value='name'
                    {...register('name',{required:'Name is Required'})}
                />
                {errors.name && <span style={{color: 'red'}}>{errors.name.message}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type='text' value='email' />
                {errors.email}
            </div>
            <div>
                <label>Password:</label>
                <input type='password' value='password' />
                {errors.password}
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type='password' value='confirmPassword' />
                {errors.confirmPassword}
            </div>
            <div>
                <label>Age:</label>
                <input type='text' value='age'/>
                {errors.age}
            </div>
            <div>
                <label>Gender:</label>
                <select value='gender'>
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

export default useFormEx