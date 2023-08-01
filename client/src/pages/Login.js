import React, { useState } from 'react';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });

    // this will update state based on form inout changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // the submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // this will clear the form values
        setFormState({
            email: '',
            password: '',
        });
    } ;

    return (
        <main className='flex-row justify-center mb-4'>
            <div className='col-12 col-md-6'>
                <div className='card'>
                    <h4 className='card-header'>Login</h4>
                    <div className='card-body'>
                        <form onSubmit={handleFormSubmit}>
                            <input
                            className='form-input'
                            placeholder='Your email'
                            name='email'
                            type='email'
                            id='email'
                            value={formState.password}
                            onChange={handleChange}
                            />
                            <input
                            className='form-input'
                            placeholder='******'
                            name='password'
                            type='password'
                            id='password'
                            value={formState.password}
                            onChange={handleChange}
                            />
                            <button className='btn d-block w-100' type='submit'>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;