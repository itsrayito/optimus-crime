import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });

    const [login, { error }] = useMutation(LOGIN_USER);

    // this will update state based on form input changes
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
        console.log(formState);

        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // this will clear the form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <main className=''>
            <div className='my-4 mx-2'>
                    <h4 className='text-uppercase'>Login</h4>
                    <div className=''>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-floating mb-3">
                            <input
                            className='form-control mb-4'
                            placeholder='email'
                            name='email'
                            type='email'
                            id='email'
                            value={formState.email}
                            onChange={handleChange}
                            />
                            <label for="email" class="form-label">Email: </label>
                            </div>
                            <div class="form-floating mb-3">
                            <input
                            className='form-control'
                            placeholder='******'
                            name='password'
                            type='password'
                            id='password'
                            value={formState.password}
                            onChange={handleChange}
                            />
                            <label for="password" class="form-label">Password:</label>
                            </div>

                            <div className="d-grid g-2 d-md-flex justify-content-end pt-3">
                                <button className='btn btn-dark btn-primary px-4' type='submit'>
                                    Submit
                                </button>
                            </div>
                            
                        </form>
                        {error && <div>Login Failed!</div>}
                    </div>
                </div>
        </main>
    );
};

export default Login;