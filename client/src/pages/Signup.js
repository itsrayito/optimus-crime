import React, { useState } from "react";

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });

    // this will update state based on form changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // this will submit the form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    };

    return (
        <main className='flex-row justify-center mb-4'>
            <div className='col-12 col-md-6'>
                <div className='card'>
                    <h4 className='card-header'>Sign-up</h4>
                    <div className='card-body'>
                        <form onSubmit={handleFormSubmit}>
                            <input
                            className='form-input'
                            placeholder='Your username'
                            name='username'
                            type='username'
                            id='username'
                            value={formState.username}
                            onChange={handleChange}
                            />
                            <input
                            className='form-input'
                            placeholder='Your email'
                            name='email'
                            type='email'
                            id='email'
                            value={formState.email}
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

export default Signup;