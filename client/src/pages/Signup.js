import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '', });

    const [addUser, { error }] = useMutation(ADD_USER);

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
        console.log(formState);

        // instead of using promises, use catch/try to deal with errors
        try {
            // this will execute the addUser mutation and pass in variable data from the form
            const { data } = await addUser({
                variables: { ...formState },
            });
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className=''>
            <div className='my-4 mx-2'>
                    <h4 className='text-uppercase'>Signup</h4>
                    <div className=''>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                className='form-control mb-4'
                                placeholder="username"
                                name='username'
                                type='username'
                                id='floatingUsername'
                                value={formState.username}
                                onChange={handleChange}
                                />
                                <label for="username" class="form-label">Username: </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                className='form-control mb-4'
                                placeholder="email"
                                name='email'
                                type='email'
                                id='email'
                                value={formState.email}
                                onChange={handleChange}
                                />
                                <label for="email" class="form-label">Email: </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                className='form-control'
                                placeholder="password"
                                name='password'
                                type='password'
                                id='password'
                                value={formState.password}
                                onChange={handleChange}
                                />
                                <label for="password" class="form-label">Password: </label>
                            </div>
                            
                            <div className="d-grid ga-2 d-md-flex justify-content-end pt-3">
                                <button className='btn btn-dark btn-primary px-4' type='submit'>
                                Submit
                            </button>
                            </div>
                        </form>
                        {error && <div>Sign-up failed!</div>}
                    </div>
                </div>
        </main>
    );
};

export default Signup;