//Form validations by using useForm Hook
import React, { useState } from 'react'
import './FormVal.css'
import { useForm } from 'react-hook-form';

const UseFormEx = () => {

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        watch
    } = useForm();

    const password = watch("password");

    const onSubmit = data => console.log(data);

  return (
    <div className='container'>
        <h1>Form Validation</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <input type='text' name='name'
                    {...register('name',{
                        required:'Name is Required'
                    })}
                />
                {errors.name && <span style={{color: 'red'}}>{errors.name.message}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type='text' name='email'
                    {...register('email',{
                        required:'Email is Required',
                        pattern: {value:/\S+@\S+\.\S+/,
                            message:'Email is invalid'}
                    })}
                />
                {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input type='password' name='password' 
                    {...register('password',{
                        required:'Password is Required',
                        minLength: {value:6,
                            message:'Password must be of 6 digit'}
                    })}
                />
                {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type='password' name='confirmPassword' 
                    {...register('confirmPassword',{
                        required:'Confirm Password is Required',
                        validate: value => value === password || 'Password Do not match',
                    })}
                />
                {errors.confirmPassword && <span style={{color: 'red'}}>{errors.confirmPassword.message}</span>}
            </div>
            <div>
                <label>Age:</label>
                <input type='text' name='age'
                    {...register('age',{
                        required:'Age is Required',
                        validate: value => 
                            !isNaN(value) && value >= 18 || 'Age must be a number and at least 18',                     
                    })}
                />
                {errors.age && <span style={{color: 'red'}}>{errors.age.message}</span>}
            </div>
            <div>
                <label>Gender:</label>
                <select name='gender'
                    {...register('gender',{
                        required:'Gender is Required',
                    })}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                {errors.gender && <span style={{color: 'red'}}>{errors.gender.message}</span>}
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default UseFormEx